import ListContainer from './list/listcontainer';
import ChatContainer from './chat/chatcontainer';
import classes from './dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <ListContainer />
            <ChatContainer />
        </div>
    );
}
export default Dialogs;