 
import { useState } from "react";
import Lottie from "lottie-react";
import loader from '../assets/animations/loader.json'
// import "./register.css";
const Createusers = () => {
  const [Slider, setSlider] = useState(1);
   const [Fname,  setFname]  = useState("")
   const [Lname,  setLname]  = useState("")
   const [phonenumber,  setphonenumber]  = useState("")
   const [Age,  setAge]  = useState("")
  const [date,setdate] = useState(new Date())
   

  const userErrors = {
    name: {
      fnameErr: "*Please Enter your firstname",
      lnameErr: "*Please Enter your lastname",
      comNameErr: "*Enter a valid name",
    },
    phonenumber: {
      phoneErr: "Enter a valid phone number",
    },
    age: {
      comAgeErr: "Age doesnt meet our requirements",
      ageErr: "*Please Enter your age",
    },
    genderErr: "*Please Specify your gender",
    height: "*Please Enter your height",
    weight: "*Please Enter your weight",
    membership: "*Please Enter Date",
  };
  const [Error, setError] = useState("")
  const [ErrorState, setErrorState] = useState(false)
  const [Loader, setLoader] = useState(false)

  const onChangeSlider  = ()=>{
    
  }
 

  const createUser = () => {
  
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 3000);

    setErrorState(true)
    console.log(date)
    if(Fname.length<=0||Lname.length<=0)
      {
        setErrorState(true)
        setError(userErrors.name.fnameErr)
      } 
      // if(||Lname==undefined)
      //   {
      //     setErrorState(true)
      //     setError(userErrors.name.lnameErr)
      //   } 
  };
  return (
    <>
    
      <div className="flex items-center h-screen justify-center  px-10  ">
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />

        <section className=" py-1   ">
          <div className="w-full  px-4 mx-auto mt-6">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-black   border-0">
              <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">
                    Create User
                  </h6>
                  <button
                    className="bg-black text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Reset
                  </button>
                </div>
              </div>
              <div className="flex-auto  px-4 lg:px-10 py-10 pt-0">

                {Loader? <Lottie className="h-[50vh] scale-50" animationData={loader}/>  
                    :
                <form className={`${Loader?"invisible":""}`}>
                  <h6 className="text-zinc-200 text-sm mt-3 mb-6 font-bold uppercase">
                    User Information
                  </h6>
                  <div className="flex ">
                    <div className="w-full gap-2 flex flex-col lg:w-6/12 px-4">
                            <div className="flex flex-col ">

                      <div className="flex  gap-2">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-zinc-200 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Firstname
                          </label>
                          <input
                            type="text"   onChange={(e)=>setFname(e.target.value)}
                            className="border-0 px-3  py-3 placeholder text-zinc-900 text-zinc-200 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                          <p
                            className={`   mt-1 text-[13px] leading-normal  text-red-600 dark:text-red-500`}
                          >
                            {ErrorState&&Fname.length<=0?userErrors.name.fnameErr:""}
                          </p>
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-zinc-200 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Lastname
                          </label>
                          <input
                            type="text"  onChange={(e)=>setLname(e.target.value)}
                            className="border-0 px-3 py-3 placeholder text-zinc-900 text-zinc-200 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                         <p
                            className={`   mt-1 text-[13px] leading-normal  text-red-600 dark:text-red-500`}
                          >
                            {ErrorState&&Lname.length<=0?userErrors.name.lnameErr:""}
                          </p>
                        </div>
                     
                      </div>
                      <div>
                        <label
                            className="block uppercase text-zinc-200 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Email
                          </label>
                        <input
                            type="email"  onChange={(e)=>setLname(e.target.value)}
                            className="border-0 px-3 py-3 placeholder text-zinc-900 text-zinc-200  mb-5 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      <div className="flex gap-2">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-zinc-200 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Phone Number
                          </label>
                          <input
                            type="number" onChange={(e)=>{setphonenumber(e.target.value)}}
                            className="border-0 px-3 py-3 placeholder text-zinc-900 text-zinc-200 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                           <p
                            className={`   mt-1 text-[13px] leading-normal  text-red-600 dark:text-red-500`}
                          >
                            { phonenumber.length>10? userErrors.phonenumber.phoneErr:" "}
                            {ErrorState  && phonenumber.length==0? "Enter Your Phonenumber":" "}
                            

                          </p>
                        </div>
                        <div className="relative  w-full mb-3">
                          <label
                            className="  uppercase text-zinc-200 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            age
                          </label>
                          <input
                            type="number" onChange={(e)=>{setAge(e.target.value)}}
                            className="border-0 px-3 py-3 placeholder text-zinc-900 text-zinc-200 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                              <p
                            className={`   mt-1 text-[13px] leading-normal  text-red-600 dark:text-red-500`}
                          >
                            {ErrorState&& Age.length==0?userErrors.age.ageErr:ErrorState&&Age.length<2?userErrors.age.comAgeErr:" "}

                          </p>
                        </div>
                      </div>
                    <div className=" gap-2  flex   ">

                    <div className="w-full  ">
                      <div className="relative  w-full mb-3">
                        <label
                          className="  uppercase text-zinc-200 text-xs font-bold mb-2"
                          htmlFor="gender"
                        >
                          Gender
                        </label>
                        <select
                          name=""
                          id=""
                          className="border-0 px-3 py-3 placeholder text-zinc-900 text-zinc-200 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        >
                          <option value="">Male</option>
                          <option value="">Female</option>
                          <option value="">Prefer not to say</option>
                        </select>
                      </div>
                    </div>
                      <div className="relative  w-full mb-3">
                        <label
                          className="  uppercase text-zinc-200 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Height(cm)
                        </label>
                        <input
                          type="number"
                          className="border-0 px-3 py-3 placeholder text-zinc-900 text-zinc-200 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      <div className="relative  w-full mb-3">
                        <label
                          className="  uppercase text-zinc-200 text-xs font-bold mb-2"
                          htmlFor="gender"
                        >
                          Weight(kg)
                        </label>
                        <input
                          type="number"
                          className="border-0 px-3 py-3 placeholder text-zinc-900 text-zinc-200 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                          </div>
                      </div>
                    </div>
      
                      </div>

                      <div className="lg:w-6/12 ">
                    <div className=" gap-2   flex flex-col   px-4">
                    <div className=" flex flex-col ">
                      <div className="relative  w-full mb-3">
                        <label
                          className="  uppercase text-zinc-200 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Membership Begins
                        </label>
                        <input
                          type="date" value={date.toISOString().slice(0,10)}
                          className="border-0 px-3 py-3 placeholder text-zinc-900 text-zinc-200 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      <div className="relative  w-full mb-3">
                        <label
                          className="  uppercase text-zinc-200 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Membership Ends
                        </label>
                        <input
                          type="date"
                          className="border-0 px-3 py-3 placeholder text-zinc-900 text-zinc-200 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                   </div>
                    <div className=" mt-4">
                      <div className="relative  w-full mb-3">
                        <label
                          className={`  uppercase text-zinc-200 text-xs font-bold mb-2`}
                          htmlFor="gender"
                        >
                          plan (<span className={`${Slider > 6 ?"text-green-300":"text-yellow-200"}`}>{Slider} months </span>)
                        </label>
                        <input
                          id="steps-range"
                          type="range"
                          min="1"
                          max="12"
                          step="1"
                          onChange={(e) =>{ void setSlider(e.target.value)}}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        ></input>
                      </div>
                      </div>
                    </div>
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border text-zinc-900" />

                  <h6 className="text-zinc-200 text-sm mt-3 mb-6 font-bold uppercase">
                    Goals
                  </h6>
                  <div className="  ">
                    <div className="  lg:w-12/12 px-4">
                      <div className="relative flex   mb-3">
                        <div className="flex items-center me-4">
                          <input
                            id="red-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="red-checkbox"
                            className="ms-2 text-sm font-medium text-white"
                          >
                            Red
                          </label>
                        </div>
                        <div className="flex items-center me-4">
                          <input
                            id="green-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="green-checkbox"
                            className="ms-2 text-sm font-medium text-white"
                          >
                            Green
                          </label>
                        </div>
                        <div className="flex items-center me-4">
                          <input
                            id="red-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="red-checkbox"
                            className="ms-2 text-sm font-medium text-white"
                          >
                            Red
                          </label>
                        </div>
                        <div className="flex items-center me-4">
                          <input
                            id="green-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="green-checkbox"
                            className="ms-2 text-sm font-medium text-white"
                          >
                            Green
                          </label>
                        </div>
                        <div className="flex items-center me-4">
                          <input
                            id="red-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="red-checkbox"
                            className="ms-2 text-sm font-medium text-white"
                          >
                            Red
                          </label>
                        </div>
                        <div className="flex items-center me-4">
                          <input
                            id="green-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="green-checkbox"
                            className="ms-2 text-sm font-medium text-white"
                          >
                            Green
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <button
                      onClick={createUser}
                      className="bg-white text-black active:bg-zinc-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Create
                    </button>
                  </div>
                </form>
                }
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Createusers;
