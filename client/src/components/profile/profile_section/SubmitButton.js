import React from 'react'

const SubmitButton = props => {
  return <button 
            type="submit" 
            className="custom-btn btn btn-block rounded-0"
            onClick={props.onClick}>
              Update Profile
        </button>
}

export default SubmitButton;