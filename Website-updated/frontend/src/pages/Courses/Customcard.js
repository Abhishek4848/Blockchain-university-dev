import React from 'react'
import '../../assets/css/main.css'
import View from './View';


const Customcard=({item})=> {
  return (
    <div class="card">
    <div class="card-img">
      <p>Students :{item.se}</p>
    </div>
    <div class="card-info">
      <p class="text-title">{item.name} </p>
      <p class="text-body">{item.category}</p>
      <p class="text-body">Course by : {item.cby}</p>
    </div>
    <div class="card-footer">
    <span class="text-title">INR{item.fee}</span>
    <div class="card-button">
      <View item={item}/>
    </div>
  </div></div>
  )
}
export default Customcard
