import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll'


const Banner = () => {

  const [t, i18n] = useTranslation('global')

  return (
    <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
      <div className='container mx-auto'>
        <div className='items-center justify-center '>
          <div className='flex-1 text-center font-secondary'>

            <motion.h1 
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='text-[55px] font-bold leading-[0.8] lg:text-[100px]'
            >BRENO <span>SILVA</span>
            </motion.h1>

            <motion.div 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className={`mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] ${i18n.language === 'en' ? 'visible' : 'hidden'}`}>
              <span className=''>FullStack </span>
              <TypeAnimation sequence={['Developer', 2000, 'in training', 2000,]}
              speed={30} wrapper='span' repeat={Infinity}/>
            </motion.div>

            <motion.div 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className={`mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] ${i18n.language === 'en' ? 'hidden' : 'visible'}`}>
              <span className=''>Desenvolvedor </span>
              <TypeAnimation sequence={['FullStack', 2000, 'em formação', 2000,]}
              speed={50} wrapper='span' repeat={Infinity}/>
            </motion.div>

            <motion.p 
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className=' text-[24px] text-white flex items-center justify-center mb-8 max-w-lg mx-auto'
            >{t("banner.phrase")}</motion.p>

            <motion.div 
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto'>
              <Link to='contact' className='btn btn-lg flex items-center cursor-pointer'>{t("banner.buttonTittle")}</Link>
              <a href='#work' className='text-gradient btn-link'>{t("banner.portfolio")}</a>
            </motion.div>

              <motion.div 
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto '>
                <a href='https://github.com/brenohsilva/' target='_blank' rel="noopener noreferrer">
                  <FaGithub/>
                </a>
                <a href='https://www.linkedin.com/in/brenohsilva/' target='_blank' rel="noopener noreferrer">
                  <FaLinkedin/>
                </a>
              </motion.div>
          </div>
        </div>
      </div>
    </section>
    
  )}

export default Banner;
