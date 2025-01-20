import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const AcknowledgmentPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [signature, setSignature] = useState('');
  const router = useRouter();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked && signature.trim()) {
      // Store acknowledgment in localStorage or you could use a more robust state management solution
      localStorage.setItem('acknowledgment', JSON.stringify({ isAcknowledged: true, signature }));
      router.push('/insurance_form'); // Assume we have a questionnaire page
    } else {
      alert('Please check the box and provide your signature to continue.');
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Consent for Information Sharing - Lighthouse Free Medical Clinic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main className="mt-5">
        <div style={{ maxWidth: '45%', margin: '0 auto' }}>
          <h2 className="mb-4">Consent for Information Sharing</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <p className="text-secondary">
                We appreciate your willingness to share your sensitive information with us. By providing your age, name, email address, income, marital status, and citizenship status, you consent to our use of this data for the purpose of offering tailored health insurance suggestions.
              </p>
              <p className="text-secondary">
                We are committed to protecting your privacy and ensuring that your information is handled with the utmost care. Your data will only be used in accordance with our privacy policy and will not be shared with any third parties without your explicit consent.
              </p>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="consentCheck"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="consentCheck">
                I have read and agree to the terms above
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="signature" className="form-label">E-Signature (Type your full name)</label>
              <input
                type="text"
                className="form-control"
                id="signature"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit Acknowledgment</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AcknowledgmentPage;
