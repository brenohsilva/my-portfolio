import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
import { useTranslation } from 'react-i18next';

const About = () => {
  const [t] = useTranslation('global')

  return (
  <section id='about' className='section'>
   <div className='container mx-auto'>
    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
      <motion.div 
      variants={fadeIn('right', 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.3}}
      className='flex-1 bg-about bg-contain bg-no-repeat lg:h-[640px] h-[500px] mix-blend-lighten bg-top'>
      </motion.div>
      <motion.div 
      variants={fadeIn('left', 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.3}}
      className='flex-1'>
        <h2 className='h2 text-2xl lg:text-[32px]'>{t("about.title")}</h2>
        <h3 className='h3 mb-4 text-xl leading-1 lg:text-[26px] leading-normal' >{t("about.subtitle")}</h3>
        <p className='mb-6 text-justify'>{t("about.p")}</p>
        <div className='flex gap-x-8 items-center justify-center'>
          <a href='https://www.linkedin.com/in/brenohsilva/' target='_blank' rel="noopener noreferrer" className='btn btn-lg flex items-center'>{t("about.moreButton")}</a>
          <a href='#work' className='text-gradient btn-link' >{t("about.portfolio")}</a>
        </div>
      </motion.div>
    </div>
   </div>
  </section>
  
)};

export default About;
