// src/components/UserProfile.js
import React from 'react'
import '../css/UserProfile.scss'
import debounce from 'lodash.debounce'

const handleSearchChange = debounce((event) => {
  setSearchQuery(event.target.value)
}, 300)


const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <img src={user.avatar} alt={`${user.name}'s avatar`} className="avatar" />
      <div className="user-details">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  )
}

export default UserProfile
