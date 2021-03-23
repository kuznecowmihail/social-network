import { useContext } from 'react';
import classes from './list.module.css';
import DialogItem from './dialog/dialogitem';
import { ListContext } from './../../../context';

const List = (props) => {
    const listContext = useContext(ListContext);
    return (
        <div className={classes.dialogItems}>
            {
                listContext.dialogs.map((data) => {
                    return (<DialogItem key={data.id}
                        id={data.id}
                        name={data.name}
                        lastMessage={data.lastMessage}
                        img={data.img}
                        onDialogLinkClick={listContext.onDialogLinkClick} />);
                })
            }
        </div>
    );
}
export default List;