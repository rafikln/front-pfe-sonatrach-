import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./page/login";
import Singup from "./page/singup";
import Ajouter from "./page/ajouter";
import { useEffect } from "react";
function App() {
  const [mylist, setmylist] = useState([]);
  const [user,setuser]=useState({ss:"rfrrfrf"});

  
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login  setuser={setuser}   user={user} />} />
        <Route path="/sing-up" element={<Singup />} />
        <Route path="/ajouter" element={<Ajouter mylist={mylist} setmylist={setmylist} />} />
      </Routes>
      <p>
        {
          Object.keys(user).length
  } 
      </p>
    </>
  );
}

export default App;
