import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StudentDetailView from "./StudentDetailView";
import StudentCard from "./StudentCard";
import avatar from '../images/img_avatar2.png';

export default class StudentsView extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div className={'container-fluid'}>
              <StudentCard />
            </div>
        );

    }


}