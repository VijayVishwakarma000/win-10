import React,{useState} from 'react'
import UserData from "../components/UserData";
import { userData } from "../data/userdata";
import UserMessageComponent from './UserMessageComponent';
import { FaCheck } from 'react-icons/fa';

const WhatsappMessagingPage = () => {
  const [Image, setImage] = useState({})
  const [search,setSearch] = useState("")
  const [selectedFilter,setselectedFilter] = useState("All Users")

   const FilteredItems = userData.filter(
    (item)=> selectedFilter ==="All Users" || selectedFilter === item.membershipStatus
   )
  const preview = (e:any)=>{
    setImage(URL.createObjectURL(e.target.files[0]))
  }
  
  return (
   <div className='bg-zinc-500 flex text-white h-screen '>
   {/* {   userData.map((elem, id) => {
                      return (
                        <>
                          <UserData
                            id={elem.id}
                            validity={elem.validity}
                            name={elem.Firstname + " " + elem.Lastname}
                            membership={elem.membershipStatus}
                            phonenumber={elem.phonenumber}
                          />
                        </>
                      );
                    })} */}


                    
                   
                    <div className="flex flex-col ml-2 mt-2 bg-slate-600 px-2">

                          <div className='w-fit'>
                          <div className="flex w-fit items-center justify-center p-5">
  <div className="  ">
    <div className="flex">
      <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
        <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
        </svg>
      </div>
     
      {/* <input type="text" className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0" placeholder="" id=""/> */}
      <input
                        type="search"
                        className="relative m-0 -mr-0.5 block   min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Search"
                        onChange={(e)=>setSearch(e.target.value)}
                        aria-label="Search"
                        aria-describedby="button-addon3" />
      <select 
      className='text-black' 
                    onChange={(e)=>setselectedFilter(e.target.value)} value={selectedFilter}
                        >  
                        
                          <option  selected disabled hidden>Filters</option>
                           <option value="All Users" > All Users</option>
                           <option value="Active" > Active</option>
                           <option value="In Active" > In Active</option>


                        </select>


    </div>
  </div>
</div>
                          </div>
                          <div  className=' overflow-y-scroll	 flex flex-col gap-1 '>

                        
                         {   FilteredItems.filter((item)=>{


                            return search.toLowerCase() === '' ?item:  item.Firstname.toLowerCase().includes(search)||item.Lastname.toLowerCase().includes(search) 
                                    
                            
                         
                             
                            
                         }).map((elem, id) => {
                      return (
                        <>
                        <div key={id}>

                          <UserMessageComponent 
                             
                             id={elem.id}
                             
                             name={elem.Firstname + " " + elem.Lastname}
                             
                             phoneNumber={elem.phonenumber}
                             membershipStatus={elem.membershipStatus}
                             />
                             </div>
                        </>
                      );
                    })} 
                          </div>

                    </div>
                    
                    <div className="flex   bg-slate-400 w-full text-black ml-2 mt-2 px-2">

                    <div className="flex flex-col w-[90%]	border-r border-black  p-2 gap-5 h-full">
                      <div className="flex flex-col  ">

                    <label htmlFor="messageTemplate">Enter Message:</label>
                    <textarea name="message" id="messageTemplate" rows={8} style={{resize:"none"}}  cols={50} ></textarea>
                    </div>
                    <div className=" text-black">
                      <div className=' mb-5 mt-5 '><img src={Image} alt=""  /></div>
                      <div className="grid  items-center gap-1.5">
    

  <input
    className="flex  mt-5  rounded-md border border-blue-300 border-input bg-white text-sm text-gray-400 file:border-0 file:bg-blue-600 file:text-white file:text-sm file:font-medium"
    type="file"
    id="picture"
    accept="image/x-png,image/gif,image/jpeg" 
    onChange={preview}
    />
    <div className='flex justify-end'>
      
     <button type="button"   className="    text-white mt-5 bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-md text-sm w-fit px-2 py-3 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2">
            Send Message
            </button> 
    </div>

</div>

                    </div>
                    </div>


                    <div className='flex h-fit items-center   w-3/5'>
                      <div className='w-full  py-5  '>

                      <div className="flex flex-col gap-2 mt-2 px-2 w-full">
 
                        <div className="flex bg-slate-200 rounded-sm p-2 h-fit w-full  ">

                        <div  >Doggie Singh~2024/02/1 : </div>  <span className='text-green-600 ml-2 flex gap-1 items-center '> <FaCheck/> Message Sent</span>
                        </div>
                       
                       

                      </div>
                    </div>
                    </div>

                    </div>

                    

   </div>
  )
}

export default WhatsappMessagingPage