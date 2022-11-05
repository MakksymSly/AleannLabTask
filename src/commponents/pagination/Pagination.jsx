import React from 'react'
import leftArrow from './../../img/left-arrow.png'
import rightArrow from './../../img/right-arrow.png'

export const Pagination = (props) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(props.totalPost / props.postPerPage); i++) {
        pages.push(i)
    }
    const nextPage = () => {
        
        if(props.currentPage<props.postPerPage-2){         
        props.setPage(props.currentPage + 1)}
    }

    const prevPage = () => {
        if(props.currentPage>1){         
        props.setPage(props.currentPage - 1)}
    };
    return (
        <div className='flex justify-center '>

            <div className='bg-white flex rounded-2xl  justify-center h-a tablet:w-full desktop:w-auto'>
                <div className='flex p-1'>
                <button onClick={prevPage} className='w-3 m-3 '><img src={leftArrow} alt="arrow" /></button>
                <div className=' w-1  h-5 mt-2 border-zinc-400 border-r-2'></div>
                <div className=' ml-5 mr-5'>   
                {

                    pages.map((page, index) => {
                        return <button className={` mr-2 mt-2 ml-2 border-b-2 ${props.currentPage===page?  'border-pagination-border text-pagination-border font-bold': 'text-zinc-400' }`} key={index} onClick={() => { props.setPage(page) }}>{page}</button>
                    })
                }
                </div>
                <div className='w-1  h-5 mt-2 border-zinc-400 border-l-2	'></div>
                <button onClick={nextPage} className='w-3 m-3 '><img src={rightArrow} alt="arrow" /></button>
                </div>
                
            </div>

        </div>
    )
}
export default Pagination
