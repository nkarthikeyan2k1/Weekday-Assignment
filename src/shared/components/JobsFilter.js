import React from "react";
import Select from 'react-select';
import { roles,remote,experience,minSalary,employersCount } from "../../datasets/FiltersData";

function JobsFilter(){
    return (
        <div className="App mt-5 fliter-container">
        <Select
            isMulti
             closeMenuOnSelect={true}
            name="roles"
            options={roles}
            className="basic-multi-select"
            placeholder="Roles"
        />
        <Select
            isMulti
            name="employersCount"
            options={employersCount}
            className="basic-multi-select"
            placeholder="Number Of Employees"
        />
        <Select
            isMulti
            name="experience"
            options={experience}
            className="basic-multi-select"
            placeholder="Experience"
        />
        <Select
            isMulti
            name="remote"
            options={remote}
            className="basic-multi-select"
            placeholder="Remote"
        />
        <Select
            isMulti
            name="minSalary"
            options={minSalary}
            className="basic-multi-select"
            placeholder="Minimum Base Pay Salary"
        />
        <input type="text" name="companyName" placeholder="Search Company Name"  />
        </div>
    )
}
export default JobsFilter;