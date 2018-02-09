import React from 'react';
import {Route} from 'react-router-dom';
import StudentsView from '../Student/StudentsView';
import StudentDetailView from '../Student/StudentDetailView';


export default () => ((
    <div>
        <Route exact path="/" component={() => <p>Home</p> } />
        <Route exact path="/courses" component={() => <p>Course</p>} />
        <Route exact path="/courses/:id" component={() => <p>courses/:id</p>} />
        <Route exact path="/students" component={StudentsView} />
        <Route exact path="/students/detail/:id" component={StudentDetailView} />
        <Route exact path="/lecturers" component={() => <p>lecturers</p>} />
        <Route exact path="/signin" component={() => <p>signin</p>} />
    </div>
    ));
