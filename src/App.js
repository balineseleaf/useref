import './App.css';
import { useState, useRef } from 'react';
import RichEditor from './RichEditor';

function App() {

  const [formData, setFormData] = useState({ firstName: "", lastName: "" });
  console.log(formData);

  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const handleFieldChange = (fieldName, value) => {
    console.log('click on that fieldName:', fieldName);
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: value
    }));
  };

  const handleSave = () => {
    console.warn("firstName:", formData.firstName);
    console.warn("lastName:", formData.lastName);
  };

  const handleFocusNext = (currentRef) => {
    if (currentRef === firstNameRef.current) {
      lastNameRef.current.focus();
    }
  };


  return (
    <div className="App" style={{ display: 'flex', flexDirection: "column", padding: "100px 20px" }}>
      <RichEditor onFocusNext={handleFocusNext} ref={firstNameRef} fieldName="firstName" fieldValue={formData.firstName} fieldChange={handleFieldChange} />
      <RichEditor onFocusNext={handleFocusNext} ref={lastNameRef} fieldName="lastName" fieldValue={formData.lastName} fieldChange={handleFieldChange} />
      <button className='save-button' onClick={handleSave}>Save</button>
    </div>
  );
}

export default App;
