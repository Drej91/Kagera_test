import React from 'react'
import {BiListUl, BiGridHorizontal} from 'react-icons/bi';
import {useUsersDataContext} from '../context/UsersDataContext';
import { Layout } from '../utils/layout';


const ListLayoutOption = () => {
  const {setSelectedLayout, selectedLayout} = useUsersDataContext();

  return (
    <div className='list-layout-wrapper'>
      <div className='list-layout-icons-wrapper'>
        <div className={`icon-wrapper ${selectedLayout === Layout.COLUMN ? 'icon-selected' : ''}`}><BiListUl size={30} onClick={() => setSelectedLayout(Layout.COLUMN)}/></div>
        <div className={`icon-wrapper ${selectedLayout === Layout.GRID ? 'icon-selected' : ''}`}><BiGridHorizontal size={30} onClick={() => setSelectedLayout(Layout.GRID)}/></div> 
      </div>
    </div>
  )
}

export default ListLayoutOption