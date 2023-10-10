import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Users from './Components/Users';
import AddUser from './Components/AddUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/AddUser" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
