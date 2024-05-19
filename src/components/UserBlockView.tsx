import { useState } from 'react'
import {   GoDotFill } from 'react-icons/go'

const UserBlockView = (e:any) => {
  
  return (
    <div className='m-2 '>
    
    {/* <div
  className={`w-72 bg-white rounded-b-lg border-t-8  p-2 px-4 py-5 flex  justify-around shadow-md ${e.membershipStatus == "Active" ? "border-green-500 w-72 bg-white rounded-b-lg border-t-8  p-2 px-4 py-5 flex flex-col justify-around shadow-md" :"border-red-500 w-72 bg-white rounded-b-lg border-t-8  p-2 px-4 py-5 flex flex-col justify-around shadow-md "}`}
>
  <div className='flex es-center gap-2'>

  <p className="text-lg font-bold font-sans">{e.name}</p>
  <p className='border-b border-black border-dashed'>{e.validity}</p>
  </div>
  <div className="py-1">
     {e.phonenumber}
  </div>
  <div className="flex justify-between es-center">
    <div className="text-sm es-center flex gap-2">
  {e.membershipStatus == "Active" ? <GoDotFill  className='text-[#84cc16]'  /> :<GoDotFill  className='text-red-400'  /> } Status - {e.membershipStatus}
      
      <button
      onClick={ selectUser}
        className="bg-slate-200 ml-16 px-2 rounded-xl hover:bg-slate-400 transition-colors ease-in-out"
      >
        view
      </button>
    </div>
  </div>
  
</div> */}


<div  
                  className={` w-fit bg-zinc-950 rounded-b-lg text-white border-t-8  p-2 px-4 py-5 flex  justify-around shadow-md ${
                    e.membershipStatus == "Active"
                      ? "border-green-500 w-72 bg-zinc-950 ext-white rounded-b-lg border-t-8  p-2 px-4 py-5 flex flex-col justify-around shadow-md"
                      : "border-red-500 w-72 bg-zinc-950 text-white rounded-b-lg border-t-8  p-2 px-4 py-5 flex flex-col justify-around shadow-md "
                  }`}
                >
                  <div  className="flex items-center gap-2">
                    <p className="text-lg font-bold font-sans">
                      {e.name}
                    </p>
                    <p className="border-b border-black border-dashed">
                      {e.validity} 
                    </p>
                  </div>
                  <div className='flex gap-2  text-sm my-4'>

                  <div className="text-[10px] rounded-lg p-2 text-black  bg-slate-200 leading-[1.3rem] font-bold text-center">Phone-number  {e.phonenumber}</div>
                  <div className="rounded-lg p-2 bg-red-200  text-black text-center ">age  {e.age}</div>
                  <div className="text-center rounded-lg p-2 text-black bg-slate-200  ">height  {e.height}</div>
                  <div className="text-center rounded-lg p-2 text-black bg-slate-200 "> weight  {e.weight}</div>
                  </div>



                  <div className="flex justify-center  py-2 items-center">
                    <div className="text-sm flex b  w-full justify-between items-center mt-2 ">
                <div className='flex items-center gap-1'>
                {e.membershipStatus == "Active" ? (
                        <GoDotFill className="text-[#84cc16]" />
                      ) : (
                        <GoDotFill className="text-red-400" />
                      )}{" "}
                      Status - {e.membershipStatus}
                </div>
                      <div className=' '>
                      <button
                        
                        className="  mx-1 capitalize py-1 px-1 underline  rounded-xl transition-colors ease-in-out"
                      >
                        save 
                        {/* hover:bg-slate-400  */}
                      </button>
                      
                      <button
                        
                        className=" underline capitalize mx-1 py-1 px-1 rounded-xl transition-colors ease-in-out"
                      >
                        edit
                      </button>
                      </div>
                    </div>
                  </div>
                </div>

  </div>
  
  )
}

export default UserBlockView