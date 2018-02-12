import React from 'react';
import {Route} from 'react-router-dom';
import StudentsView from '../student/StudentsView';
import StudentDetailView from '../student/StudentDetailView';
import LoginScreen from './LoginScreen';
export default () => ((
    <div>
        <Route exact path="/" component={StudentsView}/>
        <Route exact path="/courses" component={() => <p>Course</p>} />
        <Route exact path="/courses/:id" component={() => <p>courses/:id</p>} />
        <Route exact path="/students" component={StudentsView} />
        <Route exact path="/students/:id" component={StudentDetailView} />
        <Route exact path="/lecturers" component={() => <p>lecturers</p>} />
        <Route exact path="/enrolment" component={() => <p>lecturers</p>} />
        <Route exact path="/admin" component={() => <p>lecturers</p>} />
        <Route exact path="/signin" component={(LoginScreen)}/>
    </div>
    ));
