import * as Blockly from 'blockly/core';

import 'blockly/javascript';

export const SCRIPTAPP_LIFECYCLE_ON_INIT = 'scriptapp_lifecycle_on_init';
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

export const SCRIPTAPP_EVENT_LISTENERS_ON_SAY =
  'scriptapp_event_listeners_on_say';
Blockly.Blocks[SCRIPTAPP_EVENT_LISTENERS_ON_SAY] = {
  init: function () {
    this.jsonInit({
      type: SCRIPTAPP_EVENT_LISTENERS_ON_SAY,
      message0: 'When someone says something',
      previousStatement: null,
      nextStatement: null,
    });
    this.setStyle('loop_blocks');
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('player'), 'PLAYER')
      .appendField(new Blockly.FieldVariable('text'), 'TEXT');
    this.appendStatementInput('DO').appendField('do');
  },
};
Blockly.JavaScript[SCRIPTAPP_EVENT_LISTENERS_ON_SAY] = function (block) {
  let branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block);

  return `App.onSay.Add(function(player, text){\n` + branch + `\n});`;
};

export const SCRIPTAPP_METHODS_SAY_TO_ALL = 'scriptapp_methods_say_to_all';
Blockly.Blocks[SCRIPTAPP_METHODS_SAY_TO_ALL] = {
  init: function () {
    this.jsonInit({
      type: SCRIPTAPP_METHODS_SAY_TO_ALL,
      message0: 'Say %1 to All',
      // message0: 'Say %1 with color %2 to All',
      args0: [
        { type: 'input_value', name: 'TEXT', check: 'String' },
        // { type: 'input_value', name: 'COLOR', check: 'Number' },
      ],
      previousStatement: null,
      nextStatement: null,
    });
    this.setStyle('loop_blocks');
  },
};
Blockly.JavaScript[SCRIPTAPP_METHODS_SAY_TO_ALL] = function (block) {
  const text =
    Blockly.JavaScript.valueToCode(
      block,
      'TEXT',
      Blockly.JavaScript.ORDER_NONE,
    ) || "''";
  return `App.sayToAll(${text});`;

  // const color =
  //   Blockly.JavaScript.valueToCode(
  //     block,
  //     'COLOR',
  //     Blockly.JavaScript.ORDER_NONE,
  //   ) || '0xFFFFFF';
  // return `App.sayToAll(${text}, ${color});`;
};
