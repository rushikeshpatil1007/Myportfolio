import React, { useState } from 'react';

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = () => {
    // Replace 'resume.pdf' with the actual path to your resume file
    const resumeUrl = '';
    window.open(resumeUrl, '_blank');
  };

  const handleTogglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div>
      <h2>Resume</h2>
      <div>
        {showPreview ? (
          <embed src="https://drive.google.com/file/d/1kB3d7htDV9R_fjudWePy1UsLDx5FtATh/view?usp=sharing" width="100%" height="500px" />
        ) : null}
      </div>
      <div>
        {showPreview ? (
          <button onClick={handleDownload}>Download Resume</button>
        ) : (
          <button onClick={handleTogglePreview}>Preview Resume</button>
        )}
      </div>
    </div>
  );
};

export default Resume;
