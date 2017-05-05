import React, { Component } from 'react';
import Popup from './Popup.js'
import Banner from './Banner.js'
import CustomForm from './customize-form.js'

function GeneralForm(props){
  const type = props.type;
  if(type==="popup"){
    return (
      <div>
      <h1> Editing Popup </h1>
      <Popup handleSubmit={props.handleSubmit} handleChange={props.handleChange}/>
    </div>);
  }else if(type==="banner"){
    return (  <div>
      <h1> Editing Banner </h1>
      <Banner handleSubmit={props.handleSubmit} handleChange={props.handleChange}/>
    </div>);
  }else if (type==="panel"){
  return (
    <div>
    <h1> Editing Panel </h1>
    <CustomForm handleImageChange={props.handleImageChange} handleSubmit={props.handleSubmit} handleChange={props.handleChange}
  />
  </div>);
}else return(
  <div>
  <CustomForm handleImageChange={props.handleImageChange} handleSubmit={props.handleSubmit} handleChange={props.handleChange}/>

</div>);
}
export default GeneralForm;
