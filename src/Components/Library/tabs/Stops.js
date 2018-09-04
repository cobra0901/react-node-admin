import React from 'react';
import {Table,Button,Modal} from 'react-bootstrap';
import '../../../css/index.css';
import axios from 'axios';
import API from '../../../Constant/api'

export class Stops extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false,
            del_show: false,
            update_show: false,
            Stops:'',
            Lat:'',
            Longtitude:'',
            GPS_Location_1:'',
            GPS_Location_2:'',
            Poly_Cord_lat1:'',
            Poly_Cord_lat2:'',
            Poly_Cord_lat3:'',
            Poly_Cord_lat4:'',
            Poly_Cord_lat5:'',
            Poly_Cord_lat6:'',
            Poly_Cord_lat7:'',
            Poly_Cord_lat8:'',
            Poly_Cord_lat9:'',
            Poly_Cord_lat10:'',
            Poly_Cord_long1:'',
            Poly_Cord_long2:'',
            Poly_Cord_long3:'',
            Poly_Cord_long4:'',
            Poly_Cord_long5:'',
            Poly_Cord_long6:'',
            Poly_Cord_long7:'',
            Poly_Cord_long8:'',
            Poly_Cord_long9:'',
            Poly_Cord_long10:'',
            new_BusRoute:'',
            new_Stops:'',
            new_Lat:'',
            new_Longtitude:'',
            new_GPS_Location_1:'',
            new_GPS_Location_2:'',
            new_Poly_Cord_lat1:'',
            new_Poly_Cord_lat2:'',
            new_Poly_Cord_lat3:'',
            new_Poly_Cord_lat4:'',
            new_Poly_Cord_lat5:'',
            new_Poly_Cord_lat6:'',
            new_Poly_Cord_lat7:'',
            new_Poly_Cord_lat8:'',
            new_Poly_Cord_lat9:'',
            new_Poly_Cord_lat10:'',
            new_Poly_Cord_long1:'',
            new_Poly_Cord_long2:'',
            new_Poly_Cord_long3:'',
            new_Poly_Cord_long4:'',
            new_Poly_Cord_long5:'',
            new_Poly_Cord_long6:'',
            new_Poly_Cord_long7:'',
            new_Poly_Cord_long8:'',
            new_Poly_Cord_long9:'',
            new_Poly_Cord_long10:'',
        };
    }

    handleHide() {
        this.setState({ show: false });
    }

    handleHideDel() {
        this.setState({ del_show: false });
    }

    handleHideUpdate() {
        this.setState({ update_show: false });
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    onInsertStop(){
        const InserData =  {
                "BusRoute": this.state.new_BusRoute,
                "Stops": this.state.new_Stops,
                "Lat": this.state.new_Lat,
                "Longtitude": this.state.new_Longtitude,
                "GPS_Location_1": this.state.new_GPS_Location_1,
                "GPS_Location_2": this.state.new_GPS_Location_2,
                "Poly_Cord_lat1": this.state.new_Poly_Cord_lat1,
                "Poly_Cord_long1": this.state.new_Poly_Cord_long1,
                "Poly_Cord_lat2": this.state.new_Poly_Cord_lat2,
                "Poly_Cord_long2": this.state.new_Poly_Cord_long2,
                "Poly_Cord_lat3": this.state.new_Poly_Cord_lat3,
                "Poly_Cord_long3": this.state.new_Poly_Cord_long3,
                "Poly_Cord_lat4": this.state.new_Poly_Cord_lat4,
                "Poly_Cord_long4": this.state.new_Poly_Cord_long4,
                "Poly_Cord_lat5": this.state.new_Poly_Cord_lat5,
                "Poly_Cord_long5": this.state.new_Poly_Cord_long5,
                "Poly_Cord_lat6": this.state.new_Poly_Cord_lat6,
                "Poly_Cord_long6": this.state.new_Poly_Cord_long6,
                "Poly_Cord_lat7": this.state.new_Poly_Cord_lat7,
                "Poly_Cord_long7": this.state.new_Poly_Cord_long7,
                "Poly_Cord_lat8": this.state.new_Poly_Cord_lat8,
                "Poly_Cord_long8": this.state.new_Poly_Cord_long8,
                "Poly_Cord_lat9": this.state.new_Poly_Cord_lat9,
                "Poly_Cord_long9": this.state.new_Poly_Cord_long9,
                "Poly_Cord_lat10": this.state.new_Poly_Cord_lat10,
                "Poly_Cord_long10": this.state.new_Poly_Cord_long10
            };

        console.log("REERE",this.state.new_Poly_Cord_long10);

        axios({
            method: 'post',
            url: 'http://localhost:5000/busstops',
            data: InserData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);

                    window.location.reload()
                }
            })
            .catch(function (response) {
                console.log(response);
            });
    }

    onUpdateStop(){
        const InserData =  {
            "BusRoute": this.state.BusRoute,
            "Stops": this.state.Stops,
            "Lat": this.state.Lat,
            "Longtitude": this.state.Longtitude,
            "GPS_Location_1": this.state.GPS_Location_1,
            "GPS_Location_2": this.state.GPS_Location_2,
            "Poly_Cord_lat1": this.state.Poly_Cord_lat1,
            "Poly_Cord_long1": this.state.Poly_Cord_long1,
            "Poly_Cord_lat2": this.state.Poly_Cord_lat2,
            "Poly_Cord_long2": this.state.Poly_Cord_long2,
            "Poly_Cord_lat3": this.state.Poly_Cord_lat3,
            "Poly_Cord_long3": this.state.Poly_Cord_long3,
            "Poly_Cord_lat4": this.state.Poly_Cord_lat4,
            "Poly_Cord_long4": this.state.Poly_Cord_long4,
            "Poly_Cord_lat5": this.state.Poly_Cord_lat5,
            "Poly_Cord_long5": this.state.Poly_Cord_long5,
            "Poly_Cord_lat6": this.state.Poly_Cord_lat6,
            "Poly_Cord_long6": this.state.Poly_Cord_long6,
            "Poly_Cord_lat7": this.state.Poly_Cord_lat7,
            "Poly_Cord_long7": this.state.Poly_Cord_long7,
            "Poly_Cord_lat8": this.state.Poly_Cord_lat8,
            "Poly_Cord_long8": this.state.Poly_Cord_long8,
            "Poly_Cord_lat9": this.state.Poly_Cord_lat9,
            "Poly_Cord_long9": this.state.Poly_Cord_long9,
            "Poly_Cord_lat10": this.state.Poly_Cord_lat10,
            "Poly_Cord_long10": this.state.Poly_Cord_long10
        };

        console.log("REERE",this.state.Poly_Cord_long10);

        axios({
            method: 'put',
            url: `http://localhost:5000/busstops/${this.state.Stops}`,
            data: InserData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);
                    console.log(response.data);
                    //window.location.reload()
                }
            })
            .catch(function (response) {
                console.log(response);
            });
    }

    onDeleteStops(){
        console.log("Stops",this.state.Stops);

        API.delete(`busstops/${this.state.Stops}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                //window.location.reload();
            })
    }

    render() {
        return(
            <div>
                <Table responsive className="table-view" bordered hover>
                    <thead>
                    <tr className="th-view">
                        <th>Stops</th>
                        <th>Lat</th>
                        <th>Longtitude</th>
                        <th>GPS_Location_1</th>
                        <th>GPS_Location_2</th>
                        <th>Poly_Cord_lat1</th>
                        <th>Poly_Cord_long1</th>
                        <th>Poly_Cord_lat2</th>
                        <th>Poly_Cord_long2</th>
                        <th>Poly_Cord_lat3</th>
                        <th>Poly_Cord_long3</th>
                        <th>Poly_Cord_lat4</th>
                        <th>Poly_Cord_long4</th>
                        <th>Poly_Cord_lat5</th>
                        <th>Poly_Cord_long5</th>
                        <th>Poly_Cord_lat6</th>
                        <th>Poly_Cord_long6</th>
                        <th>Poly_Cord_lat7</th>
                        <th>Poly_Cord_long7</th>
                        <th>Poly_Cord_lat8</th>
                        <th>Poly_Cord_long8</th>
                        <th>Poly_Cord_lat9</th>
                        <th>Poly_Cord_long9</th>
                        <th>Poly_Cord_lat10</th>
                        <th>Poly_Cord_long10</th>
                        <th className="th-button-view"></th>
                        <th className="th-button-view"></th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.props.stops.map((element, index) => {
                        return(
                            <tr key={index}>
                                <td>{this.props.stops[index].Stops}</td>
                                <td>{this.props.stops[index].Lat}</td>
                                <td>{this.props.stops[index].Longtitude}</td>
                                <td>{this.props.stops[index].GPS_Location_1}</td>
                                <td>{this.props.stops[index].GPS_Location_2}</td>
                                <td>{this.props.stops[index].Poly_Cord_lat1}</td>
                                <td>{this.props.stops[index].Poly_Cord_long1}</td>
                                <td>{this.props.stops[index].Poly_Cord_lat2}</td>
                                <td>{this.props.stops[index].Poly_Cord_long2}</td>
                                <td>{this.props.stops[index].Poly_Cord_lat3}</td>
                                <td>{this.props.stops[index].Poly_Cord_long3}</td>
                                <td>{this.props.stops[index].Poly_Cord_lat4}</td>
                                <td>{this.props.stops[index].Poly_Cord_long4}</td>
                                <td>{this.props.stops[index].Poly_Cord_lat5}</td>
                                <td>{this.props.stops[index].Poly_Cord_long5}</td>
                                <td>{this.props.stops[index].Poly_Cord_lat6}</td>
                                <td>{this.props.stops[index].Poly_Cord_long6}</td>
                                <td>{this.props.stops[index].Poly_Cord_lat7}</td>
                                <td>{this.props.stops[index].Poly_Cord_long7}</td>
                                <td>{this.props.stops[index].Poly_Cord_lat8}</td>
                                <td>{this.props.stops[index].Poly_Cord_long8}</td>
                                <td>{this.props.stops[index].Poly_Cord_lat9}</td>
                                <td>{this.props.stops[index].Poly_Cord_long9}</td>
                                <td>{this.props.stops[index].Poly_Cord_lat10}</td>
                                <td>{this.props.stops[index].Poly_Cord_long10}</td>
                                <td><Button bsStyle="success" onClick={() => this.setState({
                                    update_show: true,
                                    BusRoute:this.props.stops[index].BusRoute,
                                    Stops:this.props.stops[index].Stops,
                                    Lat:this.props.stops[index].Lat,
                                    Longtitude:this.props.stops[index].Longtitude,
                                    GPS_Location_1:this.props.stops[index].GPS_Location_1,
                                    GPS_Location_2:this.props.stops[index].GPS_Location_2,
                                    Poly_Cord_lat1:this.props.stops[index].Poly_Cord_lat1,
                                    Poly_Cord_lat2:this.props.stops[index].Poly_Cord_lat2,
                                    Poly_Cord_lat3:this.props.stops[index].Poly_Cord_lat3,
                                    Poly_Cord_lat4:this.props.stops[index].Poly_Cord_lat4,
                                    Poly_Cord_lat5:this.props.stops[index].Poly_Cord_lat5,
                                    Poly_Cord_lat6:this.props.stops[index].Poly_Cord_lat6,
                                    Poly_Cord_lat7:this.props.stops[index].Poly_Cord_lat7,
                                    Poly_Cord_lat8:this.props.stops[index].Poly_Cord_lat8,
                                    Poly_Cord_lat9:this.props.stops[index].Poly_Cord_lat9,
                                    Poly_Cord_lat10:this.props.stops[index].Poly_Cord_lat10,
                                    Poly_Cord_long1:this.props.stops[index].Poly_Cord_long1,
                                    Poly_Cord_long2:this.props.stops[index].Poly_Cord_long2,
                                    Poly_Cord_long3:this.props.stops[index].Poly_Cord_long3,
                                    Poly_Cord_long4:this.props.stops[index].Poly_Cord_long4,
                                    Poly_Cord_long5:this.props.stops[index].Poly_Cord_long5,
                                    Poly_Cord_long6:this.props.stops[index].Poly_Cord_long6,
                                    Poly_Cord_long7:this.props.stops[index].Poly_Cord_long7,
                                    Poly_Cord_long8:this.props.stops[index].Poly_Cord_long8,
                                    Poly_Cord_long9:this.props.stops[index].Poly_Cord_long9,
                                    Poly_Cord_long10:this.props.stops[index].Poly_Cord_long10,
                                })}>edit</Button></td>
                                <td><Button bsStyle="danger" onClick={()=>{this.setState({
                                    Stops:this.props.stops[index].Stops,
                                    del_show:true})}}>delete</Button></td>
                            </tr>
                        )})}

                    </tbody>
                </Table>

                <Button bsStyle="info" onClick={()=>this.setState({show:true})} style={{marginLeft:30}}>New</Button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Insert Bus Route Fare
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>Stops</label>
                        <input type="text" name="new_Stops"
                               value={this.state.new_Stops} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Lat</label>
                        <input type="text" name="new_Lat" value={this.state.new_Lat} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Longtitude</label>
                        <input type="text" name="new_Longtitude" value={this.state.new_Longtitude} onChange={this.handleChange.bind(this)}/><br/>

                        <label>GPS_Location_1</label>
                        <input type="text" name="new_GPS_Location_1" value={this.state.new_GPS_Location_1} onChange={this.handleChange.bind(this)}/><br/>
                        <label>GPS_Location_2</label>
                        <input type="text" name="new_GPS_Location_2" value={this.state.new_GPS_Location_2} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat1</label>
                        <input type="text" name="new_Poly_Cord_lat1" value={this.state.new_Poly_Cord_lat1} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long1</label>
                        <input type="text" name="new_Poly_Cord_long1" value={this.state.new_Poly_Cord_long1} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat2</label>
                        <input type="text" name="new_Poly_Cord_lat2" value={this.state.new_Poly_Cord_lat2} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long2</label>
                        <input type="text" name="new_Poly_Cord_long2" value={this.state.new_Poly_Cord_long2} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat3</label>
                        <input type="text" name="new_Poly_Cord_lat3" value={this.state.new_Poly_Cord_lat3} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long3</label>
                        <input type="text" name="new_Poly_Cord_long3" value={this.state.new_Poly_Cord_long3} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat4</label>
                        <input type="text" name="new_Poly_Cord_lat4" value={this.state.new_Poly_Cord_lat4} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long4</label>
                        <input type="text" name="new_Poly_Cord_long4" value={this.state.new_Poly_Cord_long4} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat5</label>
                        <input type="text" name="new_Poly_Cord_lat5" value={this.state.new_Poly_Cord_lat5} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long5</label>
                        <input type="text" name="new_Poly_Cord_long5" value={this.state.new_Poly_Cord_long5} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat6</label>
                        <input type="text" name="new_Poly_Cord_lat6" value={this.state.new_Poly_Cord_lat6} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long6</label>
                        <input type="text" name="new_Poly_Cord_long6" value={this.state.new_Poly_Cord_long6} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat7</label>
                        <input type="text" name="new_Poly_Cord_lat7" value={this.state.new_Poly_Cord_lat7} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long7</label>
                        <input type="text" name="new_Poly_Cord_long7" value={this.state.new_Poly_Cord_long7} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat8</label>
                        <input type="text" name="new_Poly_Cord_lat8" value={this.state.new_Poly_Cord_lat8} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long8</label>
                        <input type="text" name="new_Poly_Cord_long8" value={this.state.new_Poly_Cord_long8} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat9</label>
                        <input type="text" name="new_Poly_Cord_lat9" value={this.state.new_Poly_Cord_lat9} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long9</label>
                        <input type="text" name="new_Poly_Cord_long9" value={this.state.new_Poly_Cord_long9} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat10</label>
                        <input type="text" name="new_Poly_Cord_lat10" value={this.state.new_Poly_Cord_lat10} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long10</label>
                        <input type="text" name="new_Poly_Cord_long10" value={this.state.new_Poly_Cord_long10} onChange={this.handleChange.bind(this)}/><br/>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.onInsertStop.bind(this)}>Save</Button>
                        <Button onClick={this.handleHide.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>

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
                        <label>Stops</label>
                        <input type="text" name="Stops"
                               value={this.state.Stops} onChange={this.handleChange.bind(this)} /><br/>
                        <label>Lat</label>
                        <input type="text" name="Lat" value={this.state.Lat} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Longtitude</label>
                        <input type="text" name="Longtitude" value={this.state.Longtitude} onChange={this.handleChange.bind(this)}/><br/>

                        <label>GPS_Location_1</label>
                        <input type="text" name="GPS_Location_1" value={this.state.GPS_Location_1} onChange={this.handleChange.bind(this)}/><br/>
                        <label>GPS_Location_2</label>
                        <input type="text" name="GPS_Location_2" value={this.state.GPS_Location_2} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat1</label>
                        <input type="text" name="Poly_Cord_lat1" value={this.state.Poly_Cord_lat1} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long1</label>
                        <input type="text" name="Poly_Cord_long1" value={this.state.Poly_Cord_long1} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat2</label>
                        <input type="text" name="Poly_Cord_lat2" value={this.state.Poly_Cord_lat2} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long2</label>
                        <input type="text" name="Poly_Cord_long2" value={this.state.Poly_Cord_long2} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat3</label>
                        <input type="text" name="Poly_Cord_lat3" value={this.state.Poly_Cord_lat3} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long3</label>
                        <input type="text" name="Poly_Cord_long3" value={this.state.Poly_Cord_long3} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat4</label>
                        <input type="text" name="Poly_Cord_lat4" value={this.state.Poly_Cord_lat4} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long4</label>
                        <input type="text" name="Poly_Cord_long4" value={this.state.Poly_Cord_long4} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat5</label>
                        <input type="text" name="Poly_Cord_lat5" value={this.state.Poly_Cord_lat5} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long5</label>
                        <input type="text" name="Poly_Cord_long5" value={this.state.Poly_Cord_long5} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat6</label>
                        <input type="text" name="Poly_Cord_lat6" value={this.state.Poly_Cord_lat6} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long6</label>
                        <input type="text" name="Poly_Cord_long6" value={this.state.Poly_Cord_long6} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat7</label>
                        <input type="text" name="Poly_Cord_lat7" value={this.state.Poly_Cord_lat7} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long7</label>
                        <input type="text" name="Poly_Cord_long7" value={this.state.Poly_Cord_long7} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat8</label>
                        <input type="text" name="Poly_Cord_lat8" value={this.state.Poly_Cord_lat8} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long8</label>
                        <input type="text" name="Poly_Cord_long8" value={this.state.Poly_Cord_long8} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat9</label>
                        <input type="text" name="Poly_Cord_lat9" value={this.state.Poly_Cord_lat9} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long9</label>
                        <input type="text" name="Poly_Cord_long9" value={this.state.Poly_Cord_long9} onChange={this.handleChange.bind(this)}/><br/>

                        <label>Poly_Cord_lat10</label>
                        <input type="text" name="Poly_Cord_lat10" value={this.state.Poly_Cord_lat10} onChange={this.handleChange.bind(this)}/><br/>
                        <label>Poly_Cord_long10</label>
                        <input type="text" name="Poly_Cord_long10" value={this.state.Poly_Cord_long10} onChange={this.handleChange.bind(this)}/><br/>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.onUpdateStop.bind(this)}>Save</Button>
                        <Button onClick={this.handleHideUpdate.bind(this)}>Close</Button>
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
                        <Button onClick={this.handleHideDel.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}