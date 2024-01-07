"use client"
import React, { useState } from "react";
import AdminLogin from "./adminlogin";
import AdminPanel from "./adminpanel"; 
import Link from "next/link";
import { useRouter } from "next/router";






const AdminPage = () => {
  
    const [isLoggedIn, setLoggedIn] = useState(false);
  
    const handleLogin = () => {
      setLoggedIn(true);
      
    };
  
    return (
      <>
       {isLoggedIn ? (
        <Navigate to="/adminpanel"/>
      ) : (
        <AdminLogin onLogin={handleLogin} />
      )}
      </>
    );
  };
  
  export default AdminPage;