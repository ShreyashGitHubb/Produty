'use client';

import { sendEmail } from '@/actions/send-email'
import React from 'react'

function sendingEmail() {
  return (
    <div>
        <button onClick={sendEmail}>click here to send email</button>
    </div>
  )
}

export default sendingEmail