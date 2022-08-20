/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blockly React Component.
 * @author samelh@google.com (Sam El-Husseini)
 */
import React from 'react';

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

  const generateCode = () => {
    var code = BlocklyJS.workspaceToCode(primaryWorkspace.current);
    console.log(code);
  };

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
      <button onClick={generateCode}>Convert</button>
      <div ref={blocklyDiv} id="blocklyDiv" />
      <div style={{ display: 'none' }} ref={toolbox}>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default BlocklyComponent;
