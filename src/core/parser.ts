import { Workspace } from 'blockly';
import Blockly from 'blockly/core';
import BlocklyJS from 'blockly/javascript';

export function stateToCode(state: any) {
  const ws = new Workspace();
  const loop = (state: any, connection?: any) => {
    let _connection;
    let type;

    switch (state.type) {
      case 'trigger':
        let type = 'trigger';
        const trigger = ws.newBlock(state.trigger);
        break;
      case 'condition':
        break;
      case 'action':
        break;
    }
    if (connection) {
      connection.connect();
    }

    if (state.blocks && state.blocks.length > 0) {
      loop(state.blocks);
    }
  };

  loop(state);

  return BlocklyJS.workspaceToCode(ws);
}
