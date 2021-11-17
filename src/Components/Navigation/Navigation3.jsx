import React from 'react'
import Navigate from "./Navigation2";

const Navigation3 = (Component) => {


  return   function newComponent({data ,random}) {
console .log(random)

      return (random < 2)? (<Component data={data[random]}/>)
       :(<h1 className='text-3xl'>NO COLOR AVAIALABLE</h1>)}

}

const WithNav =  Navigation3(Navigate)

export default  WithNav