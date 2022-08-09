import React from 'react'
import ListItem from './ListItem';
import {useUsersDataContext} from '../context/UsersDataContext';


const ColumnList = () => {
  const {filtered} = useUsersDataContext();
  return (
    <div className='column-list-wrapper'>
    {filtered.length ? filtered.map((user) => {
     return <ListItem key={user.id} userInfo={user}/> 
    })
    : 
    <div>No data...</div>} 
    </div>
  )
}

export default ColumnList;