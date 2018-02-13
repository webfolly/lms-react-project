import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import {lecturer} from '../lecturerdata';
//import DetailForm from './DetailForm'; 
import avatar from '../images/img_avatar2.png';
//import lecturer from '../api/lecturer';

import {fetchLecturers,  fetchLecturersByID} from '../api/lecturer';

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
            lecturer: []
        };
    }
    componentWillMount() {
        fetchLecturers()
        .then(
            data => this.setState({lecturers: data}))
        .catch(function (error) {
            if(error.response) {
                console.log("There is an error in the lecturer data", error)
            }
        } )    


        fetchLecturersByID(this.state.lecturers)
        .then(
            data1 => this.setState({lecturers: data1.id}))
        .catch(function (error) {
            console.log("There is an error in the lecuturer in the lecturer id data", error)
        })
    }

    // handleLecturerDetailViewData(data) {
    //     let lecturerdata  = [];
    //     console.log('got lecturerdata  from api:', data);
    //     for(let i=0; i<5; i++){
    //         lecturerdata[i] = {name: data[i].name, occupation: data[i].occupation, school: data[i].school, faculty: data[i].faculty, phone: data[i].phone, email: data[i].email}
    //     }
    //     this.setState({lecturers})
        

    // }

    // renderDetailView() {
    //     const lecturer = this.state.lecturer;
    //     return (
    //         <DetailForm lecturer={lecturer}/>
    //         );        
    // }

    render() {
        // const {isLoading, isEditing, lecturer} = this.state;
        // if(isLoading) {
        //    return(<h2>Loading...</h2>)
        const lecturer = this.state.lecturer;
        return(
            <div className="form-group">
                    <form>
                        <label>Name</label>
                        <input type="text" className="form-control"  value={lecturer[0].name || ''} name="code" />
                        <label>Occupation</label>
                        <input type="text" className="form-control"  value={lecturer[0].occupation || ''} name="code"  />
                        <label>School</label>
                        <input type="text" className="form-control"  value={lecturer[0].school || ''} name="code"  />
                        <label>Faculty</label>
                        <input type="text" className="form-control"  value={lecturer[0].faculty || ''} name="code" />
                        <label>Phone</label>
                        <input type="text" className="form-control"  value={lecturer[0].phone || ''} name="code"  />
                        <label>E-mail</label>
                        <input type="text" className="form-control"  value={lecturer[0].email || ''} name="code" />
                    </form>
                </div>
        );
    //    return this.renderDetailView()
    }
}

