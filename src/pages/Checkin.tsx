const Checkin = () => {
  return (
    <>
       <div className ="flex      py-2 px-2   h-screen justify-center">

      <div className="flex flex-col  w-full  ">

    <div className="flex bg-zinc-500  p-3 shadow-slate-900 shadow-md py-4 mb-3 rounded text-white w-full    items-center justify-between px-5">
          <h2 className="text-2xl font-bold  text-green-200"> Check In</h2>
        
        </div>
    
    <div className="  flex items-center rounded flex-col h-screen justify-center h-full w-full">
    <div className="card    py-6 rounded-lg  w-[30%] h-fit   ">
    <div className=" mx-auto bg-white rounded text-black   shadow-2xl">
  <div className="flex items-center p-3">
    <div className="px-1">
      <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
    </div>
    <div className="px-1">
      <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
    </div>
    <div className="px-1">
      <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
    </div>
  </div>
  <div className="flex opacity-90 p-5  ">
    <div className="flex w-full justify-between">
      <div>

        <p>Name : <br /> Doggie Singh  </p>
        <p>phonenumber : <br /> Doggie Singh  </p>
      </div>
    <div>

        <p>Valdity:<br /><button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" > 20 day(s) remaining </button>   </p>
        <p>Last Chechked in : <br /> <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">2024/20/02 5:00pm </button> </p>
    </div>

    </div>
  </div>
</div>

    <input className="p-2 my-2 rounded w-[100%] focus:outline-blue-600" placeholder="Enter Code" type="text"/>
     
    <button className="bg-black hover:opacity-90 text-white font-semibold p-2 mt-3 rounded w-[100%]" >Check In</button>
 
</div>

  
</div>
</div>

</div>

    </>
  )
}

export default Checkin