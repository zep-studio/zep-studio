import * as Blockly from 'blockly/core';

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
