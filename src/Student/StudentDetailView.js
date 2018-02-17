import React, {Component} from 'react';
import DetailsTabs from './tabs/DetailsTabs';
import {fetchStudent,createStudent,updateStudent} from '../api/student';

export default class StudentDetailView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            student: {},
            error: null,
            id: this.props.match.params.id,

            inputState: 'readOnly',
            isEditing: true,
            isSaving: false,
            isLoading:
                false,
        };
        console.log(props.match.params.action);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitOnclick = this.handleSubmitOnclick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loadStudentDetail = this.loadStudentDetail.bind(this);

    }

    handleChange(event) {
        let {name, value} = event.target;
        console.log({name});
        if (this.state.isEditing) {
            this.setState({student: {...this.state.student, [name]: value}});
        } else {
            return;
        }

    }


    loadStudentDetail() {
        let action = this.props.match.params.action;
        // let student = fetchStudent(this.props.match.params.id);
        // console.log(student);
        //TODO GET DATA FROM API
        if (action == 'view' || action == 'edit') {
            fetchStudent(this.props.match.params.id)
                .then(data => {
                    this.setState({student: data.data})
                })
        }

        // if (action === 'edit') {
        //     // this.setState({
        //     //
        //     //     student: {
        //     //         id:'1',
        //     //         firstName: student.firstName,
        //     //         lastName:student.lastName,
        //     //         gender: 'male',
        //     //         birthday: '12/12/1990',
        //     //         school:'Grammar College',
        //     //         language:'English',
        //     //         studentCode:'s0001',
        //     //         birthplace:'Australia',
        //     //         email:student.email,
        //     //         mobile:'0400111222',
        //     //         nationality:'Australian',
        //     //         emergencyPerson:'Lily Sugar',
        //     //         emergencyMobile:'0422333444',
        //     //         address:'Unit 12, Yoga st',
        //     //         city_sub:'Runcorn',
        //     //         state:'Queensland',
        //     //         addressCountry:'Australia',
        //     //         dateAdmission:'12/12/2017',
        //     //         academicYear:'2017-2019',
        //     //         medicalCondition:'normal',
        //     //         active:'Y'
        //     //     }
        //     // });
        // } else if (action === 'view') {
        //     this.setState({
        //         student: {
        //             id:'1',
        //             firstName: 'John Wu',
        //             lastName:'',
        //             gender: 'male',
        //             birthday: '12/12/1990',
        //             school:'Grammar College',
        //             language:'English',
        //             studentCode:'s0001',
        //             birthplace:'Australia',
        //             email:'info@student.com.au',
        //             mobile:'0400111222',
        //             nationality:'Australian',
        //             emergencyPerson:'Lily Sugar',
        //             emergencyMobile:'0422333444',
        //             address:'Unit 12, Yoga st',
        //             city_sub:'Runcorn',
        //             state:'Queensland',
        //             addressCountry:'Australia',
        //             dateAdmission:'12/12/2017',
        //             academicYear:'2017-2019',
        //             medicalCondition:'normal',
        //             active:'Y'
        //         }
        //     });
        // } else {
        //     this.setState({
        //
        //         student: {
        //             id:'',
        //             firstName: '',
        //             lastName:'',
        //             gender: '',
        //             birthday: '',
        //             school:'',
        //             language:'',
        //             studentCode:'',
        //             birthplace:'',
        //             address:'',
        //             city_sub:'',
        //             state:'',
        //             addressCountry:'',
        //             dateAdmission:'',
        //             academicYear:'',
        //             medicalCondition:'',
        //             active:''
        //         }
        //     });
        // }


    }

    handleSubmit(e) {
        let action = this.props.match.params.action;
        alert('Your details is updated!');
        if(action === 'create'){
            createStudent(this.state.student);
        }else{
            this.setState({isSaving:true});
            updateStudent(this.props.match.params.id, this.state.student)
                .then(response => this.setState({isSaving:false}))
                .then(error => this.setState({error}))
        }
        //this.props.history.push('/students');
        e.preventDefault();
    }

    handleSubmitOnclick(e){
        if(window.confirm("Are you sure to change?")){
            alert('y');
        }
    }

    componentWillMount() {
        console.log('hello did');
        if (this.props.match.params.action == 'view' || this.props.match.params.action === 'edit') {
            this.loadStudentDetail();
        }
        return;
    }


    render() {
        let obj = this.state;
        let action = this.props.match.params.action;
        return <DetailsTabs student={this.state.student} action={action} callback={this.handleChange}
                            handleSubmit={this.handleSubmit}/>

    }

}