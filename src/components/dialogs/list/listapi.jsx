import List from './list';
import DialogItem from './dialog/dialogitem';
import axios from 'axios';
import {useEffect} from 'react';

const ListAPI = (props) => {
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
export default ListAPI;