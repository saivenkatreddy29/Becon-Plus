import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
const DataActionsPage = () => {
  const router = useRouter();
  const { answers } = router.query;
  const handleUploadToQualtrics = () => {
    // Implement Qualtrics upload logic here
    console.log("Uploading data to Qualtrics...");
  };

  const handleUploadToEMR = () => {
    // Implement EMR upload logic here
    console.log("Uploading data to EMR...");
  };

  const handleGetInsuranceRecommendations = () => {
    // Implement insurance recommendations logic here
    router.push({
      pathname: "/acknowledgement",
    });
  };

  return (
    <div className="container">
      <Head>
        <title>Data Actions - Lighthouse Free Medical Clinic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <div className="logo-container">
          <div className="logo">
            <Image
              src="/lighthouse_logo.png"
              alt="Lighthouse logo"
              width={50}
              height={50}
            />
            <span className="logo-text">
              LIGHTHOUSE
              <br />
              FREE MEDICAL CLINIC
            </span>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div style={{ maxWidth: "45%", margin: "0 auto" }}>
          <div className="d-grid gap-3">
            <button
              className="btn btn-lg custom-btn-qualtrics"
              onClick={handleUploadToQualtrics}
            >
              Upload Data to Qualtrics
            </button>
            <button
              className="btn btn-lg custom-btn-emr"
              onClick={handleUploadToEMR}
            >
              Upload Data to EMR
            </button>
            <button
              className="btn btn-lg custom-btn-insurance"
              onClick={handleGetInsuranceRecommendations}
            >
              Get Insurance Recommendations
            </button>
          </div>
        </div>
      </main>

      <style jsx>{`
        .custom-btn-qualtrics {
          background-color: #e6f2ff;
          color: #0056b3;
          border: 1px solid #0056b3;
        }
        .custom-btn-qualtrics:hover {
          background-color: #cce5ff;
        }
        .custom-btn-emr {
          background-color: #e6fff2;
          color: #006644;
          border: 1px solid #006644;
        }
        .custom-btn-emr:hover {
          background-color: #ccffe6;
        }
        .custom-btn-insurance {
          background-color: #fff2e6;
          color: #b35900;
          border: 1px solid #b35900;
        }
        .custom-btn-insurance:hover {
          background-color: #ffe5cc;
        }
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .header {
          background-color: white;
          padding: 10px 0;
          border-bottom: 2px solid #f0ad4e;
        }
        .logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .logo {
          display: flex;
          align-items: center;
        }
        .logo-text {
          color: #337ab7;
          font-size: 18px;
          font-weight: bold;
          margin-left: 10px;
        }
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #f8f9fa;
        }
      `}</style>
    </div>
  );
};

export default DataActionsPage;
