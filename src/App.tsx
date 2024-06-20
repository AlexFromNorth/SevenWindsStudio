// src/App.tsx
import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Test from './components/Test';
import { Counter } from './components/Counter';
import { RootState } from './store/store';
import TreeTask from './components/treeTask/TreeTask';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Xarrow from 'react-xarrows';

const boxStyle = {border: "grey solid 2px", borderRadius: "10px", padding: "5px", width: '5px'};

const App: React.FC = () => {
  const root = useSelector((state: RootState) => state.tree.root);
  return (
    <Router>
      <div id="elem1" style={{...boxStyle, marginBottom: '50px', marginLeft: '550px'}}>hey</div>
      <div id="elem2" style={boxStyle}>hey2</div>
      <Xarrow
        start="elem1"
        end="elem2"
        path='grid'
        showHead={false}
      />
      {/* <Header />

      <div className='wrapper'>
        <div className="navBar">
          <Navbar />
        </div>

        <div className='main'>
          <TreeTask node={root} />
          <Counter />
          <h1>{import.meta.env.VITE_ID}</h1>
          <Routes>
            <Route path="/*" element={<Test />} />
          </Routes>
        </div>
      </div> */}
    </Router>
  );
};

export default App;
