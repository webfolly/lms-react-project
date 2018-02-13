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

    render(){
        const {isLoading, isEditing, course} = this.state;
        if (isLoading) {
            return <h3>Loading details...</h3>;
        }
        
        //return isEditing ?
        // this.renderForm(course) : this.renderDisplay(course)
            
        return (
            <div className="tab-content">
            <div id="Summary" className="tab-pane fade in active">
                <div className="table-responsive panel">
                    <table className="table">
                        <tbody>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-group"></i> Course ID
                            </td>
                            <td>{this.state.id}</td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-group"></i> Course Name
                            </td>
                            <td>{this.state.name}</td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-group"></i> Description
                            </td>
                            <td>{this.state.desc}</td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-calendar"></i> Start Date
                            </td>
                            <td>2017.10.12</td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-calendar"></i> End Date
                            </td>
                            <td>2018.10.12</td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-edit"></i> Edit
                            </td>
                            <td>
                                <Link to="/courses/create" className="btn btn-lg btn-primary" >Add new course</Link>
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
