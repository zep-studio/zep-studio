import axios from 'axios';

const URL =
  'https://port-0-zep-deployment-automation-48f224l727uoxr.gksl1.cloudtype.app';

type PublishOptions = {
  token: string;
  appId?: string; // default: create
  file?: Blob;
  name?: string;
  description?: string;
  type: number; // 1: 일반, 2: 미니게임, 3: 사이드바
};

export async function publish(options: PublishOptions) {
  if (
    !options.appId &&
    (!options.name || !options.description || !options.file)
  )
    throw new Error(
      'name, description, file, type is required when appId is not provided',
    );

  const formData = new FormData();

  formData.append('token', options.token);
  formData.append('appId', options.appId || 'create');
  formData.append('type', options.type.toString());
  options.name && formData.append('name', options.name);
  options.description && formData.append('description', options.description);
  options.file && formData.append('file', options.file, 'zep.zip');

  const res = await axios.post(`${URL}/publish`, formData);
  return res.data.id;
}
