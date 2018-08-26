import React from 'react';
import {Table,Button,Modal} from 'react-bootstrap';
import '../../../css/index.css';

export class Stops extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false,
        };
    }

    handleHide() {
        this.setState({ show: false });
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
                                <td><Button bsStyle="success" onClick={() => this.setState({ show: true })}>edit</Button></td>
                                <td><Button bsStyle="danger">delete</Button></td>
                            </tr>
                        )})}

                    </tbody>
                </Table>
                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Update Data
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        This is editable Data.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary">Save</Button>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}