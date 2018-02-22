import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import CoursesView from "../Course/CoursesView";
import CourseDetailView from "../Course/CourseDetailView";
import StudentsView from '../Student/StudentsView';
import StudentDetailView from '../Student/StudentDetailView';
import LecturerDetailView from '../Lecturer/LecturerDetailView';
import Dashboard from './Home';
import LecturersView from '../Lecturer/LecturersView';
import SignIn from './SignIn';
import Enrollment from '../Enrollment/Enrollment';
import sideNav from '../App/SideNav';
import {isLoggedIn} from '../api/auth';

const ProtectedRoute = ({component:Privatecomponent, ...rest}) => <Route {...rest} render = { props => 
    isLoggedIn() ? <Privatecomponent {...props} /> : <Redirect to={{pathname:'/',state:{from:props.location}}}/>
    }/>;    
const routes = [
    {
        exact:true,
        path:"/dashboard",
        sideNav:sideNav,
        main:Dashboard
    },
    {
        exact:true,
        path:"/courses",
        sideNav:sideNav,
        main:CoursesView
    },
    {
        exact:true,
        path:"/courses/detail/:id",
        sideNav:sideNav,
        main:CourseDetailView
    },
    {
        exact:true,
        path:"/courses/detail/:action/:id",
        sideNav:sideNav,
        main:CourseDetailView
    },
    {
        exact:true,
        path:"/students",
        sideNav:sideNav,
        main:StudentsView
    },
    {
        exact:true,
        path:"/students/detail/:action/:id",
        sideNav:sideNav,
        main:StudentDetailView
    },
    {
        exact:true,
        path:"/lecturers/detail/:action/:id",
        sideNav:sideNav,
        main:LecturerDetailView
    },
    {
        exact:true,
        path:"/lecturers",
        sideNav:sideNav,
        main:LecturersView
    },
    {
        exact:true,
        path:"/enrolment",
        sideNav:sideNav,
        main:Enrollment
    },
    {
        exact:true,
        path:"/enrolment/:id",
        sideNav:sideNav,
        main:Enrollment
    },
    {
        exact:true,
        path:"/admin",
        sideNav:sideNav,
        main:() => <p>admin</p>
    }
];
export default () => ((
    <div>
        <Route exact path="/" component={SignIn}/>
        {routes.map((route,index) => (
            <ProtectedRoute key={index} exact={route.exact} path={route.path} component={route.sideNav} />
        ))}
        <main className="wf-container">
            { routes.map((route,index) => (
                <ProtectedRoute key={index} exact={route.exact} path={route.path} component={route.main}/> 
            ))}
        </main>
    </div>
));