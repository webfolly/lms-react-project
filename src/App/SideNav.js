import React from 'react';
import {Link} from 'react-router-dom';

export default function SideNav(props) {
    return (
       <nav className="navbar navbar-fixed-left">
           <div className="navbar-header">
                <div className="navbar-brand">
                    <p>LMS</p>
                </div>
           </div>
            <div className="navbar-block">
                <div className="user-profile">
                    <div className="imgwrapper">
                        <img src="./img/Zuckerberg.png" alt=""/>
                    </div>
                    <div className="user-info">
                        <p>Zuckerberg</p>
                        <div>CEO</div>
                    </div>
                </div>
            </div>
            <div id="navbar" className="main-menu">
                <ul className="menu-list">
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/courses">Course Management</Link>
                    </li>
                    <li>
                        <Link to="/students">Student Management</Link>
                    </li>
                    <li>
                        <Link to="/lecturers">Lecturer Management</Link>
                    </li>
                    <li>
                        <Link to="/enrolment">Enrolment</Link>
                    </li>
                    <li>
                        <Link to="/admin"> Admin</Link>
                    </li>
                    <li>
                        <Link to="/signin">Logout</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-footer">
                <div className="footer-content">
                    <div>
                        <span>About</span> 
                        <span>Help</span> 
                        <span>Contact</span> 
                    </div>
                    <div className="copyright">Copyright &copy; 2018 Webfolly</div>
                </div>
            </div>
     </nav>
    );
}