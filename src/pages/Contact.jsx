import React from 'react' 
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTATE-NOS</p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>

        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600 '>NOSSO ESCRITÓRIO</p>
          <p className='text-gray-500'>Rua Fictícia, 123 <br /> Bairro Centro, São Paulo - SP</p>
          <p className='text-gray-500'>Tel: (11) 5555‑1234 <br /> Email: contato@empresa.com.br</p>
          <p className='font-semibold text-lg text-gray-600'>Carreiras na PRESCRIPTO</p>
          <p className='text-gray-500'>Saiba mais sobre nossas equipes e vagas de emprego.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explorar Vagas</button>
        </div>

      </div>

    </div>
  )
}

export default Contact
