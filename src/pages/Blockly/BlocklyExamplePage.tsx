import styled from '@emotion/styled';

import BlocklyComponent, { Block, Field, Shadow, Value } from '.';

import '../../blocks';

import {
  SCRIPTAPP_EVENT_LISTENERS_ON_SAY,
  SCRIPTAPP_LIFECYCLE_ON_INIT,
  SCRIPTAPP_METHODS_SAY_TO_ALL,
} from '../../blocks/scriptapp';

export default function BlocklyExamplePage() {
  return (
    <Container>
      <BlocklyComponent
        readOnly={false}
        trashcan={false}
        media={'media/'}
        move={{
          scrollbars: true,
          drag: true,
          wheel: true,
        }}
        initialXml={`
            <xml xmlns="http://www.w3.org/1999/xhtml">
              <block type="${SCRIPTAPP_LIFECYCLE_ON_INIT}" x="0" y="0">
              </block>
            </xml>
          `}
      >
        <Block type={SCRIPTAPP_LIFECYCLE_ON_INIT} />
        <Block type={SCRIPTAPP_EVENT_LISTENERS_ON_SAY} />
        <Block type={SCRIPTAPP_METHODS_SAY_TO_ALL} />

        <Block type="text" />
        <Block type="math_number" />
        <Block type="variables_get" />

        <Block type="controls_ifelse" />
        <Block type="logic_compare" />
        <Block type="logic_operation" />
        <Block type="controls_repeat_ext">
          <Value name="TIMES">
            <Shadow type="math_number">
              <Field name="NUM">10</Field>
            </Shadow>
          </Value>
        </Block>
        <Block type="logic_operation" />
        <Block type="logic_negate" />
        <Block type="logic_boolean" />
        <Block type="logic_null" />
        <Block type="logic_ternary" />
        <Block type="text_charAt">
          <Value name="VALUE">
            <Block type="variables_get">
              <Field name="VAR">text</Field>
            </Block>
          </Value>
        </Block>
      </BlocklyComponent>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
`;
