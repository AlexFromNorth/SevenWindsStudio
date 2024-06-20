// src/features/tree/treeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TreeNode {
  name: string;
  cost: number;
  children?: TreeNode[];
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
            cost: 25
          },
          {
            name: 'grandchild2',
            cost: 30
          }
        ]
      },
      {
        name: 'child2',
        cost: 75
      }
    ]
  }
};

const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    addChild: (state, action: PayloadAction<{ parentName: string, child: TreeNode }>) => {
      const addChildToNode = (node: TreeNode) => {
        if (node.name === action.payload.parentName) {
          node.children = node.children ? [...node.children, action.payload.child] : [action.payload.child];
        } else if (node.children) {
          node.children.forEach(addChildToNode);
        }
      };

      addChildToNode(state.root);
    }
  }
});

export const { addChild } = treeSlice.actions;
export default treeSlice.reducer;
