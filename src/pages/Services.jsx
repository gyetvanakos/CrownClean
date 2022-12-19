import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Interior from '../components/Interior'
import Exterior from '../components/Exterior'
import cclogo from '../assets/logo.svg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Services() {
  return (
    <div className="bg-[#505050] flex flex-col justify-center items-center min-h-screen w-full">
      <div className="box-content flex flex-col justify-center items-center bg-[#505050] w-full">
      <section className="w-[100%] h-1/3 md:w-[50%] ">
      <div className="pt-8 pb-8 w-full flex flex-col justify-center items-center">
            <img src={cclogo} className="h-10 w-full" alt="logo" />
            <h1 className='text-white'>
              SERVICES
            </h1>
            <p className='font-light text-center text-gray-500 dark:text-white sm:text-xl w-4/5'>
            Learn more about our services 
            </p>
        </div>
      </section>
    </div>
      <Interior/>
      <Exterior/>
    </div>
  );
}
