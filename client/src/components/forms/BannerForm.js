import React, { Component } from 'react';

function BannerForm ({
  handleColorClick,
}){
  return (<div className="field-container">
  <div>Background Color</div>
  <div>
  <div>
  <button onClick={ this.handleColorClick }>Pick Color</button>
  { this.state.displayColorPicker ? <div style={ popover }>
  <div style={ cover } onClick={ this.handleColorClose }/>
  <ChromePicker name="bgColorr" onChange={this.setBGColor} />
  </div> : null }
  </div>
  </div>
  </div>

  <div className="field-container">
  <div>Text Color</div>
  <div><input name="textColor" onChange={this.handleChange}/></div>
  </div>
  <div className="field-container">
  <div>Text</div>
  <div><input name="body" onChange={this.handleChange}/></div>
  </div>
)
}
export default BannerForm;
