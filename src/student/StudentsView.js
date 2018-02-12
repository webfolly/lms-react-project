import React from 'react';
import {Link} from 'react-router-dom';
import TopNav from '../App/TopNav';
import StudentItem from './StudentItem';
import {students} from '../source/DataSource';
import {Avatar,IconButtonGroup} from '../UI/UIComponents';
import '../styles';

function StudentsList(props) {
    let studentLists = props.students.map(
        item => <Link to={`/students/${item.studentID}`} key={item.studentID}><StudentItem student={item} onClick={props.onClick}/></Link>
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
            isLoading:false,//when Loading data display a spinner
            students:[],
            searchString:'',
            idChecked:true
        };
        this.handleInputChage = this.handleInputChage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    DeleteStudentById(id) {
        let index = 0;
        for(let i=0;i<students.length;i++) {
            if(id === students[i].studentID) {
                index = i;
                break;
            }
        }
        if(students.splice(index,1).length!==0) {
            this.setState({students});
        }
    }
    handleClick(event){
        const name = event.target.name;
        const value = event.target.value;
        //event.stopPropagation();
        switch(name) {
            case 'fa fa-times':
            event.preventDefault();
            if(window.confirm(`Student:${value} will be deleted.Confirm to continue..`)) {
                this.DeleteStudentById(value);
                break;
            } else {
                break;
            }
            case 'fa fa-edit':
            <Link to={`/students/${value}`} />
            break;
            case 'fa fa-info':
            <Link to={`/students/${value}`} />
            break;
            case 'fa fa-plus':
            break;
            default:
            break;
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
        /* if(this.state.idChecked) {
            let student = getStudentById(this.state.searchString);
            students.push(student);
            this.setState({students})
        } else {
            let student = getStudentByName(this.state.searchString);
            students.push(student);
            this.setState({students})
        }*/
        let student = [];
        let tmp = students.slice();
        for(let i=0;i<tmp.length;i++) {
            if(this.state.searchString==='') {
                student = students.slice();
            } else if(this.state.searchString.toLowerCase() === (this.state.idChecked ? tmp[i].studentID.toLowerCase() : tmp[i].firstname.toLowerCase())
                    || this.state.searchString.toLowerCase() === (this.state.idChecked ? tmp[i].studentID.toLowerCase() : tmp[i].lastname.toLowerCase())
                    || this.state.searchString.toLowerCase() === (this.state.idChecked ? tmp[i].studentID.toLowerCase() : `${tmp[i].firstname.toLowerCase()} ${tmp[i].lastname.toLowerCase()}`)
                ) {
                student.push(tmp[i]);
            } 
        }
        if(student.length!==0){
            this.setState({students:student});
        } else {
            //call API function GetStudentById or ...ByName toget data from remote. 
            //if success call this.setState else 
            alert(`Student: ${this.state.searchString} not found`);
            this.setState({searchString:''});
            return;
        }
    }
    componentDidMount(){
        /* fetch data and initialize state here */
        this.setState({students});
    }
    render() {
        return(
            <div>
                <TopNav value={this.state.searchString} idChecked={this.state.idChecked} onInputChange={this.handleInputChage} onSubmit={this.handleSubmit} onClick={this.handleClick}/>
                <StudentsList students={this.state.students} onClick={e => this.handleClick(e)}/>
            </div>
        );
    }
}
