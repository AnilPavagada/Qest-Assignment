import React from 'react'
import { assets } from '../assets/assets'
import ContactForm from './ContactFrom'
import Table from '../Components/Table'

const Contact = () => {
  return (
    <section className="relative bg-[#FAFAFA] text-gray-800 py-16 px-8">
    <div className="relative max-w-4xl mx-auto text-center">
    <div>
        <div className="inline-flex items-center bg-white text-black px-4 py-2 rounded-full shadow-md mb-8">
                <span className="font-bold text-sm">AI<br/> <img src={assets.RMax} alt="" /></span>
                <span className="ml-2 text-gray-600 text-sm">
                  Curious? Let AI Uncover the Answers!
                </span>
                </div>
              
                <ContactForm/>
                <Table/>
    </div>
    </div>
    </section>
  )
}

export default Contact
