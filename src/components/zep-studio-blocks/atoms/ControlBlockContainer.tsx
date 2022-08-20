import styled from '@emotion/styled';

export const raiseAncestorControlBlock = (eventTarget: EventTarget) => {
  const ancestor = (eventTarget as HTMLElement).closest(
    '[data-type=control-block-container]',
  ) as HTMLDivElement;
  if (!ancestor) {
    return;
  }
  ancestor.style.zIndex = '99';
  return () => (ancestor.style.zIndex = '');
};

const _ControlBlockContainer = styled.div`
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.1));
  z-index: -1;
`;
export const ControlBlockContainer = (
  props: React.HTMLAttributes<HTMLDivElement>,
  // eslint-disable-next-line react/jsx-pascal-case
) => <_ControlBlockContainer data-type="control-block-container" {...props} />;
