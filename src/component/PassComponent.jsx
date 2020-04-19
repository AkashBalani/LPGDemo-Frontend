import React,{ Component } from "react";

class PassComponent extends Component{
    state = {
        pass_city: '',
        pass_length: '',
        vendor_id: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        fetch('http://localhost:8080/v1/pass', { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                pass_city: this.state.pass_city,
                pass_length: this.state.pass_length,
                vendor_id: this.state.vendor_id,
            }) 
        }) 
        .then(response => response.json()) 
        this.props.onSubmit(this.state);
        this.setState({
            pass_city: '',
            pass_length: '',
            vendor_id: '',
        });
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render(){
        const { pass_city, pass_length, vendor_id } = this.state
        return (
            <form onSubmit={this.onSubmit}>
                Pass City : 
                <input 
                name='pass_city'
                type='text'
                placeholder='Pass City' 
                value={this.state.pass_city} 
                onChange={e => this.change(e)}>
                </input>

                <br />

                Pass Length : 
                <input 
                name='pass_length'
                type='text'
                placeholder='Pass Length' 
                value={this.state.pass_length} 
                onChange={e => this.change(e)}>
                </input>

                <br />

                Vendor ID : 
                <input 
                name='vendor_id'
                type='text'
                placeholder='Vendor ID' 
                value={this.state.vendor_id} 
                onChange={e => this.change(e)}>
                </input>

                <br />

                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }
}

export default PassComponent