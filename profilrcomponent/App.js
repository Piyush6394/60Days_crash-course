// src/App.js
import React, { useState, useMemo } from 'react'
import UserProfile from './components/UserProfile'
import './css/App.scss'

const App = () => {
  // Example data, replace this with your actual user data
  const [users] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'avatar1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      avatar: 'avatar2.jpg',
    },
    {
      id: 3,
      name: 'Mark Johnson',
      email: 'mark@example.com',
      avatar: 'avatar3.jpg',
    },
    {
      id: 4,
      name: 'Sarah Lee',
      email: 'sarah@example.com',
      avatar: 'avatar4.jpg',
    },
  ])

  const [searchQuery, setSearchQuery] = useState('')

  // Memoize filtered users to avoid unnecessary re-renders
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [users, searchQuery])

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="app">
      <h1>User Profiles</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search users by name..."
        className="search-input"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {/* Render filtered user profiles */}
      <div className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserProfile key={user.id} user={user} />)
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  )
}

export default App
