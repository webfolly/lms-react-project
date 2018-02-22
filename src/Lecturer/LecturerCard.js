import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class LecturerCard extends Component {
    render() {
        
    
    const lecturers = this.props.lecturer;
        console.log(this.props.lecturer.id);
    return (
        <div className='lecturercard'>
                <div className='image'>
                    <img src='../img/img_avatar2.png' alt="Avatar" />
                </div>
                <div className='container'>
                    <ul>

                        <li>
                            {`${lecturers.name}`}
                        </li>
                        <li>
                            {`${lecturers.id}`}
                        </li>
                        {/* <li>
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
                        </li> */}
                        <li className='occupation'>
                            <Link to={'/lecturers/detail/view/'+this.props.lecturer.id}>Details</Link>
                        </li>

                    </ul>
                    <div className="btn-group">
                        <button className="btn-circle" value={lecturers.id} title="Delete" onClick={this.onClick}> <i className="fa fa-times"></i></button>
                        <Link to={`/lecturers/detail/edit/${lecturers.id}`}> <button className="btn-circle" title="Edit"> <i className="fa fa-edit"></i></button> </Link>
                    </div>
                </div>    

        </div>
    );
}

}