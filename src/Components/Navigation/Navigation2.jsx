import React , {useState} from 'react'
import Dropdown from '../Dropdown/Dropdown'
const Navigate = () =>{
    let [open ,setOpen ] =useState(false)
  
    return (
<div className='fixed z-10 w-full top-0'>
      <nav className={`bg-gradient-to-br from-indigo-900 to-green-900  shadow dark:bg-gray-800 relative w-full`}>
            <div className="container bg-gradient-to-br from-indigo-900 to-green-900   w-full px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <div>
                        <a className="text-2xl font-bold text-gray-50  dark:text-white lg:text-3xl hover:text-white-700 dark:hover:text-gray-300"
                           href="#">Brand</a>
                    </div>


                    <div className="flex  md:hidden">
                        <button type="button"
                                onClick={()=> setOpen(!open)}
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path fill-rule="evenodd"
                                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>


                <div className="items-center absolute w-full left-0 px-3  md:hidden">
                    <div className={!open ? `flex flex-col animate__animated animate__slideOutUp   md:flex  md:mx-6`:`  flex flex-col animate__animated animate__slideInDown   md:flex-row  md:mx-6`}>
                        <a className="my-1 text-sm font-medium text-white dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                           href="#">Home</a>
                        <a className="my-1 text-sm font-medium text-white dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                           href="#"><Dropdown /></a>
                        <a className="my-1 text-sm font-medium text-white dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                           href="#">Contact</a>
                        <a className="my-1 text-sm font-medium text-white dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                           href="#">About</a>
 <button
                            className="hidden md:my-1 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
                            Primary
                        </button> 
    <div className="md:flex justify-center block">
                        <a className="relative text-white dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                           href="#">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>

                            <span
                                className="absolute top-0 left-0 p-1 text-xs text-white bg-indigo-500 rounded-full"></span>
                        </a>
                    </div> 
                           <div className='flex justify-between items-center md:hidden '>
                            <button
                            className="my-1 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
                            Primary
                        </button> 
                        <button
                            className="my-1 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
                            Sign In
                        </button> 
                     
                           </div>
                        


                    </div>




                </div>
                <div className="hidden md:flex">
                    <div className={!open ? `hidden md:flex  md:mx-6`:`flex flex-col md:flex-row  md:mx-6`}>
                        <a className="my-1 text-sm font-medium text-white dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                           href="#">Home</a>
                        <a className="my-1 text-sm font-medium text-white dark:text-gray-200 
                        hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                           href="#">
                               <Dropdown />
                           </a>
                        <a className="my-1 text-sm font-medium text-white dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                           href="#">Contact</a>

                        <a className="my-1 text-sm font-medium text-white dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                           href="#">About</a>
<div className="flex justify-center md:block">
                        <a className="relative text-white dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                           href="#">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>

                            <span
                                className="absolute top-0 left-0 p-1 text-xs text-white bg-indigo-500 rounded-full"></span>
                        </a>
                    </div>
                    </div>




                </div>
            </div>
        </nav>
</div>
      
    )
}

export default Navigate;