import React from 'react';
import {Table,Button,Modal} from 'react-bootstrap';
import axios from 'axios';
import API from "../../../Constant/api";
import '../../../css/index.css'


export class ChangeRoute extends React.Component {

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
            "New_Route": this.state.new_New_Route,
            "TransferBusID": this.state.new_TransferBusID,
            "Report_Date": this.state.new_Report_Date,
            "Status": this.state.new_Status,
            "New_UserID": this.state.new_New_UserID,
        };

        console.log("new_BusID",this.state.new_Status);

        axios({
            method: 'post',
            url: 'http://localhost:5000/reportchangeroute',
            data: InserData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);

                    //window.location.reload();
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
            "New_Route": this.state.New_Route,
            "TransferBusID": this.state.TransferBusID,
            "Report_Date": this.state.Report_Date,
            "Status": this.state.Status,
            "New_UserID": this.state.New_UserID,
        };

        console.log("ReportID",this.state.ReportID);

        axios({
            method: 'put',
            url: `http://localhost:5000/reportchangeroute/${this.state.ReportID}`,
            data: InserData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);
                    console.log(response.data);
                  //  window.location.reload()
                }
            })
            .catch(function (response) {
                console.log(response);
            });
    }

    onDeleteStops(){

        console.log("ReportID",this.state.ReportID);

        API.delete(`reportchangeroute/${this.state.ReportID}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
               // window.location.reload();
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
                        <th>BusID</th>
                        <th>New_Route</th>
                        <th>TransferBusID</th>
                        <th>Report_Date</th>
                        <th>Status</th>
                        <th>New_UserID</th>
                        <th className="th-button-view"></th>
                        <th className="th-button-view"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.changeRoutes.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{this.props.changeRoutes[index].UserID}</td>
                                <td>{this.props.changeRoutes[index].ReportID}</td>
                                <td>{this.props.changeRoutes[index].Report_Type}</td>
                                <td>{this.props.changeRoutes[index].Bus_ID}</td>
                                <td>{this.props.changeRoutes[index].New_Route}</td>
                                <td>{this.props.changeRoutes[index].TransferBusID}</td>
                                <td>{this.props.changeRoutes[index].Report_Date}</td>
                                <td>{this.props.changeRoutes[index].Status}</td>
                                <td>{this.props.changeRoutes[index].New_UserID}</td>
                                <td><Button bsStyle="success" onClick={() => this.setState({
                                    update_show: true,
                                    UserID:this.props.changeRoutes[index].UserID,
                                    ReportID:this.props.changeRoutes[index].ReportID,
                                    Report_Type:this.props.changeRoutes[index].Report_Type,
                                    Bus_ID:this.props.changeRoutes[index].Bus_ID,
                                    New_Route:this.props.changeRoutes[index].New_Route,
                                    TransferBusID:this.props.changeRoutes[index].TransferBusID,
                                    Report_Date:this.props.changeRoutes[index].Report_Date,
                                    Status:this.props.changeRoutes[index].Status,
                                    New_UserID:this.props.changeRoutes[index].New_UserID})}>edit</Button>
                                </td>
                                <td><Button bsStyle="danger" onClick={()=>{this.setState({
                                    ReportID:this.props.changeRoutes[index].ReportID,
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
                            New Change Route
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
                        <label>New_Route</label>
                        <input type="text" name="new_New_Route" value={this.state.new_New_Route} onChange={this.handleChange.bind(this)}/><br/>
                        <label>TransferBusID</label>
                        <input type="text" name="new_TransferBusID" value={this.state.new_TransferBusID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Report_Date</label>
                        <input type="text" name="new_Report_Date" value={this.state.new_Report_Date} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Status</label>
                        <input type="text" name="new_Status" value={this.state.new_Status} onChange={this.handleChange.bind(this)}/><br/>
                        <label>New_UserID</label>
                        <input type="text" name="new_New_UserID" value={this.state.new_New_UserID} onChange={this.handleChange.bind(this)}/><br/>
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
                        <label>New_Route</label>
                        <input type="text" name="New_Route" value={this.state.New_Route} onChange={this.handleChange.bind(this)}/><br/>
                        <label>TransferBusID</label>
                        <input type="text" name="TransferBusID" value={this.state.TransferBusID} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Report_Date</label>
                        <input type="text" name="Report_Date" value={this.state.Report_Date} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Status</label>
                        <input type="text" name="Status" value={this.state.Status} onChange={this.handleChange.bind(this)}/><br/>
                        <label>New_UserID</label>
                        <input type="text" name="New_UserID" value={this.state.New_UserID} onChange={this.handleChange.bind(this)}/><br/>
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