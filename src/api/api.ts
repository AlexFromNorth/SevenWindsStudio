import axios from "axios";

const userId = import.meta.env.VITE_ID;

export function getList() {
  axios
    .get(`http://185.244.172.108:8081/v1/outlay-rows/entity/${userId}/row/list`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function createRow() {
  axios
    .post(
      `http://185.244.172.108:8081/v1/outlay-rows/entity/${userId}/row/list`,
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
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function updateRow() {
  axios
    .post(
      `http://185.244.172.108:8081/v1/outlay-rows/entity/${userId}/row/list`,
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
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function deleteRow(rID:number) {
  axios
    .get(`http://185.244.172.108:8081/v1/outlay-rows/entity/${userId}/row/${rID}/delete`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
