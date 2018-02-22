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
            .then(
                response => { 
                    if(response.data) {
                        this.setState({student:response.data});
                    } else {
                        alert('Student not found!');
                    }
                }
            )
            .catch(error => this.setState({error}));
    }
    handleChange(e){
        const {name,value} = e.target;
        this.setState({[name]:value});
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({isSaving:true});
        const {student,courseToEnroll} = this.state;
        enrollCourse(student.id,courseToEnroll)
            .then(response => {
                if(response.status === 200) {
                    this.setState({isSaving:false});
                    fetchStudent(this.state.student.id)
                        .then(response => this.setState({student:response.data}))
                        .then(error => this.setState({error}));
                } else {
                    this.setState({isSaving:false});
                    alert(response.status);
                }
            })
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
                .catch(error => this.setState({error}));
        }
        fetchCourses()
            .then(repsonse => this.setState({courses:repsonse.data}))
            //.catch(error => this.setState({error}));
            .catch(e => console.log(e))
    }
    render(){
        if(this.state.error) {
            return <p>Something Error</p>
        } else {
            return(
                <div>
                    <Searchbar value={this.state.searchString} onChange={this.handleChange} onClick={this.handleClick}/>
                    <div className="row" style={{marginLeft:0,marginRight:0}}>
                        <form action="" onSubmit={this.handleSubmit} style={{marginTop:60}}>
                            <div className="row">
                            <StudentInfo student={this.state.student}/>
                            <CourseInfo courses={this.state.courses} onChange={this.handleChange}/>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    }
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
function StudentInfo (props){
    const student = props.student;
    const courseList = student.enrolments ? (student.enrolments.length ? (student.enrolments.map(item => <li key={item.course.id}>{item.course.name}</li>)):'No Course Enrolled'):null
    return(
        <div className="col-md-6 col-sm-12 col-xs-12 card-container">
            <div className="card-header">
                <h4>Student Information</h4>
            </div>
            <div className="card-body">
                <div className="student-info-wrap clearfix">
                    <div className="avatar">
                        <img src="../img/user2.jpg" alt="avatar"/>
                    </div>
                    <div className="student-info">
                        <label className="student-info-title">Name:
                            <input className="student-info-input1" type="text" value={student.lastName ? `${student.firstName} ${student.lastName}` : ''} readOnly/>
                        </label>  
                        <label className="student-info-title">ID:
                            <input className="student-info-input1" type="text" value={student.id} readOnly/>
                        </label>
                    </div>
                </div>
                <br/>
                <div>
                    <label className="student-info-title" htmlFor="fullname"><i className="fa fa-envelope" ></i> Email:
                        <input className="student-info-input2" type="text" value={student.email} readOnly/>
                    </label>
                    <br/>
                    <label className="student-info-title" htmlFor="fullname"><i className="fa fa-phone"></i> Mobile:
                        <input className="student-info-input2" type="text" value={student.mobile} readOnly/>
                    </label>
                    <label className="student-info-title" htmlFor="fullname"><i className="fa fa-paper-plane"></i> Maximum Credits Points:
                        <input className="student-info-input2" type="text" value={student.maxCredit} readOnly/>
                    </label>
                    <label className="student-info-title" htmlFor="fullname"><i className="fa fa-calculator"></i> Current Credit Points:
                        <input className="student-info-input2" type="text" value={student.creditsAchieved} readOnly/>
                    </label>
                </div>
                <div className="course-enrolled">
                    <h5> <i className="fa fa-book"></i> Course Enrolled</h5>
                    <ul>
                        {courseList}
                    </ul>
                </div>
            </div>
        </div>
    );
}
function CourseInfo(props){
    let courses = props.courses.map( item => {
    return(
        <div className="course-item" key={item.id}>
            <label htmlFor="course">
            <input type='radio' name='courseToEnroll' value={item.id} onChange={props.onChange} />{item.name} </label>
        </div>
    )});
    return(
        <div className="col-md-6 col-sm-12 col-xs-12 card-container">
            <div className="card-header">
                <h4>Courses to Enroll</h4>
            </div>
            <div className="card-body">
                {courses}
            </div>
            <div className="card-footer">
                <button title="Save"><i className="fa fa-save"></i></button>
                <Link to={'/dashboard'}><button className="float-right" title="Go back to Home"> <i className="fa fa-home"></i></button> </Link>
            </div>
        </div>
    );  
}