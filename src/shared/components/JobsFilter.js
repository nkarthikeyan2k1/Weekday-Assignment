import React from "react";
import Select from 'react-select';
import { roles,remote,experience,minSalary,employersCount } from "../../datasets/FiltersData";
import { debounceFunction } from "../../services/UtlitsServices";

function JobsFilter(){

    // handel the fliter API or local filter changes
    const handeFilterChange=(event)=>{

    }

    // handel the onchange function in the input box make the delay using the dwbounce
    const throttlingHandleInput = debounceFunction(handeFilterChange, 500);

    return (
        <div className="App mt-5 fliter-container">
        <Select
            isMulti
            onChange={handeFilterChange}
            name="roles"
            options={roles}
            className="basic-multi-select"
            placeholder="Roles "
        />
        <Select
            isMulti
            onChange={handeFilterChange}
            options={employersCount}
            name="employersCount"
            className="basic-multi-select"
            placeholder="Number Of Employees "
        />
        <Select
            isMulti
            onChange={handeFilterChange}
            name="experience"
            options={experience}
            className="basic-multi-select"
            placeholder="Experience "
        />
        <Select
            isMulti
            onChange={handeFilterChange}
            name="remote"
            options={remote}
            className="basic-multi-select"
            placeholder="Remote "
        />
        <Select
            isMulti
            onChange={handeFilterChange}
            name="minSalary"
            options={minSalary}
            className="basic-multi-select"
            placeholder="Minimum Base Pay Salary "
        />
        <input type="text" onChange={throttlingHandleInput} name="companyName" className="company-name" placeholder="Search Company Name"  />
        </div>
    )
}
export default JobsFilter;