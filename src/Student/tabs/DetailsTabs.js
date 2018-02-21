import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';


export default class DetailsTabs extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="row panel panel-success" style={{marginTop: "2%", marginLeft: 0, marginRight: 0}}>
                        <div className="panel-heading lead">
                            <div className="row">
                                <div className="col-lg-8 col-md-8"><i className="fa fa-users"></i> {this.props.action.toString().charAt(0).toUpperCase()+this.props.action.toString().slice(1)} Student Details
                                </div>
                            </div>
                        </div>
                        <div className="panel-body">

                            <div className="row">
                                <div className="col-lg-12 col-md-12">

                                    <div className="row">
                                        <div className="col-lg-3 col-md-3">
                                            <center>
                                        <span className="text-left">
                                        <img alt={this.props.student.firstName}
                                            src="https://lh5.googleusercontent.com/proxy/EkYugv9KzLUfAIpv-P4g6b0_mKxhcsfTvNmVueDn6XDHQp_SA0_hG2YFVAwB0Lbj_S-LrT-OtYsvxXMCrkZZMCmBfwelTQaAZW6GZwMQ8bRLwEvZonc0k0NxUpkhLBDuApx25K735rZfyHCIqA1RVpSdU84HF7U-j3xAwt3XLevAJtr5pwaVnRUC=w120-h120"
                                            className="img-responsive img-thumbnail"/>


                                            <div className="modal fade" id="PhotoOption" tabindex="-1" role="dialog"
                                                 aria-labelledby="myModalLabel" aria-hidden="true"
                                                 style={{display: 'none'}}>
                                                <div className="modal-dialog" style={{width: '30%', height: '30%'}}>
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <button type="  " className="close" data-dismiss="modal"
                                                                    aria-hidden="true">×</button>
                                                            <h4 className="modal-title text-success"
                                                                id="myModalLabel"><i
                                                                className="fa fa-gear"></i> <span
                                                                className="text-right">Viddhyut Mall</span></h4>
                                                        </div>
                                                        <div className="modal-body">
    <center><img alt={this.props.student.firstName} src="upload/profile_pic/701b4263f7d38604699b7c1f89a3e6a6.jpg"
                 className="img-responsive img-thumbnail"/></center>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <Link to="upload/upload-view.php?id=68"
                                                                  className="btn btn-success"><i
                                                                className="fa fa-photo"></i> Upload</Link>
                                                            <Link
                                                                to="upload/upload-view.php?id=68&amp;name=Viddhyut Mall&amp;src=view"
                                                                className="btn btn-danger"><i
                                                                className="fa fa-trash"></i> Delete</Link>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                    </span></center>



                                        </div>
                                        <div className="col-lg-9 col-md-9">
                                            <ul className="nav nav-tabs">
                                                <li className="active"><Link data-toggle="tab" to="#Summary"
                                                                             className="text-success"><i
                                                    className="fa fa-indent"></i> Summary</Link></li>
                                                <li><Link data-toggle="tab" to="#Contact" className="text-success"><i
                                                    className="fa fa-bookmark-o"></i> Contact Info</Link></li>
                                                <li><Link data-toggle="tab" to="#Address" className="text-success"><i
                                                    className="fa fa-home"></i> Address</Link></li>
                                                <li><Link data-toggle="tab" to="#General" className="text-success"><i
                                                    className="fa fa-info"></i> General Info</Link></li>
                                            </ul>


                                            <div className="tab-content">
                                                <div id="Summary" className="tab-pane fade in active">

                                                    <div className="table-responsive panel">
                                                        <table className="table">
                                                            <tbody>

                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="fa fa-user"></i> First Name
                                                                </td>
                                                                <td><input
                                                                    className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                    type={'text'}
                                                                    name={'firstName'}
                                                                    value={this.props.student.firstName}
                                                                    onChange={this.props.callback}
                                                                    readOnly={this.props.action === 'view'}/></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="fa fa-user"></i> Last Name
                                                                </td>
                                                                <td><input
                                                                    className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                    type={'text'}
                                                                    name={'lastName'}
                                                                    value={this.props.student.lastName}
                                                                    onChange={this.props.callback}
                                                                    readOnly={this.props.action === 'view'}/></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="fa fa-user"></i> Gender
                                                                </td>
                                                                <td><input
                                                                    className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                    type={'text'}
                                                                    name={'gender'} value={this.props.student.gender}
                                                                    onChange={this.props.callback}
                                                                    readOnly={this.props.action === 'view'}/></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="fa fa-list-ol"></i>Student code
                                                                </td>
                                                                <td><input type={'text'} name={'studentcode'}
                                                                           className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                           onChange={this.props.callback}
                                                                           value={this.props.student.studentCode}
                                                                           readOnly={this.props.action === 'view'}/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="fa fa-book"></i> Language
                                                                </td>
                                                                <td><input type={'text'} name={'language'}
                                                                           className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                           onChange={this.props.callback}
                                                                           value={this.props.student.language}
                                                                           readOnly={this.props.action === 'view'}/>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="fa fa-calendar"></i> Birthday
                                                                </td>
                                                                <td><input type={'text'} name={'birthday'}
                                                                           className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                           onChange={this.props.callback}
                                                                           value={this.props.student.birthday}
                                                                           readOnly={this.props.action === 'view'}/>
                                                                </td>
                                                            </tr>


                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div id="Address" className="tab-pane fade">
                                                    <div className="table-responsive panel">
                                                        <table className="table">
                                                            <tbody>

                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="fa fa-home"></i> Address
                                                                </td>
                                                                <td>

                                                                    <input type={'text'} name={'address'}
                                                                           className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                           onChange={this.props.callback}
                                                                           value={this.props.student.address}
                                                                           readOnly={this.props.action === 'view'}/>

                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="fa fa-home"></i> City/Suburb
                                                                </td>
                                                                <td>

                                                                    <input type={'text'} name={'city_Suburb'}
                                                                           className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                           onChange={this.props.callback}
                                                                           value={this.props.student.city_Suburb}
                                                                           readOnly={this.props.action === 'view'}/>

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="fa fa-home"></i> State
                                                                </td>
                                                                <td>

                                                                    <input type={'text'} name={'state'}
                                                                           className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                           onChange={this.props.callback}
                                                                           value={this.props.student.state}
                                                                           readOnly={this.props.action === 'view'}/>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="fa fa-home"></i> Country
                                                                </td>
                                                                <td>

                                                                    <input type={'text'} name={'country'}
                                                                           className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                           onChange={this.props.callback}
                                                                           value={this.props.student.country}
                                                                           readOnly={this.props.action === 'view'}/>

                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div id="Contact" className="tab-pane fade">
                                                    <div className="table-responsive panel">
                                                        <table className="table">
                                                            <tbody>

                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="fa fa-envelope-o"></i> Email ID
                                                                </td>
                                                                <td>
                                                                    <input type={'text'} name={'email'}
                                                                           className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                           onChange={this.props.callback}
                                                                           value={this.props.student.email}
                                                                           readOnly={this.props.action === 'view'}/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="glyphicon glyphicon-phone"></i> Mobile
                                                                    Number
                                                                </td>
                                                                <td><input type={'text'} name={'mobile'}
                                                                           className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                           onChange={this.props.callback}
                                                                           value={this.props.student.mobile}
                                                                           readOnly={this.props.action === 'view'}/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="fa fa-flag"></i> Nationality
                                                                </td>
                                                                <td><input type={'text'} name={'nationality'}
                                                                           className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                           onChange={this.props.callback}
                                                                           value={this.props.student.nationality}
                                                                           readOnly={this.props.action === 'view'}/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="fa fa-user"></i> Emergency Contact Person
                                                                </td>
                                                                <td><input type={'text'} name={'emergencyPerson'}
                                                                           className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                           onChange={this.props.callback}
                                                                           value={this.props.student.emergencyPerson}
                                                                           readOnly={this.props.action === 'view'}/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="glyphicon glyphicon-phone"></i> Emergency
                                                                    Contact
                                                                    Person's Mobile
                                                                </td>
                                                                <td><input type={'text'} name={'emergencyMobile'}
                                                                           className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                           onChange={this.props.callback}
                                                                           value={this.props.student.emergencyMobile}
                                                                           readOnly={this.props.action === 'view'}/>
                                                                </td>
                                                            </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div id="General" className="tab-pane fade">
                                                    <div className="table-responsive panel">
                                                        <table className="table">
                                                            <tbody>
                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="fa fa-calendar"></i> Date
                                                                    of Admission
                                                                </td>
                                                                <td><input type={'text'} name={'dateAdmission'}
                                                                           className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                           onChange={this.props.callback}
                                                                           value={this.props.student.dateAdmission}
                                                                           readOnly={this.props.action === 'view'}/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="fa fa-calendar"></i> Academic Year
                                                                </td>
                                                                <td><input type={'text'} name={'academicYear'}
                                                                           className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                           onChange={this.props.callback}
                                                                           value={this.props.student.academicYear}
                                                                           readOnly={this.props.action === 'view'}/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="fa fa-medkit"></i> Medical Condition
                                                                </td>
                                                                <td><input type={'text'} name={'medicalCondition'}
                                                                           className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                           onChange={this.props.callback}
                                                                           value={this.props.student.medicalCondition}
                                                                           readOnly={this.props.action === 'view'}/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-success"><i
                                                                    className="fa fa-thumbs-up"></i> Active/Inactive
                                                                </td>
                                                                <td><input type={'text'} name={'active'}
                                                                           className={(this.props.action !== 'create') ? 'noborder-inputText' : ''}
                                                                           onChange={this.props.callback}
                                                                           value={this.props.student.active}
                                                                           readOnly={this.props.action === 'view'}/>
                                                                </td>
                                                            </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='pull-left'>
                        <div className='btn-group'>
                            <Link className='btn btn-info' to={'/students'}>Back</Link>
                            <input type={'submit'} className='btn btn-success' value={'Save'}/>
                        </div>
                    </div>
                </form>
            </div>

        );

    }
}