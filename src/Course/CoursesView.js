<<<<<<< HEAD
import React from 'react';
import { fetchCourses } from '../api/course';
import CoursesCard from 'CoursesCard';
=======
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CourseCard from "./CourseCard";
import CourseDetailView from "./CourseDetailView";
import axios from "axios";

>>>>>>> master
export default class CoursesView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
            course: [{
                id: 1,
                name: 'React 101',
                description: 'Learn'
            },{

            }]
        }
    }

    componentWillMount() {
        fetchCourses()
        .then()
        .catch(error => {
            this.setState({error})
        })

    }

    loadCourses() {

    }

    render() {
        if(this.state.error) {
            return <span>Some error </span>
        }
        this.state.courses.map(course => <CoursesCard />)
    }
}
=======
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
                    {this.state.courses.map(course => <CourseCard key={course.id} course={course}/>)}
                </div>
            </div>
        )
    }
}
>>>>>>> master
