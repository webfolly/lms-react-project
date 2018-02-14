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
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            isEditing:true,
            lecturer:{}
        };
    }

    componentWillMount() {
        this.state = this.props.object;
        let object = ('edit' === this.props.action);
        console.log(this.props.object);

        this.setState({isEditing: true});
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

    renderSaveEditDetailView() {
        const lecturer = this.props.lecturer;
            //const lecturerlist = this.state;
            console.log(lecturer);
            return (
                <div className="form-group">
                    <form>
                        <label>Name</label>
                        <input type="text" className="form-control"  value={lecturer.name || ''} name="" readOnly={!this.state.isEditing} />
                        <label>Occupation</label>
                        <input type="text" className="form-control"  value={lecturer.occupation || ''} name="code" readOnly={!this.state.isEditing} />
                        <label>School</label>
                        <input type="text" className="form-control"  value={lecturer.school || ''} name="code" readOnly={!this.state.isEditing} />
                        <label>Faculty</label>
                        <input type="text" className="form-control"  value={lecturer.faculty || ''} name="code" readOnly={!this.state.isEditing} />
                        <label>Phone</label>
                        <input type="text" className="form-control"  value={lecturer.phone || ''} name="code" readOnly={!this.state.isEditing} />
                        <label>E-mail</label>
                        <input type="text" className="form-control"  value={lecturer.email || ''} name="code" readOnly={!this.state.isEditing} />
                    </form>
                    <button onClick={this.handleEdit}>Edit</button>
                </div>
                );        
        }



    EditButton(props) {
        return(
            <button onClick={this.handleEdit}>
                Edit
            </button>
        )
    }

    SaveButton(props) {
        return(
            <button onClick={this.handleSave}>
                Save
            </button>
        )
    }


    render() {
        // const {isLoading, isEditing, lecturer} = this.state;
        // if(isLoading) {
        //    return(<h2>Loading...</h2>)
        if(this.state.isEditing){
           button = <EditButton onClick={this.handleEdit}/>
        } else {
            button = <SaveButton onClick={this.handleSave}/>
        }
        
        return (
        // <div>
        //     <EditRender lecturers={this.props.lecturer} handleChange={this.handleChange} readOnly={this.isEditing}/>
        //     {button}
        // </div>
        // )
            this.renderSaveEditDetailView()
        
        )

       const currentEditing = this.state.isEditing;
       let button = null;
       
    //    if(currentEditing) {
    //        button = <EditButton onClick={this.handleEdit} />;
    //    } else {
    //     button = <SaveButton onClick={this.handleSave} />;
    //    }
       console.log( this.props.lecturer );
    //     return(
           
    //         <div className="form-group">
    //             <form>
    //                 <label>Name</label>
    //                 <input type="text" className="form-control"   onChange={this.handleChange} value={lecturers.name || ''} readOnly={!this.state.isEditing} />
    //                 <label>Occupation</label>
    //                 <input type="text" className="form-control"  onChange={this.handleChange} value={lecturers.occupation || ''}  readOnly={!this.state.isEditing}  />
    //                 <label>School</label>
    //                 <input type="text" className="form-control"  onChange={this.handleChange} value={lecturers.school || ''}  readOnly={!this.state.isEditing}  />
    //                 <label>Faculty</label>
    //                 <input type="text" className="form-control"  onChange={this.handleChange} value={lecturers.faculty || ''}  readOnly={!this.state.isEditing} />
    //                 <label>Phone</label>
    //                 <input type="text" className="form-control" onChange={this.handleChange}  value={lecturers.phone || ''}  readOnly={!this.state.isEditing}  />
    //                 <label>E-mail</label>
    //                 <input type="text" className="form-control" onChange={this.handleChange} value={lecturers.email || ''}  readOnly={!this.state.isEditing} />
    //             </form>
    //         {button}
              
    //         </div>
    //    );
    }
}

function EditRender(props) {
    const lecturers = props.lecturers;
            return(
           
            <div className="form-group">
                <form>
                    <label>Name</label>
                    <input type="text" className="form-control" onChange={props.handleChange} name={'name'} value={lecturers.name || ''} readOnly={props.isEditing} />
                    <label>Occupation</label>
                    <input type="text" className="form-control" onChange={props.handleChange} name={'occupation'} value={lecturers.occupation || ''}  readOnly={props.isEditing}  />
                    <label>School</label>
                    <input type="text" className="form-control" onChange={props.handleChange} name={'school'} value={lecturers.school || ''}  readOnly={props.isEditing}  />
                    <label>Faculty</label>
                    <input type="text" className="form-control" onChange={props.handleChange} name={'faculty'} value={lecturers.faculty || ''}  readOnly={props.isEditing} />
                    <label>Phone</label>
                    <input type="text" className="form-control" onChange={props.handleChange} name={'phone'} value={lecturers.phone || ''}  readOnly={props.isEditing}  />
                    <label>E-mail</label>
                    <input type="text" className="form-control" onChange={props.handleChange} name={'email'} value={lecturers.email || ''}  readOnly={props.isEditing} />
                </form>
                
            </div>
       );
}

function EditButton(props) {
    return(
        <button onClick={props.handleEdit}>
            Edit
        </button>
    )
}

function SaveButton(props) {
    return(
        <button onClick={props.handleSave}>
            Save
        </button>
    )
}
