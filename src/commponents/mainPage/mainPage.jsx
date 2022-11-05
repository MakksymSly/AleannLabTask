import React from 'react';
import { NavLink } from 'react-router-dom'

// Pictures
import pinImg from './../../img/pin.png'
import star from './../../img/star.png'
import ribbon from './../../img/ribbon.png'

let mainPage = (props) => {
    let pageIndex = props.firstPostIndex;

    return (

        <div>
            {
                props.currentPost.map(job =>

                    <div key={job.id} className=" h-auto  bg-mobileBg   desktop:bg-white desktop:h-auto md:container md:mx-auto flex p-6 pr-0 m-2 rounded-xl" >
                        <div ><img className="mt-5 desktop:flex rounded-full w-20 h-20 mr-6 desktop:mt-0" src={job.pictures[0]} alt="img" /></div>                      {/* LOGO*/}
                        <div className="w-8/12">
                            {/*--------------------MOBILE VER---------------------------- */}
                            <div className="flex justify-between desktop:hidden ">
                                <div className="flex">
                                    <img className="w-3 h-5" src={star} alt='img' />
                                    <img className="w-3 h-5" src={star} alt='img' />
                                    <img className="w-3 h-5" src={star} alt='img' />                             {/*STARS --- RATING*/}
                                    <img className="w-3 h-5" src={star} alt='img' />
                                    <img className="w-3 h-5" src={star} alt='img' />
                                </div>
                                <div className="flex text-subtext ">Posted:{job.createdAt.slice(0, 10)}</div>
                            </div>



                            {/*---------------------------DESKTOP---------------------------------- */}
                            <NavLink to={`/job/${pageIndex += 1}`}><div className="mb-2 font-bold text-base text-title">{job.title}</div></NavLink>                                             {/*Title*/}
                            <div className="mb-2 text-sm text-subtext">{job.name}</div>                                               {/*Company name*/}
                            <div className="flex text-sm text-subtext">< img className="w-5 h-5" src={pinImg} alt='img' />{job.address}</div>
                        </div>
                        <div className="hidden desktop:flex items-center ">

                            <img className="w-4 h-5" src={star} alt='img' />
                            <img className="w-4 h-5" src={star} alt='img' />
                            <img className="w-4 h-5" src={star} alt='img' />                             {/*STARS --- RATING*/}
                            <img className="w-4 h-5" src={star} alt='img' />
                            <img className="w-4 h-5" src={star} alt='img' />

                        </div>
                        <div className="ml-10">
                            <div className="hidden text-subtext desktop:flex float-right"><img style={{ width: '19px' }} src={ribbon} alt="img" /></div>
                            <div className="hidden text-subtext desktop:flex pt-16">Posted:{job.createdAt.slice(0, 10)}</div>
                        </div>

                    </div>

                )}
        </div>
    );
}

export default mainPage;