import React from 'react';
import {BusContent} from "./BusContent";

export class BusBox extends React.Component {

    constructor(){
        super();
        this.state={
            stops:[],
            routes:[]
        }
    }

    componentDidMount(){
        fetch(`http://54.251.190.7:1995/busroute`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    const routes = data;
                    this.setState({ routes });
                });
            })

            .catch(err => {
                console.log('Fetch Error :-S', err);
            });

        fetch(`http://54.251.190.7:1995/busstops`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    const stops = data;
                    this.setState({ stops });
                });
            })

            .catch(err => {
                console.log('Fetch Error :-S', err);
            });
    }

    render() {
        return(

            <BusContent
                stops={this.state.stops}
                routes={this.state.routes}
            />
        );
    }
}
