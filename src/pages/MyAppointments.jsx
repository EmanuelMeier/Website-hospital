import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {

  const { doctors, currencySymbol } = useContext(AppContext);

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>Meus agendamentos</p>
      <div>
       {doctors.slice(0,3).map((item, index) => (
        <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
          <div>
            <img className='w-32 bg-indigo-50' src={item.image} alt="" />
          </div>
          <div className='flex-1 text-sm text-zinc-600'>
            <p className='text-neutral-800 font-semibold'>{item.name}</p>
            <p>{item.speciality}</p>
            <p className='text-zinc-700 font-medium mt-1'>Endereço:</p>
            <p className='text-xs'>Rua Fictícia, 123</p>
            <p className='text-xs'>Bairro Centro, São Paulo - SP</p>
            <p className="text-xs mt-1">
            <span className="text-sm text-neutral-700 font-medium">Data & Hora:</span>  
            <span className="text-sm text-neutral-500"> 25, Julho, 2024 | 20:30</span>
            </p>
          </div>
          <div></div>
          <div className='flex flex-col gap-2 justify-end'>
            <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pagar Online</button>
            <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancelar Agendamento</button>
          </div>
        </div>
       ))}
      </div>
    </div>
  )
}

export default MyAppointments;
