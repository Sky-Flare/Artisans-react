import { ChangeEvent } from 'react'

type InputType = 'text' | 'password' | 'email'

interface Props {
  value: string
  type: InputType
  name: InputType
  placeholder: string
  className?: string
  onChange: (value: ChangeEvent<HTMLInputElement>) => void
}

const Field: React.FC<Props> = ({ value, type, name, placeholder, className, onChange }) => {
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
        onChange={onChange}
        required
      />
    </div>
  )
}

export default Field
