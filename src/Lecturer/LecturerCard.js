import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LecturerDetailView from "./LecturerDetailView";
import {avatar} from '../images/img_avatar2.png';

export default class LecturerCard extends Component {
    render() {
        
    
    const lecturers = this.props.lecturer;
        console.log(this.props.lecturer.id);
    return (
        <div className='lecturercard'>
                <div className='image'>
                    <img src={avatar} alt="Avatar" />
                </div>
                <div className='container'>
                    <ul>

                        <li>
                            {`${lecturers.name}`}
                        </li>
                        <li>
                            {`${lecturers.id}`}
                        </li>
                        <li>
                            {`${lecturers.occupation}`}
                        </li>
                        <li>
                            {`${lecturers.school}`}
                        </li>
                        <li>
                            {`${lecturers.faculty}`}
                        </li>
                        <li>
                            {`${lecturers.phone}`}
                        </li>
                        <li>
                            {`${lecturers.email}`}
                        </li>
                        <li className='occupation'>
                            <Link to={'/lecturers/detail/view/'+this.props.lecturer.id}>Details</Link>
                        </li>

                    </ul>
                </div>    

        </div>
    );
}

}