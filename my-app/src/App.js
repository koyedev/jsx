
import './App.css';
import ProfilePhoto from './component/Profile/ProfilePhoto';
import Fullname from './component/Profile/Fullname';
import Address from './component/Profile/Address';

function App() {
  return (
    <div className="app">
      <ProfilePhoto />
      <Fullname />
      <Address />
    </div>
  );
}

export default App;
