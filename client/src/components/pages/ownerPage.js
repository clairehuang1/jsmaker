import React, { Component } from 'react';
import { Link } from 'react-router';
import { ChromePicker } from 'react-color';
import CustomForm from '../forms/customize-form.js'
import MainSelector from '../forms/MainSelector'
import Popup from '../forms/Popup.js'
import GeneralForm from '../forms/GeneralForm.js'
import Preview from '../forms/Preview.js'
import WidgetSelector from '../forms/WidgetSelector.js'

class OwnerPage extends Component{
  constructor(props){
    super(props);
    this.state={
      displayBGColorPicker: false,
      displayTextColorPicker: false,
      selectedOption: 'banner',
      website:'',
      backgroundColor: '',
      bodyTextColor: '',
      headerTextColor: '',
      borderColor: ''
    };

    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.onPreviewSubmit = this.onPreviewSubmit.bind(this);
    this.handleBGColorClick = this.handleBGColorClick.bind(this);
    this.handleBGColorClose = this.handleBGColorClose.bind(this);
    this.handleTextColorClick = this.handleTextColorClick.bind(this);
    this.handleTextColorClose = this.handleTextColorClose.bind(this);
    this.setBGColor = this.setBGColor.bind(this);
    this.setTextColor = this.setTextColor.bind(this);

  }
  setBGColor(e) {
    console.log("setting bg color", e);
    this.setState({
      backgroundColor: e.hex
    })
  }
  setTextColor(e) {
    console.log("setting text", e);
    this.setState({
      bodyTextColor: e.hex
    })
  }

  handleChange(event){
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]:value
    })

  }
  handleOptionChange(e) {
    console.log('selected', e.target.value);
    this.setState({
      selectedOption: e.target.value
    });
  }
  onPreviewSubmit(event){
    console.log("PREVIEW");
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
    event.preventDefault();
    console.log("****STATE****", this.state)
    var formData ='';
    const currentState = this.state
    Object.keys(currentState).forEach(function(key,i) {
      // key: the name of the object key
      // index: the ordinal position of the key within the object
      //console.log("OBJ: ", obj);
      formData += (encodeURIComponent(currentState[key]) + "=${" + encodeURIComponent(currentState[key]) +"}&");

    });
    console.log("FORM:", formData);
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/changeModal');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType='json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        console.log('success, 200');
        console.log(xhr.response.message);
      } else {
        console.log('boohoo');
      }
    });
    xhr.send(formData);
  }
  handleBGColorClick(e) {
    console.log('handle click bg', e);
    this.setState({
      displayBGColorPicker: !this.state.displayBGColorPicker })
  }

  handleBGColorClose(e) {
    this.setState({
      displayBGColorPicker: false})
  }
  handleTextColorClick() {
    console.log('gottem text');
    this.setState({ displayTextColorPicker: !this.state.displayTextColorPicker })
  }

  handleTextColorClose() {
    this.setState({ displayTextColorPicker: false })
  }
  render(){

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }

    return(<div className="widget-container">
    <h2>Customize your widget:</h2>
    <div className="content-container">
      <form onSubmit={this.handleSubmit}>
        <div className="form-container">
          <div className="field-container">
            <div>Your website</div>
            <div><input name="website" onChange={this.handleChange}/></div>
          </div>
          <div className="column">
            <div>Widget type</div>
            <div className="field-container">

              <div>
                <label className="selector">
                  <input type="radio" value="banner" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'banner'}/>
                  Banner
                </label>
              </div>

              <div>
                <label className="selector">
                  <input type="radio" value="panel" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'panel'}/>
                  Panel
                </label>
              </div>

              <div>
                <label className="selector">
                  <input type="radio" value="popup" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'popup'}/>
                  Popup
                </label>
              </div>

            </div>
          </div>

          {this.state.selectedOption === 'banner' ?
            (       <div> <div className="field-container">
            <div>Background Color</div>
            <div>
              <div>
                <button type="button" onClick={ this.handleBGColorClick }>Pick Color</button>
                { this.state.displayBGColorPicker ? <div style={ popover }>
                <div style={ cover } onClick={ this.handleBGColorClose }/>
                <ChromePicker name="bgColorr" onChange={this.setBGColor} />
              </div> : null }
            </div>
          </div>
        </div>

        <div className="field-container">
          <div>Text Color</div>
          <div>
            <div>
              <button type="button" onClick={ this.handleTextColorClick }>Pick Color</button>
              { this.state.displayTextColorPicker ? <div style={ popover }>
              <div style={ cover } onClick={ this.handleTextColorClose }/>
              <ChromePicker name="bgColorr" onChange={this.setTextColor} />
            </div> : null }
          </div>
        </div>
      </div>

      <div className="field-container">
        <div>Text</div>
        <div><input name="body" onChange={this.handleChange}/></div>
      </div></div>) : null}

      {this.state.selectedOption === 'popup' ?
        (<div>
          <div className="field-container">
            Choose your trigger button
          </div>
          <div className="field-container">
            <div>Background Color</div>
            <div>
              <div>
                <button type="button" onClick={ this.handleBGColorClick }>Pick Color</button>
                { this.state.displayBGColorPicker ? <div style={ popover }>
                <div style={ cover } onClick={ this.handleBGColorClose }/>
                <ChromePicker onChange={this.setBGColor} />
              </div> : null }
            </div>
          </div>
        </div>

        <div className="field-container">
          <div>Text Color</div>
          <div>
            <div>
              <button type="button" onClick={ this.handleTextColorClick }>Pick Color</button>
              { this.state.displayTextColorPicker ? <div style={ popover }>
              <div style={ cover } onClick={ this.handleTextColorClose }/>
              <ChromePicker onChange={this.setTextColor} />
            </div> : null }
          </div>
        </div>
      </div>


      <div className="field-container">
        <div>Text</div>
        <div><input name="body" onChange={this.handleChange}/></div>
      </div></div>) : null}

    </div>
    <button type="submit">Press</button>
  </form>
  <div className="preview-container">
    <Preview website={this.state.website} onPreviewSubmit={this.onPreviewSubmit} previewComponent={this.state.selectedOption}/>
  </div>
</div>
</div>)
}
}

// <div id="organizeOwner">
//   <div id="miniOwner">
//     <div>
//       <form>
//         <label className="selector">
//           <input type="radio" value="banner" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'banner'}/>
//           Banner
//         </label>
// <label className="selector">
//   <input type="radio" value="panel" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'panel'}/>
//   Panel
// </label>
// <label className="selector">
//   <input type="radio" value="popup" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'popup'}/>
//   Popup
// </label>
//       </form>
//     </div>
//     <GeneralForm backgroundColor={this.state.backgroundColor}
//       textColor={this.state.textColor} width={this.state.width} height={this.state.height}
//       borderWidth={this.state.borderWidth} borderStyle={this.state.borderStyle}
//       borderColor={this.state.borderColor} header={this.state.header} item={this.state.item}
//       price={this.state.price} description={this.state.description} duration={this.state.duration}
//       handleSubmit={this.handleSubmit} imagePreview={$imagePreview} handleImageChange= {this.handleImageChange}
//       handleImageSubmit={this.handleImageSubmit} handleChange={this.handleChange}/>
//   </div>
//   <div>
//     <Preview onPreviewSubmit={this.onPreviewSubmit} previewComponent={this.state.selectedOption}/>
//   </div>
// </div>

export default OwnerPage;
