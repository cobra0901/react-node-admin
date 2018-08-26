import React from 'react';
import {Table,Button,Modal} from 'react-bootstrap';

import '../../../css/index.css'

export class ChangeDevice extends React.Component {

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