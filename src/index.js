import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home} from './Components/Home';
import {Passenger} from './Components/Passenger';
import './css/index.css';
import {Library} from "./Components/Library/index";
import {Driver} from "./Components/Driver/index";

class App extends React.Component {
  render() {
    console.log('Made by Luigi Benvenuti - http://www.luigibenvenuti.com/');
    return(
      <BrowserRouter>
        <Switch>

            <Route path={'/passenger/'} component={Passenger} />
            <Route path={'/driver/'} component={Driver} />
            <Route path={'/library/'} component={Library} />
            <Route path={'/'} component={Home} />

        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
