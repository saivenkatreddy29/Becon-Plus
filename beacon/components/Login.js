import React from 'react';

const LoginForm = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm" action="../pages/patient_form">
            <h2 className="text-center mb-4">Nurse Login</h2>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Username" required />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Password" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;