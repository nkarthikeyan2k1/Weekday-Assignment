import { configureStore } from '@reduxjs/toolkit';

// Initial state
const initialState = {
    jobData: {
      jdList: [],
      totalCount: 0
    },
    filtersData:{
        jobRole:[],
        empCount:[],
        minExp:null,
        remote:[],
        minJdSalary:null,
        companyName:null
    }
  };

function reducerHandeler(state=initialState,action){
    switch (action.type) {
        case "JOBSDETAILS":
            return {
                ...state,
                jobData:{
                    jdList:[...state.jobData.jdList,...action.payload.jdList],
                    totalCount:action.payload.totalCount
                },
            };
        case "FILTERS":
            return {
                ...state,
                filtersData:({...state.filtersData,...action.payload}),
            };
        default:
            return state;
    }
}

const store = configureStore({
    reducer: reducerHandeler, 
  });
export default store;
