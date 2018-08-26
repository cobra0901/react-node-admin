import React from 'react';
import {Table,Button,Modal} from 'react-bootstrap';

import '../../../css/index.css'

export class TopupHistory extends React.Component {

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
                        <th>CardID</th>
                        <th>BusRoute</th>
                        <th>BusID</th>
                        <th>Amount</th>
                        <th>Recharge_Date</th>
                        <th>Recharge_Time</th>
                        <th>Card Reader ID</th>
                        <th className="th-button-view"></th>
                        <th className="th-button-view"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.topupDetails.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{this.props.topupDetails[index].UserID}</td>
                                <td>{this.props.topupDetails[index].CardID}</td>
                                <td>{this.props.topupDetails[index].BusRoute}</td>
                                <td>{this.props.topupDetails[index].BusID}</td>
                                <td>{this.props.topupDetails[index].Amount}</td>
                                <td>{this.props.topupDetails[index].Recharge_Date}</td>
                                <td>{this.props.topupDetails[index].Recharge_Time}</td>
                                <td>{this.props.topupDetails[index].CardReaderID}</td>
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