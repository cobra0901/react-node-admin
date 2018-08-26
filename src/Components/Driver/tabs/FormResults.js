import React from 'react';
import {Col,Button} from 'react-bootstrap';
import '../../../css/main.css'

export class FormResults extends React.Component {

    render() {
        return (
            <ul>
                {this.props.results.map((element, index) => {
                    return(

                        <li key={index}>
                            <Col xs={12} md={4}>
                                <label>First Name</label><input type="text" value={this.props.results[0].FirstName} disabled/><br/>
                                <label>Last Name</label><input type="text" value={this.props.results[index].LastName} disabled/><br/>
                                <label>Email</label><input type="text" value={this.props.results[index].Email} disabled/><br/>
                                <label>Mobile</label><input type="text" value={this.props.results[index].Mobile} disabled/><br/>
                                <label>Bus Route</label><input type="text" value="" disabled/><br/>
                                <label>Name in(A/C)</label><input type="text" value={this.props.results[index].Name} disabled/><br/>
                                <label>IFSC</label><input type="text" value={this.props.results[index].IFSC} disabled/><br/>
                                <label>Card Reader ID1</label><input type="text" value="" disabled/><br/>
                                <label>Controller ID</label><input type="text" value="" disabled/><br/>
                            </Col>

                            <Col xs={12} md={4}>
                                <label>City</label><input type="text" value={this.props.results[index].City} disabled/><br/>
                                <label>State</label><input type="text" value={this.props.results[index].State} disabled/><br/>
                                <label>Pincode</label><input type="text" value={this.props.results[index].Pincode} disabled/><br/>
                                <label>Age</label><input type="text" value={this.props.results[index].Age} disabled/><br/>
                                <label>BusID</label><input type="text" value={this.props.results[index].Bus_ID} disabled/><br/>
                                <label>Account Number</label><input type="text" value={this.props.results[index].Account_Number}
                                                                    disabled/><br/>
                                <label>Address</label><input type="text" value={this.props.results[index].Address} disabled/><br/>
                                <label>Card Reader ID2</label><input type="text" value="" disabled/><br/>
                                <label>AdPanelID</label><input type="text" value="" disabled/><br/>
                            </Col>

                            <Col xs={12} md={4}>
                                <label>Created</label><input type="text" value={this.props.results[index].Created_Date} disabled/><br/>
                                <label>Total Earning</label><input type="text" value={this.props.results[index].Updated_Date} disabled/><br/>
                                <label>Status</label><input/><br/>
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