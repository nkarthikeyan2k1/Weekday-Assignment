import React  from "react";
import Select from 'react-select';
import { roles,remote,experience,minSalary,employersCount } from "../../datasets/FiltersData";
import { debounceFunction } from "../../services/UtlitsServices";
import {useSelector,useDispatch} from 'react-redux'

function JobsFilter(){

    const jobData=useSelector(state=>state.jobData)
    const filtersData=useSelector(state=>state.filtersData)
    const dispatch = useDispatch();

    // handel the fliter API or local filter changes
    const handeFilterChange=(event)=>{
        const {name,value}=event.target;
        const filteredJobs = jobData.jdList.filter(job => value.some(role => role.value.toLowerCase() === job.jobRole.toLowerCase()));
        console.log('customer filter',filteredJobs);
        dispatch({type:"FILTERJOBS",payload:{[name]:value}})
    }

    //handel the filter selected value
    const handeFilterSelect=(name,data)=>{
        console.log('name',name)
        console.log('data',data)
        const filteredJobs = jobData.jdList.filter((job) => {
            return data.some(item => (item.value).toLowerCase() === (job[name]).toLowerCase()
            )
        });
        console.log('customer filter',filteredJobs);
        dispatch({type:"FILTERJOBS",payload:{[name]:data}})
    }

    // console.log('filtersData',filtersData)

    // handel the onchange function in the input box make the delay using the dwbounce
    const throttlingHandleInput = debounceFunction(handeFilterChange, 500);

    return (
        <div className="App mt-5 fliter-container">
        <Select
            isMulti
            onChange={(value)=>handeFilterSelect("jobRole",value)}
            name="jobRole"
            options={roles}
            className="basic-multi-select"
            placeholder="Roles "
        />
        <Select
            isMulti
            onChange={(value)=>handeFilterSelect("empCount",value)}
            options={employersCount}
            name="empCount"
            className="basic-multi-select"
            placeholder="Number Of Employees "
        />
        <Select
            onChange={(value)=>handeFilterSelect("minExp",value)}
            name="minExp"
            options={experience}
            className="basic-single"
            isClearable={true}
            placeholder="Experience "
        />
        <Select
            isMulti
            onChange={(value)=>handeFilterSelect("remote",value)}
            name="remote"
            options={remote}
            className="basic-multi-select"
            placeholder="Remote "
        />
        <Select
            onChange={(value)=>handeFilterSelect("minSalary",value)}
            name="minSalary"
            options={minSalary}
            className="basic-single"
            isClearable={true}
            placeholder="Minimum Base Pay Salary "
        />
        <input type="text" onChange={throttlingHandleInput} name="companyName" className="company-name" placeholder="Search Company Name"  />
        </div>
    )
}
export default JobsFilter;