import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LecturerDetailView from "./LecturerDetailView";
import LecturerCard from "./LecturerCard";
import avatar from '../images/img_avatar2.png';

export default class LecturersView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };


    }

    render() {
        return (
            <div className={'container-fluid'}>
              <LecturerCard />
            </div>
        );

    }


}