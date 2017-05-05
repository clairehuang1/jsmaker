
import React, { Component } from 'react';


const PopupWidget =({
  handleSubmit,
  handleChange
})=>{
return (<div id="banner" className="widget-container banner-container">
<span id='close-modal' className='close'>X</span>
  <div className="banner-content-container">
  <div><h1>Todays Specials</h1></div>
  <div><h2>chikin</h2></div>
  <div><h3>fitty dowler velly cheap</h3></div>
  </div>
</div>)
}


export default PopupWidget;
