"use client"
import React, { useState } from "react";
import AdminLogin from "../adminprofile/adminlogin";
import AdminPanel from "../adminprofile/adminpanel"; 
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
        <AdminPanel/>
      ) : (
        <AdminLogin onLogin={handleLogin} />
      )}
      </>
    );
  };
  
  export default AdminPage;