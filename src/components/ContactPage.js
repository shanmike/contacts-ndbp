import React, { Component } from 'react'
import axios from 'axios'
import './contactsTile.css'



export default class ContactPage extends Component{
    constructor(props){
        super (props)
        this.state = {
            name: '',
            phone: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange(value,prop){
        this.setState({
            [prop]:value
        })
    }

    handleUpdate(){
        const body = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email
        }
        axios.put(`/api/contacts/${this.props.state.contacts[this.props.state.infoId].id}`,body)
            .then((contacts)=>{
                this.props.backHome(contacts.data)
            })
    }

    handleDelete(){
        axios.delete(`/api/contacts/${this.props.state.contacts[this.props.state.infoId].id}`).then((contacts)=>{
            this.props.backHome(contacts.data)
        }
      )
    }

    componentDidMount(){
        const {contacts, infoId} = this.props.state
        this.setState({
            name: contacts[infoId].name,
            phone: contacts[infoId].phone,
            email: contacts[infoId].email,
    })
    }

    render(){
        const {contacts, infoId} = this.props.state
        return (
            <div className='container'>
                <img className ='img' 
                    src ='http://cdn.cnn.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-full-169.jpg' 
                    alt ="Contact"/> 
                    
                <div className="contPage">
                    <div className="nameBox">Name:<input onChange={(e)=>this.handleChange(e.target.value,'name')} value = {this.state.name}/></div>
                    <div className="phoneBox">Phone:<input onChange={(e)=>this.handleChange(e.target.value,'phone')} value = {this.state.phone}/></div>
                    <div className="emailBox">Email:<input onChange={(e)=>this.handleChange(e.target.value,'email')} value = {this.state.email}/></div>
                </div>
                
                <ul className='ul'>
                    <li><button className="button" onClick={()=>this.handleUpdate()}>Update</button></li>
                    <li><button className="delete" onClick={()=>this.handleDelete()}>Delete</button></li>
                    <li><button className="button" onClick={()=>this.props.backHome()}>Cancel</button></li>
                </ul>

            </div>
        )
    }
}