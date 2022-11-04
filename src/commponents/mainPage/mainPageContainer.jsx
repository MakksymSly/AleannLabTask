import React from "react";
import { setCurrentPageAC, setJobsAC } from '../../redux/mainPageReducer';
import { connect } from 'react-redux';
import MainPageApiComponent from './mainPageApiComponent';


let mapStateToProps = (state) => {
   return {
      jobs: state.mainPage.jobs,
      postPerPage: state.mainPage.postPerPage,
      totalJobsCount: state.mainPage.totalJobsCount,
      currentPage:state.mainPage.currentPage,

   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      setJobs: (jobs) => {
         dispatch(setJobsAC(jobs))
      },
      setPage: (page)=>{
         dispatch(setCurrentPageAC(page))
      }
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPageApiComponent);

