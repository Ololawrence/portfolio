import React from 'react';
import professionalPhoto from '../../assets/images/preview.png';
import { BiRightArrow } from 'react-icons/bi';
import MobileSocial from '../../Components/MobileSocial';

const About = () => {
    return (
        <section className='mb-24' id='about'>
            <div className='flex items-center gap-6'>
                <h3 className='lg:text-3xl md:text-3xl text-2xl text-accent font-bold'>About Me </h3>
                <hr className='bg-[#233554] lg:w-80 md:w-64 w-40 h-0.5'></hr>
            </div>

            <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center md:items-start lg:items-start gap-y-8'>
                <div className='mt-12 text-justify lg:w-7/12 md:w-6/12 w-full'>
                    <p>
                    Innovative Software Engineer offering experience in frontend software development lifecycle – from concept to
delivery of the next-generation applications and customizable solutions. Experienced in building mobile-first UI/UX
web, and mobile first applications with world-class standards that meet modern-day user requirements. Excellent
troubleshooting skills – able to analyze, code, and engineer well-researched, cost-effective and responsive solutions.                    </p>

                    <p className='my-5'>
                        Fast-forward to today, and I’ve had the privilege of working at an My MedicalHUB International Ltd., as a Frontend Developer. My main focus these days is building accessible, inclusive products and digital experiences using MERN Stack.
                    </p>

                    <p>
                        So far, I've built some exciting full stack project.
                    </p>

                    <p className='my-5'>
                        Here are a few technologies I’ve been working with recently:
                    </p>

                    <div className='grid grid-cols-2 gap-2 w-96 mb-10 md:mb-0 lg:mb-0'>
                        <small className='flex items-center gap-x-3'><BiRightArrow className='text-primary' /> JavaScript (ES6+)</small>
                        <small className='flex items-center gap-x-3'><BiRightArrow className='text-primary' />React JS</small>
                        <small className='flex items-center gap-x-3'><BiRightArrow className='text-primary' />React Hooks</small>
                        <small className='flex items-center gap-x-3'><BiRightArrow className='text-primary' />Redux</small>
                        <small className='flex items-center gap-x-3'><BiRightArrow className='text-primary' />nextJs</small>
                        <small className='flex items-center gap-x-3'><BiRightArrow className='text-primary' />Git</small>
                        <small className='flex items-center gap-x-3'><BiRightArrow className='text-primary' />Node.js</small>
                        <small className='flex items-center gap-x-3'><BiRightArrow className='text-primary' />Express.js</small>
                        <small className='flex items-center gap-x-3'><BiRightArrow className='text-primary' />Tailwind CSS</small>
                        <small className='flex items-center gap-x-3'><BiRightArrow className='text-primary' />BootStrap</small>
                    </div>

                    <MobileSocial />
                </div>

                <div className="w-64 md:w-64 lg:w-94 rounded-lg relative mt-0 md:mt-16 lg:mt-16">
                    <span className="absolute inset-0 border-2 border-primary border-solid rounded-lg"></span>

                    <div
                        className="transition-transform transform bg-accent -translate-x-5 -translate-y-5 rounded-lg"
                    >
                        <img src={professionalPhoto} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;