import classes from './list.module.css';
import DialogItem from './dialog/dialogitem';

const List = (props) => {
    return (
        <div className={classes.dialogItems}>
            {
                props.dialogs.map((data) => {
                    return (<DialogItem key={data.id}
                        id={data.id}
                        name={data.name}
                        lastMessage={data.lastMessage}
                        img={data.img}
                        onDialogLinkClick={props.onDialogLinkClick} />);
                })
            }
        </div>
    );
}
export default List;