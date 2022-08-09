import React from 'react'
import {useUsersDataContext} from '../context/UsersDataContext';
import ListItem from './ListItem';
import { Layout } from '../utils/layout';


const GridList = () => {
  const {filtered, selectedLayout} = useUsersDataContext();

  return (
    <div className='grid-list-wrapper'>
      {filtered && selectedLayout === Layout.GRID ? filtered.map((user) => {
          return <ListItem key={user.id} userInfo={user}/> 
    })
    : 
      <div>No data...</div>}      
    </div>
  )
}

export default GridList;