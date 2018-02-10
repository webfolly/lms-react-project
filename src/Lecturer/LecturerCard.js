import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LecturerDetailView from "./LecturerDetailView";
import avatar from '../images/img_avatar2.png';

export default class LecturersView extends Component {
    render() {
        return (
            <div className='card' sytle={{width: '40%'}}>
                <ul className='container' sytle={{width: '50%'}}>
                    <li>
                        <img src={avatar} alt="Avatar" />
                    </li>
                    <li className='name'>
                        Lecturer 1
                    </li>
                    <li className='id'>
                        1
                    </li>
                    <li className='occupation'>
                        Professor
                    </li>
                    <li className='occupation'>
                        <Link to={'/lecturers/detail/2'}>Details</Link>
                    </li>
                  
                </ul>
            </div>
        );

    }
}