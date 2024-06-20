import { Key } from 'react'
import listCategories from '../../utils/listCategories.json'
import style from './Navbar.module.sass'

const Navbar = () => {
    return (
        <div className={style.navbar}>
            {listCategories.map((el: String, i: Key) => (
                <div className={style.item}>
                    <button key={i} className={style.btn}>
                        <img src="./" alt="ab" className={style.image} />
                        {el}
                    </button>
                </div>

            ))}
        </div>
    )
}

export default Navbar