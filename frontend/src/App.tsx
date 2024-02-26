import Home from './Components/Home'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from './Components/Layout';

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
    </Routes>
   </BrowserRouter>
  )
}

export default App