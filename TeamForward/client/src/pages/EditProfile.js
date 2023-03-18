import { useReactiveVar } from '@apollo/client'
import React, { useState } from 'react'
import { userState } from '../GlobalState';

const EditProfile = () => {
  const user = useReactiveVar(userState);
  return (
    <div>
      
    </div>
  )
}

export default EditProfile
