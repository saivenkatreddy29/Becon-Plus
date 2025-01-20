import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
 
export default function Home() {
  const router = useRouter()
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
          <form className="login-form" action="/patient_form">
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="submit-button">Login</button>
          </form>
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
        .login-button, .submit-button {
          background-color: #337ab7;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 5px;

        }
        .login-form, .nurse-form {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          border: 1px solid #ddd;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .login-form input, .nurse-form input {
          display: block;
          margin: 10px 0;
          padding: 10px;
          width: 200px;
          border: 1px solid #ddd;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}