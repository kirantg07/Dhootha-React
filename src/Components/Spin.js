import React, { Component } from 'react'
import Loading from './loading.gif'
const  Spin =()=> {
 
    return (
      <div className='text-center'>
        <img src={Loading} alt='loading'/>
      </div>
    )
  
}
export default Spin;