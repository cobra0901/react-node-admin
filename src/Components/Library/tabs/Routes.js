import React from 'react';
import {Table, Button, Modal} from 'react-bootstrap';
import '../../../css/index.css';
import axios from 'axios';
import API from "../../../Constant/api";

export class Routes extends React.Component {

    constructor(props) {
        super(props);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            new_show: false,
            update_show: false,
            del_show: false,
            name: "",
            BusRoute: "",
            From_route: "",
            To_route: "",
            Fare: "",
            FareType: "",
            new_BusRoute: "",
            new_From_route: "",
            new_To_route: "",
            new_Fare: "",
            new_FareType: "",
        };
    }

    handleHide() {
        this.setState({del_show: false,update_show:false,new_show:false});
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    onInsertStop(){

        const InserData =  {

            "BusRoute": this.state.new_BusRoute,
            "From_route": this.state.new_From_route,
            "To_route": this.state.new_To_route,
            "Fare": this.state.new_Fare,
            "FareType": this.state.new_FareType,
        };

        console.log("REERE",this.state.new_BusRoute);

        axios({
            method: 'post',
            url: 'http://localhost:5000/routefare',
            data: InserData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);

                    window.location.reload();
                    //this.setState({new_show:false})
                }
            })
            .catch(function (response) {
                console.log(response);
            });
    }

    onUpdateStop(){

        const InserData =  {
            "BusRoute": this.state.BusRoute,
            "From_route": this.state.From_route,
            "To_route": this.state.To_route,
            "Fare": this.state.Fare,
            "FareType": this.state.FareType,
            "id":this.state.id
        };

        console.log("FareType",this.state.FareType);
        console.log("id",this.state.id);

        axios({
            method: 'put',
            url: `http://localhost:5000/routefare/${this.state.id}`,
            data: InserData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {
                    // console.log(response);
                    // console.log(response.data);
                    window.location.reload()
                }
            })
            .catch(function (response) {
                console.log(response);
            });
    }

    onDeleteStops(){
        console.log("id",this.state.id);

        API.delete(`routefare/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location.reload();
            });
    }



    render() {
        return (
            <div>
                <Table responsive className="table-view" bordered hover>
                    <thead>
                    <tr className="th-view">
                        <th>BusRoute</th>
                        <th>From_route</th>
                        <th>To_route</th>
                        <th>Fare</th>
                        <th>FareType</th>
                        <th className="th-button-view"></th>
                        <th className="th-button-view"></th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.props.routes.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td>{this.props.routes[index].BusRoute}</td>
                                <td>{this.props.routes[index].From_route}</td>
                                <td>{this.props.routes[index].To_route}</td>
                                <td>{this.props.routes[index].Fare}</td>
                                <td>{this.props.routes[index].FareType}</td>
                                <td><Button bsStyle="success" onClick={() => this.setState({
                                    update_show: true,
                                    id:this.props.routes[index].id,
                                    BusRoute:this.props.routes[index].BusRoute,
                                    From_route:this.props.routes[index].From_route,
                                    To_route:this.props.routes[index].To_route,
                                    Fare:this.props.routes[index].Fare,
                                    FareType:this.props.routes[index].FareType})}>edit</Button>
                                </td>
                                <td><Button bsStyle="danger" onClick={()=>{this.setState({
                                    id:this.props.routes[index].id,
                                    del_show:true})}}>delete</Button></td>
                            </tr>
                        )
                    })}

                    </tbody>
                </Table>

                <Button bsStyle="info" style={{marginLeft:30}} onClick={()=>this.setState({new_show:true})}>New</Button>

                <Modal
                    show={this.state.update_show}
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
                        <input type="text" name="BusRoute"
                               value={this.state.BusRoute} onChange={this.handleChange.bind(this)} /><br/>
                        <label>From Route</label>
                        <input type="text" name="From_route" value={this.state.From_route} onChange={this.handleChange.bind(this)}/><br/>
                        <label>To Route</label>
                        <input type="text" name="To_route" value={this.state.To_route} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Fare</label>
                        <input type="text" name="Fare" value={this.state.Fare} onChange={this.handleChange.bind(this)}/><br/>
                        <label>FareType</label>
                        <input type="text" name="FareType" value={this.state.FareType} onChange={this.handleChange.bind(this)}/><br/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.onUpdateStop.bind(this)}>Save</Button>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal
                    show={this.state.new_show}
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
                        <input type="text" name="new_BusRoute"
                               value={this.state.new_BusRoute} onChange={this.handleChange.bind(this)} /><br/>
                        <label>From Route</label>
                        <input type="text" name="new_From_route" value={this.state.new_From_route} onChange={this.handleChange.bind(this)}/><br/>
                        <label>To Route</label>
                        <input type="text" name="new_To_route" value={this.state.new_To_route} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Fare</label>
                        <input type="text" name="new_Fare" value={this.state.new_Fare} onChange={this.handleChange.bind(this)}/><br/>
                        <label>FareType</label>
                        <input type="text" name="new_FareType" value={this.state.new_FareType} onChange={this.handleChange.bind(this)}/><br/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.onInsertStop.bind(this)}>Save</Button>
                        <Button onClick={()=>{this.setState({new_show:false})}}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Modal
                    show={this.state.del_show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Delete Bus Route Fare
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        Are you really remove this data?
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.onDeleteStops.bind(this)}>Save</Button>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}