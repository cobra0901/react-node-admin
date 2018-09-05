import React from 'react';
import {Col,Button} from 'react-bootstrap';
import '../../../css/main.css';
import axios from 'axios';

export class FormResults extends React.Component {

    constructor(props){
        super(props);

        this.state = {
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
            TotalAmount:''
        };
    }

    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    };

    componentDidUpdate(prevProps) {

        if (this.props.results.length > 0 && this.props.results !== prevProps.results) {
            this.setState({
                FirstName: this.props.results[0].FirstName,
                LastName: this.props.results[0].LastName,
                Email: this.props.results[0].Email,
                Mobile: this.props.results[0].Mobile,
                FirstNameAC: this.props.results[0].FirstNameAC,
                IFSC: this.props.results[0].IFSC,
                City: this.props.results[0].City,
                State: this.props.results[0].State,
                Pincode: this.props.results[0].Pincode,
                Age: this.props.results[0].Age,
                Bus_ID: this.props.results[0].Bus_ID,
                Account_Number: this.props.results[0].Account_Number,
                AddressLine1: this.props.results[0].AddressLine1,
                Created_Date: this.props.results[0].Created_Date,
                Updated_Date: this.props.results[0].Updated_Date,
                id: this.props.results[0].id,
            });
        }

        // if (this.props.cards.length > 0 && this.props.cards !== prevProps.cards) {
        //
        //     if(this.props.cards[0].Isblock === 1){
        //         this.setState({
        //             Balance: this.props.cards[0].Balance,
        //             Isblock: 'active',
        //         });
        //     }else {
        //         this.setState({
        //             Balance: this.props.cards[0].Balance,
        //             Isblock: 'deactive',
        //         });
        //     }
        // }

        if (this.props.transactions.length > 0 && this.props.transactions !== prevProps.transactions) {
            this.setState({
                TotalAmount: this.props.transactions[0].TotalAmount,
            });
        }

        if (this.props.buses.length > 0 && this.props.buses !== prevProps.buses) {
            this.setState({
                Bus_ID: this.props.buses[0].Bus_ID,
                id: this.props.buses[0].id,
                Card_Reader_ID1: this.props.buses[0].Card_Reader_ID1,
                Card_Reader_ID2: this.props.buses[0].Card_Reader_ID2,
                Controller_ID: this.props.buses[0].Controller_ID,
                AdPanelID: this.props.buses[0].AdPanelID,
            });
        }
    }

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
            Age: this.state.Age,
            Bus_ID: this.state.Bus_ID,
            FirstNameAC: this.state.FirstNameAC,
            Account_Number: this.state.Account_Number,
            IFSC: this.state.IFSC,
            AddressLine1: this.state.AddressLine1,
            id: this.state.id,
        };

        axios({
            method: 'put',
            url: `http://localhost:5000/driver/${this.state.id}`,
            data: value,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {

                    console.log(response)
                }
            })
            .catch(function (response) {
                console.log(response);
            });

        const bus_value = {
            id: this.state.id,
            Bus_ID: this.state.Bus_ID,
            Card_Reader_ID1: this.state.Card_Reader_ID1,
            Card_Reader_ID2: this.state.Card_Reader_ID2,
            Controller_ID: this.state.Controller_ID,
            AdPanelID: this.state.AdPanelID,
        };

        axios({
            method: 'put',
            url: `http://localhost:5000/bus/${this.state.id}`,
            data: bus_value,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {

                    console.log(response)
                }
            })
            .catch(function (response) {
                console.log(response);
            });
    }

    render() {
        return (
                   <div>
                        <Col xs={12} md={4}>

                            <label>First Name</label><input type="text" name="FirstName" value={this.state.FirstName} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>Last Name</label><input type="text" name="LastName" value={this.state.LastName} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>Email</label><input type="text" name="Email" value={this.state.Email} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>Mobile</label><input type="text" name="Mobile" value={this.state.Mobile} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>Bus Route</label><input type="text" name="Bus_ID" value={this.state.Bus_Bus_ID} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>Name in(A/C)</label><input type="text" name="FirstNameAC" value={this.state.FirstNameAC} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>IFSC</label><input type="text" name="IFSC" value={this.state.IFSC} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>Card Reader ID1</label><input type="text" name="Card_Reader_ID1" value={this.state.Card_Reader_ID1} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>Controller ID</label><input type="text" name="Controller_ID" value={this.state.Controller_ID} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                        </Col>

                        <Col xs={12} md={4}>
                            <label>City</label><input type="text" name="City" value={this.state.City} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>State</label><input type="text" name="State" value={this.state.State} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>Pincode</label><input type="text" name="Pincode" value={this.state.Pincode} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>Age</label><input type="text" name="Age" value={this.state.Age} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>BusID</label><input type="text" name="Bus_ID" value={this.state.Bus_ID} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>Account Number</label><input type="text" name="Account_Number" value={this.state.Account_Number}
                                                                onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>Address</label><input type="text" name="AddressLine1" value={this.state.AddressLine1} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>Card Reader ID2</label><input type="text" name="Card_Reader_ID2" value={this.state.Card_Reader_ID2} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                            <label>AdPanelID</label><input type="text" name="AdPanelID" value={this.state.AdPanelID} onChange={this.handleChange} disabled={this.state.isDisabled}/><br/>
                        </Col>

                        <Col xs={12} md={4}>

                            <label>Created</label><span>{this.state.Created_Date}</span><br/>
                            <label>Total Earning</label><span>{this.state.TotalAmount}</span><br/>

                            <Button style={{marginLeft:20,marginBottom:20,marginTop:30}} onClick={this.onhandleClickEnabled.bind(this)}>Update</Button>
                            <Button style={{marginLeft:20,marginBottom:20,marginTop:30}} onClick={this.handleUpdateSave.bind(this)} disabled={this.state.isDisabled}>Save</Button>

                        </Col>
                   </div>
        );
    }
}