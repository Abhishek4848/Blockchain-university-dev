import React from 'react'
import '../../assets/css/main.css'
import Enroll from './Enroll'
const Customcards=({item})=> {
  return (
    <div class="card">
    
    <div class="card-info">
      <p class="text-title">{item.name} </p>
      <p class="text-body">{item.category}</p>
      <p class="text-body">Course by : {item.cby}</p>
    </div>
    <div class="card-footer">
    <span class="text-title">INR{item.fee}</span>
    <div class="card-button">
      <Enroll item={item}/>
    </div>
  </div></div>
  )
}
export default Customcards
