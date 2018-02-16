import React from 'react';
import {Link} from 'react-router-dom';
import CourseCard from "./CourseCard";
import CourseDetailView from "./CourseDetailView";
import axios from "axios";
import '../styles';
import {fetchCourses, createCourse, deleteCourse} from '../api/course';
import {Spinner} from '../UI/UIComponents';

function CoursesList(props) {
    let courseLists = props.courses.map(
        item => <Link to={`/courses/detail/${item.id}`} key={item.id}><CourseCard course={item} onClick={props.onClick}/></Link>
    );
    return(
        <div className="student-view">
            {courseLists}
        </div>
    );
}

export default class CoursesView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isEditing: false,
            isSaving: false,
            error: null,
            courses: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    loadCourses(){
        this.setState({isLoading:true});
        fetchCourses()
            .then(response => this.setState({courses:response.data,isLoading:false}))
    }

    isNew(){
        const {id} = this.props.match.params;
        return id === 'create';
    }

    DeleteCourseById(id) {
        this.setState({isLoading:true});
        deleteCourse(id)
            .then(response => { if(response.status===200) this.setState({isLoading:false})})
            .catch(error => this.setState({error}));
    }

    handleClick(e){
        const name = e.target.name;
        const value = e.target.value;
        console.log(value);
        e.preventDefault();
        if(window.confirm(`Course will be deleted.Confirm to continue..`)) {
            this.DeleteCourseById(value);
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

    componentDidMount() {
        const {id} = this.props.match.params;
        if(this.isNew()) {
            this.setState({course:{},isEditing:true});
            return;
        } else {
            this.loadCourses();
        }
    }

    render() {
        let courses= this.props.courses;
        if(this.state.isLoading) {
            return <Spinner />
        }else{
            return (
                <div className={'container-fluid'}>
                    <div className='row'>
                        <div className='pull-right'>
                            <Link to={`/courses/detail/create`} className='btn btn-success' onSubmit={this.handleSubmit} >+ Create</Link>
                        </div>
                    </div>
                        {this.state.courses.map(course => <Link to={`/courses/detail/${course.id}`} key={course.id}> <CourseCard course={course} onClick={this.handleClick}/></Link>)}
                </div>
            )
        }
    }
}
