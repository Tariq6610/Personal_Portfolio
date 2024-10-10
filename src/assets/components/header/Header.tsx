import { useState } from "react";
import "./header.css"

function Header() {
    const [navVisibility, setnavVisibility] = useState(false)

    function visibility(){
      setnavVisibility(!navVisibility)
      console.log("ok");
      
    }
  
    return (
      <>
      <header >
        <div className='flex z-20 fixed top-0 w-screen bg-slate-200 justify-between px-4 md:px-28 py-4 '>
          <div className='flex justify-center items-center gap-3'>
            <h1 className='w-12 h-12 flex font-bold justify-center items-center rounded-full bg-black text-white'>T</h1>
            <h1>M Tariq</h1>
            </div>
          <div className="flex items-center">
            <ul className=' md:flex items-center gap-20 hidden '>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div onClick={visibility} className={`w-12 h-12 flex justify-center items-center bg-black text-white  cursor-pointer md:hidden`}>Menu</div>
        </div>
        <div  className={`mobileNav fixed top-0 z-30 w-screen flex flex-col items-center justify-center gap-y-8 bg-[rgba(22,22,22,0.6)] text-white font-bold p-6 backdrop-blur-sm ${navVisibility ? "showNave" : ""}`}>
          <div className='text-sm'>Logo</div>
          <div>Menu</div>
          <div>
            <div className='flex flex-col items-center gap-y-10 text-slate-300'>
              <div>Home</div>
              <div>About</div>
              <div>Contact</div>
              <div onClick={visibility} className=' px-3 py-2 bg-black text-white cursor-pointer absolute top-6 right-4'>X</div>
            </div>
          </div>
        </div>
      </header>
      </>
    )
}

export default Header