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
                        <th>id</th>
                        <th>UserID</th>
                        <th>CardID</th>
                        <th>BusRoute</th>
                        <th>BusID</th>
                        <th>Amount</th>
                        <th>Recharge_Date</th>
                        <th>Recharge_Time</th>
                        <th>CardReaderID</th>
                        <th className="th-button-view"></th>
                        <th className="th-button-view"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.topuphistories.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{this.props.topuphistories[index].id}</td>
                                <td>{this.props.topuphistories[index].UserID}</td>
                                <td>{this.props.topuphistories[index].CardID}</td>
                                <td>{this.props.topuphistories[index].BusRoute}</td>
                                <td>{this.props.topuphistories[index].BusID}</td>
                                <td>{this.props.topuphistories[index].Amount}</td>
                                <td>{this.props.topuphistories[index].Recharge_Date}</td>
                                <td>{this.props.topuphistories[index].Recharge_Time}</td>
                                <td>{this.props.topuphistories[index].CardReaderID}</td>
                                <td><Button bsStyle="success" onClick={() => this.setState({
                                    show: true,
                                    id:this.props.topuphistories[index].id,
                                    UserID:this.props.topuphistories[index].UserID,
                                    CardID:this.props.topuphistories[index].CardID,
                                    BusRoute:this.props.topuphistories[index].BusRoute,
                                    BusID:this.props.topuphistories[index].BusID,
                                    Amount:this.props.topuphistories[index].Amount,
                                    Recharge_Date:this.props.topuphistories[index].Recharge_Date,
                                    Recharge_Time:this.props.topuphistories[index].Recharge_Time,
                                    CardReaderID:this.props.topuphistories[index].CardReaderID
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
                        <label>id</label>
                        <input type="text" name="id"
                               value={this.state.id} onChange={this.handleChange.bind(this)} /><br/>
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