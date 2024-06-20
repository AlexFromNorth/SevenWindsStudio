// src/components/TreeTask.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './TreeTask.module.sass'; // импортируем стили
import { addChild } from '../../store/slices/treeSlice';
import { MathRandom } from '../../utils/utils';

interface TreeNode {
  name?: string;
  cost?: number; // добавляем опциональный параметр cost
  children?: TreeNode[]; // добавляем опциональное свойство children
}

interface TreeTaskProps {
  node: TreeNode;
}

const TreeTask: React.FC<TreeTaskProps> = ({ node }) => {
  const dispatch = useDispatch();

  const handleAddChild = () => {
    const newChild = {
    //   name: `child${node.children ? node.children.length + 1 : 1}`,
      name: `child + ${+MathRandom()}`,
      cost: 0,
      children: []
    };
    dispatch(addChild({ parentName: node.name || '', child: newChild }));
  };

  const hasChildren = node.children && node.children.length > 0;

  return (
      <div className={styles.treeTask}>
      <div className={`${hasChildren ? styles.nodeContent : ''}`}>
        <span>Name: {node.name || 'Unnamed'}, Cost: {node.cost || 0}</span>
        <button onClick={handleAddChild}>Add Child</button>
      </div>
  
      {hasChildren && (
        <div className={styles.childrenContainer}>
          {node.children!.map((child, index) => (
            <TreeTask key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeTask;
