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
const InfoContainer = connect(mapStateToProps, {
    updateStatusTextArea: profileActionCraeters.updateStatusActionCreater
})(Info);
export default InfoContainer;