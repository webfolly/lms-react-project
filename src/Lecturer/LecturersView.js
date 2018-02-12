import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LecturerDetailView from "./LecturerDetailView";
import LecturerCard from "./LecturerCard";
import avatar from '../images/img_avatar2.png';
import {lecturer} from "../lecturerdata";

export default class LecturersView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lecturers: lecturer
        };


    }
    componentWillMount() {
        this.setState({lecturer});

    }

    loadLecturers() {

    }
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