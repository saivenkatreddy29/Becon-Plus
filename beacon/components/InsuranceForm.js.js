import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const questions = [
  {
    question: "What is your age?",
    type: "integer",
    key: "age",
  },
  {
    question: "What is your income?",
    type: "integer",
    key: "income",
  },
  {
    question: "What is your citizenship status?",
    type: "select",
    options: ["Citizen", "VISA Holder", "Refugee", "Permanent Resident"],
    key: "citizenshipStatus",
  },
  {
    question: "Which county are you from?",
    type: "text",
    key: "county",
  },
  {
    question: "What is your marital status?",
    type: "select",
    options: ["Single", "Married", "Divorced"],
    key: "maritalStatus",
  },
  {
    question: "What is your zipcode?",
    type: "text",
    key: "zipcode",
  },
  {
    question: "What is your contact number?",
    type: "text",
    key: "contactNumber",
  },
  {
    question: "Who do you want to include in your insurance?",
    type: "select",
    options: ["Individual", "Couple", "Family", "Parent and Child"],
    key: "insuranceCoverage",
  },
];

const InsuranceInfoForm = () => {
  const [answers, setAnswers] = useState({});
  const router = useRouter();

  const handleInputChange = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll just store it in localStorage
    localStorage.setItem("insuranceInfo", JSON.stringify(answers));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: answers }),
    };

    fetch("http://localhost:8000/home", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log("hdsfllwer"))
      .catch((error) => console.error("Error:", error));
    // Navigate to the next page or results page
    router.push({
      pathname: "/results",
      query: { answers: JSON.stringify(answers) },
    });
  };

  const renderInput = (question) => {
    switch (question.type) {
      case "integer":
        return (
          <input
            type="number"
            className="form-control"
            value={answers[question.key] || ""}
            onChange={(e) =>
              handleInputChange(question.key, parseInt(e.target.value) || "")
            }
            required
          />
        );
      case "text":
        return (
          <input
            type="text"
            className="form-control"
            value={answers[question.key] || ""}
            onChange={(e) => handleInputChange(question.key, e.target.value)}
            required
          />
        );
      case "select":
        return (
          <select
            className="form-select"
            value={answers[question.key] || ""}
            onChange={(e) => handleInputChange(question.key, e.target.value)}
            required
          >
            <option value="">Select an option</option>
            {question.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Insurance Information - Lighthouse Free Medical Clinic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-5">
        <div style={{ maxWidth: "45%", margin: "0 auto" }}>
          <h2 className="mb-4">Insurance Information</h2>
          <form onSubmit={handleSubmit}>
            {questions.map((q, index) => (
              <div key={index} className="mb-3">
                <label className="form-label">{q.question}</label>
                {renderInput(q)}
              </div>
            ))}
            <button
              type="submit"
              className="btn btn-primary d-block mx-auto mb-5"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default InsuranceInfoForm;
