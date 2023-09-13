import React from 'react';
import {useNavigate,NavLink } from 'react-router-dom';
import '../Navbar/style.css'

const Navbar1 = ({ auth }) => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    const Username = savedData.username;
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.setItem("isAuth", "false");
        console.log("logout", localStorage.getItem("isAuth"));
        navigate("/Login");
        auth("false")
    };
    const handleSignup = () => {
        localStorage.setItem("isAuth", "false");
        console.log(savedData.username)
        navigate("/Register");
        auth("false")
    }
    return (
        <>
            {/* Navbar starts */}
            <nav className="navbar navbar-expand bg-dark navbar-dark sticky-top px-4 py-0">
                <a href="" className="navbar-brand d-flex d-lg-none me-4">
                    <h2 className="text-primary mb-0"><i className="fa fa-user-edit"></i></h2>
                </a>
                <form className="d-none d-md-flex ms-4">
                    <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
                </form>
                <div className="navbar-nav align-items-center ms-auto">
                    <div className="nav-item dropdown">
                        <a href="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-store me-2"></i>
                            <span className="d-none d-lg-inline-flex">Products</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-dark border-0 rounded-0 rounded-bottom m-0">
                            {/* Message items */}
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="" className="nav-link ">
                        <i class="fa-solid fa-cart-shopping  me-2"></i>
                            <span className="d-none d-lg-inline-flex">Cart</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-dark border-0 rounded-0 rounded-bottom m-0">
                            {/* Notification items */}
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <span className="d-none d-lg-inline-flex">{Username}</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-dark border-0 rounded-0 rounded-bottom m-0">
                            <a href="" className="dropdown-item">My Profile</a>
                            <a href="" className="dropdown-item">Settings</a>
                            <button className="dropdown-item " onClick={handleLogout}>
                            <i class="fa-solid fa-arrow-right-to-bracket "></i>
                               <span className="mx-1">Log out</span> 
                            </button>
                        </div>
                    </div>
                    <div className="nav-item">
                        <button  className="nav-link log"  onClick={handleLogout}>
                        <i class="fa-solid fa-right-to-bracket" id="log1"></i>
                        </button>
                    </div>
                </div>
            </nav>
            {/* sidebar starts */}
            <div className="sidebar pe-4 pb-3">
                <nav className="navbar  navbar-dark">
                    <a href="" className="navbar-brand mx-4 mb-3">
                        <h3 className="text-warning"><i class="fa-brands fa-shopify me-2"></i>Shop Cart</h3>
                    </a>
                    <div className="d-flex align-items-center ms-4 mb-4">
                        <div className="position-relative">
                            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                        </div>
                        <div className="ms-3 text-light ">
                            <h6 className="text-light mb-0">{Username}</h6>
                            <span>Admin</span>
                        </div>
                    </div>
                    <div className="navbar-nav m-0 w-100">
                        <NavLink to="/" className="nav-item m-0 nav-link ">
                            <i className="fa fa-tachometer-alt me-2"></i>Dashboard
                        </NavLink>
                        <a href="" className="nav-item nav-link m-0"><i class="fa-solid fa-store me-2"></i>Products</a>
                        <a href="" className="nav-item nav-link m-0"><i class="fa-solid fa-gift me-2"></i>Orders</a>
                        <a href="" className="nav-item nav-link m-0"><i class="fa-solid fa-cart-shopping  me-2"></i>Cart</a>
                        <div className="nav-item dropdown m-0">
                            <a href="" className="nav-link m-0 dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2"></i>Pages</a>
                            <div className="dropdown-menu bg-transparent border-0">
                                <a href="" className="dropdown-item">Sign In</a>
                                <button className="dropdown-item " onClick={handleSignup}>
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Navbar1