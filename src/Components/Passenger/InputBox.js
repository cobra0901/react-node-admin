import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import './index.css'

export class InputBox extends React.Component {
    render() {
        return (
            <div className="input-view">
                <Row>
                    <Col xs={12} md={12}>
                        <label>Enter Card Number</label><input/>
                        <Button class="table-btn">submit</Button>
                    </Col>

                    <Col xs={12} md={4}>
                        <label>First Name</label><input/><br/>
                        <label>Last Name</label><input/><br/>
                        <label>Email</label><input/><br/>
                        <label>Mobile</label><input/><br/>
                        <label>Matial Status</label><input/><br/>
                        <label>Name in (A/C)</label><input/><br/>
                        <label>IFSC</label><input/><br/>
                    </Col>
                    <Col xs={12} md={4}>
                        <label>City</label><input/><br/>
                        <label>State</label><input/><br/>
                        <label>Pincode</label><input/><br/>
                        <label>Age</label><input/><br/>
                        <label>Profession</label><input/><br/>
                        <label>Account Number</label><input/><br/>
                        <label>Address</label><input/><br/>
                    </Col>
                    <Col xs={12} md={4}>
                        <label>Valid Form</label><input/><br/>
                        <label>Valid To</label><input/><br/>
                        <label>Balance</label><input/><br/>
                        <label>Status</label><input/><br/>
                        <center>
                            <Button >Deactive</Button>
                        </center>
                        <center>
                            <Button >Save</Button>
                        </center>
                    </Col>
                </Row>
            </div>

        );
    }
}






