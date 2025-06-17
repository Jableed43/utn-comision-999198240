function OperationButton({operation, onClick}) {
  return (
     <button onClick={ () => onClick(operation) } >
          {operation}
        </button>
  )
}

export default OperationButton