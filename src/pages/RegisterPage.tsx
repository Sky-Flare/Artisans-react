import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormEvent, useState } from 'react'
import { useSignUpMutation } from '../generated/graphql.ts'
import Field from '../components/Field.tsx'
import { setToken } from '../stores/user.ts'
import { useAppDispatch } from '../setup/hooks.ts'

export const RegisterPage = () => {
  const [signUpMutation, { loading, error }] = useSignUpMutation({})
  const dispatch = useAppDispatch()

  const [formState, setFormState] = useState({
    address: '',
    city: '',
    zipCode: '',
    email: '',
    firstName: '',
    lastName: '',
    sirenNumber: '',
    password: '',
    passwordVerify: '',
    errors: [],
  } as {
    address: string
    city: string
    zipCode: string
    email: string
    firstName: string
    lastName: string
    sirenNumber: string
    password: string
    passwordVerify: string
    errors: string[]
  })

  const handleInputChange = (name: string, value: string) => {
    setFormState((prevState) => ({ ...prevState, [name]: value, errors: [] }))
    if (name === 'password') {
      isStrongPassword(value)
    }
  }

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValid = emailRegex.test(email)
    if (!isValid) {
      const prevState = { ...formState, errors: ['Email invalide'] }
      setFormState(prevState)
    }
    return isValid
  }
  function missingPasswordTypes(password: string): string[] {
    const missingTypes = []

    if (!/(?=.*[a-z])/.test(password)) {
      missingTypes.push('minuscule')
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      missingTypes.push('majuscule')
    }

    if (!/(?=.*\d)/.test(password)) {
      missingTypes.push('chiffre')
    }

    if (!/(?=.*[\W_])/.test(password)) {
      missingTypes.push('caractère spécial')
    }

    return missingTypes
  }
  function isStrongPassword(psw: string): boolean {
    const missingTypes = missingPasswordTypes(psw)
    const isLengthValid = psw.length >= 8
    if (missingTypes.length > 0 || !isLengthValid) {
      const errorMessages: string[] = []
      if (!isLengthValid) {
        errorMessages.push('Le mot de passe doit avoir au moins 8 caractères')
      }
      if (missingTypes.length > 0) {
        errorMessages.push(`Ajoutez ${missingTypes.join(', ')} à votre mot de passe`)
      }

      setFormState((prevState) => ({
        ...prevState,
        errors: errorMessages,
      }))

      return false
    }
    // Exige au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
    return strongPasswordRegex.test(psw)
  }

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { password, passwordVerify, email, ...formData } = formState

    if (password !== passwordVerify) {
      setFormState((prevState) => ({
        ...prevState,
        errors: ['Les mots de passe ne sont pas identiques'],
      }))
      return
    }

    if (!loading && isValidEmail(email) && isStrongPassword(password)) {
      signUpMutation({
        variables: {
          createArtisanInput: {
            address: formData.address,
            city: formData.city,
            zipCode: parseInt(formData.zipCode),
            firstName: formData.firstName,
            lastName: formData.lastName,
            sirenNumber: formData.sirenNumber,
            email: email,
            password: password,
          },
        },
      }).then(async ({ data }) => {
        if (data?.signUpArtisan?.accessToken) {
          dispatch(setToken(data.signUpArtisan.accessToken))
          localStorage.setItem('token', data?.signUpArtisan?.accessToken)
        }
      })
    }
  }

  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <form onSubmit={(e) => submit(e)} className='rounded-default p-8 shadow-md'>
        {Object.entries(formState)
          .filter((fs) => fs[0] !== 'errors')
          .map(([name, value]) => (
            <Field
              key={name}
              className='mb-4 flex flex-col'
              type={name.includes('password') ? 'password' : 'text'}
              name={name}
              value={value as string}
              placeholder={name === 'passwordVerify' ? 'Confirmer le mot de passe' : name}
              onChange={(e) => handleInputChange(name, e.target.value)}
            />
          ))}
        <button type='submit'>
          S&apos;inscrire
          {loading && <FontAwesomeIcon className='ml-4' icon={['fas', 'spinner']} spin />}
        </button>
        {formState.errors.length > 0 && (
          <div className='text-red-500'>{formState.errors.join(', ')}</div>
        )}
        {error && <div className='text-red-500'>{error.message}</div>}
      </form>
    </div>
  )
}
