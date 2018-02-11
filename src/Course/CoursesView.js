import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CourseCard from "./CourseCard";
import CourseDetailView from "./CourseDetailView";

export default class CoursesView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        }
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className={'container-fluid'}>
                <div className='row'>
                    {this.state.courses.map(course => <CourseCard key={course.id} course={course}/>)}
                </div>
            </div>
        )
    }
}