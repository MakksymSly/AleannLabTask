const SET_JOBS = 'SET_JOBS';
const SET_CURRENT_JOB = 'SET_CURRENT_JOB'

let initialState = {
    jobs: [],
    currentJob:[],
}


const jobPageReducer = (state = initialState, action) => {
    if (action.type === SET_JOBS) {
        return {...state, jobs: action.jobs}
    } else if(action.type === SET_CURRENT_JOB){
        return {...state, currentJob: action.currentJob}
    }
    return state;

}

export const setJobsAC = (jobs)=>({type:SET_JOBS, jobs});
export const setCurrentJobAC = (currentJob)=>({type:SET_CURRENT_JOB, currentJob});
export default jobPageReducer;