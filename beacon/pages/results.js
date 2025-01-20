import { useRouter } from 'next/router';
import Head from 'next/head';

const Results = () => {
  const router = useRouter();
  const { answers } = router.query;

  const formatAnswers = (answersString) => {
    if (!answersString) return 'No data available';
    try {
      const parsedAnswers = JSON.parse(answersString);
      return JSON.stringify({ answers: parsedAnswers }, null, 2);
    } catch (error) {
      console.error('Error parsing answers:', error);
      return 'Error parsing answers';
    }
  };

  return (
    <div className="container mt-5">
      <Head>
        <title>Form Results - Lighthouse Free Medical Clinic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center mb-4">Form Submission Results</h1>
        <pre className="bg-light p-3 rounded" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          {formatAnswers(answers)}
        </pre>
      </main>
    </div>
  );
};

export default Results;