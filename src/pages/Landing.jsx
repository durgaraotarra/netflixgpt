import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../features/userSlice";
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
          })
        );
          navigate('/')
      } else {
        dispatch(removeUser);
      }
    });
  }, []);

  if(user === null) return <h1 className='text-7xl'>Not login in</h1>
  
  return (
    <div className=''>
      <h1>{user.email}</h1>
    </div>
  )
}

export default Landing
