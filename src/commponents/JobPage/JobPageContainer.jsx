import React from 'react';
import { setJobsAC, setCurrentJobAC } from '../../redux/jobPageReducer';
import { connect } from 'react-redux';
import JobPageApiComponent from './JobPageApiComponent';


let mapStateToProps = (state) => {
   return {
      jobs: state.JobPage.jobs,
      currentJob: state.JobPage.currentJob,
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      setJobs: (jobs) => {
         dispatch(setJobsAC(jobs))
      },
      setCurrentJob: (currentJob) => {
         dispatch(setCurrentJobAC(currentJob))
      },


   }
}


export default connect(mapStateToProps, mapDispatchToProps)(JobPageApiComponent);

