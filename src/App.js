import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './component/CustomerComponent';
import Vendor from './component/VendorComponent';
import Pass from './component/PassComponent';
import AllPass from './component/AllPassComponent';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'
import AddPass from './component/AddPassComponent'
import CancelPass from './component/CancelPassComponent'
import RenewPass from './component/RenewPassComponent'
import DeletePass from './component/DeletePassComponent'
import GetPass from './component/GetMyPassComponent'

class App extends Component {

  onSubmit = fields => {
    console.log("App comp got: ", fields)
  };

  render() {
    return (
      <Router>
        <>
          <Route path="/v1/vendor">
            <div className="App">
              <Vendor onSubmit={fields => this.onSubmit(fields)}></Vendor>
            </div>
          </Route>
          <Route path="/v1/customer">
            <div>
              <Customer onSubmit={fields => this.onSubmit(fields)}></Customer>
            </div>
          </Route>
          <Route path="/v1/pass">
            <div>
              <Pass onSubmit={fields => this.onSubmit(fields)}></Pass>
            </div>
          </Route>
          <Route path="/v1/allpass">
            <div>
              <AllPass onSubmit={fields => this.onSubmit(fields)}></AllPass>
            </div>
          </Route>
          <Route path="/v1/addpass">
            <div>
                <AddPass onSubmit={fields => this.onSubmit(fields)}>
                </AddPass>
            </div>
          </Route>
          <Route path="/v1/cancelpass">
            <div>
                <CancelPass onSubmit={fields => this.onSubmit(fields)}>
                </CancelPass>
            </div>
          </Route>
          <Route path="/v1/renewpass">
            <div>
                <RenewPass onSubmit={fields => this.onSubmit(fields)}>
                </RenewPass>
            </div>
          </Route>
          <Route path="/v1/deletepass">
            <div>
                <DeletePass onSubmit={fields => this.onSubmit(fields)}>
                </DeletePass>
            </div>
          </Route>
          <Route path="/v1/getpass">
            <div>
                <GetPass onSubmit={fields => this.onSubmit(fields)}>
                </GetPass>
            </div>
          </Route>
        </>
      </Router>
    );
  } 
}

export default App;
