import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StudentDetailView from "./LecturerDetailView";


export default class LecturersView extends Component {
    render() {
        return (
            <div className='Lecturer'>
                <ul>
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
                        <Link to={'/students/detail/2'}>Details</Link>
                    </li>
                  
                </ul>
            </div>
        );

    }
}