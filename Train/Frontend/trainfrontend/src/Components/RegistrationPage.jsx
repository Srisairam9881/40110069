import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function RegistrationPage() {
  const history = useHistory();

  const [companyName, setCompanyName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
        const { data } = response;
        if (data.message === 'Company registered successfully') {
          console.log('Company registered successfully');
          // Handle success, e.g., show a success message or redirect to another page
          history.push('/train-details'); // Redirect to /train-details page
        } else {
          console.error('Error registering the company:', data.error);
          // Handle error, e.g., show an error message
          setErrorMessage(data.error);
        }
      })
      .catch((error) => {
        console.error('Error registering the company:', error);
        // Handle error, e.g., show an error message
        setErrorMessage('Failed to register the company. Please try again later.');
      });
  };

  return (
    <div className="card-body">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h1 className="text-center" style={{ marginTop: '10px' }}>
            Registration
          </h1>
          <form>
            <div className="mb-3">
              <label htmlFor="companyName" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                className="form-control"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="ownerName" className="form-label">
                Owner Name
              </label>
              <input
                type="text"
                id="ownerName"
                className="form-control"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="rollNo" className="form-label">
                Roll No
              </label>
              <input
                type="text"
                className="form-control"
                id="rollNo"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="ownerEmail" className="form-label">
                Owner Email
              </label>
              <input
                type="email"
                id="ownerEmail"
                className="form-control"
                value={ownerEmail}
                onChange={(e) => setOwnerEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="accessCode" className="form-label">
                Access Code
              </label>
              <input
                className="form-control"
                type="text"
                id="accessCode"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
              />
            </div>
            {errorMessage && (
              <div className="alert alert-danger mt-3" role="alert">
                {errorMessage}
              </div>
            )}
            <button
              className="btn btn-primary"
              onClick={handleRegister}
              style={{
                marginTop: '20px',
                alignContent: 'center',
                width: '170px',
                height: '40px',
                marginBottom: '20px',
                marginLeft: '35%',
              }}
            >
              Register
            </button>
          </form>
          <button
            className="btn btn-success"
            onClick={() => history.push('/train-details')}
            style={{
              marginTop: '7px',
              alignContent: 'center',
              width: '170px',
              height: '40px',
              marginBottom: '20px',
              marginLeft: '35%',
            }}
          >
            Go to Train Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
