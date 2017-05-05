import React, { Component } from 'react';

const Preview =({
  onPreviewSubmit
})=>{

  return(
    <div>
      <button onSubmit={onPreviewSubmit} type="submit"> Click for a preview </button>
      <div id="preview">
        Preview

      </div>

      </div>
  )
}

export default Preview;
