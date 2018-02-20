import React from 'react';
import {Link} from 'react-router-dom';

export default function Dashboard(props) {
    return (
        <div className="dashboard-container">
           <div className="row" style={{background:'#fff',borderStyle:'solid',borderColor:'#eee',borderWidth:1,marginLeft:'-5px'}}>
               <div className="col-xs-12"><h4>Quick Actions</h4></div>
           </div>
           <div className="row">
               <div className="col-md-3 col-sm-12 col-xs-12">
                    <Link to={'/courses/detail/create'} style={{textDecoration:'none',color:'#000'}}>
                        <div className="quick-actions-card">
                            <i className="fa fa-book" style={{color:'#555'}}></i>
                            <div className="quick-actions-card-title1"><i className="fa fa-plus-circle"></i> Add Course</div>
                            <div className="quick-actions-card-title2">Total Courses:20</div>
                        </div> 
                    </Link>
               </div>
               <div className="col-md-3 col-sm-12 col-xs-12">
                    <Link to={'/students/detail/create/0'} style={{textDecoration:'none',color:'#000'}}>
                        <div className="quick-actions-card">
                            <i className="fa fa-users" style={{backgroundColor:'#f86c6b',color:'#555'}}></i>
                            <div className="quick-actions-card-title1"><i className="fa fa-plus-circle"></i> Add Student</div>
                            <div className="quick-actions-card-title2">Total Students:120</div>
                        </div>
                    </Link>
               </div>
               <div className="col-md-3 col-sm-12 col-xs-12">
                    <Link to={'/lecturers/detail/create'} style={{textDecoration:'none',color:'#000'}}>
                        <div className="quick-actions-card">
                            <i className="fa fa-graduation-cap" style={{backgroundColor:'#A95DF0',color:'#555'}}></i>
                            <div className="quick-actions-card-title1"><i className="fa fa-plus-circle"></i> Add Lecturer</div>
                            <div className="quick-actions-card-title2">Total Lecturer:40</div>
                        </div>
                    </Link>
               </div>
               <div className="col-md-3 col-sm-12 col-xs-12">
                    <Link to={'/enrolment'} style={{textDecoration:'none',color:'#000'}}>
                        <div className="quick-actions-card">
                            <i className="fa fa-calendar" style={{backgroundColor:'#00CE6F',color:'#555'}}></i>
                            <div className="quick-actions-card-title1"><i className="fa fa-plus-circle"></i> Enrollment</div>
                            <div className="quick-actions-card-title2">Courses to Enroll:2</div>
                        </div>
                    </Link>
               </div>
           </div>
           <div className="row">
               <div className="col-md-4 col-sm-12 col-xs-12">
                    <div className="panel100">
                        <div className="panel-heading"> <i className="fa fa-book"></i> Course Status</div>
                        <a href="somewhere" className="list-group-item border-bottom">
                            <div className="item-wrapper">
                                <div className="dashboard-item-left" style={{backgroundColor:'#00CE6F'}}>
                                    <p>10</p>
                                    <div>Courses</div>
                                </div>
                                <div className="dashboard-item-right">
                                    <p>With no Enrolment</p>
                                    <p style={{color:'#DB0630'}}><i className="fa fa-plus-circle" style={{marginLeft:2,marginRight:2}}></i>Register</p>
                                </div>
                            </div>
                        </a>
                        <a href="somewhere" className="list-group-item" style={{borderLeft:'none',borderRight:'none'}}>
                            <div className="item-wrapper">
                                <div className="dashboard-item-left" style={{backgroundColor:'#f86c6b'}}>
                                    <p>25</p>
                                    <div>Courses</div>
                                </div>
                                <div className="dashboard-item-right">
                                    <p>With no Learning Material</p>
                                    <p style={{color:'#00CE6F'}}><i className="fa fa-plus-circle" style={{marginLeft:2,marginRight:2}}></i>Add now</p>
                                </div>
                            </div>
                        </a>
                        <a href="somewhere" className="list-group-item" style={{borderLeft:'none',borderRight:'none'}}>
                            <div className="item-wrapper">
                                <div className="dashboard-item-left" style={{backgroundColor:'#2EA7EB'}}>
                                    <p>05</p>
                                    <div>Requests</div>
                                </div>
                                <div className="dashboard-item-right" >
                                    <p>With No Completion</p>
                                    <p style={{color:'#A95DF0'}}><i className="fa fa-eye" style={{marginLeft:2,marginRight:2}}></i>View</p>
                                </div>
                            </div>
                        </a>
                        <a href="somewhere" className="list-group-item" style={{borderLeft:'none',borderRight:'none',borderBottom:'none'}}>
                            <div className="item-wrapper">
                                <div className="dashboard-item-left" style={{backgroundColor:'#A95DF0'}}>
                                    <p>10</p>
                                    <div>Requests</div>
                                </div>
                                <div className="dashboard-item-right">
                                    <p>Expiring Soon</p>
                                    <p style={{color:'#2EA7EB'}}><i className="fa fa-eye" style={{marginLeft:2,marginRight:2}}></i>View</p>
                                </div>
                            </div>
                        </a>
                    </div>
               </div>
               <div className="col-md-4 col-sm-12 col-xs-12">
                    <div className="panel100">
                        <div className="panel-heading">
                            <i className="fa fa-bar-chart-o fa-fw"></i>Course Progress
                        </div>
                        <div className="panel-body" style={{paddingBottom:18}}>
                            <div>
                                <svg height="350" version="1.1" width="296" xmlns="http://www.w3.org/2000/svg">
                                    <desc className="wf-a">Created with Raphaël 2.1.0</desc>
                                    <defs className="wf-a"></defs>
                                    <path fill="none" stroke="#0b62a4" d="M147,282.3333333333333A91.33333333333333,91.33333333333333,0,0,0,233.35180688739524,220.75135669275903" strokeWidth="2" opacity="0" className=".wf-path"></path>
                                    <path fill="#0b62a4" stroke="#ffffff" d="M147,285.3333333333333A94.33333333333333,94.33333333333333,0,0,0,236.1881801063243,221.72859103668176L271.8004216328778,233.99831113260063A132,132,0,0,1,147,323Z" strokeWidth="3" className="wf-a"></path>
                                    <path fill="none" stroke="#3980b5" d="M233.35180688739524,220.75135669275903A91.33333333333333,91.33333333333333,0,0,0,65.0802706076015,150.61515489624878" strokeWidth="2" opacity="1" className="wf-path1"></path>
                                    <path fill="#3980b5" stroke="#ffffff" d="M236.1881801063243,221.72859103668176A94.33333333333333,94.33333333333333,0,0,0,62.38947657646432,149.28864538554163L24.120405911402244,130.42273234437317A137,137,0,0,1,276.52771033109286,235.62703503913855Z" strokeWidth="3" className="wf-a"></path>
                                    <path fill="none" stroke="#679dc6" d="M65.0802706076015,150.61515489624878A91.33333333333333,91.33333333333333,0,0,0,146.97130678756912,282.33332882621403" strokeWidth="2" opacity="0" className="wf-path0"></path>
                                    <path fill="#679dc6" stroke="#ffffff" d="M62.38947657646432,149.28864538554163A94.33333333333333,94.33333333333333,0,0,0,146.97036430978855,285.33332867816995L146.95853097765465,322.99999348606116A132,132,0,0,1,28.60506262996421,132.6335815288851Z" strokeWidth="3" className="wf-a"></path>
                                    <text x="147" y="181" textAnchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" className="wf-text" fontSize="15px" fontWeight="800" transform="matrix(1.4267,0,0,1.4267,-62.7153,-81.9183)" strokeWidth="0.7009390206812651">
                                        <tspan dy="6" className="wf-a">In Progress</tspan>
                                    </text>
                                    <text x="147" y="201" textAnchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#000000" className="wf-text1" fontSize="14px" transform="matrix(1.9028,0,0,1.9028,-132.793,-174.2361)" strokeWidth="0.5255474452554745">
                                        <tspan dy="5" className="wf-a">30</tspan>
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
               </div>
               <div className="col-md-4 col-sm-12 col-xs-12">
                    <div className="panel100">
                        <div className="panel-heading"><i className="fa fa-bell"></i> Notifications </div>
                        <div className="panel-body" style={{paddingBottom:0}}>
                            <div className="list-group" style={{marginBottom:10}}>
                                <a href="somewhere" className="list-group-item">
                                    <i className="fa fa-comment fa-fw"></i>New Comment
                                    <span className="pull-right text-muted small"><em>4 minutes ago</em>
                                    </span>
                                </a>
                                <a href="somewhere" className="list-group-item">
                                    <i className="fa fa-users"></i>Student Added
                                    <span className="pull-right text-muted small"><em>12 minutes ago</em>
                                    </span>
                                </a>
                                <a href="somewhere" className="list-group-item">
                                    <i className="fa fa-envelope fa-fw"></i>Message Sent
                                    <span className="pull-right text-muted small"><em>27 minutes ago</em>
                                    </span>
                                </a>
                                <a href="somewhere" className="list-group-item">
                                    <i className="fa fa-tasks fa-fw"></i>New Task
                                    <span className="pull-right text-muted small"><em>43 minutes ago</em>
                                    </span>
                                </a>
                                <a href="somewhere" className="list-group-item">
                                    <i className="fa fa-upload fa-fw"></i>Student Enrolled
                                    <span className="pull-right text-muted small"><em>11:32 AM</em>
                                    </span>
                                </a>
                                <a href="somewhere" className="list-group-item">
                                    <i className="fa fa-bolt fa-fw"></i>New Course Added
                                    <span className="pull-right text-muted small"><em>11:13 AM</em>
                                    </span>
                                </a>
                                <a href="somewhere" className="list-group-item">
                                    <i className="fa fa-warning fa-fw"></i>New Lecturer Added
                                    <span className="pull-right text-muted small"><em>10:57 AM</em>
                                    </span>
                                </a>
                                <a href="somewhere" className="list-group-item">
                                    <i className="fa fa-shopping-cart fa-fw"></i>Course Assigned
                                    <span className="pull-right text-muted small"><em>9:49 AM</em>
                                    </span>
                                </a>
                                <a href="somewhere" className="btn btn-default btn-block">View All Alerts</a>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
    </div>
    );
}