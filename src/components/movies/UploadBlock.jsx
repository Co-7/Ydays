import React from "react";
import "../../assets/styles/components/movies/UploadBlock.scss";
import UploadIcon from '../../assets/icons/upload.svg';

function UploadBlock() {
    return (
        <div className="box_upload">
            <span>Upload Clip</span>
            <img className="upload_icon" src={UploadIcon} alt="icon upload"/>
        </div>
    );
}

export default UploadBlock;
