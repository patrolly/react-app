import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import Login from "./pages/Login/Login";
import Posts from "./pages/Posts";
function App() {

  
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Posts/>}></Route>
    <Route path="/posts" element={<Posts/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
