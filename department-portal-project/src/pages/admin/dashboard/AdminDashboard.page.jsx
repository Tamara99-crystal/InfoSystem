import React from 'react'
import { Link} from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div className='admin-container'>
      <p>Click on any of the links below to handles posts and announcements/events/news</p>
      <button><Link>Click to add</Link></button>
      <button><Link>Click to remove</Link></button>
      <button><Link>Click to update</Link></button>
      
    </div>
  )
}

export default AdminDashboard
