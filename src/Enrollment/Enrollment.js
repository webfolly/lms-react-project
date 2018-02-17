import React from 'react';
import {enrollCourse} from '../api/enroll';
import {fetchStudent} from '../api/student';
import {fetchCourses} from '../api/course';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Enrollment extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            student:{},
            courses:[],
            courseToEnroll:'',
            error:null,
            isSaving:false,
            ischecked:false,
            searchString:''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleClick(e){
        let id = this.state.searchString;
        e.preventDefault();
        fetchStudent(id)
            .then(response => this.setState({student:response.data}))
            .then(error => this.setState({error}));

    }
    handleChange(e){
        const {name,value} = e.target;
        this.setState({[name]:value});
    }
    handleSubmit(e){
        this.setState({isSaving:true});
        const {student,courseToEnroll} = this.state;
        enrollCourse(student.id,courseToEnroll)
            .then(repsonse => this.setState({isSaving:false}))
            .catch(error => this.setState({error}));
    }
    isNew(){
        const {id} = this.props.match.params;
        return id === 'new';
    }
    componentDidMount(){
        const {id} = this.props.match.params;
        if(!this.isNew()){
            axios.all([fetchStudent(id),fetchCourses()])
                .then(axios.spread((student,courses) => this.setState({student:student.data,courses:courses.data})))
                .then(error => this.setState({error}));
        }
        fetchCourses()
            .then(repsonse => this.setState({courses:repsonse.data}))
            .then(error => this.setState({error}));
    }
    render(){
        if(this.state.error) {
            return <p>something error </p>
        } else {
            return(
                <div>
                    <Searchbar value={this.state.searchString} onChange={this.handleChange} onClick={this.handleClick}/>
                    <form action="" onSubmit={this.handleSubmit} style={{marginTop:70,marginLeft:20,marginRight:20}}>
                        <StudentInfo student={this.state.student}/>
                        <hr/>
                        <CourseInfo courses={this.state.courses} onChange={this.handleChange}/>
                        <br/>
                        <br/>
                        <button className="btn btn-success" style={{marginRight:20}}>Submit</button>
                        <Link to={'/'}><button className="btn btn-success">Back</button> </Link>
                    </form>
                </div>
            );
        }
    }
}

function StudentInfo (props){
    const student = props.student;
    return(
        <div>
            <h3>Student Information</h3>
            <table className="table table-hover" style={{marginTop:10}}>
                <thead>
                    <tr>
                        <th style={{padding:13}}>Student_ID</th>
                        <th style={{padding:13}}>Full Name</th>
                        <th style={{padding:13}}>Country</th>
                        <th style={{padding:13}}>email</th>
                        <th style={{padding:13}}>Maximum Credit Points</th>
                        <th style={{padding:13}}>Current Credit Points</th>
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <td>{student.id}</td>
                    <td>{student.firstName} {student.lastName}</td>
                    <td>{student.country}</td>
                    <td>{student.email}</td>
                    <td>{student.maxCredit}</td>
                    <td>{student.creditsAchieved}</td>
                </tr>
                <tr>
                    <th style={{borderTop:'none'}}> Course Enrolled</th>
                </tr>
                <tr>
                {student.enrolments ? (student.enrolments.map(item => <td key={item.course.id}>{item.course.name}</td>)):null}
                </tr>
            </tbody>
                </table>
        </div>
    );
}
function CourseInfo(props){
    let courses = props.courses.map( item => {
        return(
        <div className="radio" key={item.id}>
            <label htmlFor="course">
            <input type='radio' name='courseToEnroll' value={item.id} onChange={props.onChange} />{item.name} </label>
        </div>);
        }
    );
    return (
        <div>
            <h3>Courses to Enroll</h3>
            {courses}
        </div>
    );
}
function Searchbar(props) {
    return(
         <div className="topnav topnav-fixed">
            <div className="searchbar">
            <form action="#">
                <div className="wf-input-group">
                    <input type="text" name="searchString" value={props.value} placeholder="Search..." onChange={props.onChange}/>
                    <button className="wf-input-group-btn" onClick={props.onClick}> <i className="fa fa-search"></i></button>
                </div>
                <div className="wf-radio-group">
                    <label htmlFor="idChecked" style={{marginTop:3}}>Search Student_ID to Enroll: </label>
                </div>
            </form>
            </div>
        </div>
    );
}