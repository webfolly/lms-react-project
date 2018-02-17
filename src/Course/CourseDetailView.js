import React from 'react';
import {Link} from 'react-router-dom';
import {Spinner} from '../UI/UIComponents';
import {fetchCourse, createCourse, updateCourse} from '../api/course';
import '../styles';

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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleClick(e){
        e.preventDefault();
        this.setState({isEditing:true});
    }

    handleChange(e) {
        const {name,value} = e.target;
        if(!this.state.isEditing){
            return;
        } else {
            this.setState({course:{...this.state.course,[name]:value}});
        }
    }

    handleSubmit(e) {
        console.log(this.state);
        this.setState({isSaving:true});
        const {course} = this.state;
        if(this.isNew()) {
            createCourse(course)
                .then(response => {if(response.status===200) this.setState({isSaving:false,course})});
        } else {
            updateCourse(course.id,course)
                .then(response => {if(response.status===200) this.setState({isSaving:false,isEditing:false, course})});
        }
        e.preventDefault();
    }
    
    componentDidMount() {
        const {id, action} = this.props.match.params;
        if(this.isNew()) {
            this.setState({course:{},isEditing:true});
            return;
        } else {
            if (action === 'edit') {
                this.setState({isEditing: true});
            }
            this.getCoursesById(id);
        }
    }

    render() {
        if(this.state.isLoading) {
            return <Spinner />
        } else {
            return (
                <div>
                    {this.state.isEditing ? <DetailsEdit course={this.state.course} onChange={this.handleChange} onSubmit={this.handleSubmit} onClick={this.handleClick}/> : <DetailsView course={this.state.course} />}
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
                            <td className="text-success" name="name" value={course.name}><i
                                className="fa fa-list-ol"></i> Course ID
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
                <div>
                    <Link className='btn btn-info' to={'/courses'}>Back</Link>
                </div>
            </div>  
        </div>         
    )
}   

function Input (props){
    return(
        <div className="input-wrapper">
            <label htmlFor={props.htmlFor}>{props.labelText}</label>
            <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} />
        </div>
    );
}

function DetailsEdit(props) {
    let course = props.course;
    return (
        <div className="tab-content">
            <div id="Summary" className="tab-pane fade in active">
            <form className="table" onSubmit={props.onSubmit}>
                <div className="table-responsive panel">
                   
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-list-ol"></i> Course ID
                            </td>
                            <td><Input value={course.id} onChange={props.onChange}/></td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-book"></i> Course Name
                            </td>
                            <td><Input name="name" value={course.name} onChange={props.onChange}/></td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-book"></i> Description
                            </td>
                            <td><Input name="descripton" value={course.descripton} onChange={props.onChange}/></td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-list-ol"></i> Credit Point
                            </td>
                            <td><Input name="creditPoint" value={course.creditPoint} onChange={props.onChange}/></td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-group"></i> Attendance
                            </td>
                            <td><Input name="attendance" value={course.attendance} onChange={props.onChange}/></td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-calendar"></i> Duration
                            </td>
                            <td><Input name="duration" value={course.duration} onChange={props.onChange}/></td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-calendar"></i> Start Date
                            </td>
                            <td><Input name="startDate" value={course.startDate} onChange={props.onChange}/></td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-calendar"></i> End Date
                            </td>
                            <td><Input name="endDate" value={course.endDate} onChange={props.onChange}/></td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-university"></i> Campus
                            </td>
                            <td><Input name="campus" value={course.campus} onChange={props.onChange}/></td>
                        </tr>
                </div>  
                <div>
                    <input className='btn btn-success' type={'submit'} value={'Save'} onChange={props.onChange} />
                    <Link className='btn btn-info' to={'/courses'}>Back</Link>
                </div> 
                </form>
                
            </div>  
        </div>               
    )
}   