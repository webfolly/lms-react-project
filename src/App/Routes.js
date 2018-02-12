import React from 'react';
import {Route} from 'react-router-dom';
import CoursesView from "../Course/CoursesView";
import CourseDetailView from "../Course/CourseDetailView";
import StudentsView from '../Student/StudentsView';
import StudentDetailView from '../Student/StudentDetailView';
import LecturerDetailView from '../Lecturer/LecturerDetailView';
import LecturerView from '../Lecturer/LecturersView';

import Home from './Home';
import LecturersView from '../Lecturer/LecturersView';

export default () => ((
    <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/courses" component={CoursesView}/>
        <Route exact path="/courses/detail/:id" component={CourseDetailView}/>

        <Route exact path="/students" component={StudentsView}/>
        <Route exact path="/students/detail/:action/:id" component={StudentDetailView}/>
        <Route exact path="/lecturers/detail/:id" component={LecturerDetailView} />

        <Route exact path="/lecturers" component={LecturersView}/>
        <Route exact path="/signin" component={() => <p>signin</p>}/>

    </div>
));
