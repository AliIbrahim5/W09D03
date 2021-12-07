import './App.css';
import {React,Route,Routes,Link} from "react-router-dom";
import Login from './components/Login';
import Task from './components/Task';
import Register from './components/Register';
function App() {
  return (
    <div>
     <Routes>
     <Route path="/login" component={Login}/>
     <Route path="/register" component={Register}/>
     <Route path="/task" component={Task}/>
     </Routes>
     <Link to="/register" >Register</Link>
     <Link to="/login" >Login</Link>
     <Link to="/task" >Task</Link>
    </div>

  );
}

export default App;
