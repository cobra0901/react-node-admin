import React from 'react';
import '../../../css/index.css'
import {Table,Button,Modal} from 'react-bootstrap';

export class Report extends React.Component {

    render() {
        return (
            <div>
                <Table responsive className="table-view" bordered hover>
                    <thead>
                    <tr className="th-view">
                        <th>UserID</th>
                        <th>ReportID</th>
                        <th>Report_Type</th>
                        <th>CardID</th>
                        <th>Card_Amount</th>
                        <th>Credit_Amount</th>
                        <th>Credit_Type</th>
                        <th>Report_Date</th>
                        <th>Name(in A/C)</th>
                        <th>Account_Number</th>
                        <th>IFSC</th>
                        <th>Address</th>
                        <th>Pincode</th>
                        <th className="th-button-view"></th>
                        <th className="th-button-view"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Anna</td>
                        <td>Pitt</td>
                        <td>35</td>
                        <td>New York</td>
                        <td>USA</td>
                        <td>1235</td>
                        <td>1235</td>
                        <td>1235</td>
                        <td>1235</td>
                        <td>1235</td>
                        <td>1235</td>
                        <td>1235</td>
                        <td><Button bsStyle="success">edit</Button></td>
                        <td><Button bsStyle="danger">delete</Button></td>
                    </tr>

                    </tbody>
                </Table>
            </div>
        );
    }
}