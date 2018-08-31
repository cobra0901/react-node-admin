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
                                <td><Button bsStyle="success" onClick={() => this.setState({
                                    show: true,
                                    UserID:this.props.topupDetails[index].UserID,
                                    CardID:this.props.topupDetails[index].CardID,
                                    BusRoute:this.props.topupDetails[index].BusRoute,
                                    BusID:this.props.topupDetails[index].BusID,
                                    Amount:this.props.topupDetails[index].Amount,
                                    Recharge_Date:this.props.topupDetails[index].Recharge_Date,
                                    Recharge_Time:this.props.topupDetails[index].Recharge_Time,
                                    CardReaderID:this.props.topupDetails[index].CardReaderID,
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
                        <label>UserID</label>
                        <input type="text" name="UserID"
                               value={this.state.UserID} onChange={this.handleChange.bind(this)} /><br/>
                        <label>CardID</label>
                        <input type="text" name="CardID"
                               value={this.state.CardID} onChange={this.handleChange.bind(this)} /><br/>
                        <label>BusRoute</label>
                        <input type="text" name="BusRoute"
                               value={this.state.BusRoute} onChange={this.handleChange.bind(this)} /><br/>
                        <label>BusID</label>
                        <input type="text" name="BusID"
                               value={this.state.BusID} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Amount</label>
                        <input type="text" name="Amount"
                               value={this.state.Amount} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Recharge_Date</label>
                        <input type="text" name="Recharge_Date"
                               value={this.state.Recharge_Date} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Recharge_Time</label>
                        <input type="text" name="Recharge_Time"
                               value={this.state.Recharge_Time} onChange={this.handleChange.bind(this)} /><br/>
                        <label>CardReaderID</label>
                        <input type="text" name="CardReaderID"
                               value={this.state.CardReaderID} onChange={this.handleChange.bind(this)} /><br/>
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