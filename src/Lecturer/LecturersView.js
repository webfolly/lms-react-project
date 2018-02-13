import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TopNav from '../App/TopNav';
//import {Spinner} from '../UI/UIComponents';
import LecturerDetailView from "./LecturerDetailView";
import LecturerCard from "./LecturerCard";

//import {lecturer} from "../lecturerdata";
import '../styles';

import {fetchLecturers, fetchLecturersByID, deleteLecturerByID, updateLecturerByID, createLecturer} from '../api/lecturer';

export default class LecturersView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            lecturers: [],
            isLoading: false,
            isChecked: true
        };

        // this.handleLecturerData = this.handleLecturerData.bind(this);
        this.handleInputChage = this.handleInputChage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    GetLecturers() {
        this.setState({isLoading:true});
        fetchLecturers()
            .then(response => this.setState({lecturers:response.data, isLoading:false}))
            .catch(error => this.setState({error}));         
    }

    GetLecturersByID(id) {
        this.setState({isLoading:true});
        fetchLecturersByID(id)
            .then(response => this.setState({isLoading:false,lecturers:[response.data]}))
            .catch(error => this.setState({error}));
    }

    DeleteLecturerById(id) {
        this.setState({isLoading:true});
        deleteLecturerByID(id)
            .then(response => { if(response.status===200) this.setState({isLoading:false})})
            .catch(error => this.setState({error}));
    }

    handleClick(event){
        const name = event.target.name;
        const value = event.target.value;
        console.log(value);
        event.preventDefault();
        if(window.confirm(`Lecturer will be deleted.Confirm to continue..`)) {
            this.DeleteLecturerById(value);
        } 
    }

    handleInputChage(event){
        const target = event.target;
        const value = target.type === 'radio' ? (target.value==='id' ? target.checked:!target.checked) : target.value;
        const name = target.name;
        this.setState({[name]:value});
    }

    handleSubmit(event){
        event.preventDefault();
        if(this.state.idChecked) {
            this.state.searchString === '' ? this.GetLecturers() :this.GetLecturerById(this.state.searchString);
        }
    }

    componentWillMount() {
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

        this.GetLecturers();
    }

    // handleLecturerData(data) {
    //     let lecturerdata = [];
    //     console.log('got lecturer from api', data);
    //     for(let i=0; i<5; i++){
    //         lecturerdata[i] = {name: data[i].name, occupation: data[i].occupation, school: data[i].school, faculty: data[i].faculty, phone: data[i].phone, email: data[i].email}
    //     } 
    //     this.setState({lecturers})

    // }

    render() {
        if(this.state.isLoading){
            return null
        }else if(this.state.error){
            return <span>something error</span> 
        }else{
            return (
                <div className={'container-fluid'} >
                    {this.state.lecturers.map(function (l){
                        return <LecturerCard key={l.id} lecturer={l} />
                   
                        }
                    )
                }
                </div>    
            )
        }

    }
}