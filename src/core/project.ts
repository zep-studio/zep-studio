import localforage from 'localforage';

type ProjectSummary = {
  name: string;
};

type ProjectData = ProjectSummary & {
  data: any;
};

export async function createProject(name: string) {
  const projects =
    (await localforage.getItem<ProjectSummary[]>('projects')) || [];
  const id = projects.length; // 인덱스를 ID로

  await localforage.setItem('projects', projects.concat({ name }));
  await localforage.setItem<ProjectData>(`projects__${id}`, { name, data: {} });
  return id;
}

export async function deleteProject(id: number) {
  const projects =
    (await localforage.getItem<ProjectSummary[]>('projects')) || [];
  projects.splice(id, 1);

  await localforage.setItem('projects', projects);
  await localforage.removeItem(`projects__${id}`);
}

export async function getProject(id: number) {
  return await localforage.getItem<ProjectData>(`projects__${id}`);
}

export async function renameProject(id: number, name: string) {
  const projects =
    (await localforage.getItem<ProjectSummary[]>('projects')) || [];
  const project = await getProject(id);

  if (!project) throw new Error('Project not found');

  projects[id].name = name;
  await localforage.setItem('projects', projects);

  project.name = name;
  await localforage.setItem(`projects__${id}`, project);
}

export async function updateProjectData(id: number, data: any) {
  const project = await getProject(id);

  if (!project) throw new Error('Project not found');

  project.data = data;
  await localforage.setItem(`projects__${id}`, project);
}
