import React from 'react'
import style from './Header.module.sass'

const Header = () => {
  return (
    <div>
        <button className={style.btn}>List</button>
        <button>return</button>
        <button className={style.btn}>Просмотр</button>
        <button>Управление</button>
    </div>
  )
}

export default Header