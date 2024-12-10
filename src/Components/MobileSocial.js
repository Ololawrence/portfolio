import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from 'react-icons/ai';

const MobileSocial = () => {
    return (
        <section className='block lg:hidden md:hidden mb-16'>
            <div className='flex gap-x-6'>
                <a className='text-3xl hover:text-primary' href="www.linkedin.com/in/olorunwalawrence" target='_blank' rel="noreferrer"><AiFillLinkedin /></a>
                <a className='text-3xl hover:text-primary' href="https://github.com/Ololawrence" target='_blank' rel="noreferrer"><AiFillGithub /></a>
            </div>
        </section>
    );
};

export default MobileSocial;