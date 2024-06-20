// src/store/slices/treeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TreeNode {
  name: string;
  cost: number;
  children: TreeNode[];
}

interface TreeState {
  root: TreeNode;
}

const initialState: TreeState = {
  root: {
    name: 'root',
    cost: 100,
    children: [
      {
        name: 'child1',
        cost: 50,
        children: [
          {
            name: 'grandchild1',
            cost: 25,
            children: []
          },
          {
            name: 'grandchild2',
            cost: 30,
            children: []
          }
        ]
      },
      {
        name: 'child2',
        cost: 75,
        children: []
      }
    ]
  }
};

const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    addChild: (state, action: PayloadAction<{ parentName: string; child: TreeNode }>) => {
      const { parentName, child } = action.payload;
      const addNode = (node: TreeNode) => {
        if (node.name === parentName) {
          node.children.push(child);
        } else {
          node.children.forEach(addNode);
        }
      };
      addNode(state.root);
    },
    editNode: (state, action: PayloadAction<{ nodeName: string; newName: string; newCost: number }>) => {
      const { nodeName, newName, newCost } = action.payload;
      const editNode = (node: TreeNode) => {
        if (node.name === nodeName) {
          node.name = newName;
          node.cost = newCost;
        } else {
          node.children.forEach(editNode);
        }
      };
      editNode(state.root);
    },
    deleteNode: (state, action: PayloadAction<{ nodeName: string }>) => {
      const { nodeName } = action.payload;
      const deleteNode = (node: TreeNode, parent: TreeNode | null) => {
        node.children = node.children.filter((child) => {
          if (child.name === nodeName) {
            return false;
          } else {
            deleteNode(child, node);
            return true;
          }
        });
        if (parent && parent.name === nodeName) {
          parent.children = parent.children.filter((child) => child.name !== nodeName);
        }
      };
      deleteNode(state.root, null);
    }
  }
});

export const { addChild, editNode, deleteNode } = treeSlice.actions;
export default treeSlice.reducer;
