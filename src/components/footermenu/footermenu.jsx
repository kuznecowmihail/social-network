import { NavLink } from 'react-router-dom';
import classes from './footermenu.module.css';

const FooterMenu = (props) => {
    return (
        <footer className={classes.footer}>
            {
                props.state.bar.map(item => {
                    return (
                        <NavLink key={item.id}
                            className={classes.item}
                            activeClassName='active-item'
                            to={item.to}>
                                {item.name}
                        </NavLink>
                    );
                })
            }
        </footer>
    );
}
export default FooterMenu;