import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import './index.css'
import '../../css/main.css'
import {FormResults} from "./tabs/FormResults";
import {ContentTab} from "./ContentTab";

export class InputBox extends React.Component {

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            results: [],
            cards:[],
            ridehistories:[],
            topuphistories:[],
            reportblocks:[],
            cardNumber:''
        };
    }

    onhandleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClick(){
        let val = this.state.cardNumber;

        if(this.state.cardNumber === ''){
            alert("please insert your cardnumber");
            return;
        }

        fetch(`http://54.251.190.7:1995/users/${val}`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    const results = data;
                    this.setState({ results });
                });
            })

            .catch(err => {
                console.log('Fetch Error :-S', err);
            });

        fetch(`http://54.251.190.7:1995/card/${val}`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    const cards = data;
                    this.setState({ cards });
                });
            })

            .catch(err => {
                console.log('Fetch Error :-S', err);
            });

        fetch(`http://54.251.190.7:1995/ridehistory/${val}`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    const ridehistories = data;
                    this.setState({ ridehistories });
                });
            })

            .catch(err => {
                console.log('Fetch Error :-S', err);
            });

        fetch(`http://54.251.190.7:1995/topuphistory/${val}`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    const topuphistories = data;
                    this.setState({ topuphistories });
                });
            })

            .catch(err => {
                console.log('Fetch Error :-S', err);
            });

        fetch(`http://54.251.190.7:1995/reportblock/${val}`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    const reportblocks = data;
                    this.setState({ reportblocks });
                });
            })

            .catch(err => {
                console.log('Fetch Error :-S', err);
            });
    }

    render() {

            return (
                <div className="input-view">

                    <Row>

                        <Col xs={12} md={12}>
                            <label className="mb-30">Enter Card Number</label>
                            <input type="text" name="cardNumber" value = {this.state.cardNumber} onChange={this.onhandleChange.bind(this)} required/>
                            <Button onClick={this.handleClick.bind(this)}>Insert</Button>
                        </Col>

                        <FormResults results={this.state.results}/>

                        <ContentTab
                            cards={this.state.cards}
                            ridehistories={this.state.ridehistories}
                            topuphistories={this.state.topuphistories}
                            reportblocks={this.state.reportblocks}
                        />

                    </Row>
                </div>

            );
        }

}






