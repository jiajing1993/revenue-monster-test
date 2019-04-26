import React from 'react'

const headStyle = {
  margin: '0px',
  fontSize: '1rem',
  lineHeight: '1rem',
  color: 'rgba(255, 255, 255, 0.6)',
}

const ansStyle = {
  margin: '0px',
  fontSize: '1.2rem',
  lineHeight: '1rem',
  fontWeight: 'bold',
  color: 'rgba(255, 255, 255. 1)',
  maxHeight: '100px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: '3',
  WebkitLineClamp: 'vertical'
}

const HeadAndAns = (props) => {
  return (
    <div style={{marginBottom: "15px"}}>
      <p style={headStyle}>{ props.head }</p>
      <p style={ansStyle}>{ props.ans }</p>
    </div>
  )
}

export default HeadAndAns