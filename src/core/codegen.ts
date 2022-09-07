import Blockly from 'blockly/core';
import BlocklyJS from 'blockly/javascript';
import prettierParserBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';

import {
  ActionBlockDraft,
  TriggerBlockDraft,
} from '../components/zep-studio-blocks/types';

// Programmatic Block Creation
export const blocksToCode = (
  triggerBlock: TriggerBlockDraft,
  actionBlocks: ActionBlockDraft[],
): string => {
  const workspace = new Blockly.Workspace();
  const trigger = workspace.newBlock(triggerBlock.trigger);

  actionBlocks.forEach((actionBlock) => {
    const action = workspace.newBlock(actionBlock.action);

    actionBlock.variables?.forEach((variable) => {
      const variableBlock = workspace.newBlock(variable.type);
      variableBlock.setFieldValue(variable.value, variable.fieldName);
      action
        .getInput(variable.fieldName)
        ?.connection.connect(variableBlock.outputConnection);
    });

    trigger.getInput('DO')?.connection.connect(action.previousConnection);
  });

  const generatedCode = BlocklyJS.workspaceToCode(workspace);

  return prettier.format(generatedCode, {
    bracketSpacing: true,
    bracketSameLine: false,
    singleQuote: true,
    trailingComma: 'all',
    semi: true,
    parser: 'babel',
    plugins: [prettierParserBabel],
  });
};
