import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PreHome from './pages/PreHome/PreHome';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import {fetchUsers} from './services/users'
import { fetchTweets } from './services/tweets';
import { tweetsAtom } from './Recoil/Tweets';
import {usersAtom} from './Recoil/Users'



function App() {
  const setTweets = useSetRecoilState(tweetsAtom);
  const setUsers = useSetRecoilState(usersAtom);
  

  useEffect(() => {
    fetchTweets().then((tweets) => {
      setTweets(tweets);
    });
    fetchUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<PreHome/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
     
    </div>
  );
}

export default App;
