import React from 'react';
import {Table,Button,Modal} from 'react-bootstrap';
import axios from 'axios';
import API from "../../../Constant/api";
import '../../../css/index.css'

export class ChangeDevice extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            new_show: false,
            update_show: false,
            del_show: false,
        };
    }

    handleHide() {
        this.setState({del_show: false,update_show:false,new_show:false});
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    onInsertStop(){

        const InserData =  {

            "UserID": this.state.new_UserID,
            "ReportID": this.state.new_ReportID,
            "Report_Type": this.state.new_Report_Type,
            "Bus_ID": this.state.new_Bus_ID,
            "BusRoute": this.state.new_BusRoute,
            "Old_CardReaderID1": this.state.new_Old_CardReaderID1,
            "Old_CardReaderID2": this.state.new_Old_CardReaderID2,
            "Old_ControllerID": this.state.new_Old_ControllerID,
            "Old_AdPanelID": this.state.new_Old_AdPanelID,
            "New_CardReaderID1": this.state.new_New_CardReaderID1,
            "New_CardReaderID2": this.state.new_New_CardReaderID2,
            "New_ControllerID": this.state.new_New_ControllerID,
            "New_AdPanelID": this.state.new_New_AdPanelID,
            "Report_Date": this.state.new_Report_Date,
            "Status": this.state.new_Status,
        };

        console.log("new_BusID",this.state.new_Status);

        axios({
            method: 'post',
            url: 'http://localhost:5000/reportchangedevice',
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
            "Bus_ID": this.state.Bus_ID,
            "BusRoute": this.state.BusRoute,
            "Old_CardReaderID1": this.state.Old_CardReaderID1,
            "Old_CardReaderID2": this.state.Old_CardReaderID2,
            "Old_ControllerID": this.state.Old_ControllerID,
            "Old_AdPanelID": this.state.Old_AdPanelID,
            "New_CardReaderID1": this.state.New_CardReaderID1,
            "New_CardReaderID2": this.state.New_CardReaderID2,
            "New_ControllerID": this.state.New_ControllerID,
            "Report_Date": this.state.Report_Date,
            "New_AdPanelID": this.state.New_AdPanelID,
            "Status": this.state.Status,
        };

        console.log("ReportID",this.state.ReportID);

        axios({
            method: 'put',
            url: `http://localhost:5000/reportchangedevice/${this.state.ReportID}`,
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

        API.delete(`reportchangedevice/${this.state.ReportID}`)
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
                        <th>Bus_ID</th>
                        <th>BusRoute</th>
                        <th>Old_CardReaderID1</th>
                        <th>Old_CardReaderID2</th>
                        <th>Old_ControllerID</th>
                        <th>Old_AdPanelID</th>
                        <th>New_CardReaderID1</th>
                        <th>New_CardReaderID2</th>
                        <th>New_ControllerID</th>
                        <th>New_AdPanelID</th>
                        <th>Report_Date</th>
                        <th>Status</th>
                        <th className="th-button-view"></th>
                        <th className="th-button-view"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.changeDevices.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{this.props.changeDevices[index].UserID}</td>
                                <td>{this.props.changeDevices[index].ReportID}</td>
                                <td>{this.props.changeDevices[index].Report_Type}</td>
                                <td>{this.props.changeDevices[index].Bus_ID}</td>
                                <td>{this.props.changeDevices[index].BusRoute}</td>
                                <td>{this.props.changeDevices[index].Old_CardReaderID1}</td>
                                <td>{this.props.changeDevices[index].Old_CardReaderID2}</td>
                                <td>{this.props.changeDevices[index].Old_ControllerID}</td>
                                <td>{this.props.changeDevices[index].Old_AdPanelID}</td>
                                <td>{this.props.changeDevices[index].New_CardReaderID1}</td>
                                <td>{this.props.changeDevices[index].New_CardReaderID2}</td>
                                <td>{this.props.changeDevices[index].New_ControllerID}</td>
                                <td>{this.props.changeDevices[index].Report_Date}</td>
                                <td>{this.props.changeDevices[index].New_AdPanelID}</td>
                                <td>{this.props.changeDevices[index].Status}</td>
                                <td><Button bsStyle="success" onClick={() => this.setState({
                                    update_show: true,
                                    UserID:this.props.changeDevices[index].UserID,
                                    ReportID:this.props.changeDevices[index].ReportID,
                                    Report_Type:this.props.changeDevices[index].Report_Type,
                                    Bus_ID:this.props.changeDevices[index].Bus_ID,
                                    BusRoute:this.props.changeDevices[index].BusRoute,
                                    Old_CardReaderID1:this.props.changeDevices[index].Old_CardReaderID1,
                                    Old_CardReaderID2:this.props.changeDevices[index].Old_CardReaderID2,
                                    Old_AdPanelID:this.props.changeDevices[index].Old_AdPanelID,
                                    Old_ControllerID:this.props.changeDevices[index].Old_ControllerID,
                                    New_CardReaderID1:this.props.changeDevices[index].New_CardReaderID1,
                                    New_CardReaderID2:this.props.changeDevices[index].New_CardReaderID2,
                                    New_ControllerID:this.props.changeDevices[index].New_ControllerID,
                                    Report_Date:this.props.changeDevices[index].Report_Date,
                                    New_AdPanelID:this.props.changeDevices[index].New_AdPanelID,
                                    Status:this.props.changeDevices[index].Status})}>edit</Button>
                                </td>
                                <td><Button bsStyle="danger" onClick={()=>{this.setState({
                                    ReportID:this.props.changeDevices[index].ReportID,
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
                        <label>Bus_ID</label>
                        <input type="text" name="new_Bus_ID" value={this.state.new_Bus_ID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>BusRoute</label>
                        <input type="text" name="new_BusRoute" value={this.state.new_BusRoute} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Old_CardReaderID1</label>
                        <input type="text" name="new_Old_CardReaderID1" value={this.state.new_Old_CardReaderID1} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Old_CardReaderID2</label>
                        <input type="text" name="new_Old_CardReaderID2" value={this.state.new_Old_CardReaderID2} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Old_ControllerID</label>
                        <input type="text" name="new_Old_ControllerID" value={this.state.new_Old_ControllerID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Old_AdPanelID</label>
                        <input type="text" name="new_Old_AdPanelID" value={this.state.new_Old_AdPanelID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>New_CardReaderID1</label>
                        <input type="text" name="new_New_CardReaderID1" value={this.state.new_New_CardReaderID1} onChange={this.handleChange.bind(this)}/><br/>
                        <label>New_CardReaderID2</label>
                        <input type="text" name="new_New_CardReaderID2" value={this.state.new_New_CardReaderID2} onChange={this.handleChange.bind(this)}/><br/>
                        <label>New_ControllerID</label>
                        <input type="text" name="new_New_ControllerID" value={this.state.new_New_ControllerID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>New_AdPanelID</label>
                        <input type="text" name="new_New_AdPanelID" value={this.state.new_New_AdPanelID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Report_Date</label>
                        <input type="text" name="new_Report_Date" value={this.state.new_Report_Date} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Status</label>
                        <input type="text" name="new_Status" value={this.state.new_Status} onChange={this.handleChange.bind(this)}/><br/>
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
                        <label>Bus_ID</label>
                        <input type="text" name="Bus_ID" value={this.state.Bus_ID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>BusRoute</label>
                        <input type="text" name="BusRoute" value={this.state.BusRoute} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Old_CardReaderID1</label>
                        <input type="text" name="Old_CardReaderID1" value={this.state.Old_CardReaderID1} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Old_CardReaderID2</label>
                        <input type="text" name="Old_CardReaderID2" value={this.state.Old_CardReaderID2} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Old_ControllerID</label>
                        <input type="text" name="Old_ControllerID" value={this.state.Old_ControllerID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Old_AdPanelID</label>
                        <input type="text" name="Old_AdPanelID" value={this.state.Old_AdPanelID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>New_CardReaderID1</label>
                        <input type="text" name="New_CardReaderID1" value={this.state.New_CardReaderID1} onChange={this.handleChange.bind(this)}/><br/>
                        <label>New_CardReaderID2</label>
                        <input type="text" name="New_CardReaderID2" value={this.state.New_CardReaderID2} onChange={this.handleChange.bind(this)}/><br/>
                        <label>New_ControllerID</label>
                        <input type="text" name="New_ControllerID" value={this.state.New_ControllerID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>New_AdPanelID</label>
                        <input type="text" name="New_AdPanelID" value={this.state.New_AdPanelID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Report_Date</label>
                        <input type="text" name="Report_Date" value={this.state.Report_Date} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Status</label>
                        <input type="text" name="Status" value={this.state.Status} onChange={this.handleChange.bind(this)}/><br/>
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