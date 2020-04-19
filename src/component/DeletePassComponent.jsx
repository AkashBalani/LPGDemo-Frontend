import React, { Component } from 'react'

let formData = new FormData();

class DeletePassComponent extends Component {
    state = {
        vendor_id: '',
        pass_id: '',
    }

    

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        formData.append('vendor_id', this.state.vendor_id)
        formData.append('pass_id', this.state.pass_id)
        fetch('http://localhost:8080/v1/pass', { 
            method: 'DELETE', 
            headers: {
                // 'Content-Type': 'multipart/form-data',
                // 'vendor_id': this.state.vendor_id,
                // 'pass_id': this.state.pass_id,
            },
            body: formData
            // body: new FormData ({
            //     vendor_id: this.state.vendor_id,
            //     pass_id: this.state.pass_id,
            // }) 
        }) 
        .then(response => response.json()) 
        // console.log()
        this.props.onSubmit(this.state);
        this.setState({
            vendor_id: '',
            pass_id: '',
        });
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render(){
        const { vendor_id, pass_id } = this.state
        return(
            <form onSubmit={this.onSubmit}>
                Pass ID : 
                <input 
                name='pass_id'
                type='text'
                placeholder='Pass ID' 
                value={this.state.pass_id} 
                onChange={e => this.change(e)}>
                </input>

                Vendor ID : 
                <input 
                name='vendor_id'
                type='text'
                placeholder='Vendor ID' 
                value={this.state.vendor_id} 
                onChange={e => this.change(e)}>
                </input>

                <button onClick={e => this.onSubmit(e)}>Submit</button>

                
            </form>
            
        );
    }
}

export default DeletePassComponent
