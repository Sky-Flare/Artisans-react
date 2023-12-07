import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Field from './Field'
import { Role, useSingInMutation } from '../generated/graphql.ts'

function SignIn() {
  const [singInMutation, { loading, error }] = useSingInMutation({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  const handleInputChange = (
    value: ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    setter(value.target.value)
    setErrors('')
  }

  function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const test = emailRegex.test(email)
    if (!test) {
      setErrors('Email invalide')
      return false
    }
    return true
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!loading && isValidEmail(email)) {
      singInMutation({
        variables: {
          connectUser: {
            email,
            password,
            role: Role.Artisan,
          },
        },
      }).then(async ({ data }) => {
        if (data?.signIn?.accessToken) {
          localStorage.setItem('token', data?.signIn?.accessToken)
        }
      })
    }
  }

  return (
    <div className='flex flex-col h-full justify-center items-center'>
      <form onSubmit={(e) => submit(e)} className='shadow-md rounded-default p-8'>
        <Field
          className='flex flex-col mb-4'
          type='email'
          name='email'
          value={email}
          placeholder='Email'
          onChange={(value) => handleInputChange(value, setEmail)}
        />
        <Field
          className='flex flex-col'
          type='password'
          name='password'
          value={password}
          placeholder='Mot de passe'
          onChange={(value) => handleInputChange(value, setPassword)}
        />
        <button type='submit'>
          Se connecter
          {loading && <FontAwesomeIcon className='ml-4' icon={['fas', 'spinner']} spin />}
        </button>
        {(error || errors) && <div className='text-red-500'>{error?.message ?? errors}</div>}
      </form>
    </div>
  )
}

export default SignIn
