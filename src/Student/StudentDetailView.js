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
                    name: 'John Wu',
                    gender: 'male',
                    birthday: '12/12/1990'
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
                    name: 'John Wu',
                    gender: 'male',
                    birthday: '12/12/1990'
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
                    name: '',
                    gender: '',
                    birthday: ''
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
        let action = this.state.action;
        console.log(this.state.action);
        if (action === 'edit') {
            return <DetailsTabs obj={obj} action={'edit'}/>
        } else if (action === 'create') {
            return <DetailsTabs obj={{
                id: this.props.match.params.id,
                action: this.props.match.params.action,
                isEditing: true,
                isSaving:
                    false,
                isLoading:
                    false,
                student: {
                    name: '',
                    gender: '',
                    birthday: ''
                }
            }} action={'create'}/>
        }
        return <DetailsTabs obj={obj} action={'view'}/>
    }

}