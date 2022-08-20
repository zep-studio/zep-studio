import * as Blockly from 'blockly/core';

import 'blockly/javascript';

const SCRIPTAPP_LIFECYCLE_ON_INIT = 'scriptapp_lifecycle_on_init';
Blockly.Blocks[SCRIPTAPP_LIFECYCLE_ON_INIT] = {
  init: function () {
    this.jsonInit({
      type: SCRIPTAPP_LIFECYCLE_ON_INIT,
      message0: 'On App Start',
      message1: 'do %1',
      args1: [{ type: 'input_statement', name: 'DO' }],
      previousStatement: null,
      nextStatement: null,
    });
    this.setStyle('loop_blocks');
  },
};
Blockly.JavaScript[SCRIPTAPP_LIFECYCLE_ON_INIT] = function (block) {
  let branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block);
  return `App.onInit.Add(function(){\n` + branch + `\n});`;
};

const SCRIPTAPP_METHODS_SAY_TO_ALL = 'scriptapp_methods_say_to_all';
Blockly.Blocks[SCRIPTAPP_METHODS_SAY_TO_ALL] = {
  init: function () {
    this.jsonInit({
      type: SCRIPTAPP_METHODS_SAY_TO_ALL,
      message0: 'Say %1 with color %2 to All',
      args0: [
        { type: 'input_value', name: 'TEXT', check: 'String' },
        { type: 'input_value', name: 'COLOR', check: 'Number' },
      ],
      previousStatement: null,
      nextStatement: null,
    });
    this.setStyle('loop_blocks');
  },
};
Blockly.JavaScript[SCRIPTAPP_METHODS_SAY_TO_ALL] = function (block) {
  // console.log(block);
  const text =
    Blockly.JavaScript.valueToCode(
      block,
      'TEXT',
      Blockly.JavaScript.ORDER_NONE,
    ) || "''";

  const color =
    Blockly.JavaScript.valueToCode(
      block,
      'COLOR',
      Blockly.JavaScript.ORDER_NONE,
    ) || '0xFFFFFF';
  return `App.sayToAll(${text}, ${color});`;
};
