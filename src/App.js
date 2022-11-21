import './App.css'
import Login from './login.js'
import Registration from './Registration'
import Home from './Home'
import Error from './error'
import Admin from './Admin.js'
import Teachers from './Teachers'
import Modules from './Modules'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/teachers' element={<Teachers />}/>
        <Route path='/modules' element={<Modules />}/>

        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}
export default App;
