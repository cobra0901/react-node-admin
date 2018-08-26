import React from 'react';
import {Row,Tab,Nav,NavItem,Col} from 'react-bootstrap';
import {Mycards} from "./tabs/Mycards";
import {RideDetails} from "./tabs/RideDetails";
import {TopupHistory} from "./tabs/TopupHistory";
import {Report} from "./tabs/Report";
import '../../css/main.css'

export class ContentTab extends React.Component {

    render(){
        return(
            <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first" >
                <Row className="clearfix">
                    <Col sm={12}>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="my_account">MY ACCOUNT</NavItem>
                            <NavItem eventKey="update_info">UPDATE INFO</NavItem>
                            <NavItem eventKey="ride_details">RIDE DETAILS</NavItem>
                            <NavItem eventKey="top_up_details">TOP UP DETAILS</NavItem>
                            <NavItem eventKey="ad_history">AD HISTORY</NavItem>
                            <NavItem eventKey="transaction">TRANSACTION</NavItem>
                            <NavItem eventKey="service">SERVICE</NavItem>
                            <NavItem eventKey="change_route">CHANGE ROUTE</NavItem>
                            <NavItem eventKey="report">CHANGE DEVICE</NavItem>
                        </Nav>
                    </Col>


                    <Col sm={12}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="my_cards">
                                <Mycards cards={this.props.cards} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="update_info">
                                Please update info
                            </Tab.Pane>
                            <Tab.Pane eventKey="ride_details">
                                <RideDetails ridehistories={this.props.ridehistories}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="top_up_details">
                                <TopupHistory topuphistories={this.props.topuphistories}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="report">
                                <Report reportblocks={this.props.reportblocks}/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    }
}