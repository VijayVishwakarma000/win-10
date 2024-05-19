import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaMicrosoft, FaPlus, FaUserMinus, FaWhatsapp } from "react-icons/fa";
import { FaPersonRunning, FaUser } from "react-icons/fa6";
import { BsArrowRightShort } from "react-icons/bs";

//components
const Sidebar = () => {
  const [Open, setOpen] = useState(true);

  const navlinks = [
    {
      title: "Dashboard",
      route: "/",
      icon: <FaMicrosoft />,
    },
    {
      title: "Create User",
      route: "/createuser",
      icon: <FaPlus />,
    },
    {
      title: "active users",
      route: "/activeuser",
      icon: <FaUser />,
    },
    {
      title: "Check In",
      route: "/checkin",
      icon: <FaPersonRunning />,
    },
    {
      title: "past",
      route: "/past",
      icon: <FaUserMinus />,
    },
    {
      title: "Message",
      route: "/whatsapp",
      icon: <FaWhatsapp/>,
    },
    {
      title: "WappMessage",
      route: "/WappMessage",
      icon: <FaWhatsapp/>,
    }
    ,
    {
      title: "RenewMembership",
      route: "/RenewMembership",
      icon: <FaWhatsapp/>,
    }
  ];

  return (
    <>
      <div className="flex border border-black   h-[98vh]  ">
        <div
          className={`bg-white shadow-slate-900  p-5 pt-8 h-content rounded  ${
           !Open ? "w-72" : "w-20"
          } duration-200 relative`}
        >
          <BsArrowRightShort
            onClick={() => setOpen(!Open)}
            className={`bg-white ${!Open && "rotate-180"}  rounded-full
            text-3xl -right-4 top-9 border cursor-pointer border-black absolute duration-300 duration-250 "} `}
          />
          <div className="inline-flex items-center uppercase ">
            <FaUser
              className={`p-2 bg-zinc-950 text-white rounded text-4xl block float-left mr-2 cursor-pointer duration-500 ${
                Open && "rotate-[360deg]"
              } `}
            />
            <h1
              className={`text-white  origin-left font-medium text-2xl ${
               Open && "scale-0"
              } duration-300 `}
            >
              Logo
            </h1>
          </div>

          <ul className="pt-2">
            {navlinks.map((elem, id) => (
              <li   key={id}>
                <NavLink onClick={()=> Open ? "":setOpen(!Open)} to={elem.route}
                  className={({isActive})=>{
                    return (
                      
                      `  hover:text-white hover:bg-black  duration-300   text-black  text-sm  gap-x-4 rounded-md mt-4  flex flex-row item-center  cursor-pointer p-2 `+
                        ( !isActive  ? `hover:text-white hover:bg-black  duration-300  text-black text-sm  gap-x-4 rounded-md mt-4  flex flex-row item-center  cursor-pointer p-2 `:'bg-black text-white  duration-300 text-gray-200  text-sm  gap-x-4 rounded-md mt-4  flex flex-row item-center  cursor-pointer p-2')

                    )
                  }}
                >
                  <span className={` text-2xl block float-left `}>
                    {elem.icon}
                  </span>
                  <span
                    className={` font-medium text-base  flex-1 duration-200 ${
                      Open && "hidden invisible "
                    }  `}
                  >
                    {elem.title}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
