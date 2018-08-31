import React from 'react';
import {Table,Button,Modal} from 'react-bootstrap';

import '../../../css/index.css'

export class RideDetails extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false,
        };
    }

    handleHide() {
        this.setState({ show: false });
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        return (
            <div>
                <Table responsive className="table-view" bordered hover>
                    <thead>
                    <tr className="th-view">
                        <th>CardID</th>
                        <th>BusRoute</th>
                        <th>BusID</th>
                        <th>Entry</th>
                        <th>Exit</th>
                        <th>FareCharged</th>
                        <th>Travel_Date</th>
                        <th>Entry_Time</th>
                        <th>Exit_Time</th>
                        <th>Entry_CardReaderID</th>
                        <th>Exit_CardReaderID</th>
                        <th>Fare_Type</th>
                        <th className="th-button-view"></th>
                        <th className="th-button-view"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.rideDetails.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{this.props.rideDetails[index].CardID}</td>
                                <td>{this.props.rideDetails[index].BusRoute}</td>
                                <td>{this.props.rideDetails[index].BusID}</td>
                                <td>{this.props.rideDetails[index].Entry}</td>
                                <td>{this.props.rideDetails[index].Exit}</td>
                                <td>{this.props.rideDetails[index].FareCharged}</td>
                                <td>{this.props.rideDetails[index].Travel_Date}</td>
                                <td>{this.props.rideDetails[index].Entry_Time}</td>
                                <td>{this.props.rideDetails[index].Exit_Time}</td>
                                <td>{this.props.rideDetails[index].Entry_CardReaderID}</td>
                                <td>{this.props.rideDetails[index].Exit_CardReaderID}</td>
                                <td>{this.props.rideDetails[index].Fare_Type}</td>
                                <td><Button bsStyle="success" onClick={() => this.setState({
                                    show: true,
                                    CardID:this.props.rideDetails[index].CardID,
                                    BusRoute:this.props.rideDetails[index].BusRoute,
                                    BusID:this.props.rideDetails[index].BusID,
                                    Entry:this.props.rideDetails[index].Entry,
                                    Exit:this.props.rideDetails[index].Exit,
                                    FareCharged:this.props.rideDetails[index].FareCharged,
                                    Travel_Date:this.props.rideDetails[index].Travel_Date,
                                    Entry_Time:this.props.rideDetails[index].Entry_Time,
                                    Exit_Time:this.props.rideDetails[index].Exit_Time,
                                    Entry_CardReaderID:this.props.rideDetails[index].Entry_CardReaderID,
                                    Exit_CardReaderID:this.props.rideDetails[index].Exit_CardReaderID,
                                    Fare_Type:this.props.rideDetails[index].Fare_Type,
                                })}>edit</Button></td>
                                <td><Button bsStyle="danger">delete</Button></td>
                            </tr>
                        )})}
                    </tbody>
                </Table>
                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Update Data
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>CardID</label>
                        <input type="text" name="CardID"
                               value={this.state.CardID} onChange={this.handleChange.bind(this)} /><br/>
                        <label>BusRoute</label>
                        <input type="text" name="BusRoute"
                               value={this.state.BusRoute} onChange={this.handleChange.bind(this)} /><br/>
                        <label>BusID</label>
                        <input type="text" name="BusID"
                               value={this.state.BusID} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Entry</label>
                        <input type="text" name="Entry"
                               value={this.state.Entry} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Exit</label>
                        <input type="text" name="Exit"
                               value={this.state.Exit} onChange={this.handleChange.bind(this)} /><br/>
                        <label>FareCharged</label>
                        <input type="text" name="FareCharged"
                               value={this.state.FareCharged} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Travel_Date</label>
                        <input type="text" name="Travel_Date"
                               value={this.state.Travel_Date} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Entry_Time</label>
                        <input type="text" name="Entry_Time"
                               value={this.state.Entry_Time} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Exit_Time</label>
                        <input type="text" name="Exit_Time"
                               value={this.state.Exit_Time} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Entry_CardReaderID</label>
                        <input type="text" name="Entry_CardReaderID"
                               value={this.state.Entry_CardReaderID} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Exit_CardReaderID</label>
                        <input type="text" name="Exit_CardReaderID"
                               value={this.state.Exit_CardReaderID} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Fare_Type</label>
                        <input type="text" name="Fare_Type"
                               value={this.state.Fare_Type} onChange={this.handleChange.bind(this)} /><br/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary">Save</Button>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}