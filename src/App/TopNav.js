import React from 'react';
import '../styles';
import {IconButtonGroup} from '../UI/UIComponents';
import { Link } from 'react-router-dom';

export default function TopNav(props) {
    return(
         <div className="topnav topnav-fixed">
            <div className="searchbar">
            <form action="#" onSubmit={event => props.onSubmit(event)}>
                <div className="input-group">
                    <input type="text" name="searchString" value={props.value} placeholder="Search..." onChange={props.onInputChange}/>
                    <button className="input-group-btn"> <i className="fa fa-search"></i></button>
                </div>
                <div className="radio-group">
                    <label htmlFor="idChecked">Search By  </label>
                    <input type="radio" name="idChecked"  value="id" onChange={props.onInputChange} checked={props.idChecked}/><span>ID</span>
                    <input type="radio" name="idChecked"  value="name" onChange={props.onInputChange} checked={!props.idChecked}/><span>Name</span> 
                </div>
            </form>
            </div>
            <Link to={'/students/create'}> <IconButtonGroup divClassName="topnav-btn-group" btnClassName="btn-square" iClassName={["fa fa-plus"]}/></Link>
        </div>
    );
}