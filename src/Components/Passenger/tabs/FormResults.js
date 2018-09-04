import React from 'react';
import {Col,Button} from 'react-bootstrap';
import '../../../css/main.css'
import API from '../../../Constant/api';

let months    = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

let today = new Date(),
date = today.getFullYear()-2000 + '-' + (months[today.getMonth()]) + '-' + today.getDate();

export class FormResults extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            date: date,
            isDisabled: true,
            FirstName: "",
            LastName: "",
            Email: "",
            Mobile: "",
            MaritalStatus: "",
            FirstNameAC: "",
            IFSC: "",
            City: "",
            State: "",
            Pincode: "",
            Age: "",
            Profession: "",
            Account_Number: "",
            AddressLine1: "",
            Created_Date: "",
            Updated_Date: "",
            UserID: "",
        };
    }

    componentDidUpdate(prevProps) {

        if (this.props.results.length > 0 && this.props.results !== prevProps.results) {
            this.setState({
                FirstName: this.props.results[0].FirstName,
                LastName: this.props.results[0].LastName,
                Email: this.props.results[0].Email,
                Mobile: this.props.results[0].Mobile,
                MaritalStatus: this.props.results[0].MaritalStatus,
                FirstNameAC: this.props.results[0].FirstNameAC,
                IFSC: this.props.results[0].IFSC,
                City: this.props.results[0].City,
                State: this.props.results[0].State,
                Pincode: this.props.results[0].Pincode,
                Age: this.props.results[0].Age,
                Profession: this.props.results[0].Profession,
                Account_Number: this.props.results[0].Account_Number,
                AddressLine1: this.props.results[0].AddressLine1,
                Created_Date: this.props.results[0].Created_Date,
                Updated_Date: this.props.results[0].Updated_Date,
                UserID: this.props.results[0].UserID,
            });
        }
    }

    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    };

    onhandleClickEnabled(){
        this.setState({
            isDisabled: false
        })
    }

    handleUpdateSave(){

        this.setState({
            isDisabled: true
        });

        const user = {

            FirstName: "John",
            LastName: "Jil",
            Email: "XXXXXXXXXX@gmail.com",
            Mobile: "1915352641",
            City: "singUung",
            State: "very good",
            Pincode: 5766967,
            Updated_Date: "12-Jun-20",
            Age: "12123",
            MaritalStatus: "Ok school",
            Profession: "S98765432t",
            FirstNameAC: "john",
            Account_Number: 12,
            IFSC: 12,
            AddressLine1: "ochob science",
            UserID: "cr00000001"



    };

        API.put(`users/cr00000001`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert('success');
            }).catch(error => {
            console.log(error);

        });
    }

    render() {
        return (

            <div>

                <Button style={{marginLeft:20,marginBottom:20}} onClick={this.onhandleClickEnabled.bind(this)}>Update</Button>
                <Button style={{marginLeft:20,marginBottom:20}} onClick={this.handleUpdateSave.bind(this)} disabled={this.state.isDisabled}>Save</Button>

                    <Col xs={12} md={4}>
                        <label>First Name</label><input type="text" name="FirstName" onChange={this.handleChange} value={this.state.FirstName} disabled={this.state.isDisabled}/><br/>
                        <label>Last Name</label><input type="text" name="LastName" onChange={this.handleChange} value={this.state.LastName} disabled={this.state.isDisabled}/><br/>
                        <label>Email</label><input type="text" name="Email" value={this.state.Email} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                        <label>Mobile</label><input type="text" name="Mobile" value={this.state.Mobile} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                        <label>Matial Status</label><input type="text" name="MaritalStatus" onChange={this.handleChange} value={this.state.MaritalStatus} disabled={this.state.isDisabled}/><br/>
                        <label>Name in (A/C)</label><input type="text" name="FirstNameAC" onChange={this.handleChange} value={this.state.FirstNameAC} disabled={this.state.isDisabled}/><br/>
                        <label>IFSC</label><input type="text" name="IFSC" value={this.state.IFSC} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                    </Col>

                    <Col xs={12} md={4}>
                        <label>City</label><input type="text" name="City" value={this.state.City} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                        <label>State</label><input type="text" name="State" value={this.state.State} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                        <label>Pincode</label><input type="text" name="Pincode" value={this.state.Pincode} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                        <label>Age</label><input type="text" name="Age" value={this.state.Age} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                        <label>Profession</label><input type="text" name="Profession" onChange={this.handleChange} value={this.state.Profession} disabled={this.state.isDisabled}/><br/>
                        <label>Account Number</label><input type="text" name="Account_Number" onChange={this.handleChange} value={this.state.Account_Number}
                                                            disabled={this.state.isDisabled}/><br/>
                        <label>Address</label><input type="text" name="AddressLine1" onChange={this.handleChange} value={this.state.AddressLine1} disabled={this.state.isDisabled}/><br/>
                    </Col>

                    <Col xs={12} md={4}>
                        <label>Valid Form</label><span>{this.state.Created_Date}</span><br/>
                        <label>Valid To</label><span>{this.state.Updated_Date}</span><br/>
                        <label>Balance</label><span/><br/>
                        <label>Status</label><span/><br/>
                    </Col>

            </div>
         );
    }
}