export interface ServerResponse {
  current: TreeNode | null;
  changed: TreeNode[];
}

export interface TreeNode {
  equipmentCosts: number;
  estimatedProfit: number;
  id: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
  total: number;
  child: TreeNode[];
}

export interface TreeState {
  root: TreeNode;
}
