import React from 'react'

const SubmitButton = props => {
  return <button
            className="custom-btn btn btn-block rounded-0"
            type="submit"
            onClick={(e) => props.onClick(e)}
          >Submit</button> 
}

export default SubmitButton;

