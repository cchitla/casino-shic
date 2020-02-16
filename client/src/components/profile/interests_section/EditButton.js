import React from 'react'

const EditButton = props => {
  return <button 
            type="submit" 
            className="custom-btn btn btn-block rounded-0"
            onClick={props.edit}>
              Edit Interests
        </button>
}

export default EditButton;