import { ChangeEvent } from 'react'

export type InputType = 'text' | 'password' | 'email' | 'number'

interface Props {
  value: string | number
  type: InputType
  name: string
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
