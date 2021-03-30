import { useEffect } from 'react';
import { connect } from 'react-redux';
import { authActionCreaters } from '../../redux/auth-reducer';
import Header from './header';
import * as axioshelper from '../../axioshelper/axioshelper';

const HeaderContainer = ({login , password, setAuthUserData}) => {
    useEffect(() => {
        setUserData();
    }, []);
    const setUserData = () => {
        let url = `/auth`;
        let app = axioshelper.getApp();
        let cookies = `login=${'Mike'}; password=${password};`;
        app.get(url, {
            headers: {
                Cookie: cookies
            }
        }).then(response => {
            if(!axioshelper.isAccess(response)) {
                return;
            }
            let data = response && response.data && response.data;
            let code = data.resultCode;
            data = data.data;
            if(code === 401) {
                console.error(data.message);
                return;
            }
            setAuthUserData(data);
        });
    }
    return (
        <Header />
    );
}
var mapStateToProps = (state) => ({
    login: state.authData.login,
    password: state.authData.password
});
export default connect(mapStateToProps, {
    setAuthUserData: authActionCreaters.setAuthUserData
})(HeaderContainer);