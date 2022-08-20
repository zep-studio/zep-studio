import * as Blockly from 'blockly/core';

import 'blockly/javascript';

Blockly.JavaScript['lifecycle_on_init'] = function (block) {
  let branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block);
  return `App.onInit.Add(function(){\n` + branch + `\n});`;
};
