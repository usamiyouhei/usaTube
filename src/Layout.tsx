import { Outlet,Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { useAtomValue } from "jotai";
import { currentUserAtom } from "./modules/auth/current-user.state";
import FlashMessageArea from './components/FlashMessage';
import { useFlashMessage } from './modules/flash-message/flash-massege.state';

const Layout = () => {
  const currentUser = useAtomValue(currentUserAtom);
  const { message } = useFlashMessage();
  if( currentUser == null) return <Navigate to="/signin"/>
  return (
    <div className="youtube-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
      {message != null && <FlashMessageArea message={message}/>}
    </div>
  );
};

export default Layout;
