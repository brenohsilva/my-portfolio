import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { TbBrandTypescript } from 'react-icons/tb'
import { SiTailwindcss } from 'react-icons/si'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';
import { useTranslation } from 'react-i18next';


const Services = () => {
  const [t] = useTranslation('global')

  const technologies = [
    { 
      name: 'ReactJs',
      description: t("services.reactText"),
      icone: <FaReact/>,
      link: 'https://react.dev'
      
    },
    { 
      name: 'TypeScript',
      description:t("services.typeScriptText"),
      icone: <TbBrandTypescript/>,
      link: 'https://www.typescriptlang.org',
    },
    { 
      name: 'TailwindCSS',
      description:t("services.tailwindText"),
      icone: <SiTailwindcss/>,
      link: 'https://tailwindcss.com',
    },
    { 
      name: 'NodeJs',
      description:t("services.nodeText"),
      icone: <FaNodeJs/>,
      link: 'https://nodejs.org/en/about',
    },
  ]

  return (
    <section id='services' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          < motion.div 
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat  mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 mb-6' >{t("services.title")}</h2>
            <h4 className='h3 max-w-[325px] mb-16'>{t("services.subtitle")}</h4>
          </motion.div>
          <motion.div 
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            <div>
              {technologies.map((tec, index) => {
                const {name, description, icone, link} = tec;
                return  (
                  <div key={index} className='flex border-b border-white/20 lg:h-[146px] h-[160px] mb-[38px]' >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight text-justify'> {description}</p>
                    </div>
                    <div>
                      <a href={link} className='btn w-9 h-9 mb-[42px] flex justify-center items-center text-xl'>{icone}</a>
                    </div>  
                  </div>
                  );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    
  )}

export default Services;
