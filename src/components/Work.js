import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
import { useTranslation } from 'react-i18next';

const Work = () => {
  const [t] = useTranslation('global')

  return (
    <section id='work' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          
          <motion.div 
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'> 
            <div className='lg:mb-[180px]'>
              <h2 className='h2 leading-tight'>{t("work.title")} <br/> {t("work.titlep2")}</h2>
              <a href='https://github.com/stars/brenohsilva/lists/my-portfolio' target='_blank' rel="noopener noreferrer" className='btn justify-center items-center px-5 h-11 w-fit text-base hidden cursor-pointer lg:flex' >{t("work.viewbutton")}</a>
            </div>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='first project'/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50' > 
                <a href='https://bcprodutosavalia.vercel.app' target='_blank' rel="noopener noreferrer" className='text-gradient'>Site-Avaliacao</a>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'> 
                <a href='https://github.com/brenohsilva/siteAvaliacao-all.git' target='_blank' rel="noopener noreferrer" className='text-3xl text-white'>TypeScript & NodeJS</a>
              </div>
            </div>
          </motion.div>

          <motion.div 
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-10'>  
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'> 
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='second project'/>

            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50' > 
              <a href='https://recomovies.netlify.app' target='_blank' rel="noopener noreferrer" className='text-gradient'>Recomovies</a>
            </div>
            
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'> 
              <a href='https://github.com/brenohsilva/Recomovies.git' target='_blank' rel="noopener noreferrer" className='text-3xl text-white'>Html, CSS & JavaScript</a>
            </div>
          </div>

          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>              
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='third project'/>

            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50' > 
              <a href='https://brenohsilva.github.io/Password-Validation-Check/' target='_blank' rel="noopener noreferrer" className='text-gradient'>Password Check</a>
            </div>
            
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'> 
              <a href='https://github.com/brenohsilva/Password-Validation-Check.git' target='_blank' rel="noopener noreferrer" className='text-3xl text-white'>JavaScript</a>
            </div>
          </div>
          </motion.div>

        </div>
      </div>
    </section> 
  )}

export default Work;
