import React, { Component } from 'react';
import axios from 'axios'
import './contactsTile.css'



export default class AddContact extends Component{
    constructor(props){
        super (props)
        this.state = {
            name: '',
            phone: '',
            email: ''        
        }
        this.handleChange = this.handleChange.bind(this)
        this.saveContact = this.saveContact.bind(this)
    }

    handleChange(value,prop){
        this.setState({
            [prop]:value
        })
    }

    saveContact(){
        axios.post('/api/contacts',this.state).then((contacts)=>{
            this.props.backHome(contacts.data)
            }
        )
    }
        

    render(){
        return (
            <div>
                <div className="contPage">
                    <div className = "nameBox">Name:<input onChange={(e)=>this.handleChange(e.target.value,'name')}/></div>
                    <div className = "phoneBox">Phone:<input onChange={(e)=>this.handleChange(e.target.value,'phone')}/></div>
                    <div className = "emailBox">Email:<input onChange={(e)=>this.handleChange(e.target.value,'email')}/></div>                  
                </div>
                <ul>
                    <li><button className="button" onClick={()=>this.saveContact()}>Save</button></li>
                    <li><button className="button" onClick={()=>this.props.backHome()}>Cancel</button></li>
                </ul>       
            </div>
        );
    }
}