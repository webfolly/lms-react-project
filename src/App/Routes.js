import React from 'react';
import {Route} from 'react-router-dom';
import CoursesView from "../Course/CoursesView";
import CourseDetailView from "../Course/CourseDetailView";
import StudentsView from '../Student/StudentsView';
import StudentDetailView from '../Student/StudentDetailView';
import Home from './Home';

export default () => ((
    <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/courses" component={CoursesView}/>
        <Route exact path="/courses/:id" component={CourseDetailView}/>
        <Route exact path="/students" component={StudentsView}/>
        <Route exact path="/students/detail/:id" component={StudentDetailView}/>
        <Route exact path="/lecturers" component={() => <p>lecturers</p>}/>
        <Route exact path="/signin" component={() => <p>signin</p>}/>
    </div>
));
