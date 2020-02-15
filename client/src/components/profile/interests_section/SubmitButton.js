import React from 'react'

const SubmitButton = props => {
  return <button 
            type="submit" 
            className="custom-btn btn btn-block rounded-0 mt-3"
            onClick={props.onClick}>
              Update Interests
        </button>
}

export default SubmitButton;