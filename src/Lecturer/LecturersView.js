import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LecturerDetailView from "./LecturerDetailView";
import LecturerCard from "./LecturerCard";
import avatar from '../images/img_avatar2.png';

export default class LecturersView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lecturers: [{
                id: 1,
                name: 'Jane Hunter',
                occupation: 'Professor',
                school: 'School of Information Technology and Electrical Engineering',
                faculty: 'Faculty of Engineering, Architecture and Information Technology',
                phone: '+61 7 336 51092',
                email: 'jane@itee.uq.edu.au'

            },{
                id: 2,
                name: 'Xue Li',
                occupation: 'Professor',
                school: 'School of Information Technology and Electrical Engineering',
                faculty: 'Faculty of Engineering, Architecture and Information Technology',
                phone: '+61 7 336 52379',
                email: 'xueli@itee.uq.edu.au'
            }]
        };


    }
    componentWillMount() {

    }

    loadCourses() {

    }
    render() {
        return (
            <div className={'container-fluid'} >
            {this.state.lecturers.map(function (l){
                return <LecturerCard key={l.id} lecturer={l} />
                    
            })
            }
            </div>    
            
            // this.state.lecturers.map(
            // lecturer => {
            //     console.log(lecturer)
            //     return <LecturerCard lecturer={lecturer} />
            // }
            // ) 
            

        )
    }


}