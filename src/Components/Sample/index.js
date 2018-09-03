import React from 'react'
import update from 'react-addons-update'
import axios from 'axios';

export class Sample extends React.Component {

    constructor(){
        super();
        this. state = {
            name:'',
            phone:'',
            results:[]
        }
    }

    componentDidMount(){
        axios.get(`http://ec2-54-169-53-70.ap-southeast-1.compute.amazonaws.com:5000/busstops/`)
            .then(res => {
                const results = res.data;
                this.setState({ results });
            });
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClick(){
       // this.props.onInsert(this.state.name, this.state.phone);
        this.setState({

        });

        let newState = update(this.state, {
            results: {
                $push: [{"name": this.state.name, "phone": this.state.phone}]
            }
        });

        this.setState(newState);
        console.log("contactData",this.state.results);
    }



    render() {

        console.log("results",this.state.results);

        return (
            <div>
                <p>
                    <input type="text"
                           name="name"
                           placeholder="name"
                           value={this.state.name}
                           onChange={this.handleChange.bind(this)}/>

                    <input type="text"
                           name="phone"
                           placeholder="phone"
                           value={this.state.phone}
                           onChange={this.handleChange.bind(this)}/>

                    <button onClick={this.handleClick.bind(this)}>
                        Insert
                    </button>

                    <ul>
                        {this.state.results.map((contact, i) => {
                            return (<ContactInfo name={contact.name}
                                                 phone={contact.phone}
                                                 key={i}/>);
                        })}
                    </ul>
                </p>
            </div>
        );
    }
}

 class ContactInfo extends React.Component {
    render(){
        return(
            <div>
                <p>{this.props.name}{this.props.phone}</p>
            </div>
        );
    }
 }



// class Contacts extends React.Component {
//
//
//         _insertContact(name, phone){
//             let newState = update(this.state, {
//                 contactData: {
//                     $push: [{"name": name, "phone": phone}]
//                 }
//             });
//             this.setState(newState);
//         }
//
//
//         render(){
//             return(
//                 <ContactCreator onInsert={this._insertContact.bind(this)}/>
//
//             );
//         }
//
// }