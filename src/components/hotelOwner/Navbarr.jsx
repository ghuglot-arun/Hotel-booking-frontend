import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react'
import '../../css/Navbarr.css'

const Navbarr = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo-wrap">
          <img src={assets.logo} alt="logo" className="logo" />
        </Link>

        <div className="nav-actions">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
        </div>
      </div>
    </nav>
  )
}

export default Navbarr
