import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchLecturersByID, updateLecturerByID, createLecturer} from '../api/lecturer';

export default class LecturerDetailView extends Component {
    
    constructor(props){
        super(props);



        this.state = {
            lecturer: {},
            error: null,
            isLoading: false,
            isEditing: false,
            isSaving: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.GetLecturersByID = this.GetLecturersByID.bind(this);
    }

    isNew(){
        const {id} = this.props.match.params;
        return id === 'create';
    }
    
    GetLecturersByID(id) {
        this.setState({isLoading:true});
        fetchLecturersByID(id)
            .then(response => {
                console.log(response.data);
                this.setState({isLoading:false,lecturer:response.data})
            })
            .catch(error => this.setState({error}));
            
    }

    handleSubmit(event){
        this.setState({isSaving:true});
        const {lecturer} = this.state;
        if(this.isNew()){
            createLecturer(lecturer)
            .then(response => {if(response.status===200) this.setState({isSaving:false,lecturer:{}})});
        } else {
            updateLecturerByID(lecturer.id,lecturer)
                .then(response => {if(response.status===200) this.setState({isSaving:false,isEditing:false})});
        }

    }
    handleClick(e){
        e.preventDefault();
        this.setState({isEditing:true});
    }
    handleChange(event) {
        const {name,value} = event.target;
        if(!this.state.isEditing){
            return;
        } else {
            this.setState({lecturer:{...this.state.lecturer,[name]:value}});
        }
    }
    
    componentWillMount() {
        const {id} = this.props.match.params;
        this.GetLecturersByID(id);
    }

    componentWillUpdate() {
        let action = this.props.match.params.action;
        if (action === 'edit') {

        } else if (action === 'saving') {

        }
    }

    render() {
        return this.state.isEditing ? <LecturerDetailEdit lecturer={this.state.lecturer} onChange={this.handleChange} onSubmit={this.handleSubmit}/> : <LecturerDetailsDisplay lecturer={this.state.lecturer} onClick={this.handleClick} onChange={this.handleChange}/>



    }
}


function LecturerDetailsDisplay(props) {
   
            return(
           
            <div className="form-group display">
                <form>
                    <label>Name</label>
                    <input type="text" className="form-control" onChange={props.onChange} name={'name'} value={props.lecturer.name || ''} readOnly />
                    <label>Occupation</label>
                    <input type="text" className="form-control" onChange={props.onChange} name={'occupation'} value={props.lecturer.occupation || ''}  readOnly  />
                    <label>School</label>
                    <input type="text" className="form-control" onChange={props.onChange} name={'school'} value={props.lecturer.school || ''}  readOnly  />
                    <label>Faculty</label>
                    <input type="text" className="form-control" onChange={props.onChange} name={'faculty'} value={props.lecturer.faculty || ''}  readOnly />
                    <label>Phone</label>
                    <input type="text" className="form-control" onChange={props.onChange} name={'phone'} value={props.lecturer.phone || ''}  readOnly  />
                    <label>E-mail</label>
                    <input type="text" className="form-control" onChange={props.onChange} name={'email'} value={props.lecturer.email || ''}  readOnly />
                    <button className="first-btn" onClick={props.onClick}>Edit</button>
                    <Link to="/lecturers" ><button className="back-btn">Back</button> </Link>
                </form>
                
            </div>
       );
}

function LecturerDetailEdit(props) {
            return(
           
            <div className="form-group">
                <form action="#" onSubmit={props.onSubmit}>
                    <label>Name</label>
                    <input type="text" className="form-control" onChange={props.onChange} name={'name'} value={props.lecturer.name} readOnly={props.isEditing} />
                    <label>Occupation</label>
                    <input type="text" className="form-control" onChange={props.onChange} name={'occupation'} value={props.lecturer.occupation}  readOnly={props.isEditing}  />
                    <label>School</label>
                    <input type="text" className="form-control" onChange={props.onChange} name={'school'} value={props.lecturer.school}  readOnly={props.isEditing}  />
                    <label>Faculty</label>
                    <input type="text" className="form-control" onChange={props.onChange} name={'faculty'} value={props.lecturer.faculty}  readOnly={props.isEditing} />
                    <label>Phone</label>
                    <input type="text" className="form-control" onChange={props.onChange} name={'phone'} value={props.lecturer.phone}  readOnly={props.isEditing}  />
                    <label>E-mail</label>
                    <input type="text" className="form-control" onChange={props.onChange} name={'email'} value={props.lecturer.email}  readOnly={props.isEditing} />
                    <button className="first-btn" >Save</button>
                    <Link to="/lecturers" ><button className="back-btn">Back</button> </Link>
                </form>
                
            </div>
       );
}
