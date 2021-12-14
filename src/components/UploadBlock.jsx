import React from "react";
import "../styles/UploadBlock.scss";
import UploadIcon from '../assets/icons/upload.svg';

class UploadBlock extends React.Component {
  render() {
    return (
      <div className="box_upload">
        <span>Upload Clip</span>
        <img className="upload_icon" src={UploadIcon} alt="icon upload"/>
      </div>
    );
  }
}

export default UploadBlock;
