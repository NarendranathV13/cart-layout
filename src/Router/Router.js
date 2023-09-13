import React,{useState,useEffect} from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home";
import Navbar1 from "../Components/Navbar/Navbar1";
import ProtectedRouter from "./Protectedrouter";

const Router = ({auth}) =>{
    const [isAuth, setAuth] = useState(localStorage.getItem("isAuth"))
    useEffect(() => {
        auth(isAuth)
    }, [isAuth])
    return(
        <>
        {isAuth == "true" ? <Navbar1 auth={setAuth} /> : null}
          <Routes>
                <Route path="/Login" index element={<Login auth={setAuth} />} />
                <Route path="Register" element={<Register />} />
                <Route path="/" element={<ProtectedRouter auth={localStorage.getItem("isAuth")} />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </>
    )
}
export default Router
