import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StudentDetailView from "./StudentDetailView";
import avatar from '../images/img_avatar2.png';

export default class StudentsView extends Component {
    render() {
        return (
            <div className='col-sm-3 col-md-3 col-lg-3'>
                <div className="card" style={{width: '100%'}}>
                    <img src={avatar} alt="Avatar" style={{width: '100%'}}/>
                    <div className="container">
                        <h4><b>Jane Doe</b></h4>
                        <div>Interior Designer</div>
                        <p>Students Views</p>
                        <p><Link to={'/students/detail/2'}>Details</Link></p>
                    </div>
                </div>
            </div>
        );

    }
}