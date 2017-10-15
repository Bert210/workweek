import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

const Button = ({children, onClick}) => {
  return (
    <div className="btn" onClick={(e) => {onClick(e)}}>
      {children}
    </div>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Button
