import style from "./Header.module.sass";
import box from "../../assets/box.png";
import back from "../../assets/back.png";
import { getList } from "../../api/api";
import { useDispatch } from "react-redux";
import { createStore } from "../../store/slices/treeSlice";
import { TreeNode } from "../../types/types";
import { useEffect } from "react";

const Header = () => {

  



  return (
    <div className={style.header}>
      <button className={style.btn}>
        <img src={box} className={style.image} />
      </button>
      <button className={style.btn}>
        <img src={back} className={style.image} />
      </button>
      <button className={style.btn}>Просмотр</button>
      <button className={style.btn}>Управление</button>
    </div>
  );
};

export default Header;
