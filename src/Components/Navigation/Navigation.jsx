import React, { useState } from 'react'


const Navigation = () => {
    let [open, setOpen] = useState(false)
    return (
        <div classNameName='w-full fixed'>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex p-5 flex-col md:flex-row items-center md:bg-green-300 shadow-md">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 mr-6 md:mb-0" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                            viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Tailblocks</span>
                        <span className='ml-10 md:hidden' ><button onClick={()=>{ setOpen(!open) ; console.log(open)}}>SHOW ICON</button></span>
                    </a>
                   


                    <nav  className={!open? 'flex  flex-col  flex-wrap items-center text-base justify-center animate__animated animate__slideInDown md:hidden ' 
                    : 'flex  flex-col  flex-wrap items-center text-base justify-center animate__animated animate__slideOutUp md:hidden '} >
                        <a className="mr-5 hover:text-gray-900">First Link</a>
                        <a className="mr-5 hover:text-gray-900">Second Link</a>
                        <a className="mr-5 hover:text-gray-900">Third Link</a>
                        <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                    </nav>
                    <nav  className= 'hidden md:flex flex-row flex-wrap items-center text-base justify-center'>
                        <a className="mr-5 hover:text-gray-900">First Link</a>
                        <a className="mr-5 hover:text-gray-900">Second Link</a>
                        <a className="mr-5 hover:text-gray-900">Third Link</a>
                        <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                    </nav>

                   
                    <button className= {!open? "inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 animate__animated animate__slideInDown md:hidden":
                     "inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 animate__animated animate__slideOutUp md:hidden "}
>Button
                    </button>
                    <button className= {!open? "inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 animate__animated animate__slideInDown md:hidden":
                     "inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 animate__animated animate__slideOutUp md:hidden "}
>Button
                    </button>


                    <button className="hidden md:inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none 
    hover:bg-gray-200 rounded text-base  mt-0">Button
                    </button>
                    <button className="hidden md:inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none 
    hover:bg-gray-200 rounded text-base mt-0">Button
                    </button>
                </div>
            </header>

        </div>


    )
}

export default Navigation