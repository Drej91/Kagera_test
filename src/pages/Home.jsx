import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ColumnList from '../components/ColumnList';
import ListLayoutOption from '../components/ListLayoutOption';
import GridList from '../components/GridList';
import UserProfile from '../components/UserProfile';
import {useUsersDataContext} from '../context/UsersDataContext';
import { Layout } from '../utils/layout';

const Home = () => {
  const {selectedLayout, selectedUser, setSelectedUser} = useUsersDataContext();
  return (
    <div className='home-container'>
      <Header/>
      <div style={{display: 'flex'}}>
      <SideBar/>
     {selectedUser ? <UserProfile user={selectedUser} setSelectedUser={setSelectedUser}/> : <div style={{display: 'flex', flexDirection: 'column', flex: 2}}>
      <ListLayoutOption/>
      {selectedLayout === Layout.COLUMN ? <ColumnList/> : <GridList/>}
      </div>}
      </div>
    </div>
  )
}

export default Home