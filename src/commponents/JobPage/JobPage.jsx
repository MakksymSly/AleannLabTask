import React from 'react';
import { NavLink } from 'react-router-dom'
// IMAGES
import ribbon from './../../img/ribbon.png'
import share from './../../img/share.png'
import square from './../../img/square.png'
import euro from './../../img/euro.png'
import leftArrow from './../../img/left-arrow.png'
import pin from './../../img/pin.png'
import map from './../../img/map.png'

let JobPage = (props) => {
  let key = 0;
  return (
    <div className="bg-white h-full tablet:pl-3">
      <div className="bg-white md:container md:mx-auto">
        <div className=" border-b-2 flex justify-between w-3/4 pt-10 ">
          <div className="text-title text-2xl font-bold">Job Details</div>
          <div className="flex ">
            <NavLink to='#'><div className="hidden desktop:flex mr-5 items-center text-lg text-title"><img className="w-3 h-3 " src={ribbon} alt="img" />Save to my list</div></NavLink>
            <NavLink to='#'><div className="hidden desktop:flex mr-3 items-center text-lg text-title"><img className="w-3 h-3 " src={share} alt="img" />Share</div></NavLink>
          </div>
        </div>
        <div className="flex desktop:hidden">
          <NavLink to='#'><div className=" desktop:hidden flex mt-5  mr-5 items-center text-lg text-title"><img className="w-3 h-3 " src={ribbon} alt="img" />Save to my list</div></NavLink>
          <NavLink to='#'><div className="desktop:hidden  flex mt-5  mr-3 items-center text-lg text-title"><img className="w-3 h-3 " src={share} alt="img" />Share</div></NavLink>
        </div>
        <div className="bg-title w-32 h-14 text-center pt-4 rounded-xl text-white font-semibold mt-10 uppercase desktop:block tablet:hidden"><NavLink to='#'>Apply Now</NavLink></div>
        <div>{/* Общий*/}
          <div>
            <div className="flex w-3/4 pt-8">
              <div className="text-title text-2xl font-bold  ">{props.currentJob.title}</div>
              <div className=" tablet:hidden desktop:flex text-title justify-end w-3/4">
                <div className="mr-3">
                  <div className="font-bold text-xl flex"><img className="w-5 h-4 mr-2 self-center" src={euro} alt="euro" />{props.currentJob.salary}</div>
                  <div className="text-lg font-medium" >Brutto, per year</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-zinc-500 text-lg mt-2 mb-2 tablet:flex tablet:text-lg">Posted:{props.currentJob.createdAt.slice(0, 10)}
            <div className=" tablet:flex desktop:hidden text-title justify-end w-2/4">
              <div className="mr-3">
                <div className="font-bold text-xl flex"><img className="w-5 h-4 mr-2 self-center" src={euro} alt="euro" />{props.currentJob.salary}</div>
                <div className="text-lg font-medium" >Brutto, per year</div>
              </div>
            </div>
          </div>
          <div className="text-lg text-title  w-3/4 pr-3 mb-12">{props.currentJob.description}</div>
          <div className="font-bold text-title text-xl mb-4">Responsopilities</div>
          <div className="text-lg text-title  w-3/4 pr-3 mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas, vero neque laborum similique facilis aliquid
            recusandae! In mollitia dolorum earum eius alias voluptates. N
            am id fugit vel optio reiciendis mollitia facere minima deserunt, dolores nemo? Dolore, quo magni, cum iste in eius deserunt nam rerum quos ipsum fuga error?</div>
        </div>
        <div className="font-bold text-title text-xl mb-4">Compensation & Benefits:</div>
        <div className="flex items-center text-lg text-title  w-3/4 pr-3 ml-2 "> Our physicians enjoy a wide range of benefits, including:</div>
        <div>{props.currentJob.benefits.map(b => <div key={b} className="flex items-center text-lg text-title  w-3/4 pr-3 "><img className="w-2 h-2" src={square} alt='img' />{b}</div>)}</div>
        <div className="tablet:flex desktop:block justify-center w-5/6">
          <div className="tablet:flex desktop:block bg-title w-32 h-14 justify-center text-center pt-4 rounded-xl text-white font-semibold mt-10 uppercase mb-10"><NavLink to='#'>Apply Now</NavLink></div>
        </div>
        <div className="text-title text-2xl font-bold border-b-2 w-3/4">Additional info</div>
        <div>
          <div className="text-title text-lg mt-4 mb-3">Employment type</div>
          <div className="flex">{props.currentJob.employment_type.map(e => <div className="w-56 h-12 bg-etype text-etypetext rounded-xl border-title border-solid border-2 text-center mr-3 pt-2 font-bold " key={e}>{e}</div>)}</div>
          <div className="text-title text-lg mt-4 mb-3">Benefits</div>
          <div className="flex">{props.currentJob.benefits.map(b => <div key={b} className="w-56 h-12 bg-yellow-200/100 text-benefitsText rounded-xl border-benefitsText border-solid border-2 text-center mr-3 pt-2 font-bold ">{b}</div>)}</div>
          <div className="text-title text-2xl font-bold border-b-2 w-3/4 mt-14 mb-6">Attached images</div>
          <div className="flex mb-20">{props.currentJob.pictures.map(p => <img key={key++} className="h-40 w-60 rounded-2xl mr-5" src={p} alt="img" />)}</div>
        </div>
        <NavLink className='flex w-56 tablet:hidden desktop:block' to="/"><div className=" flex p-3 items-center mb-40 bg-backbtn w-56 h-14 text-center pt-4 rounded-xl text-title font-semibold mt-10 uppercase"><img className="w-3 h-3 mr-2" src={leftArrow} alt='img' />RETURN TO JOB BOARD</div></NavLink>
        <div className="w-40 h-10 tablet:h-full"></div>
      </div>
      <div className=" tablet:block m-auto  desktop:hidden   bg-map w-80 h-60 rounded-xl text-white">
        <div className="float-left pl-10 pt-7  ">
          <div className="font-bold text-xl">{props.currentJob.name}</div>
          <div className="items-center flex justify-center text-lg"><img className="w-3 h-3" src={pin} alt="img" />{props.currentJob.address}</div>
          <div className="text-lg">{props.currentJob.phone}</div>
          <div className="text-lg mb-5">{props.currentJob.email}</div>
        </div>
        <img className="h-full rounded-b-xl" src={map} alt="img" />
      </div>
      <div className="w-40 h-10"></div>
      <div className="w-40 desktop:hidden tablet:h-60"></div>
      <div className=" tablet:hidden  desktop:block absolute top-44 left-3/4 bg-map w-80 h-60 rounded-xl text-white">
        <div className="float-left pl-10 pt-7  ">
          <div className="font-bold text-xl">{props.currentJob.name}</div>
          <div className="items-center flex justify-center text-lg"><img className="w-3 h-3" src={pin} alt="img" />{props.currentJob.address}</div>
          <div className="text-lg">{props.currentJob.phone}</div>
          <div className="text-lg mb-5">{props.currentJob.email}</div>
        </div>
        <img className="h-full rounded-b-xl" src={map} alt="img" />
        <div></div>
      </div>
    </div>
  );
}
export default JobPage;