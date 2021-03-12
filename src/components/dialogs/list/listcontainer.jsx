import ListAPI from './listapi';
import {connect} from 'react-redux';
import {dialogActionCraeters} from '../../../redux/dialogs-reducer';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsData.dialogs
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        onDialogLinkClick: (dialogId) => {
            dispatch(dialogActionCraeters.onDialogLinkCreater(dialogId));
        },
        setDialogs: (dialogs) => {
            dispatch(dialogActionCraeters.onSetDialogsCreater(dialogs));
        }
    };
};
const ListContainer = connect(mapStateToProps, mapDispatchToProps)(ListAPI);
export default ListContainer;