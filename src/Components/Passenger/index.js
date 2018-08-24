import React from 'react';
import {NavClass} from '../../header/nav';
import {InputBox} from "./InputBox";
import {ContentTab} from "./ContentTab";

export class Passenger extends React.Component {
    render() {
        return(
            <div>
                <NavClass/>
                <InputBox/>
                <ContentTab/>
            </div>
        );
    }
}
