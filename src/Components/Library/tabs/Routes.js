import React from 'react';
import {Table, Button, Modal} from 'react-bootstrap';
import '../../../css/index.css';
import axios from 'axios';
import {SERVER_URL} from "../../../Constant/config";
export class Routes extends React.Component {

    constructor(props) {
        super(props);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            showNew: false,
            showUpdate: false,
            name: "",
            bus_route: "",
            bus_id: "",
            zone: "",
        };
    }

    handleHide() {
        this.setState({showNew: false,showUpdate:false});
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
                        <th>id</th>
                        <th>BusRoute</th>
                        <th>Bus_ID</th>
                        <th>Zone</th>
                        <th className="th-button-view"></th>
                        <th className="th-button-view"></th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.props.routes.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td>{this.props.routes[index].id}</td>
                                <td>{this.props.routes[index].BusRoute}</td>
                                <td>{this.props.routes[index].Bus_ID}</td>
                                <td>{this.props.routes[index].Zone}</td>
                                <td><Button bsStyle="success" onClick={() => this.setState({
                                    showUpdate: true,
                                    bus_route:this.props.routes[index].BusRoute,
                                    bus_id:this.props.routes[index].Bus_ID,
                                    zone:this.props.routes[index].Zone})}>edit</Button>
                                </td>
                                <td><Button bsStyle="danger" onClick={()=>{
                                    this.setState({bus_route:this.props.routes[index].BusRoute});
                                    axios.delete(SERVER_URL +`busroute/${this.state.bus_route}`)
                                        .then(res => {
                                            console.log(res);
                                            console.log(res.data);
                                        })
                                }}>delete</Button></td>
                            </tr>
                        )
                    })}

                    </tbody>
                </Table>

                <Button bsStyle="info" style={{marginLeft:30}} onClick={() => this.setState({
                    showNew: true,
                    bus_route:'',
                    bus_id:'',
                    zone:''
                    })}>New</Button>

                <Button bsStyle="info" style={{marginLeft:30}} >export</Button>

                <Modal
                    show={this.state.showUpdate}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Update Bus Route Fare
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>Bus Route</label>
                        <input type="text" name="bus_route"
                               value={this.state.bus_route} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Bus ID</label>
                        <input type="text" name="bus_id" value={this.state.bus_id} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Zone</label>
                        <input type="text" name="zone" value={this.state.zone} onChange={this.handleChange.bind(this)}/><br/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary">Save</Button>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal
                    show={this.state.showNew}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            New Bus Route Fare
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>Bus Route</label>
                        <input type="text" name="bus_route"
                               value={this.state.bus_route} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Bus ID</label>
                        <input type="text" name="bus_id" value={this.state.bus_id} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Zone</label>
                        <input type="text" name="zone" value={this.state.zone} onChange={this.handleChange.bind(this)}/><br/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={()=>{
                            console.log("BusRoute",this.state.bus_route);
                            const data = {
                                BusRoute: this.state.bus_route,
                                Bus_ID: this.state.bus_id,
                                Zone: this.state.zone
                            };
                            axios.post(SERVER_URL +`busroute`, { data })
                                .then(res => {
                                    console.log(res);
                                    console.log("success");
                                    console.log(res.data);
                                })
                        }}>Save</Button>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}