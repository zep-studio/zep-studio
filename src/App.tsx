import '@chakra-ui/react';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import BlocklyExamplePage from './Blockly/BlocklyExamplePage';
import HomePage from './Home/HomePage';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/blockly" element={<BlocklyExamplePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
