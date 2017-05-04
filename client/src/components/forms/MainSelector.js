import React, { Component } from 'react';

class MainSelector extends Component{
  constructor(props){
    super(props);
    this.state={value:''}
    this.chooseModal = this.chooseModal.bind(this)
  }
  chooseModal(event){
    this.setState({value:event.target.value})
  }
  render(){
    return(
      <ul className="forms">
      <li>
        <label>
          Type:
          <select className="placeholders" name="type" onChange={this.chooseModal}>

            <option value="popup"> Popup </option>
            <option value="banner"> Banner </option>
            <option value="panel"> Panel </option>
          </select>
        </label>
      </li>
      </ul>
    )
  }
}
export default MainSelector;
