import React, { useState } from "react";
// import { app, auth, db } from  "../../lib/firebase.config.js";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../lib/firebase.config.js";



const AdminLogin = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
 
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            console.log("Pomyślne logowanie.", user);

       
            onLogin("/adminpanel");

        } catch (error) {
            console.error("Błąd logowania:", error);
            setError("Złe dane");
        }
    };

    return (
<div className="flex flex-col min-h-screen w-full items-center justify-center">
    <div className="text-jade text-[36px] mb-10">Sign In</div>
    <div className="mb-10">
        <label></label>
        <input
            className="border-jade border-2 rounded-[10px] p-2 w-full width-[300px] md:w-[400px] lg:w"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
    </div>
    <div className="mb-10">
        <label></label>
        <input
            className="border-jade border-2 rounded-[10px] p-2 w-full width-[300px] md:w-[400px] lg:w"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
    <div className="text-jade mt-5 text-right">Forgot Password?</div>
    </div>
    <button
        className="bg-jade rounded-[30px] p-2 pl-16 pr-16  text-white mb-[10px]"
        onClick={handleLogin}
    >
        Sign in
    </button>
    {error && <p style={{ color: "red" }}>{error}</p>}
</div>
    );
};

export default AdminLogin;