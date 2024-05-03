import React, { useState } from 'react';
import "./CreateTest.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; // Import axios for making HTTP requests
import Form from 'react-bootstrap/Form';

function CreateTest() {
  const [fileName, setFileName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedQuestionType, setSelectedQuestionType] = useState('');
  const [selectedDifficultyLevel, setSelectedDifficultyLevel] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFileName(selectedFile.name);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('pdf_file', document.getElementById('fileID').files[0]);
    formData.append('email', email);
    formData.append('question_type', selectedQuestionType);
    formData.append('difficulty_level', selectedDifficultyLevel);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="container">
      <h1 className='text-white absolute top-10 vt323-regular' style={{ fontSize: "xx-large" }}>
        Welcome back Simran,
      </h1>
      <p className='text-white text-l absolute top-[5em] vt323-regular'>Build your tests and upload them.</p>
      <div className='absolute left-[37em] top-[12em] '>
      <Form.Control type="text" placeholder="Subject" />
      </div>
      <div className='absolute left-[51.5em] top-[12em] '>
      <Form.Control type="text" placeholder="Test Name" />
      </div>
      <div className='absolute left-[17em] top-[12em] '>
        <DropdownButton id="dropdown-basic-button" title="Question Type" className='vt323-regular text-l'>
          <Dropdown.Item onClick={() => setSelectedQuestionType('MCQ')}>MCQ</Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedQuestionType('Fill in the Blank')}>Fill in the Blank</Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedQuestionType('Long Answers')}>Long Answers</Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedQuestionType('Short Answers')}>Short Answers</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className='absolute left-[27em] top-[12em]'>
        <DropdownButton id="dropdown-basic-button" title="Difficulty level" className='vt323-regular text-l'>
          <Dropdown.Item onClick={() => setSelectedDifficultyLevel('Easy')}>Easy</Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedDifficultyLevel('Medium')}>Medium</Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedDifficultyLevel('Hard')}>Hard</Dropdown.Item>
        </DropdownButton>
      </div>

      <div className="card absolute top-[9em]">
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