export type ControlBlockProps = {
  children?: React.ReactNode;
};

export type TriggerBlockDraft = {
  id: string;
  type: 'trigger';
  trigger: string | undefined;
};

export type ConditionBlockDraft = {
  id: string;
  type: 'condition';
};

export type BlockDraft =
  | TriggerBlockDraft
  | ConditionBlockDraft
  | {
      id: string;
      type: '';
    };
