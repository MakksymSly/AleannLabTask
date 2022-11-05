const SET_JOBS = 'SET_JOBS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let initialState = {
    jobs: [],
    postPerPage: 6,
    totalJobsCount: 0,
    currentPage: 1,
    isFetching: false,
}


const mainPageReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_JOBS: {
            return { ...state, jobs: action.jobs }
        }
        case SET_CURRENT_PAGE:{
            return { ...state, currentPage: action.page }
        }   
       case TOGGLE_IS_FETCHING: {
        return { ...state, isFetching: action.isFetching}
       }
        default:
            return state;
    }
}





export const setJobsAC = (jobs) => ({ type: SET_JOBS, jobs });
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default mainPageReducer;