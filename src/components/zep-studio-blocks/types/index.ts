export type ControlBlockProps = {
  children?: React.ReactNode;
};

export type TriggerBlockDraft = {
  id: string;
  type: 'trigger';
  trigger: string;
};

export type ConditionBlockDraft = {
  id: string;
  type: 'condition';
  if: (ConditionBlockDraft | ActionBlockDraft)[];
  else: (ConditionBlockDraft | ActionBlockDraft)[];
  end: (ConditionBlockDraft | ActionBlockDraft)[];
};

export type VariableDraft = {
  type: 'text';
  fieldName: 'TEXT';
  value: string;
};

export type ActionBlockDraft = {
  id: string;
  type: 'action';
  action: string;
  variables?: VariableDraft[];
};

export type BlockDraft =
  | TriggerBlockDraft
  | ConditionBlockDraft
  | ActionBlockDraft
  | {
      id: string;
      type: '';
    };
