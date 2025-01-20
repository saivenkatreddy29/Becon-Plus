import React, { useState } from 'react';
import { useRouter } from 'next/router';

const questions = [
  {
    question: "What is your date of birth?",
    type: "date"
  },
  {
    question: "How many people in your household?",
    type: "range",
    min: 1,
    max: 10
  },
  {
    question: "How many adults?",
    type: "range",
    min: 1,
    max: 10
  },
  {
    question: "How many children?",
    type: "range",
    min: 1,
    max: 10
  },
  {
    question: "What is your zipcode?",
    type: "text"
  },
  {
    question: "Is it okay if we call for a follow-up?",
    type: "yes/no"
  },
  {
    question: "Did you get the flu shot this year?",
    type: "yes/no"
  },
  {
    question: "(Only 65 years) have you received pneumonia vaccine?",
    type: "yes/no"
  },
  {
    question: "Vaccine education provided?",
    type: "yes/no"
  },
  {
    question: "How many COVID vaccines have you had?",
    type: "range",
    min: 1,
    max: 10
  },
  {
    question: "Have you received COVID vaccine in 2024?",
    type: "yes/no"
  },
  {
    question: "Do you currently take any medications including vitamins and supplements?",
    type: "yes/no"
  },
  {
    question: "Do you have any allergies to medications?",
    type: "yes/no"
  },
  {
    question: "Do you have trouble affording your medications?",
    type: "yes/no"
  },
  {
    question: "Do you currently use nicotine or tobacco products?",
    type: "yes/no"
  },
  {
    question: "(Tobacco) Would you like to quit in next 12 months?",
    type: "yes/no"
  },
  {
    question: "Do you feel safe at home?",
    type: "yes/no"
  },
  {
    question: "Overall, what is your stress level currently?",
    type: "stress-level",
    options: ["No stress", "Very little stress", "Slightly stressed", "Stressed", "Extremely stressed"]
  },
  {
    question: "Why would you rate your stress that way?",
    type: "text"
  },
  {
    question: "Referral for mental health given?",
    type: "yes/no"
  },
  {
    question: "Do you have PRIMARY in the area?",
    type: "yes/no"
  },
  {
    question: "Do you have insurance?",
    type: "yes/no"
  },
  {
    question: "Would you like to get suggestions for an insurance?",
    type: "yes/no"
  }
];

const DynamicForm = () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(0);
    const [answers, setAnswers] = useState({});
  
    const questionsPerPage = 4;
    const totalPages = Math.ceil(questions.length / questionsPerPage);
  
    const handleInputChange = (question, value) => {
      setAnswers(prev => ({ ...prev, [question]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      router.push({
        pathname: '/submit_page',
        query: { answers: JSON.stringify(answers) },
      });
    };
  
    const renderInput = (question) => {
      switch (question.type) {
        case 'date':
          return (
            <input 
              type="date" 
              className="form-control"
              onChange={(e) => handleInputChange(question.question, e.target.value)}
            />
          );
        case 'range':
          return (
            <div className="d-flex justify-content-between">
              {[...Array(question.max + 1)].map((_, i) => (
                <div key={i} className="form-check">
                  <input 
                    className="form-check-input"
                    type="radio" 
                    name={question.question}
                    id={`${question.question}-${i}`}
                    value={i}
                    onChange={(e) => handleInputChange(question.question, e.target.value)}
                    checked={answers[question.question] === i.toString()}
                  />
                  <label className="form-check-label" htmlFor={`${question.question}-${i}`}>{i}</label>
                </div>
              ))}
            </div>
          );
        case 'text':
          return (
            <input 
              type="text"
              className="form-control"
              value={answers[question.question] || ''}
              onChange={(e) => handleInputChange(question.question, e.target.value)}
            />
          );
        case 'yes/no':
          return (
            <div className="d-flex justify-content-around">
              {['Yes', 'No'].map((option) => (
                <div key={option} className="form-check">
                  <input 
                    className="form-check-input"
                    type="radio" 
                    name={question.question}
                    id={`${question.question}-${option}`}
                    value={option}
                    onChange={(e) => handleInputChange(question.question, e.target.value)}
                    checked={answers[question.question] === option}
                  />
                  <label className="form-check-label" htmlFor={`${question.question}-${option}`}>{option}</label>
                </div>
              ))}
            </div>
          );
        case 'stress-level':
          return (
            <div className="d-flex justify-content-between flex-wrap">
              {question.options.map((option) => (
                <div key={option} className="form-check mb-2">
                  <input 
                    className="form-check-input"
                    type="radio" 
                    name={question.question}
                    id={`${question.question}-${option}`}
                    value={option}
                    onChange={(e) => handleInputChange(question.question, e.target.value)}
                    checked={answers[question.question] === option}
                  />
                  <label className="form-check-label" htmlFor={`${question.question}-${option}`}>{option}</label>
                </div>
              ))}
            </div>
          );
        default:
          return null;
      }
    };
  
    return (
      <div className="container mt-5" style={{ maxWidth: '45%' }}>
      <h2 className="mb-4">Patient Information</h2>
        <form onSubmit={handleSubmit}>
          {questions.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage).map((q, index) => (
            <div key={index} className="mb-4">
              <label className="form-label fw-bold text-secondary">{q.question}</label>
              {renderInput(q)}
            </div>
          ))}
          <div className="d-flex justify-content-center gap-3 mt-4">
            {currentPage > 0 && (
              <button type="button" className="btn btn-secondary" onClick={() => setCurrentPage(prev => prev - 1)}>Back</button>
            )}
            {currentPage < totalPages - 1 && (
              <button type="button" className="btn btn-primary" onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
            )}
            {currentPage === totalPages - 1 && (
              <button type="submit" className="btn btn-success">Submit</button>
            )}
          </div>
        </form>
      </div>
    );
  };
  
  export default DynamicForm;
