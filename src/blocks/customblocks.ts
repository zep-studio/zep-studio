import * as Blockly from 'blockly/core';

// Since we're using json to initialize the field, we'll need to import it.
import '../fields/BlocklyReactField';
import '../fields/DateField';
import '@blockly/field-date';

const lifecycle_on_init = {
  type: 'lifecycle_on_init',
  message0: 'On App Start',
  message1: 'do %1',
  args1: [{ type: 'input_statement', name: 'DO' }],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['lifecycle_on_init'] = {
  init: function () {
    this.jsonInit(lifecycle_on_init);
    this.setStyle('loop_blocks');
  },
};

const reactDateField = {
  type: 'test_react_date_field',
  message0: 'date field: %1',
  args0: [
    {
      type: 'field_date',
      name: 'DATE',
      date: '2020-02-20',
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['test_react_date_field'] = {
  init: function () {
    this.jsonInit(reactDateField);
    this.setStyle('loop_blocks');
  },
};

const testReactField = {
  type: 'test_react_field',
  message0: 'custom field %1',
  args0: [
    {
      type: 'field_react_component',
      name: 'FIELD',
      text: 'Click me',
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['test_react_field'] = {
  init: function () {
    this.jsonInit(testReactField);
    this.setStyle('loop_blocks');
  },
};
