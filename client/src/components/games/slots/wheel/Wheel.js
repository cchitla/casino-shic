import React from 'react'
import './Wheel.css'
import PropTypes from 'prop-types'

const Wheel = ({ image }) => <img src={image} alt={image} data-testid='wheel' className="img" />

Wheel.propTypes = {
  image: PropTypes.string.isRequired
}

export default Wheel
