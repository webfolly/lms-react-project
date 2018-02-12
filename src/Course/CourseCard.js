import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CourseDetailView from "./CourseDetailView";
import avatar from '../images/course.jpg';


export default function CourseCard(props) {
    const course = props.course;
    return (
            <div className='col-sm-3 col-md-3 col-lg-3'>
                <div className="card" style={{width: '100%'}}>
                    <img src={avatar} alt="course" style={{width: '100%', width: '100%', height: '150px'}}/>
                    <div className="container"> 
                        <h4><b>{course.name}</b></h4>
                        <div>{course.description}</div>
                        <p><Link to={`/courses/detail/${course.id}`}>Details</Link></p>
                    </div>
                </div> 
            </div>       
    );
}