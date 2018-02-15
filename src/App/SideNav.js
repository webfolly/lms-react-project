import React from 'react';
import {Link} from 'react-router-dom';

export default function SideNav(props) {
    return (
       <nav className="wf-navbar wf-navbar-fixed-left">
           <div className="wf-navbar-header">
                <div className="wf-navbar-brand">
                    <p>LMS</p>
                </div>
           </div>
            <div className="wf-navbar-block">
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
                        <Link to="/enrolment/new">Enrolment</Link>
                    </li>
                    <li>
                        <Link to="/admin"> Admin</Link>
                    </li>
                    <li>
                        <a onClick={props.onClick}>Logout</a>
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