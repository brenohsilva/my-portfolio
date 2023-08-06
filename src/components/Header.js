import React, { useState } from 'react';
import Logo from '../assets/logo.svg'
import { useTranslation } from 'react-i18next';


const Header = () => {
  const CVToDownload = 'https://drive.google.com/uc?export=download&id=1NQExPb1gIAmXFSznyu7LcKHg1vLyKn4F'
  const [download, setdownload] = useState('')

  const [t, i18n] = useTranslation('global')
  
  const handleLanguageToggle = () => {
    const newLanguage = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLanguage)
  }


  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a  href='#home'>
          <img className='w-4/5 lg:w-full' src={Logo} alt=''/>
        </a>
        <div className='flex gap-8 items-center'>
        <button onClick={() => setdownload(CVToDownload)} className='btn justify-center items-center text-xs px-5 h-11 hidden cursor-pointer lg:flex'>{t("header.messageButton")}</button>
        <iframe title='cv' className='hidden' src={download}></iframe>
          <div className='flex gap-4 items-center'>
            <label htmlFor='check' className='bg-gray-100 cursor-pointer relative w-16 h-8 rounded-full'>
              <input type='checkbox' id='check' onClick={handleLanguageToggle} className='sr-only peer'/>
              <span className='w-2/5 h-4/5 bg-blue-400 absolute rounded-full left-1 top-1 peer-checked:bg-blue-900 peer-checked:left-9 transition-all duration-500'></span>
            </label>
            <p>BR-US</p>
          </div>
        </div>
      </div>
    </div>
  </header>
  
  
  )};

export default Header;
