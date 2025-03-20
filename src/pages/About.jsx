import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>SOBRE <span className='text-gray-700 font-medium'>NÓS</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Bem-vindo ao Prescripto, seu parceiro confiável para gerenciar suas necessidades de saúde de maneira conveniente e eficiente. No Prescripto, entendemos os desafios que as pessoas enfrentam ao agendar consultas médicas e gerenciar seus registros de saúde.</p>
          <p>O Prescripto está comprometido com a excelência em tecnologia de saúde. Continuamos a melhorar nossa plataforma, integrando os avanços mais recentes para aprimorar a experiência do usuário e oferecer um serviço superior. Seja para agendar sua primeira consulta ou gerenciar cuidados contínuos, o Prescripto está aqui para apoiar você em cada etapa do caminho.</p>
          <b className='text-gray-800'>Nossa Visão</b>
          <p>A nossa visão no Prescripto é criar uma experiência de saúde sem interrupções para cada usuário. Nosso objetivo é diminuir a distância entre pacientes e prestadores de serviços de saúde, facilitando o acesso ao cuidado de que você precisa, quando precisar.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>POR QUE <span className='text-gray-700 font-semibold'>NOS ESCOLHER</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFICIÊNCIA:</b>
          <p>Agendamento de consultas simplificado para se adaptar ao seu estilo de vida ocupado.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>COMODIDADE:</b>
          <p>Acesso a uma rede de profissionais de saúde confiáveis em sua região.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZAÇÃO:</b>
          <p>Recomendações e lembretes personalizados para ajudar você a se manter no controle da sua saúde.</p>
        </div>
      </div>
      
    </div>
  )
}

export default About
