import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sesk29j', 'template_mrl1rml', form.current, 'user_qleOqLo1lNSDkawXHPaLy')
        .then((result) => {
            console.log(result.text);
            console.log("message envoyé")
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-semibold text-blueCC'>Nous contacter</h1>
            <p></p>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center text-base">
                <label className='mt-4 font-philosopher'>Name</label>
                <input type="text" name="name" className='w-full text-center  p-2 outline-none rounded-md border border-blueCC focus:border-2 focus:bg-slate-100' />
                <label className='mt-4 font-philosopher'>Email</label>
                <input type="email" name="email" className='w-full text-center p-2 outline-none rounded-md border border-blueCC focus:border-2 focus:bg-slate-100' />
                <label className='mt-4 font-philosopher'>Message</label>
                <textarea name="message" className='w-full  p-2 outline-none rounded-md border border-blueCC focus:border-2 focus:bg-slate-100' />
                <input type="submit" value="envoyer" className='font-philosopher cursor-pointer mt-8 bg-blueCC text-white border-none rounded-lg' />
            </form> 
        </div>

     
    );
  };

export default Contact;
