import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CourseCard from "./CourseCard";
import CourseDetailView from "./CourseDetailView";
import axios from "axios";

export default class CoursesView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            courses: [
                {
                id: 1,
                name: `React 101`,
                description: `Learn React with us.`
                },
                {
                id: 2,
                name: `React 201`,
                description: `Learn`
                }
            ]
        };
    }

    //loadCourses() {
    //    this.setState({isLoading: true});
    //    axios.get('/api/courses')
    //        .then(response => {
    //            this.setState({
    //
    //            });
    //        });
    //}

    //componentWillMount() {
    //    this.loadCourses();
    //}

    render() {

        return (
            <div className={'container-fluid'}>
                <div className='row'>
                    <div className='pull-right'>
                        <Link className='btn btn-success' to={`/courses/detail/create/0`} >+ Create</Link>
                    </div>
                    {this.state.courses.map(course => <CourseCard key={course.id} course={course}/>)}
                </div>
            </div>
        )
    }
}
