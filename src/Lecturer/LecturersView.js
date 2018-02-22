import React, {Component} from 'react';
import LecturerCard from "./LecturerCard";
import TopNav from '../App/TopNav';
import '../styles';

import {fetchLecturers, fetchLecturersByID, deleteLecturerByID} from '../api/lecturer';

export default class LecturersView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            lecturers: [],
            isLoading: false,
            isChecked: true
        };

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

    GetLecturerByID(id) {
        this.setState({isLoading:true});
        fetchLecturersByID(id)
            .then(response =>{
                if(response.data) {
                    this.setState({isLoading:false,lecturers:[response.data]});
                }else{
                    alert('Lecturer not found!');
                    this.setState({isLoading:false});
                }   
            }) 
            .catch(error => this.setState({error}));
    }

    DeleteLecturerById(id) {
        this.setState({isLoading:true});
        deleteLecturerByID(id)
            .then(response => { if(response.status===200) this.setState({isLoading:false})})
            .catch(error => this.setState({error}));
    }

    handleClick(event){
 
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
            this.state.searchString === '' ? this.GetLecturers() :this.GetLecturerByID(this.state.searchString);
        }
    }

    componentDidMount() {
        this.GetLecturers();
    }


    render() {
        if(this.state.isLoading){
            return null
        }else if(this.state.error){
            return <span>something error</span> 
        }else{
            return ( 
                <div className={'container-fluid'} >
                <TopNav value={this.state.searchString} idChecked={this.state.idChecked} onInputChange={this.handleInputChage} onSubmit={this.handleSubmit} onClick={this.handleClick}/>
                    {this.state.lecturers.map(function (l){
                        console.log(l.id);
                        return (
                            <div>
                                <LecturerCard key={l.id} lecturer={l} />
                            </div>
                        ) 
                        
                        
                        }
                    )
                }
                </div>    
            )
        }

    }
}
