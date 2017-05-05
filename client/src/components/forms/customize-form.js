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

          Background Color:

        </label>
        <input className="placeholders" name="backgroundColor" onChange={handleChange}/>

      </li>
      <li>
        <label>
          Width:
        </label>
        <input className="placeholders" name="width" onChange={handleChange}/>

      </li>
      <li>
        <label>
          Height:
        </label>
        <input className="placeholders" name="height" onChange={handleChange}/>

      </li>
      <li>
        <label>
          Border Width:
        </label>
        <input className="placeholders" name="borderWidth" onChange={handleChange}/>

      </li>
      <li>
        <label>
          Border Style:
        </label>
        <input className="placeholders" name="borderStyle" onChange={handleChange}/>

      </li>
      <li>
        <label>
          Border Color:
        </label>
        <input className="placeholders" name="borderColor" onChange={handleChange}/>

      </li>
      <li>
        <label>
          Header:
        </label>
        <input className="placeholders" name="header" onChange={handleChange}/>

      </li>
      <li>
        <label>
          Item:
        </label>
        <input className="placeholders" name="item" onChange={handleChange}/>

      </li>
      <li>
        <label>
          Price:

        </label>
        <input className="placeholders" name="price" onChange={handleChange}/>
      </li>
      <li>
        <label>
          Description:

        </label>
          <input className="placeholders" name="description" onChange={handleChange}/>
      </li>
      <li>
        <label>
          Duration:

        </label>
        <input className="placeholders" name="duration" onChange={handleChange}/>
      </li>
      <li>
        <label>
          Upload a picture:



      </label>
      <div className="previewComponent">

          <input name="picture" className="fileInput"
            type="file"
            onChange={handleImageChange} />
            {/* idk if the onsubmit accounts for this */}


      </div>
    </li>

        <input className="btn" type="submit" value="Submit" />
        </ul>
      </form>

    )
}


export default CustomForm;
