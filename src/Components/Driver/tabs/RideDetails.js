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

    render() {
        console.log(this.props.rideDetails,"Results");
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
                                <td><Button bsStyle="success" onClick={() => this.setState({ show: true })}>edit</Button></td>
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
                        This is editable Data.
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