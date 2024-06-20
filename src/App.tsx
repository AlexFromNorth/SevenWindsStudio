// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Test from './components/Test';
import { Counter } from './components/Counter';
import { RootState } from './store/store';
import TreeTask from './components/treeTask/TreeTask';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

const App: React.FC = () => {
  const root = useSelector((state: RootState) => state.tree.root);

  return (
    <Router>
      <Header />

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
      </div>
    </Router>
  );
};

export default App;
