import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Components/Layout';
import Editor from './Components/Editor';
import Register from './Components/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout/>}>
       <Route index element={<Home/>} />
       <Route path="register" element={<Register/>} />
         {/* <Route path="todo" element={<Todo/>} />
         <Route path="sign-in" element={!access_token ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="sent-reset-link" element={<ForgetPass/>} /> */}
       </Route>
      <Route path="/editor" element={<Editor/>} />
      <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App