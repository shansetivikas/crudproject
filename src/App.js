import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListView from './components/ListView/ListView';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users, setUsers] = useState([
    {name: 'Raj', email:'raj@gmail.com'},
    {name: 'Ravi', email: 'ravi@gmail.com'}
  ]);
  return (
    <>
      <Router>
        <Routes>
           <Route path="/" element={<ListView   users={users}/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
