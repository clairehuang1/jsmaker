import React, { Component } from 'react';

// class CustomForm extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       type: '',
//       backgroundColor:'',
//       textColor:'',
//       width:'',
//       height:'',
//       borderWidth:'',
//       borderStyle:'',
//       borderColor:'',
//       header:'',
//       item:'',
//       price:'',
//       desription:'',
//       duration:''
//     };
//
//   this.handleChange = this.handleChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
// }
//   handleChange(event){
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;
//     console.log(name);
//     console.log("this da value" + value);
//     this.setState({
//       [name]:value
//     })
//
//   }
//   handleSubmit(event){
//     alert('hallo '+ this.state.name)
//     console.log(this.state)
//     event.preventDefault();
//   }
const CustomForm =({
  handleSubmit,
  handleChange
})=>
  (
      <form onSubmit={handleSubmit}>
      <label>
        Type:
        <select name="type" onChange={handleChange}>

          <option value="popup"> Popup </option>
          <option value="banner"> Banner </option>
          <option value="panel"> Panel </option>
        </select>
      </label>
        <label>
          Background Color:
          <input name="backgroundColor" onChange={handleChange}/>
        </label>
        <label>
          Width:
          <input name="width" onChange={handleChange}/>
        </label>
        <label>
          Height:
          <input name="height" onChange={handleChange}/>
        </label>
        <label>
          Border Width:
          <input name="borderWidth" onChange={handleChange}/>
        </label>
        <label>
          Border Style:
          <input name="borderStyle" onChange={handleChange}/>
        </label>
        <label>
          Border Color:
          <input name="borderColor" onChange={handleChange}/>
        </label>
        <label>
          Header:
          <input name="header" onChange={handleChange}/>
        </label>
        <label>
          Item:
          <input name="item" onChange={handleChange}/>
        </label>
        <label>
          Price:
          <input name="price" onChange={handleChange}/>
        </label>
        <label>
          Description:
          <input name="description" onChange={handleChange}/>
        </label>
        <label>
          Duration:
          <input name="duration" onChange={handleChange}/>
        </label>

        <input type="submit" value="Submit" />
      </form>
    )



export default CustomForm;
