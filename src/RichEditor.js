import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const RichEditor = ({ fieldName, fieldValue, fieldChange }) => {

  const handleChange = (value) => {
    fieldChange(fieldName, value);
  };

  return (
    <div style={{
      marginTop: "20px"
    }}>
      <ReactQuill value={fieldValue} onChange={handleChange} />
    </div >);
}

export default RichEditor;