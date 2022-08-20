import '@chakra-ui/react';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import BlocklyExample from './Blockly';
import Home from './Home';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/blockly" element={<BlocklyExample />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
