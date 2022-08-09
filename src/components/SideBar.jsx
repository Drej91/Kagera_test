import React from 'react'
import {useUsersDataContext} from '../context/UsersDataContext';
import FiltersList from './FiltersList';

const SideBar = () => {
  const {setSearchTerm, applyFilters, resetFilters, selectedUser} = useUsersDataContext();
  return (
    !selectedUser&&<div className='side-bar-container'>
    <div className='side-bar-search-box-wrapper'>
        <input style={{height: '35px', width: '100%', borderRadius: '5px', paddingLeft: '5px'}} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search for users' type="text"/>
      </div> 
      <div className='buttons-wrapper'>
          <button style={{paddingLeft: '10px', paddingRight: '10px', paddingTop: "5px", paddingBottom: '5px'}} type='button' onClick={() => applyFilters()}>Apply filters</button>
          <button style={{paddingLeft: '10px', paddingRight: '10px', paddingTop: "5px", paddingBottom: '5px'}} type='button' onClick={() => resetFilters()}>Reset filter</button>
        </div> 
        <div className='filters-wrapper'>
          <FiltersList/>
        </div>
    </div>
  )
}

export default SideBar