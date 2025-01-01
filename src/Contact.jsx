import React, { useState } from 'react';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form Values:', formValues); 
  };

  return (
    <div className="contactUs" style={{ display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',width:'1000px'}}>
      <h1 style={{ marginBottom: '20px', color: 'black' }}>Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '600px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          style={inputStyle}
          value={formValues.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          style={inputStyle}
          value={formValues.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          style={inputStyle}
          value={formValues.subject}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          style={{ ...inputStyle, height: '100px', resize: 'none' }}
          value={formValues.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  width: '100%',
  boxSizing: 'border-box',
};

const buttonStyle = {
  padding: '10px',
  fontSize: '16px',
  color: 'white',
  backgroundColor: '#007BFF',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};
