const Button = (props) => {
  const {onClick, text} = props
  return (
      <div style={styles.container} onClick={onClick}>
          {text}
      </div>
  )
}

const styles = {
  container: {
      border: '2px solid #88e0c6',
      background: '#88e0c6',
      color:'white',
      margin:'4px',
      padding:'15px',
      borderRadius:'5px',
      cursor: 'pointer',
      width:'150px'
  }
}

export default Button
