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
				    <Link to={'/students/detail/create/0'}> <button className="btn-square" title="Create New Student"><i className="fa fa-plus"></i></button> </Link>
			    </div>
      </div>
    );
}