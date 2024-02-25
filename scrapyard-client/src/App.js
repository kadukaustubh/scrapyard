import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import CreateNote from './components/CreateNote/CreateNote';
import EditNote from './components/EditNote/EditNote';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/add' element={<CreateNote />}></Route>
        <Route path='/edit/:id' element={<EditNote />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
