import React, { Component } from 'react';
import axios from 'axios';
import AddContact from './components/AddContact.js'
import ContactsTile from './components/ContactsTile.js'
import ContactPage from './components/ContactPage.js'
import './Reset.css'
import './App.css';


export default class App extends Component {
  constructor(){
      super ()
      this.state = {
        contacts: [],
        display: 'contactlist',
        infoId: null
      }
      this.backHome = this.backHome.bind(this)
  }

  handleInfoId(id){
  this.setState({
    display:'contactinfo',
     infoId: id
   })
  }

  componentDidMount(){
    axios.get(`/api/contacts`).then(res=>{
      this.setState({
        contacts:res.data,
        display:'contactlist'
      })
    })
  }

  backHome(contacts = this.state.contacts){
    this.setState({
      display:'contactlist',
      contacts
    })
  }

  handleNewContact(){
    this.setState({
      display:'addcontact'
    })
  }

  render() {
    switch (this.state.display){
      case 'addcontact': 
        return (
          <div>
            <h1>ADDING CONTACT</h1>
            <AddContact backHome={this.backHome} /> 
          </div>
      )

      case 'contactlist' : 
        return (
          <div className="mainCont">
            <button className="addContactButton" onClick={()=>this.handleNewContact()}>+</button>
            {this.state.contacts.sort((e,i)=>e.name>i.name).map((val,i)=>{
              return(
                <div className = 'tile' key={val.id}>
                  <div className = "imageBox">
                    <img 
                      src ='http://cdn.cnn.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-full-169.jpg' 
                      alt ="Contact"/>
                  </div> 
                  <ContactsTile  val={val} />
                  <button className="button" onClick={()=>this.handleInfoId(i)}>Details</button>
                </div>)})}
          </div>
      )

      case 'contactinfo': 
        return (
          <div>
            <ContactPage backHome={this.backHome} state={this.state}/> 
          </div>
      )
    }
  }
}