import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
         {/* -------------- Seção Esquerda --------------- */}
         <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In tempora quos quidem temporibus amet at incidunt laboriosam veritatis inventore voluptatibus nostrum, ab esse repellendus omnis.</p>
         </div>
         {/* -------------- Seção Central --------------- */}
         <div>
            <p className='text-xl font-medium mb-5'>EMPRESA</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li>Início</li>
              <li>Sobre Nós</li>
              <li>Fale Conosco</li>
              <li>Política de Privacidade</li>
            </ul>
         </div>
         {/* -------------- Seção Direita --------------- */}
         <div>
            <p className='text-xl font-medium mb-5'>ENTRE EM CONTATO</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li>(45)99999-9999</li>
              <li>greatStack@gmail.com</li>
            </ul>
         </div>
      </div>
      {/* --------- Texto de Direitos Autorais --------- */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ Greatstack.dev - Todos os Direitos Reservados.</p>
      </div>
    </div>
  )
}

export default Footer
