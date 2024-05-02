import axios  from 'axios';

// Declare the API BaseURL
const BaseURL=process.env.REACT_APP_APIURL;

// To hanel the axios api request
axios.interceptors.request.use(
    config=>{return config},
    error=>{Promise.reject(error)}
)

// To handel the axios api response and errors
axios.interceptors.response.use(
    response=>{return response},
    error=>{
        return Promise.reject(error)
    }
)

/** 
* This function used to Get the job details 
* @data pass the limit and offset in object format {"limit":10,"offset":0}
**/

const getJobsDetail=(data={"limit":10,"offset":0})=>{
   return axios.post(BaseURL,data)
    .then(response=>{
        return  response;
    })
    .catch(error=>{
        return error;
    });
}

export {getJobsDetail};