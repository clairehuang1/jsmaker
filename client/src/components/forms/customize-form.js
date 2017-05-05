import React, { Component } from 'react';

const CustomForm =({
  handleSubmit,
  handleChange,
  handleImageSubmit,
  handleImageChange,
  imagePreview
})=>{
return(
    <form onSubmit={handleSubmit}>

    <ul className="forms">
      <li>
        <label>
          Type:
          <select className="placeholders" name="type" onChange={handleChange}>

            <option value="popup"> Popup </option>
            <option value="banner"> Banner </option>
            <option value="panel"> Panel </option>
          </select>
        </label>
      </li>
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


          <div className="previewComponent">

              <input name="picture" className="fileInput"
                type="file"
                onChange={handleImageChange} />
                {/* idk if the onsubmit accounts for this */}


          </div>
      </label>
    </li>

        <input type="submit" value="Submit" />
        </ul>
      </form>

    )
}


export default CustomForm;
