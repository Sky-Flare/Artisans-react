type InputType = 'text' | 'password' | 'email'

interface Props {
  value: string
  type: InputType
  name: InputType
  placeholder: string
  className?: string
  onChange: (value: string) => void
}

const Field: React.FC<Props> = ({ value, type, name, placeholder, className, onChange }) => {
  const handleChange = (evt: { target: { value: string } }) => {
    onChange(evt.target.value)
  }

  const inputId = `field-${name}`

  return (
    <div className={className}>
      <label htmlFor={inputId} className='field-label'>
        {placeholder}
      </label>
      <input
        value={value}
        id={inputId}
        type={type}
        className='field-input'
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        required
      />
    </div>
  )
}

export default Field
