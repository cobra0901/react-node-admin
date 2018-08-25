import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import './index.css'
import '../../css/main.css'
import {FormResults} from "./tabs/FormResults";

export class InputBox extends React.Component {

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            results: [],
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
        console.log(val,"val");
        fetch(`http://54.251.190.7:1995/users/${val}`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    const results = data;
                    this.setState({ results });
                    console.log(results,"results");
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
                            <input type="text" name="cardNumber" value = {this.state.cardNumber} onChange={this.onhandleChange.bind(this)} />
                            <Button onClick={this.handleClick.bind(this)}>Insert</Button>
                        </Col>

                        <FormResults results={this.state.results} />

                    </Row>
                </div>

            );
        }

}






