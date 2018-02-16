import React, {Component} from 'react';
import CoursesView from './CoursesView';
import {Link} from 'react-router-dom';
import {Spinner} from '../UI/UIComponents';
import {fetchCourse,deleteCourse, createCourse} from '../api/course';

export default class CourseDetailView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isEditing: false,
            isSaving: false,
            error: null,
            course: {}
        };
        this.getCoursesById = this.getCoursesById.bind(this);
    }

    getCoursesById(){
        const {id} = this.props.match.params;
        this.setState({isLoading:true});
        fetchCourse(id)
            .then(response => this.setState({course:response.data,isLoading:false}))
            .catch(error => this.setState({error}));
    }

    isNew(){
        const {id} = this.props.match.params;
        return id === 'create';
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        if(this.isNew()) {
            this.setState({course:{},isEditing:true});
            return;
        } else {
            this.getCoursesById(id);
        }
    }

    render() {
        if(this.state.isLoading) {
            return <Spinner />
        } else {
            return (
                <div>
                    {this.state.isEditing ? <DetailsEdit course={this.state.course} onSubmit={this.handleSubmit}/> : <DetailsView course={this.state.course} />}
                    <div>
                        <Link className='btn btn-info' to={'/courses'}>Back</Link>
                    </div>
                </div>
            )}
        }
}
function DetailsView(props) {
    let course = props.course;
    return (
        <div className="tab-content">
            <div id="Summary" className="tab-pane fade in active">
                <div className="table-responsive panel">
                    <table className="table">
                        <tbody>
                        <tr>
                            <td className="text-success" name="id" value={course.id}><i
                                className="fa list-ol"></i> Course ID
                            </td>
                            <td>{course.id}</td>
                        </tr>
                        <tr>
                            <td className="text-success" name="name" value={course.name}><i
                                className="fa fa-book"></i> Course Name
                            </td>
                            <td>{course.name}</td>
                        </tr>
                        <tr>
                            <td className="text-success" name="desc" value={course.desc}><i
                                className="fa fa-book"></i> Description
                            </td>
                            <td>{course.descripton}</td>
                        </tr>
                        <tr>
                            <td className="text-success" name="desc" value={course.creditPoint}><i
                                className="fa fa-list-ol"></i> Credit Point
                            </td>
                            <td>{course.creditPoint}</td>
                        </tr>
                        <tr>
                            <td className="text-success" name="desc" value={course.attendance}><i
                                className="fa fa-group"></i> Attendance
                            </td>
                            <td>{course.attendance}</td>
                        </tr>
                        <tr>
                            <td className="text-success" name="desc" value={course.duration}><i
                                className="fa fa-calendar"></i> Duration
                            </td>
                            <td>{course.duration}</td>
                        </tr>
                        <tr>
                            <td className="text-success" name="statrDate" value={course.statrDate}><i
                                className="fa fa-calendar"></i> Start Date
                            </td>
                            <td>{course.startDate}</td>
                        </tr>
                        <tr>
                            <td className="text-success" name="endDate" value={course.endDate}><i
                                className="fa fa-calendar"></i> End Date
                            </td>
                            <td>{course.endDate}</td>
                        </tr>
                        <tr>
                            <td className="text-success" name="campus" value={course.campus}><i
                                className="fa fa-university"></i> Campus
                            </td>
                            <td>{course.campus}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>   
            </div>  
        </div>         
    )
}   

function Input (props){
    return(
        <div className="input-wrapper">
            <label className="input-label" htmlFor={props.htmlFor}>{props.labelText}</label>
            <br/>
            <input className="input-component border-bottom" type={props.type} name={props.name} value={props.value} onChange={props.onChange} />
        </div>
    );
}

function DetailsEdit(props) {
    let course = props.course;
    return (
        <div className="tab-content">
            <div id="Summary" className="tab-pane fade in active">
                <div className="table-responsive panel">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        Name:
                        <input type="text" value={course.name} onChange={course.onChange}/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    
                </div>    
            </div>  
        </div>         
    );
}   