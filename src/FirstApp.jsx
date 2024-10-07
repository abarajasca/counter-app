import React from 'react'
import PropTypes from 'prop-types';

export default function FirstApp( { title }  ) {

    console.log( title );

    const newMessage = {
      message:  'Hola World',
      title: 'hola'
    }

  return (
    <div>
      <h2>First App</h2>
      <h1>{ title } </h1>
      <h3>{ JSON.stringify( newMessage ) } </h3>
    </div>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo'    
}