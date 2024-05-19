 
import { GoDotFill } from 'react-icons/go'

const UserMessageComponent = (e:any) => {
  return (
    <div  >


   <div className="flex gap-1 p-1 cursor-pointer rounded-sm bg-slate-900 pl-3 pr-5 py-3  w-full text-white flex-col">
    <div className='flex gap-2'>
    <div>{e.name}</div>
    <div>{e.phoneNumber}</div>
    </div>
    <div>

    <div className='flex items-center  gap-1 '>{e.membershipStatus == "Active" ? <GoDotFill  className='text-[#84cc16]'  /> :<GoDotFill  className='text-red-400'  /> } Status - {e.membershipStatus} </div>
</div>
    </div>
   </div>
  )
}

export default UserMessageComponent