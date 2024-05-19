 import {userData} from '../data/userdata'
 import {useState} from 'react'
const UserData = (e: any) => {

  const [Active, setActive] = useState(false)
  const [ModalActive, setModalActive] = useState(false)
  
  const EditUser = ()=>{
    setModalActive(true)
  }
  
  
  return (
    <>
    
      <tbody>

        <tr className="bg-white border-b dark:bg-white dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-2 text-lg font-medium text-black whitespace-nowrap dark:text-black"
          >
            {e.id}
          </th>
          <td className="px-6 text-lg tracking-wider py-2">{e.name}</td>
          <td className={`px-6 text-lg ${!Active? "px-6 text-lg font-extrabold text-green-500  py-2": " font-extrabold px-6 text-lg text-red-500  py-2"}  py-2`}>{e.membership}</td>
          <td className={`px-6 text-lg py-2 ${ e.validity <= 10 ? "px-6 text-lg py-2 text-red-500":"px-6 text-lg py-2 text-green-500"}`}>{e.validity}  
            
          </td>
          <td className="px-6 text-lg py-2">{e.phonenumber}</td>
          <td className="px-6 text-lg py-2">{e.phonenumber}</td>

          <td className="px-6 text-lg py-2">{e.phonenumber}</td>

 

          <td className="px-6 py-2 text-right">
            <a
              href="#"
              className="font-medium text-lg underline text-blue-600 dark:text-blue-500 hover:underline"
            >
           <button className="cursor-pointer  font-semibold overflow-hidden relative z-100 border border-black bg-black group px-5 py-1">
   <span onClick={EditUser} className="relative z-10 text-white group-hover:text-black text-sm  uppercase duration-100">  Edit</span>
    <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-100"></span>
      <span className="absolute w-full h-full bg-white   -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-100"></span>
    </button>
            </a>
          </td>
            
        </tr>
   
      
      </tbody>
    
    </>
  );
};

export default UserData;
