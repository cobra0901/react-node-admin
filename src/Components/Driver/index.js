import React from 'react';
import {Link} from 'react-router-dom';
import {NavClass} from '../../header/nav';


export class Driver extends React.Component {
    render() {
        return(
            <div>
                <NavClass/>
                <Link to={'/'}><h1><img src="https://banner2.kisspng.com/20171220/vrw/taxi-logo-png-5a3a18ad5c2761.36201834151375684537759422.jpg" alt="Moviee logo" /> Moviee</h1></Link>
                <h2>This is Driver page</h2>
            </div>
        );
    }
}
