import React from 'react';
import {Table,Button,Modal} from 'react-bootstrap';
import '../../../css/index.css';

export class Mycards extends React.Component {

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
        return(
            <div>
                <Table responsive className="table-view" bordered hover>
                <thead>
                <tr className="th-view">
                    <th>UserID</th>
                    <th>Owner</th>
                    <th>Isblock</th>
                    <th>ValidForm</th>
                    <th>ValidTo</th>
                    <th>Balance</th>
                    <th>Card Number</th>
                    <th className="th-button-view"></th>
                    <th className="th-button-view"></th>
                </tr>
                </thead>
                <tbody>

                {this.props.cards.map((element, index) => {
                    return(
                            <tr key={index}>
                                <td>{this.props.cards[index].UserID}</td>
                                <td>{this.props.cards[index].FirstName}</td>
                                <td>{this.props.cards[index].Isblock}</td>
                                <td>{this.props.cards[index].ValidFrom}</td>
                                <td>{this.props.cards[index].ValidTo}</td>
                                <td>{this.props.cards[index].Balance}</td>
                                <td>{this.props.cards[index].CardNumber}</td>
                                <td><Button bsStyle="success" onClick={() => this.setState({
                                    show: true,
                                    UserID:this.props.cards[index].UserID,
                                    FirstName:this.props.cards[index].FirstName,
                                    Isblock:this.props.cards[index].Isblock,
                                    ValidFrom:this.props.cards[index].ValidFrom,
                                    ValidTo:this.props.cards[index].ValidTo,
                                    Balance:this.props.cards[index].Balance,
                                    CardNumber:this.props.cards[index].CardNumber,
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
                        <label>Owner</label>
                        <input type="text" name="FirstName"
                               value={this.state.FirstName} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Isblock</label>
                        <input type="text" name="Isblock"
                               value={this.state.Isblock} onChange={this.handleChange.bind(this)} /><br/>
                        <label>ValidFrom</label>
                        <input type="text" name="ValidFrom"
                               value={this.state.ValidFrom} onChange={this.handleChange.bind(this)} /><br/>
                        <label>ValidTo</label>
                        <input type="text" name="ValidTo"
                               value={this.state.ValidTo} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Balance</label>
                        <input type="text" name="Balance"
                               value={this.state.Balance} onChange={this.handleChange.bind(this)} /><br/>
                        <label>CardNumber</label>
                        <input type="text" name="CardNumber"
                               value={this.state.CardNumber} onChange={this.handleChange.bind(this)} /><br/>

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