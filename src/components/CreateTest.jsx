import React, { useState } from 'react';
import "./CreateTest.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <h1 className='text-white absolute top-10 vt323-regular' style={{ fontSize: "xx-large" }}>
            Welcome back Simran,
        </h1>
        <p className='text-white text-l absolute top-[5em] vt323-regular'>Build your tests and upload them.</p>
        <div className='absolute left-[30em] top-[8em] '>
                <DropdownButton id="dropdown-basic-button" title="Question Type" className='vt323-regular text-l'>
                    <Dropdown.Item href="#/action-1" >MCQ</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Fill in the Blank</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Long Answers</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Short Answers</Dropdown.Item>
                </DropdownButton>
            </div>
        <div className='absolute left-[40em] top-[8em]'>
                <DropdownButton id="dropdown-basic-button" title="Difficulty level" className='vt323-regular text-l'>
                    <Dropdown.Item href="#/action-1">Easy</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Hard</Dropdown.Item>
                </DropdownButton>
        </div>
        
      <div className="card absolute top-[12em]">
        <h3 className='vt323-regular'>Upload Files</h3>
        <div className="drop_box">
          <header>
            <h4 className='vt323-regular'>Select File here</h4>
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
          <button className="btn vt323-regular" onClick={() => document.getElementById('fileID').click()}>
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
            <button type="submit" className="btn vt323-regular">
              Upload
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default CreateTest;
