import { useState } from "react";
import UserData from "../components/UserData";
import { userData } from "../data/userdata";
import { FaCross, FaList, FaSearch, FaTimes } from "react-icons/fa";
import { BsGrid } from "react-icons/bs";
import UserDataBlock from "../components/UserBlockView";
const ActiveUsers = () => {
  const testArray: any[] = [
    "id",
    "Firstname",
    "Lastname",
    "membershipStatus",
    "validity (days)",
    "phonenumber",
    "age",
    "height",
    "weight",
    "gender",
    "goals",
    "height",
    "weight",
  ];
  const [View, setView] = useState(false);
  const [Active, setActive] = useState(false)
  const [ModalActive, setModalActive] = useState(false)
  const [Data, setData] = useState(userData)
  const [Global, setGlobal] = useState(0)

  const [EditData, setEditData] = useState({
     
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
  })
  const [Fname, setFname] = useState("")
  const [Lname, setLname] = useState("")

const CloseModal = ()=>{
  setModalActive(false)
}

const EditUser = (e: any)=>{
  setModalActive(true)
 console.log(e)
 setEditData(e)
}
const saveUser = (e:any)=>{
  console.log(EditData.id)
  console.log(Global)
}
const handleChange = (e:any)=>{

  console.log(e.target.value)

}
console.log(EditData.Firstname)
  const Modal = ()=>{
    return <div  >
    <div style={{backgroundColor:"rgba(0,0,0,0.5)"}} className={`h-screen bg-black ${ModalActive?"absolute h-screen bg-black z-50 w-full    bg-blend-multiply	":"absolute hidden z-50 w-full  h-screen bg-black    bg-blend-multiply	"}	  z-50 w-full    bg-blend-multiply			`}>
    

      <div className={`bg-zinc-200 relative   z-10 top-[30%] left-[30%] ${ModalActive? "block":"hidden"}   w-fit h-2/5 flex-col rounded flex`}>
        <div className="flex bg-zinc-900 text-white m-1 items-center justify-between rounded p-3">
          <div>Edit User</div>
          <div className="cursor-pointer" onClick={CloseModal}><FaTimes size={20}/></div>
        </div>
      <div className="p-5">
        <div className="flex gap-2">
      <div className="flex flex-col">

        <label htmlFor="">Firstname</label>
        <input type="text" defaultValue={EditData.Firstname} data-sname="Firstname"  onChange={(e)=>setEditData({...EditData,Firstname:e.target.value})}  />
      </div>
    <div className="flex flex-col">

        <label htmlFor="">Lastname</label>
        <input type="text" defaultValue={EditData.Lastname}  />
    </div>
        </div>
<div className="flex gap-2">
  <div className="flex flex-col">

        <label htmlFor="">Phone-Number</label>
        <input type="number" defaultValue={EditData.phonenumber} />
  </div>

  <div className="flex flex-col">

        <label htmlFor="">Age</label>
        <input type="text" defaultValue={EditData.age} onChange={(e)=>handleChange(e)}  />
  </div>
</div>
<div className="flex gap-2 ">
        <div className="flex flex-col">

        <label htmlFor="">Height(cm)</label> 
        <input type="text" defaultValue={EditData.height} />
        </div>
        <div className="flex flex-col">

 
        <label htmlFor="">weight(kg)</label>

        <input type="text" defaultValue={EditData.weight} />
        </div>
</div>



        <select
                          name=""
                          id=""
                          className=" border-0 mt-5 w-full mb-2 px-3 py-3 placeholder text-zinc-900 text-zinc-200 bg-white rounded text-sm shadow focus:outline-none focus:ring  ease-linear transition-all duration-150"
                      
                       >  
                       <option  value={""} selected disabled hidden> {EditData.gender}  </option>
                          <option value="">Male</option>
                          <option value="">Female</option>
                          <option value="">Prefer not to say</option>
                        </select>
<div className="  ">
                    <div className="  lg:w-12/12 px-4">
                      <div className="relative flex mb-3 ">
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

                  <button type="button" onClick={saveUser}  className=" float-right   text-white   bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-md text-sm w-fit px-4 py-2 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2">
          save
             </button> 
      </div>

      </div>
      </div>
    </div>

  }

  const Userdata = (e:any)=>{
    return <>
    
    <tbody>

<tr className="bg-white border-b dark:bg-white dark:border-gray-700">
  <th
    scope="row"
    className="px-6 py-2 text-lg font-medium text-black whitespace-nowrap dark:text-black"
  >
    {e.id}
  </th>
  <td className="px-2 text-lg  tracking-wider py-2">{e.Firstname+" "+ e.Lastname}</td>
  <td className={`px-6 text-lg ${!Active? "px-6 text-lg font-extrabold text-green-500  py-2": " font-extrabold px-6 text-lg text-red-500  py-2"}  py-2`}>{e.membership}</td>
  <td className={`px-6 text-lg py-2 ${ e.validity <= 10 ? "px-6 text-lg py-2 text-red-500":"px-6 text-lg py-2 text-green-500"}`}>{e.validity}  
    
  </td>
  <td className="px-6 text-lg py-2">{e.phonenumber}</td>
  <td className="px-6 text-lg py-2">{e.height}</td>

  <td className="px-6 text-lg py-2">{e.weight}</td>



  <td className="px-6 py-2 text-right">
    <a
      href="#"
      className="font-medium text-lg underline text-blue-600 dark:text-blue-500 hover:underline"
    >
   <button className="cursor-pointer  font-semibold overflow-hidden relative z-100 border border-black bg-black group px-5 py-1">
<span onClick={()=>{EditUser(e)}} className="relative z-10 text-white group-hover:text-black text-sm  uppercase duration-100">  Edit</span>
<span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-100"></span>
<span className="absolute w-full h-full bg-white   -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-100"></span>
</button>
    </a>
  </td>
    
</tr>


</tbody>
    </>
  }
  return (
    <>
    <Modal  /> 
      <div className="ActiveUsers   p-2 ">
        <div className="flex bg-zinc-950 p-3 shadow-slate-900 shadow-md py-4 mb-3 rounded text-white    items-center justify-between px-5">
          <h2 className="text-2xl font-bold  text-white"> Active Users</h2>
          {/* <div className="items-center w-2/6   bg-gray-200 text-black flex pl-2 gap-2 rounded-md ">
            <FaSearch className="text-lg " />
            <div className=" rounded-r-lg    px-2 border-l-[1px] border-black bg-gray-200 ">
              <input
                type="text"
                className="border-0 p-2 outline-none     bg-gray-200 	"
              />
            </div>
          </div> */}
          <div className="flex gap-x-2 text-zinc-950 ">
            <div
              className={`${
                View === true
                  ? "bg-white text-black   p-2 rounded "
                  : " bg-black text-white rounded p-2 "
              }       `}
            >
              <BsGrid
                className="cursor-pointer text-lg"
                onClick={() => {
                  setView(true);
                }}
              />
            </div>
            <div
              className={`${
                !View === false
                  ? "bg-black text-white   p-2 rounded "
                  : " bg-white text-black rounded p-2 "
              }       `}
            >
              <FaList
                className="cursor-pointer text-lg"
                onClick={() => {
                  setView(false);
                }}
              />
            </div>
          </div>
        </div>
        <div className=" p-3    grid-cols-5 gap-5 max-[900px]:grid-cols-2 max-[1300px]:grid-cols-3 max-[1570px]:grid-cols-4 max-[1470px]:gap-4      rounded">
          {/* <UserData  id={'ID'} name= {'name'}  date={'Date'} active={"Membership"}   validity={"Validity"} />
      {
        userData.map((elem,id)=>{
          
          return   <UserData key={id} id={elem.id}   name={elem.Firstname+' '+elem.Lastname} active={elem.membershipStatus} validity={elem.validity}arr={JSON.stringify(elem)} />
        })
      } */}

          {View === true ? (
            <>
              <div className=" p-3  capitalize mb-16  grid grid-cols-5 gap-1 max-[900px]:grid-cols-2 max-[1300px]:grid-cols-3 max-[1570px]:grid-cols-4 max-[1470px]:gap-4      rounded">
                 {
                  Data.map((item,id)=>{
                    return <>
                  <UserDataBlock
                   membershipStatus={item.membershipStatus} 
                   name={item.Firstname+" "+item.Lastname}
                    phonenumber={item.phonenumber}
                    validity={item.validity+" months"}
                    age={item.age}
                    gender={item.gender}
                    height={item.height}
                    weight={item.weight}
                    
                    />
                   
                    </>
                  })
                 }
              </div>
            </>
          ) : (
            <div className="">
              <div className="relative mb-16  shadow-md sm:rounded-lg">
                <table className="w-full text-sm   text-left rtl:text-right text-black dark:text-black">
                  <thead className="text-lg  text-gray-400 uppercase bg-black  dark:text-gray-400">
                    <tr className=" ">
                      <th scope="col" className="px-6  py-3">
                        {testArray[0]}
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className=" ">Name</div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">{testArray[3]}</div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">{testArray[4]}</div>
                      </th>

                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">{testArray[5]}</div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">{testArray[11]}</div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">{testArray[12]}</div>
                      </th>
                       
                      <th scope="col" className="px-6 py-5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  {
                    Data.map((elem, id) => {
                      return (
                        <>
                       {/* { setGlobal(id)} */}

                          <Userdata
                            id={elem.id}
                            validity={elem.validity}
                            // name={elem.Firstname + " " + elem.Lastname}
                            Firstname={elem.Firstname}
                            Lastname={elem.Lastname}
                            age={elem.age}
                            gender={elem.gender}
                            membership={elem.membershipStatus}
                            phonenumber={elem.phonenumber}
                            height={elem.height}
                            weight={elem.weight}
                          />

                           
                        </>
                      );
                    })
                    //
                  }
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ActiveUsers;
