const SET_JOBS = 'SET_JOBS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE';
let initialState = {
    jobs: [],
    postPerPage:6,
    totalJobsCount:0,
    currentPage:1, 
}


const mainPageReducer = (state = initialState, action) => {
    if (action.type === SET_JOBS) {
        return {...state, jobs: action.jobs}
    }else if(action.type === SET_CURRENT_PAGE){
        return {...state,currentPage:action.page}
    }
    return state;

}

export const setJobsAC = (jobs)=>({type:SET_JOBS, jobs});
export const setCurrentPageAC = (page)=>({type:SET_CURRENT_PAGE, page})
export default mainPageReducer;