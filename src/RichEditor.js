import { useEffect, useRef } from 'react';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const RichEditor = ({ fieldName, fieldValue, fieldChange, onFocusNext }) => {

  const editorRef = useRef();

  useEffect(() => {
    editorRef.current.focus();
  }, []);

  const handleChange = (value) => {
    fieldChange(fieldName, value);
  };

  return (
    <div style={{
      marginTop: "20px"
    }}>
      <ReactQuill ref={editorRef} value={fieldValue} onChange={handleChange} />
    </div >);
}

export default RichEditor;