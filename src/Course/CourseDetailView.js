import React, {Component} from 'react';
import CoursesView from './CoursesView';
import CourseCard from './CourseCard';
import avatar from '../images/course.jpg';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class CourseDetailView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.match.params.id
        }
    }

    render(){
        return (
            <div className="tab-content">
            <div id="Summery" className="tab-pane fade in active">
                <div className="table-responsive panel">
                    <table className="table">
                        <tbody>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-user"></i> Full Name
                            </td>
                            <td>Viddhyut Mall</td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-list-ol"></i> Scholar Number
                            </td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-book"></i> Medium
                            </td>
                            <td>English</td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-group"></i> className &amp; Section
                            </td>
                            <td>12-F</td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-calendar"></i> Birthday
                            </td>
                            <td>December 2, 2011</td>
                        </tr>

                        <tr>
                            <td className="text-success"><i
                                className="fa fa-university"></i> School
                            </td>
                            <td>
                                Shyama Mall Girls Inter College
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>   
            </div>           
        )
    }
}