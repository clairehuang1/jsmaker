import React, { Component } from 'react';
import BannerWidget from './BannerWidget.js'
import PanelWidget from './PanelWidget.js'
import PopupWidget from './PopupWidget.js'

const Preview =({
  onPreviewSubmit, previewComponent, website
})=>{
  return(
    <div className="preview-box">

      <iframe src={website}></iframe>
      {(previewComponent === "popup") ? <PopupWidget/> : <div>1</div>}
      {(previewComponent === "panel") ? <PanelWidget/> : <div>2</div>}
      {(previewComponent === "banner") ? <BannerWidget/> : <div>2</div>}


      <button onSubmit={onPreviewSubmit} type="submit"> Click for a preview </button>

    </div>
  )
}

export default Preview;
