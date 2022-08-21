import prettierParserBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import React, { createElement, useCallback, useMemo, useState } from 'react';

import './BlocklyComponent.css';

import Blockly from 'blockly/core';
import BlocklyJS from 'blockly/javascript';
// @ts-ignore
import locale from 'blockly/msg/en';
import { useEffect, useRef } from 'react';

import 'blockly/blocks';

import { WorkspaceSvg } from 'blockly/core';

import { SCRIPTAPP_METHODS_SAY_TO_ALL } from '../../blocks/scriptapp';

// @ts-ignore
Blockly.setLocale(locale);

type BlocklyComponentProps = {
  readOnly?: boolean;
  trashcan?: boolean;
  media?: string;
  move: {
    scrollbars: boolean;
    drag: boolean;
    wheel: boolean;
  };
  initialXml?: string;
  children?: React.ReactNode;
};

const BlocklyComponent: React.FC<BlocklyComponentProps> = (props) => {
  const blocklyDiv = useRef<HTMLDivElement>(null);
  const toolbox = useRef<HTMLDivElement>(null);
  const primaryWorkspace = useRef<WorkspaceSvg | null>(null);

  const [generatedCode, setGeneratedCode] = useState<string>('');
  const formattedCode = useMemo(() => {
    if (!generatedCode) {
      return '';
    }
    return prettier.format(generatedCode, {
      bracketSpacing: true,
      bracketSameLine: false,
      singleQuote: true,
      trailingComma: 'all',
      semi: true,
      parser: 'babel',
      plugins: [prettierParserBabel],
    });
  }, [generatedCode]);

  const [serialized, setSerialized] = useState<string>('');

  const onClickConvert = useCallback(() => {
    if (!primaryWorkspace.current) return;

    const code = BlocklyJS.workspaceToCode(primaryWorkspace.current);
    setGeneratedCode(code);
    setSerialized(
      JSON.stringify(
        Blockly.serialization.workspaces.save(primaryWorkspace.current),
        undefined,
        2,
      ),
    );

    // Programmatic Block Creation
    const workspace = new Blockly.Workspace();
    const init = workspace.newBlock('scriptapp_lifecycle_on_init');
    const trigger = workspace.newBlock('scriptapp_event_listeners_on_say');

    const textVarId = trigger.getFieldValue('TEXT');
    const textVar = workspace.getVariableById(textVarId);

    const say1 = workspace.newBlock('scriptapp_methods_say_to_all');
    init.getInput('DO')?.connection.connect(say1.previousConnection);

    const iter = workspace.newBlock('controls_repeat');
    iter.setFieldValue(5, 'TIMES');
    trigger.getInput('DO')?.connection.connect(iter.previousConnection);

    const say2 = workspace.newBlock(SCRIPTAPP_METHODS_SAY_TO_ALL);

    const text = workspace.newBlock('text');
    text.setFieldValue('HI', 'TEXT');
    say2.getInput('TEXT')?.connection.connect(text.outputConnection);

    iter.getInput('DO')?.connection.connect(say2.previousConnection);

    console.log(BlocklyJS.workspaceToCode(workspace));
  }, []);

  const isInitalizedRef = useRef<boolean>(false);

  useEffect(() => {
    const { initialXml, children, ...rest } = props;
    if (!blocklyDiv.current) {
      return;
    }
    if (!!isInitalizedRef.current) {
      return;
    }
    primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
      // NOTE: Blockly's inject options are not typed at all
      // @ts-ignore
      toolbox: toolbox.current,
      ...rest,
    });
    isInitalizedRef.current = true;

    if (initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(initialXml),
        primaryWorkspace.current,
      );
    }
  }, [primaryWorkspace, toolbox, blocklyDiv, props]);

  return (
    <React.Fragment>
      <button onClick={onClickConvert}>Convert</button>
      <pre>
        <code>{formattedCode}</code>
      </pre>
      <pre>
        <code>{serialized}</code>
      </pre>
      <div ref={blocklyDiv} id="blocklyDiv" />
      <div style={{ display: 'none' }} ref={toolbox}>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default BlocklyComponent;
