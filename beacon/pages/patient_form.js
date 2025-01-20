import Head from 'next/head';
import Image from 'next/image';
import DynamicForm from '../components/DynamicForm';
 
export default function Home() {

  const handleLogin = (e) => {
    e.preventDefault();
    setShowLoginForm(false);
    setShowNurseForm(true);
  };

  return (
    <div className="container">
      <Head>
        <title>Lighthouse Free Medical Clinic - Nurse Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <div className="logo-container">
          <div className="logo">
            <Image src="/lighthouse_logo.png" alt="Lighthouse logo" width={50} height={50} />
            <span className="logo-text">LIGHTHOUSE<br />FREE MEDICAL CLINIC</span>
          </div>
        </div>
      </header>

      <main className="main-content">
        <DynamicForm />
      </main>

      <style jsx>{`
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
}