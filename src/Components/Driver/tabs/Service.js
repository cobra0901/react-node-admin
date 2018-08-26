import React from 'react';
import {Table,Button,Modal} from 'react-bootstrap';

import '../../../css/index.css'

export class Service extends React.Component {

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