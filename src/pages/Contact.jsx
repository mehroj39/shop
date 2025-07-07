
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)

    emailjs
      .sendForm('service_03amhq8', 'template_gj0p7sh', form.current, {
        publicKey: 'J7wv9WgzTGmkhv3UW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

  }
  return (
    <div className="bg-black w-full" id='contact'>
      <h1 className="text-3xl md:text-5xl text-white font-bold text-center py-10">
        CONTACT US
      </h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col lg:flex-row gap-12 bg-gray-900 w-full max-w-6xl mx-auto px-4 py-10 rounded-lg">
          <div className="w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12424.801987816818!2d65.7966159!3d38.8736544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea7a54d7a9587%3A0x8d17b2f61e3f2e61!2sKorzinka%20%E2%80%94%20Qarshi!5e0!3m2!1sen!2s!4v1751623355810!5m2!1sen!2s"
              className="w-full h-80 lg:h-full rounded-md"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-white text-3xl font-bold">Get In Touch</h2>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white text-xl">
                <i className="bx bx-user"></i>
              </span>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full pl-10 py-3 bg-black text-white border border-white rounded"
              />
            </div>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white text-xl">
                <i className="bx bx-envelope"></i>
              </span>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full pl-10 py-3 bg-black text-white border border-white rounded"
              />
            </div>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white text-xl">
                <i className="bx bx-phone"></i>
              </span>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full pl-10 py-3 bg-black text-white border border-white rounded"
              />
            </div>

            <button className="mt-6 w-44 h-12 bg-amber-500 text-white font-semibold tracking-wider hover:w-64 transition-all duration-500 mx-auto rounded">
              Contact Now
            </button>
          </div>
        </div>
      </form>
      
    </div>

  );
};


export default Contact;


