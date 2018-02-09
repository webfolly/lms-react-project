import React from 'react';
import {Route} from 'react-router-dom';
import CoursesView from "../Course/CoursesView";
import CourseDetailView from "../Course/CourseDetailView";

export default () => ((
    <div>
        <Route exact path="/" component={() => <p>Home</p> } />
        <Route exact path="/courses" component={CoursesView} />
        <Route exact path="/courses/:id" component={CourseDetailView}/>
        <Route exact path="/students" component={() => <p>students</p>} />
        <Route exact path="/lecturers" component={() => <p>lecturers</p>} />
        <Route exact path="/signin" component={() => <p>signin</p>} />
    </div>
    ));
