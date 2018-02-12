import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {lecturer} from '../lecturerdata';

import avatar from '../images/img_avatar2.png';

export default class LecturerDetailView extends Component {
    
    constructor(props){
        super(props);

        //  this.state = {
        //     id : props.match.params.id,
        //     name: props.match.params.name,
        //     occupation: props.match.params.occupation,
        //     school: props.match.params.school,
        //     faculty: props.match.params.faculty,
        //     phone: props.match.params.phone,
        //     email: props.match.params.email
        //  }
        this.state = {
            isLoading: false,
            isEditing: false,
            isSaving: false,
            error: null,
            lecturer: null
        };
    }
    componentWillMount() {
        this.setState({lecturer});

    }

    LecturerDetailView(props) {

        return (
            <div className="form-group">
                <form>
                    <label>Name</label>
                    <input type="text" className="form-control"  value={lecturer[0].name || ''} name="code" onChange={this.handleInputChange} />
                    <label>Occupation</label>
                    <input type="text" className="form-control"  value={lecturer[0].occupation || ''} name="code" onChange={this.handleInputChange} />
                    <label>School</label>
                    <input type="text" className="form-control"  value={lecturer[0].school || ''} name="code" onChange={this.handleInputChange} />
                    <label>Faculty</label>
                    <input type="text" className="form-control"  value={lecturer[0].faculty || ''} name="code" onChange={this.handleInputChange} />
                    <label>Phone</label>
                    <input type="text" className="form-control"  value={lecturer[0].phone || ''} name="code" onChange={this.handleInputChange} />
                    <label>E-mail</label>
                    <input type="text" className="form-control"  value={lecturer[0].email || ''} name="code" onChange={this.handleInputChange} />
                </form>
            </div>
            );        
    }

    render() {
        // const {isLoading, isEditing, lecturer} = this.state;
        // if(isLoading) {
        //    return(<h2>Loading...</h2>)
        return (
             <LecturerDetailView lecturer={this.state.lecturer}/>
        );
        }

        //return isEditing ?
        //this.renderForm(lecturers) : this.renderDisplay(lecturers)

        // return (
        // <div className="form-group">
        //     <label>Name</label>
        //     <input type="text" className="form-control"  value={lecturer[0].name || ''} name="code" onChange={this.handleInputChange} />
        //     <label>Occupation</label>
        //     <input type="text" className="form-control"  value={lecturer[0].occupation || ''} name="code" onChange={this.handleInputChange} />
        //     <label>School</label>
        //     <input type="text" className="form-control"  value={lecturer[0].school || ''} name="code" onChange={this.handleInputChange} />
        //     <label>Faculty</label>
        //     <input type="text" className="form-control"  value={lecturer[0].faculty || ''} name="code" onChange={this.handleInputChange} />
        //     <label>Phone</label>
        //     <input type="text" className="form-control"  value={lecturer[0].phone || ''} name="code" onChange={this.handleInputChange} />
        //     <label>E-mail</label>
        //     <input type="text" className="form-control"  value={lecturer[0].email || ''} name="code" onChange={this.handleInputChange} />
        // </div>
        // )
        //return (
        // <div className='lecturercard'>
        //         <div className='image'>
        //             <img src={avatar} alt="Avatar" />
        //         </div>
        //         <div className='container'>
        //             <ul>
        //                 <li>
        //                     {`${this.state.name}`}
        //                 </li>
        //                 <li>
        //                     {`${this.state.id}`}
        //                 </li>
        //                 <li>
        //                     {this.state.occupation}
        //                 </li>
        //                 <li>
        //                     {this.state.school}
        //                 </li>
        //                 <li>
        //                     {this.state.faculty}
        //                 </li>
        //                 <li>
        //                     {this.state.phone}
        //                 </li>
        //                 <li>
        //                     {this.state.email}
        //                 </li>

        //             </ul>
        //         </div>    

        // </div>

        
    //)
}

