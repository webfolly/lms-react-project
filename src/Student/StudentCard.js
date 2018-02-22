import React from 'react';
import {Gravatar} from '../UI/UIComponents';
import {Link} from 'react-router-dom';

function StudentProfile(props) {
    let student = props.student;
    return( 
        <div className="itemProfile">
            <h4>{`${student.firstName} ${student.lastName}`}</h4>
            <div> 
                <span> <strong>Student_ID:</strong>  {student.id} </span>
                <span> <strong>Country:</strong> {student.country} </span>
                <span> <strong>Email Address:</strong> {student.email} </span>
                <span> <strong>Mobile:</strong> {student.mobile} </span>
            </div>
        </div>
    );     
}
export default function StudentItem(props) {
    let student = props.student;
    return(
        <div className="student-item">
            <span className="hover-border"></span>
                <div className="gravatar-wrapper">
                    <Gravatar email={student.email ? (student.email.indexOf('@')===-1 ? 'samzhanganz@gmail.com':student.email):'samzhanganz@gmail.com' } className="image-circle" />
                </div>
            <StudentProfile student={student} />
            <div className="btn-group">
                <button className="btn-circle" value={student.id} title="Delete" onClick={props.onClick}> <i className="fa fa-times"></i></button>
                <Link to={`/students/detail/edit/${student.id}`}> <button className="btn-circle" title="Edit"> <i className="fa fa-edit"></i></button> </Link>
                <Link to={`/enrolment/${student.id}`} ><button className="btn-circle" title="Enrollment"> <i className="fa fa-book"></i></button> </Link>
            </div>
        </div>
    );
}
