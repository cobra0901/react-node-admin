import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/index.css';
import './index.css';
export class Home extends React.Component {
    render() {
        return(
            <div className="container">
                <ul className="inline-align">
                    <li><Link to={'/passenger'}><img className="menu-img imgResponsive" src="https://www.passengerterminaltoday.com/wp-content/uploads/2018/02/rsz_ptx2018_colour_dates.jpg" alt="passenger" /></Link></li>
                    <li><Link to={'/driver'}><img className="menu-img imgResponsive" src="http://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/761/2018/06/15090126/DriverServicesLogo.jpg" alt="driver" /></Link></li>
                    <li><Link to={'/library'}><img className="menu-img imgResponsive" src="https://comps.canstockphoto.com/people-at-bus-stop-clipart-vector_csp17142053.jpg" alt="library" /></Link></li>
                </ul>
            </div>
        );
    }
}
