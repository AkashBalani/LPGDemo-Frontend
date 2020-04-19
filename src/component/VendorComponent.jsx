import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'

class VendorComponent extends Component{
    state = {
        company_address: '',
        email_address: '',
        company_name: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        // axios.post("http://localhost:8080/v1/vendor", {
        //     company_address: this.state.company_address,
        //     email_address: this.state.email_address,
        //     company_name: this.state.company_name,
        // })
        fetch('http://localhost:8080/v1/vendor', { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                company_address: this.state.company_address,
                email_address: this.state.email_address,
                company_name: this.state.company_name,
            }) 
        }) 
        .then(response => response.json()) 
        this.render(this.state)
        this.props.onSubmit(this.state);
        this.setState({
            company_address: '',
            email_address: '',
            company_name: '',
        });
    };

    

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render(){
        const { company_name, company_address, email_address } = this.state
        return (
            <form onSubmit={this.onSubmit}>
                Company Name : 
                <input 
                name='company_name'
                type='text'
                placeholder='Company Name' 
                value={this.state.company_name} 
                onChange={e => this.change(e)}>
                </input>

                <br />

                Company Address : 
                <input 
                name='company_address'
                type='text'
                placeholder='Company Address' 
                value={this.state.company_address} 
                onChange={e => this.change(e)}>
                </input>

                <br />

                Email Address : 
                <input 
                name='email_address'
                type='email'
                placeholder='E-Mail' 
                value={this.state.email_address} 
                onChange={e => this.change(e)}>
                </input>

                <br />

                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }
}


export default VendorComponent