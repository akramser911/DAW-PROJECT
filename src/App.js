import './App.css'
import Login from './login.js'
import Registration from './Registration'
import Home from './Home'
import Error from './error'
import Admin from './Admin.js'
import Teachers from './Teachers'
import Modules from './Modules'
import Footer from './Footer'
// import HomeEtudiant from './Etudiant/HomeEtudiant';
import EtudiantControl from './Etudiant/EtudiantControl'
import Notification from './Etudiant/Notification';
import EtudiantDetails from './Etudiant/EtudiantDetails';
import EtudiantEdit from './Etudiant/EtudiantEdit';
import Justification from './Etudiant/Justification';
// teachers stuff 
import TeacherControl from './Teachers/TeacherControl'
import TeacherDetails from './Teachers/TeacherDetails'
import StudentConsult from './Teachers/StudentConsult'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>

      {/* <Routes>

      </Routes>
      */}
      
      <Routes>       
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/teachers' element={<Teachers />}/>
        <Route path='/modules' element={<Modules />}/>
        <Route path='/EtudiantControl' element={<EtudiantControl />}/>
        <Route path='/Notification' element={<Notification />}/>
        <Route path='/EtudiantDetails' element={<EtudiantDetails />}/>
        <Route path='/EtudiantEdit' element={<EtudiantEdit />}/>
        <Route path='/Justification' element={<Justification />}/>
        <Route path='/TeacherControl' element={<TeacherControl />}/>
        <Route path='/TeacherDetails' element={<TeacherDetails />}/>
        <Route path='/StudentConsult' element={<StudentConsult />}/>

        <Route path='*' element={<Error />} />
      </Routes>
      <Footer/> 
    </Router>
  );
}
export default App;
