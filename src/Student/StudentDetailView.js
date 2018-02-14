import React, {Component} from 'react';
import DetailsTabs from './tabs/DetailsTabs';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class StudentDetailView extends Component {

    constructor(props) {
        super(props);


        console.log(props.match.params.action);
        this.loadStudentDetail = this.loadStudentDetail.bind(this);

    }

    loadStudentDetail() {
        let action = this.props.match.params.action;
        //TODO GET DATA FROM API
        if (action === 'edit') {
            this.setState({
                id: this.props.match.params.id,

                inputState: 'readOnly',
                isEditing: true,
                isSaving:
                    false,
                isLoading:
                    false,
                student: {
                    id:'1',
                    name: 'John Wu',
                    gender: 'male',
                    birthday: '12/12/1990',
                    school:'Grammar College',
                    language:'English',
                    studentCode:'s0001',
                    birthplace:'Australia',
                    email:'info@student.com.au',
                    mobile:'0400111222',
                    nationality:'Australian',
                    emergencyPerson:'Lily Sugar',
                    emergencyMobile:'0422333444',
                    address:'Unit 12, Yoga st',
                    city_sub:'Runcorn',
                    state:'Queensland',
                    addressCountry:'Australia',
                    dateAdmission:'12/12/2017',
                    academicYear:'2017-2019',
                    medicalCondition:'normal',
                    active:'Y'
                }
            });
        } else if (action === 'view') {
            this.setState({
                id: this.props.match.params.id,

                inputState: 'readOnly',
                isEditing: false,
                isSaving:
                    false,
                isLoading:
                    false,
                student: {
                    id:'1',
                    name: 'John Wu',
                    gender: 'male',
                    birthday: '12/12/1990',
                    school:'Grammar College',
                    language:'English',
                    studentCode:'s0001',
                    birthplace:'Australia',
                    email:'info@student.com.au',
                    mobile:'0400111222',
                    nationality:'Australian',
                    emergencyPerson:'Lily Sugar',
                    emergencyMobile:'0422333444',
                    address:'Unit 12, Yoga st',
                    city_sub:'Runcorn',
                    state:'Queensland',
                    addressCountry:'Australia',
                    dateAdmission:'12/12/2017',
                    academicYear:'2017-2019',
                    medicalCondition:'normal',
                    active:'Y'
                }
            });
        } else {
            this.setState({
                id: this.props.match.params.id,

                inputState: 'readOnly',
                isEditing: true,
                isSaving:
                    false,
                isLoading:
                    false,
                student: {
                    id:'',
                    name: '',
                    gender: '',
                    birthday: '',
                    school:'',
                    language:'',
                    studentCode:'',
                    birthplace:'',
                    address:'',
                    city_sub:'',
                    state:'',
                    addressCountry:'',
                    dateAdmission:'',
                    academicYear:'',
                    medicalCondition:'',
                    active:''
                }
            });
        }


    }

    componentWillMount() {
        this.loadStudentDetail();
    }


    componentWillUpdate() {
        let action = this.props.match.params.action;
        if (action === 'edit') {

        } else if (action === 'saving') {

        }
    }

    render() {
        let obj = this.state;
        let action = this.props.match.params.action;
        console.log(this.state.action);
        if (action === 'edit') {
            return <DetailsTabs obj={obj} action={'edit'}/>
        } else if (action === 'create') {
            console.log(action);
            return <DetailsTabs obj={{
                id: this.props.match.params.id,
                action: this.props.match.params.action,
                isEditing: true,
                isSaving:
                    false,
                isLoading:
                    false,
                student: {
                    id:'',
                    name: '',
                    gender: '',
                    birthday: '',
                    school:'',
                    language:'',
                    studentCode:'',
                    birthplace:'',
                    address:'',
                    city_sub:'',
                    state:'',
                    addressCountry:'',
                    dateAdmission:'',
                    academicYear:'',
                    medicalCondition:'',
                    active:''

                }
            }} action={'create'}/>
        }else{
            return <DetailsTabs obj={obj} action={'view'}/>
        }

    }

}