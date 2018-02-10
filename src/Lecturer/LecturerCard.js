import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LecturerDetailView from "./LecturerDetailView";
import avatar from '../images/img_avatar2.png';

import LecturerView from "./LecturersView";

export default function LecturerCard(props) {
    const lecturers = props.match.params.id;

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
