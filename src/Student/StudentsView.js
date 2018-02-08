import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StudentDetailView from "./StudentDetailView";

export default class StudentsView extends Component {

    constructor(props) {
        super(props);

    }

    render(){
        return (

            <div>
                <p>Students Views</p>
                <p><Link to={'/students/detail/2'} >Details</Link></p>
            </div>
        );

    }


}