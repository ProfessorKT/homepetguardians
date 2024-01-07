"use client"
import React, { useState } from "react";
import AdminLogin from "./adminlogin";
import AdminPanel from "./adminpanel"; 
import Link from "next/link";



const AdminPage = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
  
    const handleLogin = () => {
      setLoggedIn(true);
    };
  
    return (
      <>
       {isLoggedIn ? (
    <>
        <AdminPanel />
        <Link href="/adminpanel"></Link>
    </>
) : (
    <AdminLogin onLogin={handleLogin} />
)}
      </>
    );
  };
  
  export default AdminPage;