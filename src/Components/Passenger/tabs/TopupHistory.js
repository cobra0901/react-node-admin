import React from 'react';
import '../../../css/index.css'
import {Table,Button,Modal} from 'react-bootstrap';

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
                    {this.props.topuphistories.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{this.props.topuphistories[index].CardID}</td>
                                <td>{this.props.topuphistories[index].BusRoute}</td>
                                <td>{this.props.topuphistories[index].BusID}</td>
                                <td>{this.props.topuphistories[index].Entry}</td>
                                <td>{this.props.topuphistories[index].Exit}</td>
                                <td>{this.props.topuphistories[index].FareCharged}</td>
                                <td>{this.props.topuphistories[index].Travel_Date}</td>
                                <td>{this.props.topuphistories[index].Entry_Time}</td>
                                <td>{this.props.topuphistories[index].Exit_Time}</td>
                                <td>{this.props.topuphistories[index].Entry_CardReaderID}</td>
                                <td>{this.props.topuphistories[index].Exit_CardReaderID}</td>
                                <td>{this.props.topuphistories[index].Fare_Type}</td>
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