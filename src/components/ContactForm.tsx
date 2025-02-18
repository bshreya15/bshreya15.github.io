import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

function ContactForm() {
  return (
      <form action="" className='flex flex-col gap-4 w-[80%]'>
        <input type="email" className='h-[3rem] form-style' placeholder='Your email id' />
        <textarea name="" id="" className='h-[12rem] lg:h-[20rem] form-style' placeholder='Your message'/>
        <div>
        <button type='submit' className='flex flex-row form-btn'>Submit <FaPaperPlane/> </button>
        </div>
      </form>
  )
}

export default ContactForm
