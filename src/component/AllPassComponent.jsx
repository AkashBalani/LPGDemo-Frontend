import React, { Component } from 'react'
import axios from 'axios'

class AllPassComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/v1/allpasses')
        .then(
            response => {
                console.log(response.data)
                this.setState({
                    data : response.data
                })
            }
        )
    }
    

    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Pass ID</th>
                            <th>created_ts</th>
                            <th>updated_ts</th>
                            <th>expiry_date</th>
                            <th>pass_length</th>
                            <th>customer</th>
                            <th>vendor ID</th>
                            <th>company_name</th>
                            <th>email_address</th>
                            <th>company_address</th>
                            <th>pass_city</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map (
                                data=>
                                <tr key ={data.pass_id}>
                                    <td>{data.pass_id}</td>
                                    <td>{data.created_ts}</td>
                                    <td>{data.updated_ts}</td>
                                    <td>{data.expiry_date}</td>
                                    <td>{data.pass_length}</td>
                                    <td>{data.customer}</td>
                                    <td>{data.vendor.vendor_id}</td>
                                    <td>{data.vendor.company_name}</td>
                                    <td>{data.vendor.email_address}</td>
                                    <td>{data.vendor.company_address}</td>
                                    <td>{data.pass_city}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            //console.log(this.state.data)
            //axios.get("http://localhost:8080/v1/allpasses")
        )
    }

    // onSubmit = (e) => {
    //     // e.preventDefault();
    //     // console.log(this.state);
    //     fetch('http://localhost:8080/v1/allpasses', { 
    //         method: 'GET', 
    //         headers: {
    //             'Content-Type': 'application/json' 
    //         },
    //     }) 
    //     .then(response => response.json())
    //     this.props.onSubmit(this.state);
    // };

}

export default AllPassComponent
