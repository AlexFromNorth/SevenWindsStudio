// src/components/TreeTask.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./TreeTask.module.sass"; // импортируем стили
import { addChild, editNode, deleteNode } from "../../store/slices/treeSlice";
import { MathRandom } from "../../utils/utils";

interface TreeNode {
  name?: string;
  cost?: number;
  children?: TreeNode[];
}

interface TreeTaskProps {
  node: TreeNode;
}

const TreeTask: React.FC<TreeTaskProps> = ({ node }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(node.name || "");
  const [newCost, setNewCost] = useState(node.cost || 0);

  const handleAddChild = () => {
    const newChild = {
      name: `child${MathRandom()}`,
      cost: 0,
      children: [],
    };
    dispatch(addChild({ parentName: node.name || "", child: newChild }));
  };

  const [count, setCount] = useState(0);

  const handleDeleteNode = () => {
    dispatch(deleteNode({ nodeName: node.name || "" }));
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(editNode({ nodeName: node.name || "", newName, newCost }));
      setIsEditing(false);
    }
  };

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className={styles.treeTask}>
      <h1>{count}</h1>
      <div
        className={`${styles.nodeContent} ${
          hasChildren ? styles.hasChildren : ""
        }`}
      >
        {isEditing ? (
          <>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <input
              type="number"
              value={newCost}
              onChange={(e) => setNewCost(Number(e.target.value))}
              onKeyPress={handleKeyPress}
            />
          </>
        ) : (
          <span onDoubleClick={handleDoubleClick}>
            Name: {node.name || "Unnamed"}, Cost: {node.cost || 0}
          </span>
        )}
        <button onClick={handleAddChild}>Add Child</button>
        <button onClick={handleDeleteNode}>Delete</button>
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
