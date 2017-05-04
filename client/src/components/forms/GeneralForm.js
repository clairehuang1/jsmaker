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
    return <Popup handleSubmit={props.handleSubmit} handleChange={props.handleChange}/>;
  }else if(type==="banner"){
    console.log("suh2")
    return <Banner handleSubmit={props.handleSubmit} handleChange={props.handleChange}/>;
  }else{
    console.log("suh3")
  return <CustomForm handleImageChange={props.handleImageChange} handleSubmit={props.handleSubmit} handleChange={props.handleChange}
  />;
}
}
export default GeneralForm;
