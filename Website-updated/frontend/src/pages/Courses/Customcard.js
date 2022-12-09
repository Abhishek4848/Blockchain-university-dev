import React from 'react'
import '../../assets/css/main.css'
import View from './View';


const Customcard=({item})=> {
  return (
    <div className="card">
    <div className="card-img">
      <p className="txt-st">Students :{item.se}</p>
    </div>
    <div className="card-info">
      <p className="text-title">{item.name} </p>
      <p className="text-body">{item.category}</p>
      <p className="text-body">Course by : {item.cby}</p>
    </div>
    <div className="card-footer">
    <span className="text-title">INR{item.fee}</span>
    <div className="card-button">
      <View item={item}/>
    </div>
  </div></div>
  )
}
export default Customcard
