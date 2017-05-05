import React, { Component } from 'react';
import Popup from './Popup.js'
import Banner from './Banner.js'
import CustomForm from './customize-form.js'

function GeneralForm(props){
  const type = props.type;
  if(type==="popup"){
    return (
      <div>
      <h3> Editing Popup </h3>
      <Popup handleSubmit={props.handleSubmit} handleChange={props.handleChange}/>
    </div>);
  }else if(type==="banner"){
    return (  <div>
      <h3> Editing Banner </h3>
      <Banner handleSubmit={props.handleSubmit} handleChange={props.handleChange}/>
    </div>);
  }else if (type==="panel"){
  return (
    <div>
    <h3> Editing Panel </h3>
    <CustomForm handleImageChange={props.handleImageChange} handleSubmit={props.handleSubmit} handleChange={props.handleChange}
  />
  </div>);
}else return(
  <div>
  <CustomForm handleImageChange={props.handleImageChange} handleSubmit={props.handleSubmit} handleChange={props.handleChange}/>

</div>);
}
export default GeneralForm;
