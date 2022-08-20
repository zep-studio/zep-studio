export type ControlBlockProps = {
  children?: React.ReactNode;
};

export type TriggerBlockDraft = {
  id: string;
  type: 'trigger';
  trigger: string | undefined;
};

export type BlockDraft =
  | TriggerBlockDraft
  | {
      id: string;
      type: '';
    };
