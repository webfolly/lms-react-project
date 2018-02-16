import React, {Component} from 'react';
import CoursesView from './CoursesView';
import {Link} from 'react-router-dom';
import {Spinner} from '../UI/UIComponents';
import {fetchCourse,deleteCourse} from '../api/course';

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
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
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

    handleChange(e) {
        e.preventDefault();
        this.setState({isLoading: true});
        const {name,value} = e.target;
        if(!this.state.isEditing){
            return;
        } else {
            this.setState({course:{...this.state.course,[name]:value}});
        }

    }

    DeleteCourseById(id) {
        this.setState({isLoading:true});
        deleteCourse(id)
            .then(response => { if(response.status===200) this.setState({isLoading:false})})
            .catch(error => this.setState({error}));
    }

    handleClick(event){
        const name = event.target.name;
        const value = event.target.value;
        console.log(value);
        event.preventDefault();
        if(window.confirm(`Course will be deleted.Confirm to continue..`)) {
            this.DeleteCourseById(value);
        } 
    }

    render() {
        function DetailsView(props) {
            let course = props.course;
            return (
                <div className="tab-content">
                    <div id="Summary" className="tab-pane fade in active">
                        <div className="table-responsive panel">
                            <form action="#">
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td className="text-success" name="id" value={course.id}><i
                                        className="fa fa-group"></i> Course ID
                                    </td>
                                    <td>{course.id}</td>
                                </tr>
                                <tr>
                                    <td className="text-success" name="name" value={course.name}><i
                                        className="fa fa-group"></i> Course Name
                                    </td>
                                    <td>{course.name}</td>
                                </tr>
                                <tr>
                                    <td className="text-success" name="desc" value={course.desc}><i
                                        className="fa fa-group"></i> Description
                                    </td>
                                    <td>{course.desc}</td>
                                </tr>
                                <tr>
                                    <td className="text-success" name="statrDate" value=""><i
                                        className="fa fa-calendar"></i> Start Date
                                    </td>
                                    <td>2017.10.12</td>
                                </tr>
                                <tr>
                                    <td className="text-success" name="endDate" value=""><i
                                        className="fa fa-calendar"></i> End Date
                                    </td>
                                    <td>2018.10.12</td>
                                </tr>
                                <tr>
                                    <button onClick={e => this.handleClick(e)} className="btn-square"><i className="fa fa-minus"></i></button>
                                    <Link to={`/courses/detail/edit/${course.id}`}> <button className="btn-circle"> <i className="fa fa-edit"></i></button> </Link>
                                </tr>
                                </tbody>
                            </table>
                            </form>
                        </div>   
                    </div>  
                </div>         
            )
    }   

    if(this.state.isLoading) {
        return <Spinner />
    } else {
        return (
             <div>
                <DetailsView course={this.state.course}/>
                <div>
                    <Link className='btn btn-info' to={'/courses'}>Back</Link>
                </div>
            </div>
        )}
    }
}