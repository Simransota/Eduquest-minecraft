import React, { useState } from 'react';
import "./CreateTest.css"
function CreateTest() {
  const [fileName, setFileName] = useState('');
  const [email, setEmail] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFileName(selectedFile.name);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // You can add your upload logic here
    console.log(`Uploading ${fileName} to email: ${email}`);
  };

  return (
    <div className="container">
        <h1 className='text-white text-2xl absolute top-10'>
            Welcome back Simran,
        </h1>
        <p className='text-white text-l absolute top-[5em]'>Build your tests and upload them.</p>
      <div className="card">
        <h3>Upload Files</h3>
        <div className="drop_box">
          <header>
            <h4>Select File here</h4>
          </header>
          <p>Files Supported: PDF, TEXT, DOC, DOCX</p>
          <input
            type="file"
            hidden
            accept=".doc,.docx,.pdf"
            id="fileID"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <button className="btn" onClick={() => document.getElementById('fileID').click()}>
            Choose File
          </button>
        </div>
      </div>
      {fileName && (
        <form onSubmit={handleUpload}>
          <div className="form">
            <h4>{fileName}</h4>
            <input
              type="email"
              placeholder="Enter email to upload file"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn">
              Upload
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default CreateTest;
