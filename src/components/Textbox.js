export const InputTextBox = ({ type = 'text', labelName, placeholderName, idTextBox }) => {
  return (
    <div className='inline-block relative'>
      <input
        type={type}
        id={idTextBox}
        className="inputTextBox"
        placeholder={placeholderName}
        required
      />
      <label htmlFor={idTextBox} className='labelTextBox'>{labelName}</label>
    </div>
  )
}

export const TextArea = ({ labelName }) => {
  return (
    <div className='inline-block relative'>
      <textarea
        id="textArea"
        className="textArea"
        required
      ></textarea>
      <label htmlFor='textArea' className='labelTextArea'>{labelName}</label>
    </div>
  )
}
