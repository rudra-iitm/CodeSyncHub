import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Components/Layout';
import Editor from './Components/Editor';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout/>}>
       <Route index element={<Home/>} />
         {/* <Route path="todo" element={<Todo/>} />
         <Route path="sign-up" element={<Register/>} />
         <Route path="sign-in" element={!access_token ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="sent-reset-link" element={<ForgetPass/>} /> */}
       </Route>
      <Route path="/editor" element={<Editor/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App