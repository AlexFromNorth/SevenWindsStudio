import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TreeNode, TreeState } from "../../types/types";

const initialState: TreeState = {
  root: {
    rowName: `rootName`,
    total: 0,
    equipmentCosts: 0,
    estimatedProfit: 0,
    id: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    overheads: 0,
    salary: 0,
    supportCosts: 0,
    child: [],
  },
};

const treeSlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    createStore: (state, action: PayloadAction<{ node: TreeNode }>) => {
      state.root = action.payload.node;
    },

    addChild: (
      state,
      action: PayloadAction<{ parentId: number; child: TreeNode }>
    ) => {
      const { parentId, child } = action.payload;
      const addNode = (node: TreeNode) => {
        if (node.id === parentId) {
          node.child.push(child);
        } else if (node.child) {
          node.child.forEach(addNode);
        }
      };
      addNode(state.root);
    },

    editNode: (
      state,
      action: PayloadAction<{
        nodeName: string;
        newName: string;
        newCost: number;
      }>
    ) => {
      const { nodeName, newName, newCost } = action.payload;
      const editNode = (node: TreeNode) => {
        if (node.rowName === nodeName) {
          node.rowName = newName;
          node.total = newCost;
        } else if (node.child) {
          node.child.forEach(editNode);
        }
      };
      editNode(state.root);
    },

    deleteNode: (state, action: PayloadAction<{ nodeName: string }>) => {
      const { nodeName } = action.payload;
      const deleteNode = (node: TreeNode, parent: TreeNode | null) => {
        node.child = node.child?.filter((child) => {
          if (child.rowName === nodeName) {
            return false;
          } else {
            deleteNode(child, node);
            return true;
          }
        });
        if (parent && parent.rowName === nodeName) {
          parent.child = parent.child?.filter(
            (child) => child.rowName !== nodeName
          );
        }
      };
      deleteNode(state.root, null);
    },
  },
});

export const { addChild, editNode, deleteNode, createStore } =
  treeSlice.actions;
export default treeSlice.reducer;
