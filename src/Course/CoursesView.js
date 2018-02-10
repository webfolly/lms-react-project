import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CourseCard from "./CourseCard";
import CourseDetailView from "./CourseDetailView";


export default class CoursesView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'container-fluid'}>
              <CourseCard />
            </div>
        )
    }
}