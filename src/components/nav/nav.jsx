import nav from './nav.module.css';
import glob from '../global/global.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
    <nav className={nav.nav}>
        <ul className={nav.list}>
            <li className={`${nav.item} ${glob.subtitle}`}><NavLink to="/profile" activeClassName={nav.active}>Профиль</NavLink></li>
            <li className={`${nav.item} ${glob.subtitle}`}><NavLink to="/dialogs" activeClassName={nav.active}>Сообщения</NavLink></li>
            <li className={`${nav.item} ${glob.subtitle}`}><NavLink to="/friends" activeClassName={nav.active}>Друзья</NavLink></li>
            <li className={`${nav.item} ${glob.subtitle}`}><NavLink to="/settings" activeClassName={nav.active}>Настройки</NavLink></li>
        </ul>
    </nav>
    );
}

export default Nav; 