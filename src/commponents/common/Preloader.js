import React from 'react'
import loader from './../../img/loader.svg'


let Preloader =(props)=>{
    return(
    <div className='md:continer flex justify-center '>
     <img className="w-60 h-60" src={loader} />
     </div>
)
}

export default Preloader