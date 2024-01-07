import React, { useState } from "react";
// import { app, auth, db } from  "../../lib/firebase.config.js";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../lib/firebase.config.js";
import AdminPanel from "./adminpanel.jsx"; 
import { useRouter } from 'next/navigation'





const AdminLogin = ({ onLogin }) => {
    const [login, setLogin] = useState('');
    const [haslo, setHaslo] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const router = useRouter()

  
    const handleLogin = () => {
      if (login === 'admin' && haslo === 'admin123') {
        console.log('Zalogowano pomyślnie jako administrator.');
        setIsLoggedIn(true); 
        // router.push('/adminpanel');

      } else {
        setErrorMessage('Błąd logowania. Spróbuj ponownie.');
      }
    };
  
    if (isLoggedIn) {
      return <AdminPanel />;
    }

    return (
<div className="flex flex-col min-h-screen w-full items-center justify-center">
    <div className="text-jade text-[36px] mb-10">Sign In</div>
    <div className="mb-10">
        <label></label>
        <input
            className="border-jade border-2 rounded-[10px] p-2 w-full width-[300px] md:w-[400px] lg:w"
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
        />
    </div>
    <div className="mb-10">
        <label></label>
        <input
            className="border-jade border-2 rounded-[10px] p-2 w-full width-[300px] md:w-[400px] lg:w"
            type="password"
            placeholder="Password"
            value={haslo}
            onChange={(e) => setHaslo(e.target.value)}
        />
    <div className="text-jade mt-5 text-right">Forgot Password?</div>
    </div>
    <button
        className="bg-jade rounded-[30px] p-2 pl-16 pr-16  text-white mb-[10px]"
        onClick={handleLogin}
    >
        Sign in
    </button>
    {errorMessage  && <p style={{ color: "red" }}>{errorMessage }</p>}
</div>
    );
};

export default AdminLogin;