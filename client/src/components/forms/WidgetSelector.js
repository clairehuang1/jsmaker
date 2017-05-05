import React, { Component } from 'react';

class WidgetSelector extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedOption: 'banner',
    }
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }
  handleOptionChange(e) {
    console.log('selected', e.target.value);
    this.setState({
      selectedOption: e.target.value
    });
  }
  render() {
    return(
      <div>
        <form>
          <label className="selector">
            <input type="radio" value="banner" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'banner'}/>
            Banner
          </label>
          <label className="selector">
            <input type="radio" value="panel" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'panel'}/>
            Panel
          </label>
          <label className="selector">
            <input type="radio" value="popup" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'popup'}/>
            Popup
          </label>
        </form>
      </div>
    )
  }
}
export default WidgetSelector;
