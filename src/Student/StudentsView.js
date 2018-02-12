import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StudentCard from "./StudentCard";

export default class StudentsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {id: 1, name: 'Mike Nud', gender: 'm'},
                {id: 2, name: 'Luke Lanny', gender: 'm'},
                {id: 3, name: 'Joe Danny', gender: 'm'},
                {id: 4, name: 'John Bon', gender: 'm'},
                {id: 4, name: 'Peter Latasha', gender: 'm'}
            ]
        }
    }


    render() {

        return (

            <div className={'container-fluid'}>
                <div className='row'>
                    <div className='pull-right'>
                        <Link className='btn btn-success' to={`/students/detail/create/0`} >+ Create</Link>
                    </div>
                </div>
                {this.state.students.map(function (s) {
                    return <StudentCard key={s.id} student={s}/>
                })
                }


            </div>
        );

    }


}