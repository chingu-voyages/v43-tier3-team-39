import { useReactiveVar } from '@apollo/client'
import React from 'react'
import { userState } from '../GlobalState'

const CreateProfile = () => {
  const user = useReactiveVar(userState);
  return (
    <div>
      
    </div>
  )
}

export default CreateProfile
