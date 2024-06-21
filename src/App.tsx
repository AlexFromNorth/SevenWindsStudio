// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Test from './components/Test';
import { Counter } from './components/Counter';
import { RootState } from './store/store';
import TreeTask from './components/treeTask/TreeTask';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { getList } from './api/api';
import { createStore } from './store/slices/treeSlice';
import { TreeNode } from './types/types';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    getList().then((response: TreeNode[]) => {
      console.log(response)

      dispatch(createStore({ node: response[0] }));
    })    
  },[])

  const root = useSelector((state: RootState) => state.tree.root);

  return (
    <Router>
      <Header />

      <div className='wrapper'>
        <div className="navBar">
          <Navbar />
        </div>

        <div className='main'>
          {/* {root.map((child, index) => (
            <TreeTask key={index+9000} node={child} />
          ))} */}
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
