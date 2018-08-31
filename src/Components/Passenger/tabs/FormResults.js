import React from 'react';
import {Col,Button} from 'react-bootstrap';
import '../../../css/main.css'

export class FormResults extends React.Component {

    onhandleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        return (
                <ul>
                    {this.props.results.map((element, index) => {
                        return(

                            <li key={index}>
                                <Col xs={12} md={4}>
                                    <label>First Name</label><input type="text" name="FirstName" onChange={this.onhandleChange.bind(this)} value={this.props.results[0].FirstName} disabled={this.props.isDisabled}/><br/>
                                    <label>Last Name</label><input type="text" value={this.props.results[index].LastName} disabled={this.props.isDisabled}/><br/>
                                    <label>Email</label><input type="text" value={this.props.results[index].Email} disabled={this.props.isDisabled}/><br/>
                                    <label>Mobile</label><input type="text" value={this.props.results[index].Mobile} disabled={this.props.isDisabled}/><br/>
                                    <label>Matial Status</label><input type="text" value={this.props.results[index].MaritalStatus} disabled={this.props.isDisabled}/><br/>
                                    <label>Name in (A/C)</label><input type="text" value={this.props.results[index].FirstNameAC} disabled={this.props.isDisabled}/><br/>
                                    <label>IFSC</label><input type="text" value={this.props.results[index].IFSC} disabled={this.props.isDisabled}/><br/>
                                </Col>

                                <Col xs={12} md={4}>
                                    <label>City</label><input type="text" value={this.props.results[index].City} disabled={this.props.isDisabled}/><br/>
                                    <label>State</label><input type="text" value={this.props.results[index].State} disabled={this.props.isDisabled}/><br/>
                                    <label>Pincode</label><input type="text" value={this.props.results[index].Pincode} disabled={this.props.isDisabled}/><br/>
                                    <label>Age</label><input type="text" value={this.props.results[index].Age} disabled={this.props.isDisabled}/><br/>
                                    <label>Profession</label><input type="text" value={this.props.results[index].Profession} disabled={this.props.isDisabled}/><br/>
                                    <label>Account Number</label><input type="text" value={this.props.results[index].Account_Number}
                                                                        disabled={this.props.isDisabled}/><br/>
                                    <label>Address</label><input type="text" value={this.props.results[index].AddressLine1} disabled={this.props.isDisabled}/><br/>
                                </Col>

                                <Col xs={12} md={4}>
                                    <label>Valid Form</label><span>{this.props.results[index].Created_Date}</span><br/>
                                    <label>Valid To</label><span>{this.props.results[index].Updated_Date}</span><br/>
                                    <label>Balance</label><span/><br/>
                                    <label>Status</label><span/><br/>
                                    <Button className="mt-10">Deactive</Button>
                                    <Button className="mt-10">Save</Button>
                                </Col>
                            </li>
                        )
                    })}
                </ul>
         );
    }
}