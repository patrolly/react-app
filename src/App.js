import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Login from "./pages/login/Login";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail/PostDetail";
import Nav from "./components/Nav/Nav";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Posts />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/post/:id" element={<PostDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
