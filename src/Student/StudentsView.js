import React from 'react';
import {Link} from 'react-router-dom';
import TopNav from '../App/TopNav';
import StudentItem from './StudentCard';
import {Spinner} from '../UI/UIComponents';
import {fetchStudents,fetchStudent,deleteStudent} from '../api/student';
import '../styles';

function StudentsList(props) {
    let studentLists = props.students.map(
        item => <Link to={`/students/detail/view/${item.id}`} key={item.id}><StudentItem student={item} onClick={props.onClick}/></Link>
    );
    return(
        <div className="student-view">
            {studentLists}
        </div>
    );
}
export default class StudentsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error:null,
            isLoading:false,//when Loading data display a spinner
            students:[],
            searchString:'',
            idChecked:true
        };
        this.handleInputChage = this.handleInputChage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    LoadStudents(){
        this.setState({isLoading:true});
        fetchStudents()
            .then(response => this.setState({students:response.data,isLoading:false}))
            .catch(error => this.setState({error}));
    }
    GetStudentById(id) {
        this.setState({isLoading:true});
        fetchStudent(id)
            .then( response => {
                if(response.data) {
                    this.setState({isLoading:false,student:[response.data]});
                } else {
                    alert('Student not found!');
                    this.setState({isLoading:false});
                }
            })            
            .catch(error => this.setState({error}));
    }
    DeleteStudentById(id) {
        this.setState({isLoading:true});
        deleteStudent(id)
            .then(
                response => {
                    if(response.status===200) {
                        this.setState({isLoading:false});
                        this.LoadStudents();
                    }
                }
            )
            .catch(error => this.setState({error}));
    }
    handleClick(event){
        const value = event.target.value;
        event.preventDefault();
        if(window.confirm(`Student will be deleted.Confirm to continue..`)) {
            this.DeleteStudentById(value);
        } 
    }
    handleInputChage(event){
        const target = event.target;
        const value = target.type === 'radio' ? (target.value==='id' ? target.checked:!target.checked) : target.value;
        const name = target.name;
        this.setState({[name]:value});
    }
    handleSubmit(event){
        event.preventDefault();
        if(this.state.idChecked) {
            this.state.searchString === '' ? this.LoadStudents() :this.GetStudentById(this.state.searchString);
        }
    }
    componentDidMount(){
        this.LoadStudents();
    }
    render() {
        if(this.state.isLoading) {
            return <Spinner />
        }
       else if (this.state.error) {
            return <span>something error</span> 
        } else {
            return(
                <div>
                    <TopNav value={this.state.searchString} idChecked={this.state.idChecked} onInputChange={this.handleInputChage} onSubmit={this.handleSubmit} onClick={this.handleClick}/>
                    <StudentsList students={this.state.students} onClick={e => this.handleClick(e)}/>
                </div>
            );
        }
    }
}
