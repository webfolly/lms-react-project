import React from 'react';
import {Route} from 'react-router-dom';

export default () => ((
    <div>
        <Route exact path="/" component={() => <p>Home</p> } />
        <Route exact path="/courses" component={() => <p>Course</p>} />
        <Route exact path="/courses/:id" component={() => <p>courses/:id</p>} />
        <Route exact path="/students" component={() => <p>students</p>} />
        <Route exact path="/lecturers" component={() => <p>lecturers</p>} />
        <Route exact path="/signin" component={() => <p>signin</p>} />
    </div>
    ));
