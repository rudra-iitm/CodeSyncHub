import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Components/Layout';
import Editor from './Components/Editor';
import Register from './Components/Register';
import Login from './Components/Login';
import ProjectChoos from './Components/ProjectChoos';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout/>}>
       <Route index element={<Home/>} />
       </Route>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/project" element={<ProjectChoos/>} />
        <Route path="/editor" element={<Editor/>} />
      <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App