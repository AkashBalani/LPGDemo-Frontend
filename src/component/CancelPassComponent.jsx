import React, { Component } from 'react'

class CancelPassComponent extends Component {
    state = {
        customer_id: '',
        pass_id: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        fetch('http://localhost:8080/v1/cancelpass', { 
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                customer_id: this.state.customer_id,
                pass_id: this.state.pass_id,
            }) 
        }) 
        .then(response => response.json()) 
        // console.log()
        this.props.onSubmit(this.state);
        this.setState({
            customer_id: '',
            pass_id: '',
        });
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render(){
        const { customer_id, pass_id } = this.state
        return(
            <form onSubmit={this.onSubmit}>
                Pass ID : 
                <input 
                name='pass_id'
                type='text'
                placeholder='Vendor ID' 
                value={this.state.pass_id} 
                onChange={e => this.change(e)}>
                </input>

                Customer ID : 
                <input 
                name='customer_id'
                type='text'
                placeholder='Customer ID' 
                value={this.state.customer_id} 
                onChange={e => this.change(e)}>
                </input>

                <button onClick={e => this.onSubmit(e)}>Submit</button>

                
            </form>
            
        );
    }
}

export default CancelPassComponent
