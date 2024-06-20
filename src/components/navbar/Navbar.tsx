import { Key } from 'react'
import listCategories from '../../utils/listCategories.json'
import style from './Navbar.module.sass'
import whiteBox from '../../assets/white-box.png'
import arrowDown from '../../assets/arrow-down.svg'

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.topNavbar}>
                <div>
                    <p className={style.projectName}>Название проекта</p>
                    <p>Аббревиатура</p>
                </div>
                <div>
                    <img src={arrowDown} />
                </div>
            </div>

            {listCategories.map((el: String, i: Key) => (
                <div className={style.item}>
                    <button key={i} className={style.btn}>
                        <img src={whiteBox} className={style.image} />
                        {el}
                    </button>
                </div>

            ))}
        </div>
    )
}

export default Navbar