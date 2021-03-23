import classes from './header.module.css';
import Image from '../../assets/logo192.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={Image} />
            <div className={classes.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    );
}
export default Header;