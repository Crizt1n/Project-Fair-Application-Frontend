import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import Footer from './components/Footer';
import Auth from './components/Auth';

function App() {
  return (
    <div>

      <Routes>

        <Route path='/' element={<Home/>}/>

        <Route path='/login' element={<Auth/>}/>

        <Route path='/register' element={<Auth register/>}/>  {/* path rendering */}

        <Route path='/dashboard' element={<Dashboard Dashboard/>}/>

        <Route path='/project' element={<Project/>}/>

      </Routes>
    

      <Footer/>

    </div>
  );
}

export default App;
