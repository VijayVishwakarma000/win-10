import React, { useDebugValue, useState } from "react";
import { userData } from "../data/userdata";

import UserBlockView from "../components/UserBlockView";
import { GoDotFill } from "react-icons/go";

const RenewMembers = () => {
  const [search, setSearch] = useState("");
  const [Slider, setSlider] = useState(1);
  const [UserData, setUserData] = useState(userData);
  const [selectedFilter, setselectedFilter] = useState("All Users");
  
  const [ShowData, setShowData] = useState(false)
  const [Global, setGlobal] = useState(0)
  const [dumData, setdumData] = useState(userData[Global]);
  const [renewUser, setrenewUser] = useState({
    id : 0,
    Firstname: "",
    Lastname: "",
    membershipStatus: "",
    validity: 0,
    phonenumber:0,
    age: 0,
    height: 0,
    weight: 0,
    gender:""
  });

  const FilteredItems = UserData.filter(
    (item) =>
      selectedFilter === "All Users" || selectedFilter === item.membershipStatus
  );
  
  const selectUser = (e: any,userId:any) => {
    setrenewUser(e)
    if(renewUser){
      setShowData(true)
    }else{
      setShowData(false)
    }
  let x = FilteredItems.at(userId)
 
    setGlobal(userId)
     
    console.log(Global)

  };
  const updateValidity = ()=>{
 
    setrenewUser({...renewUser,validity:Slider})
    setUserData( [...userData],userData[Global].validity+=Slider)
    // console.log(typeof(userData[Global].validity))
    // console.log(typeof(Slider))

  }
  return (
    <div className="h-screen flex   ">
      <div className=" flex flex-col 	">
        <div className=" ">
          <div className=" ">
            <div className="flex  w-full items-center justify-center p-5">
              <div className="  ">
                <div className="flex ">
                  <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="pointer-events-none absolute w-5 fill-gray-500 transition"
                    >
                      <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                    </svg>
                  </div>

                  <input
                    type="search"
                    className="relative m-0 -mr-0.5 block    flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search"
                    aria-describedby="button-addon3"
                  />
                  <select
                    className="text-black"
                    onChange={(e) => setselectedFilter(e.target.value)}
                    value={selectedFilter}
                  >
                    <option selected disabled hidden>
                      Filters
                    </option>
                    <option value="All Users"> All Users</option>
                    <option value="Active"> Active</option>
                    <option value="In Active"> In Active</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 px-2 mb-16	 w overflow-y-scroll">
          {FilteredItems.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.Firstname.toLowerCase().includes(search) ||
                  item.Lastname.toLowerCase().includes(search);
          }).map((item, id) => {
            return (
              <>
                <div key={id}
                  className={` w-full bg-white rounded-b-lg border-t-8  p-2 px-4 py-5 flex  justify-around shadow-md ${
                    item.membershipStatus == "Active"
                      ? "border-green-500 w-72 bg-white rounded-b-lg border-t-8  p-2 px-4 py-5 flex flex-col justify-around shadow-md"
                      : "border-red-500 w-72 bg-white rounded-b-lg border-t-8  p-2 px-4 py-5 flex flex-col justify-around shadow-md "
                  }`}
                >
                  <div  className="flex items-center gap-2">
                    <p className="text-lg font-bold font-sans">
                      {item.Firstname}
                    </p>
                    <p className="border-b border-black border-dashed">
                      {item.validity} Months
                    </p>
                  </div>
                  <div className="py-1">{item.phonenumber}</div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm items-center flex gap-2">
                      {item.membershipStatus == "Active" ? (
                        <GoDotFill className="text-[#84cc16]" />
                      ) : (
                        <GoDotFill className="text-red-400" />
                      )}{" "}
                      Status - {item.membershipStatus}
                      <button
                        onClick={(e)=>{
                            selectUser(item,id)
                        }}
                        className="bg-slate-200 ml-16 px-2 rounded-xl hover:bg-slate-400 transition-colors ease-in-out"
                      >
                        view
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
            // return <UserBlockView
            // id={id}
            // name={item.Firstname+" "+item.Lastname}
            // membershipStatus={item.membershipStatus}
            // phonenumber={item.phonenumber}
            // validity={item.validity+" days"}
            // />
          })}
        </div>
      </div>
      <div className="bg-red-400 w-[50%]  ">
        <div className="flex m-2 rounded-md font-bold  text-2xl bg-white p-4 justify-start">
          Renew Member
        </div>
          {
            ShowData ? 
            <div className="m-2 mt-2 border bg-white  text-[1.3rem]  rounded-md p-7 capitalize ">
              <p className=" w-fit my-2">name: {renewUser.Firstname+" "+renewUser.Lastname} </p>
              <p className=" w-fit my-2">age: {renewUser.age}</p>
              <p className=" w-fit my-2">phone number: {renewUser.phonenumber}</p>
              <p className=" w-fit my-2">membershipStatus: {renewUser.membershipStatus}</p>
              <p className=" w-fit my-2">validity: {renewUser.validity} Months</p>
              <p className=" w-fit my-2">height: {renewUser.height}</p>
              <p className=" w-fit my-2">weight: {renewUser.weight}</p>
              <p className=" w-fit my-2">gender: {renewUser.gender}</p>

        <div>
          <div className="mr-36">
            <label
              className={`  uppercase text-black-200 text-xs font-bold mb-2`}
              htmlFor="gender"
            >
              plan (
              <span
                className={`${
                  Slider > 6 ? "text-green-900" : "text-red-900"
                }`}
              >
                {Slider} months{" "}
              </span>
              )
            </label>
            <input
              id="steps-range"
              type="range"
              min="1"
              max="12"
              step="1"
              onChange={(e:any) => {
                void setSlider(parseInt(e.target.value));
              }}
              className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer dark:bg-black"
            ></input>
                  <div className='flex justify-end'>
      
      <button type="button" onClick={updateValidity}  className="    text-white mt-5 bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-md text-sm w-fit px-2 py-3 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2">
          Renew
             </button> 
     </div>
          </div>

   
        </div>
            
            </div> 
            :<div  className="m-2 mt-10 border bg-white text-center text-3xl leading-[15rem]  text-[1.8rem]  rounded-md p-20 uppercase ">Please Select a user to renew </div>
          }




        
      </div>
    </div>
  );
};

export default RenewMembers;
