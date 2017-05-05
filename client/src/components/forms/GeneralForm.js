import React, { Component } from 'react';
import Popup from './Popup.js'
import Banner from './Banner.js'
import CustomForm from './customize-form.js'

function GeneralForm(props){
  console.log(props.type);
  console.log('above');
  const type = props.type;
  if(type==="popup"){
    console.log("suh1")
    return (
      <div>
      <h3> Editing Popup </h3>
      <Popup handleSubmit={props.handleSubmit} handleChange={props.handleChange}/>
    </div>);
  }else if(type==="banner"){
    console.log("suh2")
    return (  <div>
      <h3> Editing Banner </h3>
      <Banner handleSubmit={props.handleSubmit} handleChange={props.handleChange}/>
    </div>);
  }else if (type==="panel"){
    console.log("suh3")
  return (
    <div>
    <h3> Editing Panel </h3>
    <CustomForm handleImageChange={props.handleImageChange} handleSubmit={props.handleSubmit} handleChange={props.handleChange}
  />
  </div>);
}else return(
  <div>
  <h3> Pick a type </h3>
  <CustomForm handleImageChange={props.handleImageChange} handleSubmit={props.handleSubmit} handleChange={props.handleChange}/>

</div>);
}
export default GeneralForm;
