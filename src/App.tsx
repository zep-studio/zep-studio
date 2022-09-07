import '@chakra-ui/react';

import styled from '@emotion/styled';
import { useCallback, useRef } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import BlocklyExamplePage from './pages/Blockly/BlocklyExamplePage';
import { HomePage } from './pages/Home/HomePage';
import { StudioPage } from './pages/Studio/StudioPage';
import { selectorState } from './store/selectorState';

function App() {
  const selectorPortalRef = useRef<HTMLDivElement>(null);

  const [currentSelector, setCurrentSelector] = useRecoilState(selectorState);
  const hasSelector = !!currentSelector;

  const onClickSelectorBackground = useCallback(() => {
    setCurrentSelector(null);
  }, [setCurrentSelector]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/studio" element={<StudioPage />}></Route>
          <Route path="/blockly" element={<BlocklyExamplePage />}></Route>
        </Routes>
      </Router>
      {hasSelector && (
        <SelectorBackground onClick={onClickSelectorBackground} />
      )}
      <div id="selector-portal" ref={selectorPortalRef} />
    </>
  );
}

export default App;

const SelectorBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;
