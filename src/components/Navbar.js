import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/user.context';

const Navbar = (props) => {
  const { authData,logout } = useAuth();
  const handleLogout = async () => {
    logout();
    alert("You Have LogOut!!!");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/business">Business</Link></li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link></li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/general">General</Link></li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/health">Health</Link></li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/science">Science</Link></li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/sports">Sports</Link></li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/technology">Technology</Link></li>
                    
                </ul>


              </li>
              <li className='nav-items'>
                <Link className="nav-link navbar-brand" style={{backgroundColor:"#e3f2fd"}} aria-current="page" to="/"> {`Hello ${authData ? authData.name : 'Guest'}`}</Link>
                 
                </li>
              {authData ? (
                <span className='nav-link' onClick={handleLogout}>Log Out</span>
              ) : (
                <>
                  <li className="nav-item justify-content-end">
                    <Link className="nav-link active" aria-current="page" to="/login">Login</Link></li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/signup">Sign Up</Link>
                  </li>
                </>

              )
              }
              


            </ul>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success " type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
};
export default Navbar;

