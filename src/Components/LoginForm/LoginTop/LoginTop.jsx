import React from 'react'
import '../LoginTop/LoginTop.css'


const LoginTop = ({submittedData}) => {
  return (
    <div className='top'>
      {submittedData && (
            <div className='submited-data'>
              <h3>Your Response:</h3>
              <p><strong>Name:</strong> {submittedData.name}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Phone Number:</strong> {submittedData.number}</p>
            </div>
        )}
    </div>
  )
}

export default LoginTop
