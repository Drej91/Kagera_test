import React from 'react'
import {useUsersDataContext} from '../context/UsersDataContext';
import FilterSection from './FilterSection';


const FiltersList = () => {
  const {jobPositionsFilterOptions} = useUsersDataContext();
  
  return (
    <div className='filters-wrapper'>
        {jobPositionsFilterOptions.length&&<FilterSection data={jobPositionsFilterOptions} labelText="Positions"/>}
    </div>
  )
}

export default FiltersList