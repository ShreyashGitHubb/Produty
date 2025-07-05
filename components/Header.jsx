'use client';

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-3 bg-[#9191914b] shadow-sm border-b border-gray-200 h-20">
      <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">
        Products
      </h1>

      <div className="flex items-center gap-4">
        {/* Show navigation only when signed in */}
        <SignedIn>
          <nav className="flex items-center gap-3">
            <Link
              href="/create"
              className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Create
            </Link>
            <Link
              href="/superadmin"
              className="px-4 py-2 rounded-md bg-gray-800 text-white font-medium hover:bg-gray-900 transition"
            >
              Superadmin
            </Link>
          </nav>
        </SignedIn>

        {/* Auth Buttons (when signed out) */}
        <SignedOut>
          <div className="flex items-center gap-3">
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
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = '#c0c0c0')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = '#dadada')
                }
              >
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>

        {/* User Avatar (when signed in) */}
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: 'w-10 h-10',
              },
            }}
          />
        </SignedIn>
      </div>
    </header>
  );
}

export default Header;
