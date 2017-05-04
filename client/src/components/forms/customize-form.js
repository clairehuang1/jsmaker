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
  handleChange,
  readURL
})=>
(
    <form action="/" onSubmit={handleSubmit}>
    <ul className="forms">

      <li>
        <label>
          Background Color:

          <input className="placeholders" name="backgroundColor" onChange={handleChange}/>
        </label>
      </li>
      <li>
        <label>
          Width:
          <input className="placeholders" name="width" onChange={handleChange}/>
        </label>
      </li>
      <li>
        <label>
          Height:
          <input className="placeholders" name="height" onChange={handleChange}/>
        </label>
      </li>
      <li>
        <label>
          Border Width:
          <input className="placeholders" name="borderWidth" onChange={handleChange}/>
        </label>
      </li>
      <li>
        <label>
          Border Style:
          <input className="placeholders" name="borderStyle" onChange={handleChange}/>
        </label>
      </li>
      <li>
        <label>
          Border Color:
          <input className="placeholders" name="borderColor" onChange={handleChange}/>
        </label>
      </li>
      <li>
        <label>
          Header:
          <input className="placeholders" name="header" onChange={handleChange}/>
        </label>
      </li>
      <li>
        <label>
          Item:
          <input className="placeholders" name="item" onChange={handleChange}/>
        </label>
      </li>
      <li>
        <label>
          Price:
          <input className="placeholders" name="price" onChange={handleChange}/>
        </label>
      </li>
      <li>
        <label>
          Description:
          <input className="placeholders" name="description" onChange={handleChange}/>
        </label>
      </li>
      <li>
        <label>
          Duration:
          <input className="placeholders" name="duration" onChange={handleChange}/>
        </label>
      </li>
      <li>
        <label>
          Upload a picture:
          <input className="placeholders" name="picture" onChange={readURL}/>
        </label>
      </li>


        <input type="submit" value="Submit" />
        </ul>
      </form>

    )



export default CustomForm;
