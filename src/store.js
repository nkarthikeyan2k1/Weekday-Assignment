import { configureStore } from '@reduxjs/toolkit';

// Initial state
const initialState = {
    jobData: {
      jdList: [], // Initialize jdList as an empty array
      totalCount: 0, // Initialize totalCount to whatever default value makes sense
    },
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
        default:
            return state;
    }
}

const store = configureStore({
    reducer: reducerHandeler, 
  });
export default store;
