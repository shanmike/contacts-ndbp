import React from 'react'
import './contactsTile.css'

function ContactsTile(props){ 
    const val = props.val
        return(
            <div key={val.id} className='conactsTile'>
                <div className='name'>{val.name}</div>
            </div>
        )
    
} export default ContactsTile