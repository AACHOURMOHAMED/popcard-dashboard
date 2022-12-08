import React from 'react'
import PropTypes from 'prop-types'

const Card = (props) => {
    const { children } = props
  return (
    <div className='bg-white rounded-3xl shadow-lg p-4'>
        {children}
    </div>
  )
}

export default Card

Card.propTypes = {
    children: PropTypes.node.isRequired,
}
