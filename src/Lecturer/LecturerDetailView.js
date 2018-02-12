import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {lecturer} from '../lecturerdata';
import DetailForm from './DetailForm'; 
import avatar from '../images/img_avatar2.png';

export default class LecturerDetailView extends Component {
    
    constructor(props){
        super(props);

        //  this.state = {
        //     id : props.match.params.id,
        //     name: props.match.params.name,
        //     occupation: props.match.params.occupation,
        //     school: props.match.params.school,
        //     faculty: props.match.params.faculty,
        //     phone: props.match.params.phone,
        //     email: props.match.params.email
        //  }
        this.state = {
            isLoading: false,
            isEditing: false,
            isSaving: false,
            error: null,
            lecturer: lecturer
        };
    }
    componentWillMount() {
        this.setState({lecturer});

    }

    renderDetailView() {
        const lecturer = this.state.lecturer;
        // console.log(lecturer)
        return (
            <DetailForm lecturer={lecturer}/>
            );        
    }

    render() {
        // const {isLoading, isEditing, lecturer} = this.state;
        // if(isLoading) {
        //    return(<h2>Loading...</h2>)
       return this.renderDetailView()
    }
}

