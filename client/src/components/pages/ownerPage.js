import React, { Component } from 'react';
import { Link } from 'react-router';
import CustomForm from '../forms/customize-form.js'
import MainSelector from '../forms/MainSelector'

class OwnerPage extends Component{
  constructor(props){
    super(props);
    this.state={
          type: '',
          backgroundColor:'',
          textColor:'',
          width:'',
          height:'',
          borderWidth:'',
          borderStyle:'',
          borderColor:'',
          header:'',
          item:'',
          price:'',
          description:'',
          duration:''
        };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
     const target = event.target;
     const value = target.value;
     const name = target.name;
     console.log(name);
     console.log("this da value" + value);
     this.setState({
       [name]:value
     })

   }
   handleSubmit(event){
     alert('hallo '+ this.state.name)
     console.log(this.state)
     event.preventDefault();
     const xhr = new XMLHttpRequest();
     xhr.open('post', '/changeModal');
     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     xhr.responseType='json';
     xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          console.log(xhr.response.message);
        } else {
          console.log('boohoo');
        }
      });
      xhr.send();
   }
  render(){

    return(
      <div>
      <MainSelector />
      <CustomForm type={this.state.type} backgroundColor={this.state.backgroundColor}
      textColor={this.state.textColor} width={this.state.width} height={this.state.height}
      borderWidth={this.state.borderWidth} borderStyle={this.state.borderStyle}
      borderColor={this.state.borderColor} header={this.state.header} item={this.state.item}
      price={this.state.price} description={this.state.description} duration={this.state.duration}
      handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    )
  }
}

export default OwnerPage;
