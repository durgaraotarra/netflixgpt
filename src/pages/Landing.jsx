import React from 'react';
import { useSelector } from 'react-redux';

const Landing = () => {
  const user = useSelector((store) => store.user);

  if(user === null) return <h1 className='text-7xl'>Not login in</h1>
  
  return (
    <div className=''>
      <h1>{user.email}</h1>
    </div>
  )
}

export default Landing
