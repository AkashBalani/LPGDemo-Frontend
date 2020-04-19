import React, { Component } from 'react'

class CustomerComponent extends Component {
    state = {
        first_name: '',
        last_name: '',
        email_address: '',
        home_city: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        fetch('http://localhost:8080/v1/customer', { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email_address: this.state.email_address,
                home_city: this.state.home_city,
            }) 
        }) 
        .then(response => response.json()) 
        this.props.onSubmit(this.state);
        this.setState({
            first_name: '',
            last_name: '',
            email_address: '',
            home_city: '',
        });
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render(){
        const { first_name, last_name, email_address, home_city } = this.state
        return (
            <form onSubmit={this.onSubmit}>
                First Name : 
                <input 
                name='first_name'
                type='text'
                placeholder='First Name' 
                value={this.state.first_name} 
                onChange={e => this.change(e)}>
                </input>

                <br />

                Last Name : 
                <input 
                name='last_name'
                type='text'
                placeholder='Last Name' 
                value={this.state.last_name} 
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

                Home City:
                <input 
                name='home_city'
                type='text'
                placeholder='Home City' 
                value={this.state.home_city} 
                onChange={e => this.change(e)}>
                </input>

                <br />

                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }
}

export default CustomerComponent