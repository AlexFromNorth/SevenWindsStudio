import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./TreeTask.module.sass"; // импортируем стили
import { addChild, editNode, deleteNode } from "../../store/slices/treeSlice";
import { MathRandom } from "../../utils/utils";
import { TreeNode } from "../../types/types";

interface TreeTaskProps {
  node: TreeNode;
}

const TreeTask: React.FC<TreeTaskProps> = ({ node }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(node.rowName || "");
  const [newCost, setNewCost] = useState(node.total || 0);

  const handleAddChild = () => {
    const newChild = {
      rowName: `child${MathRandom()}`,
      total: 0,
      equipmentCosts: 0,
      estimatedProfit: 0,
      id: MathRandom(),
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      salary: 0,
      supportCosts: 0,
      child: [],
    };
    dispatch(addChild({ parentId: node.id, child: newChild }));
  };

  const handleDeleteNode = () => {
    dispatch(deleteNode({ nodeName: node.rowName || "" }));
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(editNode({ nodeName: node.rowName || "", newName, newCost }));
      setIsEditing(false);
    }
  };

  const hasChildren = node.child && node.child.length > 0;

  return (
    <div className={styles.treeTask}>
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
            rowName: {node.rowName || "Unnamed"}, total: {node.total || 0}
          </span>
        )}
        <button onClick={handleAddChild}>Add Child</button>
        <button onClick={handleDeleteNode}>Delete</button>
      </div>
      {hasChildren && (
        <div className={styles.childrenContainer}>
          {node.child!.map((child, index) => (
            <TreeTask key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeTask;
