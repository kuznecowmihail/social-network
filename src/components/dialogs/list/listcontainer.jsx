import List from './list';
import {connect} from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import {dialogActionCraeters} from '../../../redux/dialogs-reducer';

const ListContainer = (props) => {
    useEffect(() => {
        if(props.dialogs.length === 0) {
            getDialogs();
        }
    });
    const getDialogs = () => {
        const axiosConfig = {
            baseURL: 'http://192.168.1.90:3001/api/1.0',
            timeout: 30000,
        };
        let app = axios.create(axiosConfig)
        app.get('/dialogs')
            .then(response => {
                let status = response && response.status;
                if (status !== 200) {
                    console.log('request error');
                    return;
                }
                let data = response && response.data;
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
    onDialogLinkClick: dialogActionCraeters.onDialogLinkCreater,
    setDialogs: dialogActionCraeters.onSetDialogsCreater
})(ListContainer);