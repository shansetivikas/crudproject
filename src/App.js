import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListView from './components/ListView/ListView';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddList from './components/AddList/AddList';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
      setUsers([...users, {...user} ])
  }

  return (
    <>
      <Router>
        <Routes>
           <Route path="/" element={<ListView   users={users}/>}></Route>
           <Route path="/add" element={<AddList   users={users} addUser={addUser}/>}></Route>
           <Route path="/edit/:id" element={<AddList   users={users} addUser={addUser}/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
