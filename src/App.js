import './App.css';
import {Route} from 'react-router-dom';
import UsersContainer from './components/users/userscontainer';
import Header from './components/header/header';
import Dialogs from './components/dialogs/dialogs';
import FooterMenu from './components/footermenu/footermenu';
import ProfileContainer from './components/profileinfo/profilecontainer';
import ProfileHeader from './components/profileheader/profileheader';

const App = (props) => {
  let info = props.store.getState().profileData.info;
  return (
    <div className='app-wrapper'>
      <Header />
      <ProfileHeader name={info.name} avatarSrc={info.avatarSrc} />
      <div className="app-wrapper-content">
        <Route exact={true} path="/profile" render={() => <ProfileContainer />} />
        <Route path="/profile/:userid" render={() => <ProfileContainer />} />
        <Route exact={true} path="/dialogs" render={() => <Dialogs />} />
        <Route path="/dialogs/:dialogid" render={() => <Dialogs />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
      <FooterMenu state={props.store.getState().menuData} />
    </div>
  );
}
export default App;