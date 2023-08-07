import React, { useState } from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  
  const [t] = useTranslation('global')
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [borderColorName, setborderColorName] = useState(true)
  const [borderColorEmail, setborderColorEmail] = useState(true)
  const [borderColorMessage, setborderColorMessage] = useState(true)
  const [hiddendiv, setHiddendiv] = useState(false)
  const [hiddenButton, setHiddenButton] = useState(false)

  const handleNameChange = (event) => {
    
    if (name) {
      setborderColorName(true)
      setName(event.target.value)
      
      
    } else {
      setborderColorName(false)
      setName(event.target.value)
      
    }
  }

  const handleEmailChange = (event) => {

    if (email) {
      setborderColorEmail(true)
      setEmail(event.target.value)
      
      
    } else {
      setborderColorEmail(false)
      setEmail(event.target.value)
      
    }

  }

  const handleMessageChange = (event) => {

    if (message) {
      setborderColorMessage(true)
      setMessage(event.target.value)
      
      
    } else {
      setborderColorMessage(false)
      setMessage(event.target.value)
      
    }
  
  
  }

  function sendEmail(event){

    event.preventDefault()
    
    if (name === ''){
      setborderColorName(false)
    }
    if (email === ''){
      setborderColorEmail(false)
    }
    
    if (message === ''){
      setborderColorMessage(false)
    }
    
    
    if (name && email && message) {
      setHiddenButton(true)
      setborderColorName(true)
      setborderColorEmail(true)
      setborderColorMessage(true)

      const templateParams = {
        from_name: name,
        message: message,
        email: email
      }

      emailjs.send("service_8jns666", "template_exx5cwn", templateParams, "hdEaKoYGIC1_cK917", )
      .then((response) => {
        console.log("Email enviado", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
        setHiddendiv(true)
      
      }
      )

        

  } else {
      return
  }
}
  
  return (
    <section id='contact' className='py-16 section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div 
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.2}}
          className='flex-1'>
            <div>
              <h4 className='text-xl uppercase font-medium mb-2 tracking-wide'>{t("contact.title")}</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>{t("contact.subtitle")} <br/>{t("contact.subtitletwo")}  </h2>
            </div>
          </motion.div>
          <motion.form
          onSubmit={sendEmail}
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.2}}
          className='flex-1 border rounded-2xl flex flex-col pb-24 p-6 '>
            <motion.div 
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.2}}
              className={`justify-center items-center mx-auto my-6 ${hiddendiv ? 'flex' : 'hidden'}`}>
              <h1 className='text-[50px] leading-none text-center'>{t("contact.thanks")}</h1>
            </motion.div>
            <div className={`flex-col w-full gap-y-6 items-start flex-1 ${hiddendiv ? 'hidden' : 'flex'}`}>
              <input className={`bg-transparent py-3 outline-none w-full placeholder:text-white border-b focus:text-cyan-500 transition-all ${borderColorName ? 'border-b-white' : 'border-b-red-600'}`} 
              type='text' value={name} placeholder={t("contact.inputName")} onChange={handleNameChange} />

              <input className={`bg-transparent py-3 outline-none w-full placeholder:text-white border-b focus:text-cyan-500 transition-all ${borderColorEmail ? 'border-b-white' : 'border-b-red-600'}`} 
              type='text' value={email} placeholder={t("contact.inputEmail")} onChange={handleEmailChange} />

              <textarea className={`bg-transparent py-3 outline-none w-full placeholder:text-white border-b focus:text-cyan-500 transition-all resize-none mb-12 ${borderColorMessage ? 'border-b-white' : 'border-b-red-600'}`} 
              placeholder={t("contact.inputMessage")} value={message} onChange={handleMessageChange} ></textarea>
              <button className={`btn btn-lg items-center ${hiddenButton ? 'hidden' : 'flex'}`}>{t("contact.formButton")}</button>
              
              <button className={`btn btn-lg flex items-center transition ease-in-out delay-150 ${hiddenButton ? 'flex' : 'hidden'}`} disabled>
                <svg className='mr-3 h-5 w-5 animate-spin text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className='opacity-25' cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" ></circle>
                  <path className='opacity-75' fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span >{t("contact.sending")}</span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
    
    
)}

export default Contact;
