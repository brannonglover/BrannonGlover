import React from 'react';
import {
  ResumeDownloadWrapper
} from "./ResumeDownload.elements";
import WordDoc from "../../../assets/images/word-icon.png";
import DownloadIcon from '../../../assets/images/white-download-icon.png';

const ResumeDownload: React.FC = () => {
  function download() {
    window.open('../../../assets/Brannon-Resume.docx');
  }

  return (
    <ResumeDownloadWrapper onClick={download}>
      <img src={WordDoc} alt="Brannon's Resume" height="20" />
      <img src={DownloadIcon} alt="Download Brannon's Resume" height="20" />
    </ResumeDownloadWrapper>
  )
}

export default ResumeDownload;