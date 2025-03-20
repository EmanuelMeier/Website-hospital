import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Clínico Geral',
        image: General_physician
    },
    {
        speciality: 'Ginecologista',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologista',
        image: Dermatologist
    },
    {
        speciality: 'Pediatra',
        image: Pediatricians
    },
    {
        speciality: 'Neurologista',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologista',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'Clínico Geral',
        degree: 'MBBS',
        experience: '4 Anos',
        about: 'O Dr. Richard James é um clínico geral comprometido em fornecer cuidados médicos abrangentes, com foco na medicina preventiva, diagnóstico precoce e estratégias de tratamento eficazes.',
        fees: 250, // Em reais
        address: {
            line1: '17ª Rua, Richmond',
            line2: 'Círculo, Anel Viário, Londres'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Ginecologista',
        degree: 'MBBS',
        experience: '3 Anos',
        about: 'A Dra. Emily Larson se dedica à saúde da mulher, oferecendo atendimento personalizado, diagnóstico precoce e tratamento eficaz para garantir o bem-estar de suas pacientes.',
        fees: 300,
        address: {
            line1: '27ª Rua, Richmond',
            line2: 'Círculo, Anel Viário, Londres'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Dermatologista',
        degree: 'MBBS',
        experience: '1 Ano',
        about: 'A Dra. Sarah Patel é especializada no cuidado com a pele, focando na prevenção, diagnóstico e tratamento de doenças dermatológicas para melhorar a qualidade de vida dos pacientes.',
        fees: 150,
        address: {
            line1: '37ª Rua, Richmond',
            line2: 'Círculo, Anel Viário, Londres'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatra',
        degree: 'MBBS',
        experience: '2 Anos',
        about: 'O Dr. Christopher Lee é um pediatra dedicado ao acompanhamento da saúde infantil, garantindo um crescimento saudável e prevenindo doenças desde os primeiros anos de vida.',
        fees: 200,
        address: {
            line1: '47ª Rua, Richmond',
            line2: 'Círculo, Anel Viário, Londres'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologista',
        degree: 'MBBS',
        experience: '4 Anos',
        about: 'A Dra. Jennifer Garcia é neurologista, especializada no diagnóstico e tratamento de distúrbios do sistema nervoso, ajudando seus pacientes a melhorar a qualidade de vida.',
        fees: 250,
        address: {
            line1: '57ª Rua, Richmond',
            line2: 'Círculo, Anel Viário, Londres'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Neurologista',
        degree: 'MBBS',
        experience: '4 Anos',
        about: 'O Dr. Andrew Williams é um neurologista comprometido com o diagnóstico precoce e tratamento de doenças neurológicas, oferecendo suporte para uma vida mais saudável.',
        fees: 250,
        address: {
            line1: '57ª Rua, Richmond',
            line2: 'Círculo, Anel Viário, Londres'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'Clínico Geral',
        degree: 'MBBS',
        experience: '4 Anos',
        about: 'O Dr. Christopher Davis busca proporcionar um atendimento médico completo, focado na prevenção, diagnóstico precoce e tratamento eficaz para seus pacientes.',
        fees: 250,
        address: {
            line1: '17ª Rua, Richmond',
            line2: 'Círculo, Anel Viário, Londres'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Ginecologista',
        degree: 'MBBS',
        experience: '3 Anos',
        about: 'O Dr. Timothy White se dedica à saúde feminina, garantindo atendimento especializado e humanizado para prevenção e tratamento de diversas condições ginecológicas.',
        fees: 300,
        address: {
            line1: '27ª Rua, Richmond',
            line2: 'Círculo, Anel Viário, Londres'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologista',
        degree: 'MBBS',
        experience: '1 Ano',
        about: 'A Dra. Ava Mitchell é especialista no cuidado com a pele, oferecendo diagnóstico e tratamentos eficazes para diversas condições dermatológicas.',
        fees: 150,
        address: {
            line1: '37ª Rua, Richmond',
            line2: 'Círculo, Anel Viário, Londres'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatra',
        degree: 'MBBS',
        experience: '2 Anos',
        about: 'O Dr. Jeffrey King é pediatra e acompanha o desenvolvimento infantil, garantindo cuidados essenciais para a saúde das crianças.',
        fees: 200,
        address: {
            line1: '47ª Rua, Richmond',
            line2: 'Círculo, Anel Viário, Londres'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Gastroenterologista',
        degree: 'MBBS',
        experience: '4 Anos',
        about: 'A Dra. Zoe Kelly é gastroenterologista, especializada no tratamento de doenças do sistema digestivo, garantindo diagnóstico preciso e tratamento eficaz.',
        fees: 250,
        address: {
            line1: '57ª Rua, Richmond',
            line2: 'Círculo, Anel Viário, Londres'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Neurologista',
        degree: 'MBBS',
        experience: '4 Anos',
        about: 'O Dr. Patrick Harris é neurologista, focado no diagnóstico e tratamento de distúrbios do sistema nervoso, ajudando seus pacientes a melhorar sua qualidade de vida.',
        fees: 250,
        address: {
            line1: '57ª Rua, Richmond',
            line2: 'Círculo, Anel Viário, Londres'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'Clínico Geral',
        degree: 'MBBS',
        experience: '4 Anos',
        about: 'A Dra. Chloe Evans se dedica à medicina geral, garantindo atendimento de qualidade com foco na prevenção e tratamento eficaz de doenças.',
        fees: 250,
        address: {
            line1: '17ª Rua, Richmond',
            line2: 'Círculo, Anel Viário, Londres'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Ginecologista',
        degree: 'MBBS',
        experience: '3 Anos',
        about: 'O Dr. Ryan Martinez é ginecologista, especializado na saúde da mulher, proporcionando um atendimento humanizado e qualificado.',
        fees: 300,
        address: {
            line1: '27ª Rua, Richmond',
            line2: 'Círculo, Anel Viário, Londres'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologista',
        degree: 'MBBS',
        experience: '1 Ano',
        about: 'A Dra. Amelia Hill é dermatologista, dedicada ao cuidado com a pele e tratamento de diversas condições dermatológicas.',
        fees: 150,
        address: {
            line1: '37ª Rua, Richmond',
            line2: 'Círculo, Anel Viário, Londres'
        }
    },
];
