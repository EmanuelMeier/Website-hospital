import React, { useState } from 'react'

const Login = () => {

  const [state,setState] = useState('Cadastrar')

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')

  const onSubmitHandler = async (event) => { 
    event.preventDefault()
  }

  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Cadastrar' ? "Criar Conta" : "Entrar"}</p>
        <p>Por favor {state === 'Cadastrar' ? "cadastre-se" : "faça login"} para agendar uma consulta</p>
        {
          state === "Cadastrar" && <div className='w-full'>
          <p>Nome Completo</p>
          <input className='border border-zinc-300 rounded w-full pt-2 mt-1' type="text" onChange={(e)=>setName(e.target.name)} value={name} required/>
        </div>
        }
        
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full pt-2 mt-1' type="email" onChange={(e)=>setEmail(e.target.name)} value={email} required/>
        </div>
        <div className='w-full'>
          <p>Senha</p>
          <input className='border border-zinc-300 rounded w-full pt-2 mt-1' type="password" onChange={(e)=>setPassword(e.target.name)} value={password} required/>
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Cadastrar' ? "Criar Conta" : "Entrar"}</button>
        {
          state === "Cadastrar"
          ? <p>Já tem uma conta? <span onClick={()=>setState('Entrar')} className='text-primary underline cursor-pointer'>Entrar aqui</span></p>
          : <p>Criar uma nova conta? <span onClick={()=>setState('Cadastrar')} className='text-primary underline cursor-pointer'>clique aqui</span></p>
        }
      </div>
    </form>
  )
}

export default Login
