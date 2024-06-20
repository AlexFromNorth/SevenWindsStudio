import React, { useEffect } from 'react'
import style from './Header.module.sass'
import axios from 'axios';


console.log(132)

// function getUserAccount() {
//   axios.get('http://185.244.172.108:8081/v1/outlay-rows/entity/126519/row/list')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }

// getUserAccount();
// useEffect(() => {
//   console.log(2)
// }, [])


const Header = () => {
  return (
    <div>
        <button className={style.btn}>List</button>
        <button>return</button>
        <button className={style.btn}>Просмотр</button>
        <button>Управление 2</button>
    </div>
  )
}

export default Header