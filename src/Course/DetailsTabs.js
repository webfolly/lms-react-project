import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class DetailsTabs extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render(){
        return (
            <div className="tab-content">
            <div id="Summary" className="tab-pane fade in active">
                <div className="table-responsive panel">
                    <table className="table">
                        <tbody>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-group"></i> Course ID
                            </td>
                            <td>1.</td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-group"></i> Course Name
                            </td>
                            <td>Full Stack 101</td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-group"></i> Description
                            </td>
                            <td>Learn with us.</td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-calendar"></i> Start Date
                            </td>
                            <td>2017.10.12</td>
                        </tr>
                        <tr>
                            <td className="text-success"><i
                                className="fa fa-calendar"></i> End Date
                            </td>
                            <td>2018.10.12</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>   
            </div>           
        )
    }
}