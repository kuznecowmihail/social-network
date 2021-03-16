import classes from './header.module.css';
import Image from '../../assets/logo192.png';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={Image} />
        </header>
    );
}
export default Header;