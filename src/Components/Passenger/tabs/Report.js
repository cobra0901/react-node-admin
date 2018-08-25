import React from 'react';
import '../../../css/index.css'
import {Table,Button,Modal} from 'react-bootstrap';

export class Report extends React.Component {

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
                        <th>CardID</th>
                        <th>Card_Amount</th>
                        <th>Credit_Amount</th>
                        <th>Credit_Type</th>
                        <th>Report_Date</th>
                        <th>Name(in A/C)</th>
                        <th>Account_Number</th>
                        <th>IFSC</th>
                        <th>Address</th>
                        <th>Pincode</th>
                        <th className="th-button-view"></th>
                        <th className="th-button-view"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.reportblocks.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{this.props.reportblocks[index].UserID}</td>
                                <td>{this.props.reportblocks[index].ReportID}</td>
                                <td>{this.props.reportblocks[index].Report_Type}</td>
                                <td>{this.props.reportblocks[index].CardID}</td>
                                <td>{this.props.reportblocks[index].Card_Amount}</td>
                                <td>{this.props.reportblocks[index].Credit_Amount}</td>
                                <td>{this.props.reportblocks[index].Credit_Type}</td>
                                <td>{this.props.reportblocks[index].Report_Date}</td>
                                <td>{this.props.reportblocks[index].Name}</td>
                                <td>{this.props.reportblocks[index].Account_Number}</td>
                                <td>{this.props.reportblocks[index].IFSC}</td>
                                <td>{this.props.reportblocks[index].Address}</td>
                                <td>{this.props.reportblocks[index].Pincode}</td>
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