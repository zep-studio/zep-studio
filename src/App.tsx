import '@chakra-ui/react';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import BlocklyExample from './Blockly';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blockly" element={<BlocklyExample />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
