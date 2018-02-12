import React from 'react';
import {Avatar,IconButtonGroup} from '../UI/UIComponents';
 
function StudentProfile(props) {
    let student = props.student;
    return( 
        <div className="itemProfile">
            <h4>{`${student.firstname} ${student.lastname}`}</h4>
            <div> 
                <span> <strong>Student_ID:</strong>  {student.studentID} </span>
                <span> <strong>Country:</strong> {student.nationality} </span>
                <span> <strong>Email Address:</strong> {student.email} </span>
                <span> <strong>Mobile:</strong> {student.mobile} </span>
                <span> <strong>Creidt Points Achieved:</strong> {student.creditAchieved} </span>
            </div>
        </div>
    );     
}
export default function StudentItem(props) {
    let student = props.student;
    return(
        <div className="student-item">
            <span className="hover-border"></span>
            <Avatar src={student.img_url} style={{l1:"student-view-avatar",l2:"student-view-avatar-wrapper",l3:"student-view-avatar-image"}}/>
            <StudentProfile student={student} />
            <IconButtonGroup divClassName="btn-group" btnClassName="btn-circle" iClassName={['fa fa-times','fa fa-edit','fa fa-info']} value={student.studentID} onClick={props.onClick}/> 
        </div>
    );
}
