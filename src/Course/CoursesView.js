import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CourseCard from "./CourseCard";
import CourseDetailView from "./CourseDetailView";
import axios from "axios";
import '../styles';
import {fetchCourses} from '../api/course';


export default class CoursesView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            courses: []
        };
    }

    loadCourses(){
        this.setState({isLoading:true});
        fetchCourses()
            .then(response => this.setState({courses:response.data,isLoading:false}))
    }


    componentWillMount() {
        this.loadCourses();
    }

    render() {
        let courses= this.props.courses;
        return (
            <div className={'container-fluid'}>
                <div className='row'>
                    <div className='pull-right'>
                        <Link className='btn btn-success' to={`/courses/detail/create/0`} >+ Create</Link>
                    </div>
                </div>
                    {this.state.courses.map(course => <CourseCard key={course.id} course={course}/>)}
            </div>
        )
    }
}
