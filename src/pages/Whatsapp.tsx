import Lottie from "lottie-react"
import { useState } from "react"
import { FaExclamationCircle } from "react-icons/fa"
import loader from '../assets/animations/wappLoader.json'
const Whatsapp = () => {
    const [Number, setNumber] = useState("1234567890")
    const [timeLeft, settimeLeft]= useState(0)
    const [DisableInput, setDisableInput] = useState(false)
    const [ShowLoader, setShowLoader] = useState(false)
    const GenerateCode = ()=>{
         var time = 5
        var timerId = setInterval(countdown, 1000);
        setDisableInput(true)
        function countdown() {
            if (time == -1) {
              clearTimeout(timerId); 
              setShowLoader(true)
        setDisableInput(false)
                
            } else {
              settimeLeft(time--)
              
              console.log(time)
            }
          }
    }
  return (
    <div className="flex items-center bg-zinc-500 my-2  h-screen  justify-center   ">
 <div className="instructions text-black border-r-2 px-5 h-full border-black ">
            <ol  className="text-black  mt-10  list-decimal  " >
                <li className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi magnam reprehenderit commodi harum. A, repellat?</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi magnam reprehenderit commodi harum. A, repellat?</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi magnam reprehenderit commodi harum. A, repellat?</li>
            </ol>
        </div>
      <div className=" text-white  ml-10 h-full flex-col  flex items-center justify-center">
       
    <div className="userMobileNumber text-3xl justify-center text-black w-full h-[500px] px-5 flex flex-col">
        <label className="text-black mb-2" htmlFor="phonenumber">Enter Mobile Number:</label>
        <input type="number" name="phonenumber" className="text-4xl" id="mobileNumber"  />
        <div className="">
    {
        DisableInput ? 
        
        <button type="button" disabled={true}    className="float-right  text-white mt-5 bg-[#8b8b8b] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-lg px-10 py-4 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2">
            Generate Whatsapp Code
            </button> 
        :
        <button type="button"  onClick={GenerateCode} className="float-right  text-white mt-5 bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-lg px-10 py-4 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2">
            Generate Whatsapp Code
            </button> 
            
        }
            </div>
    </div>
       
       {
        !ShowLoader?
        <div className="LoginCode h-[500px]  border p-2 flex items-center flex-col">
        <div className="flex  p-2">
            <div>

            <span className="LGcode text-6xl  text-black border-b-2  my-2 mx-2 px-6 border-black"></span>
            <span className="LGcode text-6xl  text-black border-b-2  my-2 mx-2 px-6 border-black"></span>
            <span className="LGcode text-6xl  text-black border-b-2  my-2 mx-2 px-6 border-black"></span>
            <span className="LGcode text-6xl  text-black border-b-2  my-2 mx-2 px-6 border-black"></span>
            </div>
                <span className="text-black mt-4">___</span>
            <div>

            <span className="LGcode text-6xl  text-black border-b-2  my-2 mx-2 px-6 border-black"></span>
            <span className="LGcode text-6xl  text-black border-b-2  my-2 mx-2 px-6 border-black"></span>
            <span className="LGcode text-6xl  text-black border-b-2  my-2 mx-2 px-6 border-black"></span>
            <span className="LGcode text-6xl  text-black border-b-2  my-2 mx-2 px-6 border-black"></span>
            </div>

        </div>
        <div className="mt-10 flex p-5 border border-black items-center gap-1">
        <FaExclamationCircle className="text-red-950"/>
        <span >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, eaque! timeout:{timeLeft}</span>
        </div>
    </div>
        :
            <Lottie className="scale-90 h-[200px]" animationData={loader}/>
       }
       

        </div>  


    </div>
  )
}

export default Whatsapp