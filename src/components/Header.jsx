import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row items-center bg-primary rounded-lg px-6 md:px-12 lg:px-20 py-10'>
      
      {/* ------------ Lado Esquerdo ------------ */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 text-center md:text-left'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-snug'>
          Agende uma Consulta <br /> Com Médicos de Confiança
        </p>
        <div className='flex flex-col md:flex-row items-center gap-4 text-white text-sm font-light'> 
          <img className='w-24 md:w-28' src={assets.group_profiles} alt=""/>
          <p className='max-w-md'>Navegue facilmente por nossa extensa lista de médicos de confiança e agende sua consulta sem complicações.</p>
        </div>
        <a href="#speciality" className='flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-full text-gray-600 text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-md'>
          Agendar consulta <img className='w-4' src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* ------------ Lado Direito ------------ */}
      <div className='md:w-1/2 flex justify-center mt-8 md:mt-0'>
        <img 
          className='w-full max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-none' 
          src={assets.header_img} 
          alt="" 
        />
      </div>
    </div>
  )
}

export default Header
