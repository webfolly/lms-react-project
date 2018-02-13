import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CourseDetailView from "./CourseDetailView";
import avatar from '../images/course.jpg';
import '../styles';


export default function CourseCard(props) {
    const course = props.course;
    return (
        <div className='student-item'>
        <span className="hover-border"></span>
            <div className='itemProfile'>
                <h4>{`${course.name}`}</h4>
                <div> 
                    <span><img src={avatar} alt="course" style={{width: 120, l1:"student-view-avatar",l2:"student-view-avatar-wrapper",l3:"student-view-avatar-image"}}/></span>
                    <span><strong>Course ID:</strong> {course.id} </span>
                    <span><strong>Course:</strong> {course.name} </span>
                    <span><strong>Description:</strong> {course.desc} </span>
                    <span><Link to={`/courses/detail/${course.id}`}>Details</Link></span>
                </div>
            </div>   
        </div>
    );
}