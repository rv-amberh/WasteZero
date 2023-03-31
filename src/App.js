import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import SignIn from './pages/signin';

function App() {
  return (
   <Router> 
    <Routes>
      <Route path="/" element={<Home/>} exact/>
      <Route path="/sign-in" element={<SignIn/>} exact/>
      <Route path="/sign-in" element={<SignIn/>} exact/>
    </Routes>
   </Router>
  )
}

export default App;
