
import React, { Component } from 'react';


const PanelWidget =({
  handleSubmit,
  handleChange
})=>{
return (<div id="panel" class="side-panel-container">
<span id='close-modal' class='close'>X</span>
  <div class="side-content-container">
  <div><h1>Todays Specials</h1></div>
  <div><h2>chikin</h2></div>
  <div><h3>fitty dowler velly cheap</h3></div>
  </div>
</div>)
}


export default PanelWidget;
