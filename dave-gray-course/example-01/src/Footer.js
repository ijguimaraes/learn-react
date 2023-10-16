import React from 'react'

const Footer = ({itensCount}) => {
  const today = new Date();

  return (
    <footer>
        <p>The list have {itensCount}</p>
    </footer>
  )
}

export default Footer
