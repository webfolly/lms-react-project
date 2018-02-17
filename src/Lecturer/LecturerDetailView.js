import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import {lecturer} from '../lecturerdata';
//import DetailForm from './DetailForm'; 
//import avatar from '../images/img_avatar2.png';
//import lecturer from '../api/lecturer';

//import {fetchLecturers,  fetchLecturersByID} from '../api/lecturer';
import {fetchLecturers, fetchLecturersByID, deleteLecturerByID, updateLecturerByID, createLecturer} from '../api/lecturer';

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
            lecturer: {},
            error: null,
            isLoading: false,
            isEditing: false,
            isSaving: false
        };
        //this.handleChange = this.handleChange.bind(this);
       // this.loadLecturerDetail = this.loadLecturerDetail.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.GetLecturersByID = this.GetLecturersByID.bind(this);
    }

    // loadLecturerDetail() {
    //     let action = this.props.match.params.action;
    //     if(action == 'edit'){
    //         this.setState({
    //             id: this.props.match.params.id,
    //             inputState: 'readOnly',
    //             isEditing: true,
    //             isSaving:
    //                 false,
    //             isLoading:
    //                 false,
    //             lecturer: {
    //                 id: 1,
    //                 name: 'Jane Hunter',
    //                 occupation: 'Professor',
    //                 school: 'School of Information Technology and Electrical Engineering',
    //                 faculty: 'Faculty of Engineering, Architecture and Information Technology',
    //                 phone: '+61 7 336 51092',
    //                 email: 'jane@itee.uq.edu.au'
    //             }
    //         });

    //     } else if (action === 'view') {
    //             this.setState({
    //                 id: this.props.match.params.id,   
    //                 inputState: 'readOnly',
    //                 isEditing: false,
    //                 isSaving:
    //                     false,
    //                 isLoading:
    //                     false,
    //                  lecturer: {
    //                      id: 1,
    //                      name: 'Jane Hunter',
    //                      occupation: 'Professor',
    //                      school: 'School of Information Technology and Electrical Engineering',
    //                      faculty: 'Faculty of Engineering, Architecture and Information Technology',
    //                      phone: '+61 7 336 51092',
    //                      email: 'jane@itee.uq.edu.au'
    //                 }
    //             });
    //         } else {
    //             this.setState({
    //                 id: this.props.match.params.id,    
    //                 inputState: 'readOnly',
    //                 isEditing: true,
    //                 isSaving:
    //                     false,
    //                 isLoading:
    //                     false,
    //                 lecturer: {
    //                     id: '',
    //                     name: '',
    //                     occupation: '',
    //                     school: '',
    //                     faculty: '',
    //                     phone: '',
    //                     email: ''
    //                 }
    //             });
    //     }
    // }
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
        // fetchLecturers()
        // .then(
        //     data => this.setState({lecturers: data}))
        // .catch(function (error) {
        //     if(error.response) {
        //         console.log("There is an error in the lecturer data", error)
        //     }
        // } )    


        // fetchLecturersByID(this.state.lecturers)
        // .then(
        //     data1 => this.setState({lecturers: data1.id}))
        // .catch(function (error) {
        //     console.log("There is an error in the lecuturer in the lecturer id data", error)
        // })
        //this.loadLecturerDetail();
    }

    componentWillUpdate() {
        let action = this.props.match.params.action;
        if (action === 'edit') {

        } else if (action === 'saving') {

        }
    }

    // handleLecturerDetailViewData(data) {
    //     let lecturerdata  = [];
    //     console.log('got lecturerdata  from api:', data);
    //     for(let i=0; i<5; i++){
    //         lecturerdata[i] = {name: data[i].name, occupation: data[i].occupation, school: data[i].school, faculty: data[i].faculty, phone: data[i].phone, email: data[i].email}
    //     }
    //     this.setState({lecturers})
        

    // }

    // renderDetailView() {
    //     const lecturer = this.state.lecturer;
    //     return (
    //         <DetailForm lecturer={lecturer}/>
    //         );        
    // }

    render() {
        return this.state.isEditing ? <LecturerDetailEdit lecturer={this.state.lecturer} onChange={this.handleChange} onSubmit={this.handleSubmit}/> : <LecturerDetailsDisplay lecturer={this.state.lecturer} onClick={this.handleClick} onChange={this.handleChange}/>
        // const {isLoading, isEditing, lecturer} = this.state;
        // if(isLoading) {
        //    return(<h2>Loading...</h2>)
       // let object = ('view' === this.props.action);
        //let object = this.state;
       // let action = 'view';
        //this.state.action = action;
       
        //console.log(this.state.action);
        //const lecturer = this.state.lecturer;
        // if(action === 'view') {
        //     return <DetailForm  lecturer={this.state.lecturer} object={object} action={'view'}/>
        // }
        // if (action === 'edit') {
        //     return <DetailForm  lecturer={this.state.lecturer} object={object} action={'edit'}/>
        // } else if (action === 'create') {
        //     return <DetailForm object={{
        //         id: this.props.match.params.id,
        //         action: this.props.match.params.action,
        //         isEditing: true,
        //         isSaving:
        //             false,
        //         isLoading:
        //             false,
        //         lecturer: {
        //             name: '',
        //             id: '',
        //             payroll: ''
        //         }
        //     }} action={'create'}/>
        // }
        //return(
            // <div className="form-group">
            //         <form>
            //             <label>Name</label>
            //             <input type="text" className="form-control"  value={lecturer[0].name || ''} name="code" />
            //             <label>Occupation</label>
            //             <input type="text" className="form-control"  value={lecturer[0].occupation || ''} name="code"  />
            //             <label>School</label>
            //             <input type="text" className="form-control"  value={lecturer[0].school || ''} name="code"  />
            //             <label>Faculty</label>
            //             <input type="text" className="form-control"  value={lecturer[0].faculty || ''} name="code" />
            //             <label>Phone</label>
            //             <input type="text" className="form-control"  value={lecturer[0].phone || ''} name="code"  />
            //             <label>E-mail</label>
            //             <input type="text" className="form-control"  value={lecturer[0].email || ''} name="code" />
            //         </form>
            //     </div>
        //);
        //return this.renderDetailView()
        //return <DetailForm object={object} />
    }
}


function LecturerDetailsDisplay(props) {
   
            return(
           
            <div className="form-group">
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
                    <button className="lecturer-details-btn" onClick={props.onClick}>Edit</button>
                    <Link to="/lecturers" ><button className="lecturer-details-btn">Back</button> </Link>
                </form>
                
            </div>
       );
}

function LecturerDetailEdit(props) {
    //const lecturers = props.lecturers;
            return(
           
            <div className="form-group">
                <form>
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
                    <button className="lecturer-details-btn" >Save</button>
                    <Link to="/lecturers" ><button className="lecturer-details-btn">Back</button> </Link>
                </form>
                
            </div>
       );
}

function Input (props){
    return(
        <div className="input-wrapper">
            <label className="input-label" htmlFor={props.htmlFor}>{props.labelText}</label>
            <br/>
            <input className="input-component border-bottom" type={props.type} name={props.name} value={props.value} onChange={props.onChange} />
        </div>
    );
}