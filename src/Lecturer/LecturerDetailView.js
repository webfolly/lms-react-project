import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class LecturerDetailView extends Component{

    constructor(props){
        super(props);

        this.state = {
            id : props.match.params.id
        }

    }

    render(){
        return (
            <div>
                <p>Lecturer Detail {this.state.id}</p>
            </div>
        );
    }

}