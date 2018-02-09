import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CourseDetailView from "./CourseDetailView";
import avatar from '../images/course.jpg';
import avatar2 from '../images/course2.jpg';

export default class CoursessView extends Component {
    render() {
        return (
            <div className='col-sm-12 col-md-12 col-lg-12'>
                <div className='col-sm-3 col-md-3 col-lg-3'>
                    <div className="card" style={{width: '100%'}}>
                        <img src={avatar} alt="course" style={{width: '100%'}}/>
                        <div className="container"> 
                            <h4><b>Front End Course</b></h4>
                            <div>Learn React with us.</div>
                            <p><Link to="/courses">Details</Link></p>
                        </div>
                     </div> 
                </div>       
                <div className='col-sm-3 col-md-3 col-lg-3'>
                    <div className="card" style={{width: '100%'}}>
                        <img src={avatar2} alt="course2" style={{width: '100%'}}/>
                        <div className="container"> 
                            <h4><b>Back End Course</b></h4>
                            <div>Learn .Net with us.</div>
                            <p><Link to="/courses">Details</Link></p>
                        </div>
                     </div>                  
                </div>
            </div>
        );
    }
}