import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StudentDetailView from "./StudentDetailView";
import avatar from '../images/img_avatar2.png';

export default class StudentCard extends Component {


    render() {
        return (
            <div className='col-sm-3 col-md-3 col-lg-3'>
                <div className="card" style={{width: '100%', marginTop: '15px'}}>
                    <img src={avatar} alt="Avatar" style={{width: '100%'}}/>
                    <div className="container">
                        <h4><b>{this.props.student.name}</b></h4>
                        <div>Interior Designer</div>
                        <p>Students Views</p>
                        <p>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <Link to={`/students/detail/view/${this.props.student.id}`}
                                      className="btn btn-success btn-sm btn-default"><i
                                    className="fa fa-eye fa-1x"></i></Link>
                                <Link to={`/students/detail/edit/${this.props.student.id}`}
                                      className="btn btn-success btn-sm btn-default"><i
                                    className="fa fa-edit fa-1x"></i></Link>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        );

    }
}