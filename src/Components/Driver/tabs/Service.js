import React from 'react';
import {Table,Button,Modal} from 'react-bootstrap';
import axios from 'axios';
import '../../../css/index.css'
import API from "../../../Constant/api";

export class Service extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            new_show: false,
            update_show: false,
            del_show: false,
            UserID:'',
            ReportID:'',
            Report_Type:'',
            Issue:'',
            DeviceID:'',
            Device:'',
            Report_Date:'',
            Status:'',
            ServicedBY:'',
            BusID:'',

            new_UserID:'',
            new_ReportID:'',
            new_Report_Type:'',
            new_Issue:'',
            new_DeviceID:'',
            new_Device:'',
            new_Report_Date:'',
            new_Status:'',
            new_ServicedBY:'',
            new_BusID:'',
        };
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleHide() {
        this.setState({del_show: false,update_show:false,new_show:false});
    }

    onInsertStop(){

        const InserData =  {

            "UserID": this.state.new_UserID,
            "ReportID": this.state.new_ReportID,
            "Report_Type": this.state.new_Report_Type,
            "Issue": this.state.new_Issue,
            "DeviceID": this.state.new_DeviceID,
            "Device": this.state.new_Device,
            "Report_Date": this.state.new_Report_Date,
            "Status": this.state.new_Status,
            "ServicedBY": this.state.new_ServicedBY,
            "BusID": this.state.new_BusID,
        };

        console.log("new_BusID",this.state.new_BusID);

        axios({
            method: 'post',
            url: 'http://localhost:5000/reportservice',
            data: InserData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);

                    window.location.reload();
                }
            })
            .catch(function (response) {
                console.log(response);
            });
    }

    onUpdateStop(){

        const InserData =  {

            "UserID": this.state.UserID,
            "ReportID": this.state.ReportID,
            "Report_Type": this.state.Report_Type,
            "Issue": this.state.Issue,
            "DeviceID": this.state.DeviceID,
            "Device": this.state.Device,
            "Report_Date": this.state.Report_Date,
            "Status": this.state.Status,
            "ServicedBY": this.state.ServicedBY,
            "BusID": this.state.BusID,
        };

        console.log("ReportID",this.state.ReportID);

        axios({
            method: 'put',
            url: `http://localhost:5000/reportservice/${this.state.ReportID}`,
            data: InserData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);
                    console.log(response.data);
                    window.location.reload()
                }
            })
            .catch(function (response) {
                console.log(response);
            });
    }

    onDeleteStops(){

        console.log("ReportID",this.state.ReportID);

        API.delete(`reportservice/${this.state.ReportID}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location.reload();
            });
    }

    render() {
        return (
            <div>
                <Table responsive className="table-view" bordered hover>
                    <thead>
                    <tr className="th-view">
                        <th>UserID</th>
                        <th>ReportID</th>
                        <th>Report_Type</th>
                        <th>Issue</th>
                        <th>Device ID</th>
                        <th>Device</th>
                        <th>Report_Date</th>
                        <th>Status</th>
                        <th>Serviced BY</th>
                        <th className="th-button-view"></th>
                        <th className="th-button-view"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.services.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{this.props.services[index].UserID}</td>
                                <td>{this.props.services[index].ReportID}</td>
                                <td>{this.props.services[index].Report_Type}</td>
                                <td>{this.props.services[index].Issue}</td>
                                <td>{this.props.services[index].DeviceID}</td>
                                <td>{this.props.services[index].Device}</td>
                                <td>{this.props.services[index].Report_Date}</td>
                                <td>{this.props.services[index].Status}</td>
                                <td>{this.props.services[index].ServicedBY}</td>
                                <td><Button bsStyle="success" onClick={() => this.setState({
                                    update_show: true,
                                    UserID:this.props.services[index].UserID,
                                    ReportID:this.props.services[index].ReportID,
                                    Report_Type:this.props.services[index].Report_Type,
                                    Issue:this.props.services[index].Issue,
                                    DeviceID:this.props.services[index].DeviceID,
                                    Device:this.props.services[index].Device,
                                    Report_Date:this.props.services[index].Report_Date,
                                    Status:this.props.services[index].Status,
                                    ServicedBY:this.props.services[index].ServicedBY})}>edit</Button>
                                </td>
                                <td><Button bsStyle="danger" onClick={()=>{this.setState({
                                    ReportID:this.props.services[index].ReportID,
                                    del_show:true})}}>delete</Button></td>
                            </tr>
                        )})}
                    </tbody>
                </Table>

                <Button bsStyle="info" style={{marginLeft:30}} onClick={()=>this.setState({new_show:true})}>New</Button>

                <Modal
                    show={this.state.new_show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            New Service
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>UserID</label>
                        <input type="text" name="new_UserID"
                               value={this.state.new_UserID} onChange={this.handleChange.bind(this)} /><br/>
                        <label>ReportID</label>
                        <input type="text" name="new_ReportID" value={this.state.new_ReportID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Report_Type</label>
                        <input type="text" name="new_Report_Type" value={this.state.new_Report_Type} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Issue</label>
                        <input type="text" name="new_Issue" value={this.state.new_Issue} onChange={this.handleChange.bind(this)}/><br/>
                        <label>DeviceID</label>
                        <input type="text" name="new_DeviceID" value={this.state.new_DeviceID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Device</label>
                        <input type="text" name="new_Device" value={this.state.new_Device} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Report_Date</label>
                        <input type="text" name="new_Report_Date" value={this.state.new_Report_Date} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Status</label>
                        <input type="text" name="new_Status" value={this.state.new_Status} onChange={this.handleChange.bind(this)}/><br/>
                        <label>ServicedBY</label>
                        <input type="text" name="new_ServicedBY" value={this.state.new_ServicedBY} onChange={this.handleChange.bind(this)}/><br/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.onInsertStop.bind(this)}>Save</Button>
                        <Button onClick={()=>{this.setState({new_show:false})}}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal
                    show={this.state.update_show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Update Service
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>UserID</label>
                        <input type="text" name="UserID"
                               value={this.state.UserID} onChange={this.handleChange.bind(this)} /><br/>
                        <label>ReportID</label>
                        <input type="text" name="ReportID" value={this.state.ReportID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Report_Type</label>
                        <input type="text" name="Report_Type" value={this.state.Report_Type} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Issue</label>
                        <input type="text" name="Issue" value={this.state.Issue} onChange={this.handleChange.bind(this)}/><br/>
                        <label>DeviceID</label>
                        <input type="text" name="DeviceID" value={this.state.DeviceID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Device</label>
                        <input type="text" name="Device" value={this.state.Device} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Report_Date</label>
                        <input type="text" name="Report_Date" value={this.state.Report_Date} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Status</label>
                        <input type="text" name="Status" value={this.state.Status} onChange={this.handleChange.bind(this)}/><br/>
                        <label>ServicedBY</label>
                        <input type="text" name="ServicedBY" value={this.state.ServicedBY} onChange={this.handleChange.bind(this)}/><br/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.onUpdateStop.bind(this)}>Save</Button>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal
                    show={this.state.del_show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Delete Bus Route Fare
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        Are you really remove this data?
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.onDeleteStops.bind(this)}>Save</Button>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}