import classes from './preloader.module.css';
import Mask from '../preloader/../../../assets/preloader.gif';


const Preloader = (props) => {
    return (
        props.isFetching && 
        <div className={classes.preloader}>
            <img src={Mask} />
        </div>
    );
}
export default Preloader