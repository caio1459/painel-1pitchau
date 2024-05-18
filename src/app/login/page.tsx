"use client"
import { SyntheticEvent, useCallback, useRef } from 'react';
import styles from './style.module.css';

const Login = () => {
  const refForm = useRef<any>()

  const submitForm = useCallback((e: SyntheticEvent) => {
    e.preventDefault()
  }, [])

  return (
    <>
      <div className={styles.main} >
        <div className={styles.border}>
          <div className='d-flex flex-column align-items-center'>
            <h1 className='text-primary'>Login</h1>
            <p className='text-secondary'>Preencha seus dados para logar no sistema!</p>
          </div>
          <hr />
          <form className='needs-validation align-items-center' noValidate onSubmit={submitForm} ref={refForm}>
            <div className='col-md-12'>
              <label
                htmlFor='email'
                className='form-label'
              >
                Email
              </label>
              <input
                type='email'
                className='form-control'
                placeholder='Digite seu email:'
                id='email'
                required
              />
              <div className='invalid-feedback'>
                Por favor digite seu email
              </div>
            </div>
            <div className='col-md-12 mt-2'>
              <label
                htmlFor='password'
                className='form-label'
              >
                Senha
              </label>
              <input
                type='password'
                className='form-control'
                placeholder='Digite a sua senha'
                id='password'
                required
              />
              <div className='invalid-feedback'>
                Por favor digite a sua senha
              </div>
            </div>
            <div className='col-md-12 mt-3'>
              <button className='btn btn-primary w-100' type='submit' id='btn'>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login