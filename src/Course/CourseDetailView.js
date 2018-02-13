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

    render() {
        return (<DetailsTabs/>)
    }
}