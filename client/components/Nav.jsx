import React from 'react'

const Nav = () => {
  return(
    <div>
      <div>Home</div>
      <div className={isAuthenticated ? 'show' : 'hide'}>Profile</div>
      <div className={isAuthenticated ? 'show' : 'hide'}>Find Recipe</div>
      <div className={isAuthenticated ? 'hide' : 'show'}>Login</div>
      <div className={isAuthenticated ? 'show' : 'hide'}>Logout</div>
    </div>
  )
}
