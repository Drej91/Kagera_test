import React from 'react'
import Label from './UI/Label';
import {useUsersDataContext} from '../context/UsersDataContext';


const FilterSection = ({data, labelText}) => {
  const {selectedPositionFilters, setFilters} = useUsersDataContext();
  return (
    <div className='single-filter-section-wrapper'>
      <Label labelText={labelText}/>
      {data?.map((position, i) =>
        <div key={i}>
          <input 
          style={{cursor: 'pointer',  transform: 'scale(1.5)'}}
          value={position} 
          type="checkbox"
          checked={selectedPositionFilters.includes(position)}
          onChange={() => setFilters(position)}
          />
          <span style={{marginLeft: '10px'}}>{position}</span>
        </div>   
        )}
    </div>
  )
}

export default FilterSection;