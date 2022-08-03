import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from "react-hook-form";



interface IFormInput {
    name: string;
    email: string;
    message: string;
  }
  

const Contact = () => {

    const form = useRef();
    const router = useRouter()  

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    
    const sendEmail = (e) => {
      emailjs.sendForm(`${process.env.CLIENT_ID_MAIL}`, `${process.env.TEMPLATE_ID}`, form.current, `${process.env.USER_ID}`)
        .then((result) => {
            console.log(result.text);
            return router.push('/check');
        }, (error) => {
            console.log(error.text);       
        });     
    };
  
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-semibold text-blueCC'>Nous contacter</h1>
           
            <form ref={form} onSubmit={handleSubmit(sendEmail)}  className="flex flex-col justify-center text-base">

                <label className='mt-4 font-philosopher'>Name</label>
                <input className='w-full text-center  p-2 outline-none rounded-md border border-blueCC focus:border-2 focus:bg-slate-100'                 
                {...register("name", { required: true, maxLength: 20 })} />
                {errors.name?.type === 'required' && "le nom est requis"}
                

                <label className='mt-4 font-philosopher'>Email</label>
                <input className='w-full text-center  p-2 outline-none rounded-md border border-blueCC focus:border-2 focus:bg-slate-100' 
                onChange={handleSubmit} {...register("email", {required: true, pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} />
                {errors.email?.type === 'required' && "l'email est requis"}
               

                <label className='mt-4 font-philosopher'>Message</label>
                <textarea className='w-full text-center  p-2 outline-none rounded-md border border-blueCC focus:border-2 focus:bg-slate-100' 
                {...register("message", { required: true, maxLength: 10000 })} />
                {errors.message?.type === 'required' && "un message est requis"}
               

                <input type="submit" 
                value="envoyer"                
                className='font-philosopher cursor-pointer mt-8 bg-blueCC text-white border-none rounded-lg' />
            </form> 
        </div>

     
    );
  };

export default Contact;
