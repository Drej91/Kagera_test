import React from 'react'
import {useUsersDataContext} from '../context/UsersDataContext';
import { Layout } from '../utils/layout';

const ListItem = ({userInfo}) => {
  const {name, surname, profileImage, dateStarted, position, id} = userInfo;
  const {selectedLayout, selectUser} = useUsersDataContext();

  return (
   selectedLayout === Layout.COLUMN ? <div className='list-item-card' onClick={() => {selectUser(id)}}>
       <img alt="profileImage" style={{width: '50px', height: '50px', objectFit: 'contain', borderRadius: '50%'}} src={profileImage}/>
       <div style={{width: '15%', display: 'flex', marginLeft: "20px", marginRight:"25px"}}>
       <p style={{fontWeight: 'bold'}}><span >{name}</span> <span>{surname}</span></p>
       </div>
       <div style={{display: 'flex', width: '70%', justifyContent: 'space-between', paddingLeft: '25px'}}>
       <p>Position: <span>{position}</span></p>
       <p>Date Started: <span style={{fontWeight: 'bold'}}>{dateStarted}</span></p>
       </div>
    </div> : 
    <div className='grid-item-card' onClick={() => {selectUser(id)}}>
       <img alt="profileImage" style={{width: '100px', height: '100px', objectFit: 'contain'}} src={profileImage}/>
        <p style={{color: 'gray'}}>{position}</p>
        <p style={{fontWeight: 'bold'}}><span >{name}</span> <span>{surname}</span></p>
    </div>
  )
}

export default ListItem