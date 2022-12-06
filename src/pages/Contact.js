import React from 'react'
import { SendButton } from '../components/Button'
import { InputTextBox, TextArea } from '../components/Textbox'

const Contact = () => {
  return (
    <section className='h-full py-28'>
      <div className='container mx-auto text-center'>
        {/* title */}
        <h1 className='text-[30px] md:text-[50px] leading-[1.1] font-bold mb-4'>
          CONTACT US
        </h1>
        <form className='flex flex-col items-center justify-center gap-8 mt-16'>
          <InputTextBox labelName='Your Name' placeholderName='Enter Your Name' idTextBox='name' />
          <InputTextBox labelName='Your Email' placeholderName='Enter Your Email' idTextBox='email' />
          <TextArea labelName='Your Message' />
          <SendButton />
        </form>
      </div>
    </section>
  )
}

export default Contact