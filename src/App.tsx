import '@chakra-ui/react';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import BlocklyExamplePage from './Blockly/BlocklyExamplePage';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blockly" element={<BlocklyExamplePage />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
