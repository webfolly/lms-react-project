import React, {Component} from 'react';
import {
    BroswerRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { lecturer } from '../lecturerdata';


export default class DetailForm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            lecturer: lecturer
        };
    }

    renderDetailView() {
            const lecturerlist = this.state;
            console.log(lecturer);
            return (
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
        }

    render() {
        // const {isLoading, isEditing, lecturer} = this.state;
        // if(isLoading) {
        //    return(<h2>Loading...</h2>)
       return this.renderDetailView()
    }
}