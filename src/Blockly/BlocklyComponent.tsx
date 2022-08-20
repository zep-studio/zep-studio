import React, { useCallback, useState } from 'react';

import './BlocklyComponent.css';

import Blockly from 'blockly/core';
import BlocklyJS from 'blockly/javascript';
// @ts-ignore
import locale from 'blockly/msg/en';
import { useEffect, useRef } from 'react';

import 'blockly/blocks';

import { WorkspaceSvg } from 'blockly/core';

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

  const onClickConvert = useCallback(() => {
    const code = BlocklyJS.workspaceToCode(primaryWorkspace.current);
    setGeneratedCode(code);
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
        <code>{generatedCode}</code>
      </pre>
      <div ref={blocklyDiv} id="blocklyDiv" />
      <div style={{ display: 'none' }} ref={toolbox}>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default BlocklyComponent;
