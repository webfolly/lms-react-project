/*import React from 'react';
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
*/
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles';

export default function TopNav(props) {
    return(
      <div className="topnav topnav-fixed">
          <div className="searchbar">
            <form action="#" onSubmit={event => props.onSubmit(event)}>
                <div className="wf-input-group">
                    <input type="text" name="searchString" value={props.value} placeholder="Search..." onChange={props.onInputChange}/>
                    <button className="wf-input-group-btn"> <i className="fa fa-search"></i></button>
                </div>
                <div className="wf-radio-group">
                    <label htmlFor="idChecked">Search By  </label>
                    <input type="radio" name="idChecked"  value="id" onChange={props.onInputChange} checked={props.idChecked}/><span>ID</span>
                    <input type="radio" name="idChecked"  value="name" onChange={props.onInputChange} checked={!props.idChecked}/><span>Name</span> 
                </div>
           </form>
          </div>
			    <div className="topnav-btn-group">
				    <Link to={'/students/detail/create'}> <button className="btn-square"><i className="fa fa-plus"></i></button> </Link>
			    </div>
      </div>
    );
}