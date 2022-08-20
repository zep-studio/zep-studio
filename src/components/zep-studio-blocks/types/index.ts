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
  if: (ConditionBlockDraft | ActionBlockDraft)[];
  else: (ConditionBlockDraft | ActionBlockDraft)[];
};

export type ActionBlockDraft = {
  id: string;
  type: 'action';
  action: string;
};

export type BlockDraft =
  | TriggerBlockDraft
  | ConditionBlockDraft
  | ActionBlockDraft
  | {
      id: string;
      type: '';
    };
