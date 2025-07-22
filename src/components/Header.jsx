import React from 'react'
import gmailLogo from '../assets/gmail-logo.png';
const Header = ({ onClick }) => {
  return (
<>

<div className="flex p-2  justify-between bg-white h-[7vh] ">
        <div className='flex gap-5'>
              <button onClick={onClick} className='ml-5 focus:outline-none group '>
                  <span className="block w-8 h-1 bg-[#36a3eb] mb-1 rounded group-hover:bg-blue-400 transition"></span>
                  <span className="block w-8 h-1 bg-[#36a3eb] mb-1 rounded group-hover:bg-blue-400 transition"></span>
                  <span className="block w-8 h-1 bg-[#36a3eb] rounded group-hover:bg-blue-400 transition"></span>
              </button>
            <img className="w-30" src={gmailLogo} alt=""/>
        </div>
            <input type="text" placeholder="Search mail" className="p-2 rounded-md w-full max-w-md bg-gray-400" />
            <button  className=' bg-blue-400 p-2 rounded-full ' >Profile</button>
</div>
</>
  )
}

export default Header;