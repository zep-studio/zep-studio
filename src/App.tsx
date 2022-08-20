import '@chakra-ui/react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import BlocklyExamplePage from './pages/Blockly/BlocklyExamplePage';
import { StudioPage } from './pages/Studio/StudioPage';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/studio" element={<StudioPage />}></Route>
          <Route path="/blockly" element={<BlocklyExamplePage />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
