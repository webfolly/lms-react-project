import React, {Component} from 'react';
import {
    BroswerRouter as Router,
    Route,
    Link
} from 'react-router-dom';
//import { lecturer } from '../lecturerdata';
//import axios from 'axios';
import LecturerDetailView from './LecturerDetailView';
export default class DetailForm extends Component {
    
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this)
        this.state = {isEditing:false};
    }

    componentWillMount() {
        this.state = this.props.object;
        let object = ('view' === this.props.action);
        console.log(this.props.object);

        this.setState({isEditing: false});
    }

    handleChange(event) {
        let {name, value} = event.target;
        console.log({name});
        if (this.state.isEditing) {
            this.setState({lecturer: {...this.state.lecturer, [name]: value}});
            console.log(this.lecturer)
        } else {
            return;
        }

    }

    handleEdit() {
        this.setState({isEditing: true});
    }

    handleSave() {
        this.setState({isEditing: false});
    }

    // renderDetailView() {
    //         const lecturerlist = this.state;
    //         console.log(lecturer);
    //         return (
    //             <div className="form-group">
    //                 <form>
    //                     <label>Name</label>
    //                     <input type="text" className="form-control"  value={lecturer[0].name || ''} name="code" />
    //                     <label>Occupation</label>
    //                     <input type="text" className="form-control"  value={lecturer[0].occupation || ''} name="code"  />
    //                     <label>School</label>
    //                     <input type="text" className="form-control"  value={lecturer[0].school || ''} name="code"  />
    //                     <label>Faculty</label>
    //                     <input type="text" className="form-control"  value={lecturer[0].faculty || ''} name="code" />
    //                     <label>Phone</label>
    //                     <input type="text" className="form-control"  value={lecturer[0].phone || ''} name="code"  />
    //                     <label>E-mail</label>
    //                     <input type="text" className="form-control"  value={lecturer[0].email || ''} name="code" />
    //                 </form>
    //             </div>
    //             );        
    //     }

    EditButton(props) {
        return(
            <button onClick={props.onClick}>
                Edit
            </button>
        )
    }

    SaveButton(props) {
        return(
            <button onClick={props.onClick}>
                Save
            </button>
        )
    }


    render() {
        // const {isLoading, isEditing, lecturer} = this.state;
        // if(isLoading) {
        //    return(<h2>Loading...</h2>)
       //return this.renderDetailView()
       const lecturers = this.props.lecturer;
       const currentEditing = this.state.isEditing;
       let button = null;
       
    //    if(currentEditing) {
    //        button = <EditButton onClick={this.handleEdit} />;
    //    } else {
    //     button = <SaveButton onClick={this.handleSave} />;
    //    }
       console.log( this.props.lecturer );
        return(
           
            <div className="form-group">
                <form>
                    <label>Name</label>
                    <input type="text" className="form-control"   onChange={this.handleChange} value={lecturers.name || ''} readOnly={!this.state.isEditing} />
                    <label>Occupation</label>
                    <input type="text" className="form-control"  onChange={this.handleChange} value={lecturers.occupation || ''}  readOnly={!this.state.isEditing}  />
                    <label>School</label>
                    <input type="text" className="form-control"  onChange={this.handleChange} value={lecturers.school || ''}  readOnly={!this.state.isEditing}  />
                    <label>Faculty</label>
                    <input type="text" className="form-control"  onChange={this.handleChange} value={lecturers.faculty || ''}  readOnly={!this.state.isEditing} />
                    <label>Phone</label>
                    <input type="text" className="form-control" onChange={this.handleChange}  value={lecturers.phone || ''}  readOnly={!this.state.isEditing}  />
                    <label>E-mail</label>
                    <input type="text" className="form-control" onChange={this.handleChange} value={lecturers.email || ''}  readOnly={!this.state.isEditing} />
                </form>
            {button}
              
            </div>
       );
    }
}