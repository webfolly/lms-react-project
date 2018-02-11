import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LecturerDetailView from "./LecturerDetailView";
import avatar from '../images/img_avatar2.png';

export default class LecturerCard extends Component {
    render() {
        
    
    const lecturers = this.props.lecturer;
        console.log(lecturers);
    return (
        <div className='card' sytle={{width: '40%'}}>
            <ul className='container' sytle={{width: '50%'}}>
                <li>
                 <img src={avatar} alt="Avatar" />
                </li>
                <li>
                    {`${lecturers.name}`}
                </li>
                <li>
                    {`${lecturers.id}`}
                </li>
                <li>
                    {`${lecturers.occupation}`}
                </li>
                <li className='occupation'>
                    <Link to={'/lecturers/detail/2'}>Details</Link>
                </li>
            
            </ul>
        </div>
    );
}

}