import React, { Component } from 'react'

class GetMyPassComponent extends Component {
    state = {
        customer_id: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        fetch('http://localhost:8080/v1/mypass', { 
            method: 'GET', 
            headers: {
                // 'Content-Type': 'application/json',
                customer_id: this.state.customer_id
            },
            // body: JSON.stringify({
            //     customer_id: this.state.customer_id,
            //     pass_id: this.state.pass_id,
            // }) 
        }) 
        .then(response => response.json()) 
        // console.log()
        this.props.onSubmit(this.state);
        this.setState({
            customer_id: '',
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

export default GetMyPassComponent