import axios, { AxiosError, AxiosResponse } from "axios";
import { ServerResponse, TreeNode } from "../types/types";

const userId = import.meta.env.VITE_ID;

export function getList(): Promise<TreeNode[]> {
  return axios
    .get<TreeNode[]>(`http://185.244.172.108:8081/v1/outlay-rows/entity/${userId}/row/list`)
    .then(function (response: AxiosResponse<TreeNode[]>) {
      return response.data
    })
    .catch(function (error: AxiosError) {
      console.log(error);
      return []
    });
}

export function createRow() {
  axios
    .post(
      `http://185.244.172.108:8081/v1/outlay-rows/entity/${userId}/row/create`,
      {
        equipmentCosts: 0,
        estimatedProfit: 0,
        machineOperatorSalary: 0,
        mainCosts: 0,
        materials: 0,
        mimExploitation: 0,
        overheads: 0,
        parentId: null,
        rowName: "string",
        salary: 0,
        supportCosts: 0,
      }
    )
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function updateRow(rID: number) {
  axios
    .post<ServerResponse>(
      `http://185.244.172.108:8081/v1/outlay-rows/entity/${userId}/row/${rID}/update`,
      {
        equipmentCosts: 0,
        estimatedProfit: 0,
        machineOperatorSalary: 0,
        mainCosts: 0,
        materials: 0,
        mimExploitation: 0,
        overheads: 0,
        rowName: "string",
        salary: 0,
        supportCosts: 0,
      }
    )
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// export function deleteRow():  {
//   axios
//     .delete(`http://185.244.172.108:8081/v1/outlay-rows/entity/${userId}/row/${rID}/delete`)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }
