import React from 'react';
import {Col,Button} from 'react-bootstrap';
import '../../../css/main.css'
import API from '../../../Constant/api';
import axios from 'axios';

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
            CardNumber:'',
            State: "",
            Pincode: "",
            Age: "",
            Profession: "",
            Account_Number: "",
            AddressLine1: "",
            Created_Date: "",
            Updated_Date: "",
            UserID: "",
            Isblock:'',
            Balance:'',
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
                CardNumber: this.props.results[0].CardNumber,
            });
        }

        if (this.props.cards.length > 0 && this.props.cards !== prevProps.cards) {

            if(this.props.cards[0].Isblock === 1){
                this.setState({
                    Balance: this.props.cards[0].Balance,
                    Isblock: 'active',
                });
            }else {
                this.setState({
                    Balance: this.props.cards[0].Balance,
                    Isblock: 'deactive',
                });
            }



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

        const value = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Email: this.state.Email,
            Mobile: this.state.Mobile,
            City: this.state.City,
            State: this.state.State,
            Pincode: this.state.Pincode,
            Updated_Date: date,
            Age: this.state.Age,
            MaritalStatus: this.state.MaritalStatus,
            Profession: this.state.Profession,
            FirstNameAC: this.state.FirstNameAC,
            Account_Number: this.state.Account_Number,
            IFSC: this.state.IFSC,
            AddressLine1: this.state.AddressLine1,
            UserID: this.state.UserID
    };

        axios({
            method: 'put',
            url: `http://localhost:5000/users/${this.state.UserID}`,
            data: value,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {

                    //console.log(response)
                }
            })
            .catch(function (response) {
                console.log(response);
            });
    }

    handleDeActive(){

        const block =  {
            "Isblock": 0,
            "ValidTo": "DeActived",
            "CardNumber": this.state.CardNumber
        };

        axios({
            method: 'put',
            url: `http://localhost:5000/card/block/${this.state.CardNumber}`,
            data: block,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {

                }
            })
            .catch(function (response) {

            });
        window.location.reload();
    }

    render() {
        return (

            <div>
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
                    <label>Balance</label>{this.state.Balance}<span/><br/>
                    <label>Status</label>{this.state.Isblock}<span/><br/>
                </Col>

                <Button style={{marginLeft:20,marginBottom:20,marginTop:30}} onClick={this.onhandleClickEnabled.bind(this)}>Update</Button>
                <Button style={{marginLeft:20,marginBottom:20,marginTop:30}} onClick={this.handleUpdateSave.bind(this)} disabled={this.state.isDisabled}>Save</Button>
                <Button style={{marginLeft:20,marginBottom:20,marginTop:30}} onClick={this.handleDeActive.bind(this)} >Deactive</Button>

            </div>
         );
    }
}