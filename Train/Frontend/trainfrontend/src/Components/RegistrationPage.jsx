import React, { useState } from 'react';
import axios from 'axios';

function RegistrationPage() {
  const [companyName, setCompanyName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');

  const handleRegister = () => {
    const registrationData = {
      companyName,
      ownerName,
      rollNo,
      ownerEmail,
      accessCode,
    };

    axios
      .post('http://localhost:8000/train/register', registrationData)
      .then((response) => {
        console.log('Company registered successfully');
        // Handle success, e.g., show a success message or redirect to another page
      })
      .catch((error) => {
        console.error('Error registering the company:', error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <div>
      <h1>Registration</h1>
      <div>
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ownerName">Owner Name</label>
        <input
          type="text"
          id="ownerName"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rollNo">Roll No</label>
        <input
          type="text"
          id="rollNo"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ownerEmail">Owner Email</label>
        <input
          type="email"
          id="ownerEmail"
          value={ownerEmail}
          onChange={(e) => setOwnerEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="accessCode">Access Code</label>
        <input
          type="text"
          id="accessCode"
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
        />
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegistrationPage;
