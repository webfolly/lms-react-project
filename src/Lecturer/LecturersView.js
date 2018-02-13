import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LecturerDetailView from "./LecturerDetailView";
import LecturerCard from "./LecturerCard";
import avatar from '../images/img_avatar2.png';
//import {lecturer} from "../lecturerdata";
import axios from 'axios';

import {fetchLecturers, fetchLecturersByID} from '../api/lecturer';

export default class LecturersView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lecturers: []
        };

        // this.handleLecturerData = this.handleLecturerData.bind(this);

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

    // handleLecturerData(data) {
    //     let lecturerdata = [];
    //     console.log('got lecturer from api', data);
    //     for(let i=0; i<5; i++){
    //         lecturerdata[i] = {name: data[i].name, occupation: data[i].occupation, school: data[i].school, faculty: data[i].faculty, phone: data[i].phone, email: data[i].email}
    //     } 
    //     this.setState({lecturers})

    // }

    render() {
        return (
            <div className={'container-fluid'} >
            {this.state.lecturers.map(function (l){
                return <LecturerCard key={l.id} lecturer={l} />
                    
            })
            }
            </div>    


        )
    }


}