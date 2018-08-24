import React from 'react';
import {Table,Button,Modal} from 'react-bootstrap';
import '../../../css/index.css'

export class Mycards extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false
        };
    }

    handleHide() {
        this.setState({ show: false });
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
                <tr>
                    <td>1</td>
                    <td>Anna</td>
                    <td>Pitt</td>
                    <td>35</td>
                    <td>New York</td>
                    <td>USA</td>
                    <td>1235</td>
                    <td><Button bsStyle="success" onClick={() => this.setState({ show: true })}>edit</Button></td>
                    <td><Button bsStyle="danger">delete</Button></td>
                </tr>
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