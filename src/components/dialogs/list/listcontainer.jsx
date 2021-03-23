import List from './list';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ListContext } from '../../../context';
import * as axioshelper from '../../../axioshelper/axioshelper';
import { dialogActionCreaters } from '../../../redux/dialogs-reducer';

const ListContainer = (props) => {
    useEffect(() => {
        if (props.dialogs.length === 0) {
            getDialogs();
        }
    });
    const getDialogs = () => {
        let url = '/dialogs';
        let app = axioshelper.getApp();
        app.get(url).then(response => {
            if (!axioshelper.isAccess(response)) {
                return;
            }
            let data = response && response.data && response.data.data;
            let dialogs = data && data.dialogs;
            props.setDialogs(dialogs);
        });
    };
    return (
        <ListContext.Provider value={props}>
            <List />
        </ListContext.Provider>
    );
}
let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsData.dialogs
    };
};
export default connect(mapStateToProps, {
    onDialogLinkClick: dialogActionCreaters.onDialogLinkClick,
    setDialogs: dialogActionCreaters.setDialogs
})(ListContainer);