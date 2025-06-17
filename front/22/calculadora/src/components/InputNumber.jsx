function InputNumber({ label, value, onChange, labelId }) {
  return (
    <div>
          <label htmlFor={labelId} >{label}</label>
          <input value={value} id={labelId} type="number"
            onChange={onChange} />
    </div>
  )
}

export default InputNumber