import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';

const UserProfile = ({user, setSelectedUser}) => {
  const {name, surname, position, profileImage, dateStarted, biography} = user;
  return (
    <div className='user-profile-wrapper' onClick={() => setSelectedUser(null)}>
      <AiOutlineClose style={{position: 'absolute', right: '10px', cursor: 'pointer'}} size={40}/>
      <div style={{display: 'flex'}}>
        <div className='user-profile-image-box'>
          <img alt='profileImage' style={{width: "250px", height: '200px'}} src={profileImage}/>
        </div>
        <div className='basic-info-user-profile-wrapper'>
        <h2 style={{fontWeight: 'bold'}}><span>{name}</span> <span>{surname}</span></h2>
        <p>Position: {position}</p>
        <p>Starded to work: {dateStarted}</p>
        </div>
        </div>
        <div className='other-info'>
          <h2>Biography:</h2>
          <p style={{textAlign: 'start'}}>{biography}</p>
        </div>
    </div>
  )
}

export default UserProfile