import React from "react";
import axios from 'axios';
import pinImg from './../../img/pin.png'
import star from './../../img/star.png'
import ribbon from './../../img/ribbon.png'
import Pagination from '../pagination/Pagination';
import { NavLink } from 'react-router-dom'




class MainPage extends React.Component {



    componentDidMount() {
        if (this.props.jobs.length === 0) {
            axios.get('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu').then(response => {
                this.props.setJobs(response.data);
            });
        }
    }

    render() {
        const lastPostIndex = this.props.currentPage * this.props.postPerPage;
        const firstPostIndex = lastPostIndex - this.props.postPerPage;
        const currentPost = this.props.jobs.slice(firstPostIndex, lastPostIndex);
        let pageNum= 0;
        return (

            
            <div> 
                {currentPost.map(job =>
                    
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
                            <NavLink to={`/job/${pageNum+=1}`}><div className="mb-2 font-bold text-base text-title">{job.title}</div></NavLink>                                             {/*Title*/}
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

                <Pagination totalPost={this.props.jobs.length}
                    postPerPage={this.props.postPerPage}
                    setPage={this.props.setPage}
                    currentPage={this.props.currentPage}
                    firstPostIndex={firstPostIndex}
                    lastPostIndex={lastPostIndex}

                />
                
                
            </div>)
    }
}

export default MainPage;