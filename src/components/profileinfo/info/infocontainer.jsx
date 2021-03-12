import Info from './info';
import {connect} from 'react-redux';
import {profileActionCraeters} from '../../../redux/profile-reducer';

let mapStateToProps = (state) => {
    let profileData = state.profileData;
    return {
        avatarSrc: profileData.info.avatarSrc,
        name: profileData.info.name,
        descriprion: profileData.info.descriprion,
        statusTextAreaValue: profileData.statusTextAreaValue

    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateStatusTextArea: (value) => {
            dispatch(profileActionCraeters.updateStatusActionCreater(value));
        }
    };
};
const InfoContainer = connect(mapStateToProps, mapDispatchToProps)(Info);
export default InfoContainer;