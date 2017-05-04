import React, { Component } from 'react';
import { Link } from 'react-router';
import CustomForm from '../forms/customize-form.js'
import MainSelector from '../forms/MainSelector'
import Popup from '../forms/Popup.js'
import GeneralForm from '../forms/GeneralForm.js'
import Preview from '../forms/Preview.js'

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
          duration:'',
          file:'',
          imagePreviewUrl:'',
          previewComponent:''
        };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleImageChange = this.handleImageChange.bind(this);
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
   handleImageChange(event){
     event.preventDefault();
     let reader = new FileReader();
     let file = event.target.files[0];
     console.log("hi fileupload")
     console.log(file);
     console.log(this);
     console.log("just printed")
     console.log(reader.result)
     var that = this;
     reader.onloadend = function(){
       console.log(this);

       that.setState({
         file: file
       })
     }
  //    reader.onloadend = () => {
  //    this.setState({
  //      file: file,
  //      imagePreviewUrl: reader.result
  //    });
  //  }
     reader.readAsDataURL(file)
   }

   handleSubmit(event){
     console.log('hgffcvgfcgjfcgfh');
     alert('hallo '+ this.state.name)
     console.log(this.state)
     event.preventDefault();
     this.setState({previewComponent: previewComponent})
    //  const xhr = new XMLHttpRequest();
    //  xhr.open('post', '/changeModal');
    //  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    //  xhr.responseType='json';
    //  xhr.addEventListener('load', () => {
    //     if (xhr.status === 200) {
    //       console.log(xhr.response.message);
    //     } else {
    //       console.log('boohoo');
    //     }
    //   });
    //   xhr.send();
   }
  render(){
    console.log("sup")

    console.log(this.state.type)
    let {imagePreviewUrl} = this.state;
     let $imagePreview = null;
     if (imagePreviewUrl) {
       $imagePreview = (<img src={imagePreviewUrl} />);
     } else {
       $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
     }
     console.log($imagePreview);

    return(
      <div id="organizeOwner">
      <div id="miniOwner">
      <GeneralForm type={this.state.type} backgroundColor={this.state.backgroundColor}
      textColor={this.state.textColor} width={this.state.width} height={this.state.height}
      borderWidth={this.state.borderWidth} borderStyle={this.state.borderStyle}
      borderColor={this.state.borderColor} header={this.state.header} item={this.state.item}
      price={this.state.price} description={this.state.description} duration={this.state.duration}
      handleSubmit={this.handleSubmit} imagePreview={$imagePreview} handleImageChange= {this.handleImageChange}
      handleImageSubmit={this.handleImageSubmit} handleChange={this.handleChange}/>
      </div>
      <div>
      <Preview previewComponent={this.state.previewComponent}/>
      </div>
      </div>
    )
  }
}

export default OwnerPage;
