import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import React from 'react'

function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-3 bg-white shadow-sm border-b border-gray-200 h-20">
      <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">
        Products
      </h1>
      <div className="flex items-center gap-3">
        <SignedOut>
          <SignInButton>
            <button
              className="px-5 py-2 rounded-md border border-gray-300 bg-white text-gray-800 font-medium hover:bg-gray-100 transition shadow-sm"
            >
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button
              className="px-5 py-2 rounded-md"
              style={{
                backgroundColor: '#dadada',
                color: '#222',
                fontWeight: 500,
                boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                border: 'none',
                transition: 'background 0.2s',
              }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#c0c0c0')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = '#dadada')}
            >
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "w-10 h-10",
              },
            }}
          />
        </SignedIn>
      </div>
    </header>
  )
}

export default Header