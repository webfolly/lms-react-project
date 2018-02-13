import React, {Component} from 'react';
import CoursesView from './CoursesView';
import CourseCard from './CourseCard';
import avatar from '../images/course.jpg';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import DetailsTabs from './DetailsTabs';
import {fetchCourses} from '../api/course';

export default class CourseDetailView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isEditing: false,
            isSaving: false,
            error: null,
            course: null
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
        return (<DetailsTabs/>)
    }
}