import './App.css';
import{BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Chat from './component/Chat'
import Login from './component/Login'
import Header from './component/header'
import Sidebar from './component/Sidebar'
import db from'./firebase'
import{Container, Main} from './css/App.css'
import {useEffect,useState} from 'react'
import {auth, provider} from './firebase'
function App() {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  const signOut = () => {
    auth.signOut().then(()=>{
      localStorage.removeItem('user');
      setUser(null);
    })
  }

  useEffect(() => {
    getChannels();
  }, []);
  console.log("user in app",user);
  return (  
    <div className="App">
      <Router>
        {
        !user ?  <Login setUser={setUser}/>
        :        
        <Container>
          <Header user={user} signOut={signOut}/>
          <Main>
            <Sidebar rooms={rooms} />
            <Switch>
              <Route exact path="/room/:channelId">
                <Chat user={user}/>
              </Route>
              <Route path="/">
                Select or Create Channel
              </Route>
            </Switch>
          </Main>
        </Container>
        }
      </Router>
    </div>
  );
}

export default App;

