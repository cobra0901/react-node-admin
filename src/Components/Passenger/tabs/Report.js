import React from 'react';
import '../../../css/index.css'
import {Table,Button,Modal} from 'react-bootstrap';

export class Report extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false,
            new_show: false,
            new_UserID:'',
            new_ReportID:'',
            new_Report_Type:'',
            new_CardID:'',
            new_Credit_Amount:'',
            new_Credit_Type:'',
            new_Report_Date:'',
            new_FirstNameAC:'',
            new_Account_Number:'',
            new_IFSC:'',
            new_AddressLine1:'',
            new_Pincode:''
        };
    }

    handleHide() {
        this.setState({ show: false,new_show:false });
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
                        <th>ReportID</th>
                        <th>Report_Type</th>
                        <th>CardID</th>
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
                                <td>{this.props.reportblocks[index].Credit_Amount}</td>
                                <td>{this.props.reportblocks[index].Credit_Type}</td>
                                <td>{this.props.reportblocks[index].Report_Date}</td>
                                <td>{this.props.reportblocks[index].FirstNameAC}</td>
                                <td>{this.props.reportblocks[index].Account_Number}</td>
                                <td>{this.props.reportblocks[index].IFSC}</td>
                                <td>{this.props.reportblocks[index].AddressLine1}</td>
                                <td>{this.props.reportblocks[index].Pincode}</td>
                                <td><Button bsStyle="success" onClick={() => this.setState({
                                    show: true,
                                    UserID:this.props.reportblocks[index].UserID,
                                    ReportID:this.props.reportblocks[index].ReportID,
                                    Report_Type:this.props.reportblocks[index].Report_Type,
                                    CardID:this.props.reportblocks[index].CardID,
                                    Credit_Amount:this.props.reportblocks[index].Credit_Amount,
                                    Credit_Type:this.props.reportblocks[index].Credit_Type,
                                    Report_Date:this.props.reportblocks[index].Report_Date,
                                    FirstNameAC:this.props.reportblocks[index].FirstNameAC,
                                    Account_Number:this.props.reportblocks[index].Account_Number,
                                    IFSC:this.props.reportblocks[index].IFSC,
                                    AddressLine1:this.props.reportblocks[index].AddressLine1,
                                    Pincode:this.props.reportblocks[index].Pincode,
                                })}>edit</Button></td>
                                <td><Button bsStyle="danger" >delete</Button></td>
                            </tr>
                            )})}
                    </tbody>
                </Table>

                <td><Button bsStyle="info" onClick={() => this.setState({
                    new_show: true})}>New</Button></td>

                <Modal
                    show={this.state.new_show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Insert Data
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>UserID</label>
                        <input type="text" name="new_UserID"
                               value={this.state.new_UserID} onChange={this.handleChange.bind(this)} /><br/>
                        <label>ReportID</label>
                        <input type="text" name="new_ReportID"
                               value={this.state.new_ReportID} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Report_Type</label>
                        <input type="text" name="new_Report_Type"
                               value={this.state.new_Report_Type} onChange={this.handleChange.bind(this)} /><br/>
                        <label>CardID</label>
                        <input type="text" name="new_CardID"
                               value={this.state.new_CardID} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Credit_Amount</label>
                        <input type="text" name="new_Credit_Amount"
                               value={this.state.new_Credit_Amount} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Credit_Type</label>
                        <input type="text" name="new_Credit_Type"
                               value={this.state.new_Credit_Type} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Report_Date</label>
                        <input type="text" name="new_Report_Date"
                               value={this.state.new_Report_Date} onChange={this.handleChange.bind(this)} /><br/>
                        <label>FirstNameAC</label>
                        <input type="text" name="new_FirstNameAC"
                               value={this.state.new_FirstNameAC} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Account_Number</label>
                        <input type="text" name="new_Account_Number"
                               value={this.state.new_Account_Number} onChange={this.handleChange.bind(this)} /><br/>
                        <label>IFSC</label>
                        <input type="text" name="new_IFSC"
                               value={this.state.new_IFSC} onChange={this.handleChange.bind(this)} /><br/>
                        <label>AddressLine1</label>
                        <input type="text" name="new_AddressLine1"
                               value={this.state.new_AddressLine1} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Pincode</label>
                        <input type="text" name="new_Pincode"
                               value={this.state.new_Pincode} onChange={this.handleChange.bind(this)} /><br/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary">Save</Button>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>

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
                        <label>ReportID</label>
                        <input type="text" name="ReportID"
                               value={this.state.ReportID} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Report_Type</label>
                        <input type="text" name="Report_Type"
                               value={this.state.Report_Type} onChange={this.handleChange.bind(this)} /><br/>
                        <label>CardID</label>
                        <input type="text" name="CardID"
                               value={this.state.CardID} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Credit_Amount</label>
                        <input type="text" name="Credit_Amount"
                               value={this.state.Credit_Amount} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Credit_Type</label>
                        <input type="text" name="Credit_Type"
                               value={this.state.Credit_Type} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Report_Date</label>
                        <input type="text" name="Report_Date"
                               value={this.state.Report_Date} onChange={this.handleChange.bind(this)} /><br/>
                        <label>FirstNameAC</label>
                        <input type="text" name="FirstNameAC"
                               value={this.state.FirstNameAC} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Account_Number</label>
                        <input type="text" name="Account_Number"
                               value={this.state.Account_Number} onChange={this.handleChange.bind(this)} /><br/>
                        <label>IFSC</label>
                        <input type="text" name="IFSC"
                               value={this.state.IFSC} onChange={this.handleChange.bind(this)} /><br/>
                        <label>AddressLine1</label>
                        <input type="text" name="AddressLine1"
                               value={this.state.AddressLine1} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Pincode</label>
                        <input type="text" name="Pincode"
                               value={this.state.Pincode} onChange={this.handleChange.bind(this)} /><br/>
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