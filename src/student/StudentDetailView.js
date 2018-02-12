import React from 'react';
import {Link} from 'react-router-dom';
import {students} from '../source/DataSource';
import '../styles';
function Input (props){
    return(
        <div className="input-wrapper">
            <label className="input-label" htmlFor={props.htmlFor}>{props.labelText}</label>
            <br/>
            <input className="input-component border-bottom" type={props.type} name={props.name} value={props.value} onChange={props.onChange} disabled={props.isEditing?null:"disabled"}/>
        </div>
    );
}
export default class StudentDetailView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            student:{},
            error:null,
            isLoading:false,
            isEditing:true,
            isSaving:false,
            isDeleting:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    getStudentById(id) {
        for(let i=0;i<students.length;i++) {
            if(id === students[i].studentID) {
                this.setState({student:students[i]});
            }
        }
    }
    handleChange(event) {
        const target = event.target;
        const {name,value} = target;
        if(this.state.isEditing===false){
            return;
        } else {
            this.setState({student:{...this.state.student,[name]:value}});
        }
    }
    handleClick(e) {
        //e.preventDefault();
        this.setState({isEditing:true});
    }
    
    componentDidMount() {
        const {id} = this.props.match.params;
        console.log(id);
        if(id === 'create') {
            this.setState({student:{}})
        } else {
            this.getStudentById(id);
        }

        
    }
    render() {
        return (
            <div className="student-detail">
                <form action="#">
                    <div className="student-detail-container" >
                    <Input htmlFor="firstname" labelText="First Name" type="text" name="firstname" value={this.state.student.firstname} onChange={this.handleChange} isEditing={this.state.isEditing}/>   
                    <Input htmlFor="lastname" labelText="Last Name" type="text" name="lastname" value={this.state.student.lastname}/>
                    <div className="input-wrapper">
                    <label className="input-label" htmlFor="gender">Sex</label><br/>
                    <input className="input-group" type="radio" name="gender" value="male" checked={this.state.student.sex==='male'?true:false} />Male
                    <input className="input-group" type="radio" name="gender" value="female" checked={!(this.state.student.sex==='male'?true:false)} />Female
                    </div>
                    <Input htmlFor="dob" labelText="Date of Birth" type="date" name="dob" value={this.state.student.dob}/>
                    <Input htmlFor="nationality" labelText="Nationality" type="text" name="nationality" value={this.state.student.nationality}/>
                    <Input htmlFor="email" labelText="Email" type="text" name="email" value={this.state.student.email}/>
                    <Input htmlFor="mobile" labelText="Mobile" type="text" name="mobile" value={this.state.student.mobile}/>
                    <Input htmlFor="addressLine1" labelText="Address Line 1" type="text" name="addressLine1" value={this.state.student.addressLine1}/>
                    </div>
                    <div className="student-detail-container">
                    <Input htmlFor="addressLine2" labelText="Address Line 2" type="text" name="addressLine2" value={this.state.student.addressLine2}/>
                    <Input htmlFor="postcode" labelText="Postcode" type="text" name="postcode" value={this.state.student.postcode}/>
                    <Input htmlFor="courseEnrolled" labelText="Course Enrolled" type="text" name="courseEnrolled" value={this.state.student.courseEnrolled}/>
                    <Input htmlFor="maxCredit" labelText="Maximum Credit" type="number" name="maxCredit" value={this.state.student.maxCredit}/>
                    <Input htmlFor="creditAchieved" labelText="Credit Points Achieved" type="number" name="creditAchieved" value={this.state.student.creditAchieved}/>
                    <Input htmlFor="fee" labelText="Fee" type="text" name="fee" value={this.state.student.fee}/>
                    <Input htmlFor="scholarship" labelText="Scholarship Eligibility" type="text" name="scholarship" value={this.state.student.scholarship}/>
                    <button onClick={this.handleClick}>Edit</button>
                    <Link to="/students" ><button>Back</button> </Link>
                    </div>
                </form>
            </div>
        );
    }
}