import { useState } from "react";
import Sidebar from "./components/Sidebar.tsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Createusers from "./components/Createusers";
import ActiveUsers from "./pages/ActiveUsers.tsx";
import Checkin from "./pages/Checkin.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import backgroundImg from './assets/bg.png'
import Whatsapp from "./pages/Whatsapp.tsx";
import WhatsappMessagingPage from "./components/WhatsappMessagingPage.tsx";
import RenewMembers from "./pages/RenewMembers.tsx";
 

function App() {
 
  return (
    <>
      <div   className="flex h-screen  bgAnimate bg-gray-500 ">
        <div className=" z-10   fixed   m-2 flex">

          <Sidebar />
         
        </div>

     
        <div className=" grow ml-24  ">
          <Routes>
            <Route path="/createuser" element={<Createusers />} />
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/activeuser" element={<ActiveUsers />} />
            <Route path="/checkin" element={<Checkin />} />
            <Route path="/whatsapp" element={<Whatsapp />} />
            <Route path="/WappMessage" element={<WhatsappMessagingPage />} />
            <Route path="/RenewMembership" element={<RenewMembers />} />


          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
