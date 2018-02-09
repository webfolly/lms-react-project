import React from 'react';
import {Link} from 'react-router-dom';
import logonav from '../images/logo.jpeg';

export default function TopNav() {
    return (
       <nav className="navbar navbar-inverse navbar-fixed-top jr-top-nav">
       <div className="container">
         <div className="navbar-header">
           <button
             type="button"
             className="navbar-toggle collapsed"
             data-toggle="collapse"
             data-target="#navbar"
             aria-expanded="false"
             aria-controls="navbar"
           >
             <span className="sr-only">Toggle navigation</span>
             <span className="icon-bar" />
             <span className="icon-bar" />
             <span className="icon-bar" />
           </button>
           <Link to="/" className="navbar-brand">
             <img src={logonav} style={{height:30,paddingBottom:10}} alt="logo"/>
           </Link>
         </div>
         <div id="navbar" className="navbar-collapse collapse">
           <ul className="nav navbar-nav">
             <li>
               <Link to="/courses">Courses</Link>
             </li>
             <li>
               <Link to="/students">Students</Link>
             </li>
             <li>
               <Link to="/lecturers">Lecturers</Link>
             </li>
           </ul>
         </div>
       </div>
     </nav>
    );
}