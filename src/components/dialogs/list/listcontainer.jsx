import List from './list';
import {connect} from 'react-redux';
import * as axioshelper from '../../../axioshelper/axioshelper';
import { useEffect } from 'react';
import {dialogActionCreaters} from '../../../redux/dialogs-reducer';

const ListContainer = (props) => {
    useEffect(() => {
        if(props.dialogs.length === 0) {
            getDialogs();
        }
    });
    const getDialogs = () => {
        let url = '/dialogs';
        let app = axioshelper.getApp();
        app.get(url).then(response => {
            if(!axioshelper.isAccess(response)) {
                return;
            }
            let data = response && response.data && response.data.data;
            let dialogs = data && data.dialogs;
            props.setDialogs(dialogs);
        });
    };
    return <List dialogs={props.dialogs} onDialogLinkClick={props.onDialogLinkClick} />;
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