import React from 'react'

const SubmitButton = props => {
  return <button 
  type="submit" 
  className="custom-btn  
  btn btn-block rounded-0"
  onClick={(e) => props.handleFormSubmit(e)}>
     Submit
  </button>
}

export default SubmitButton;

