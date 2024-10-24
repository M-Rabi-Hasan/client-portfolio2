// src/pages/contact.jsx
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Link from "next/link"; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('/api/contact', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('There was an error sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased
     selection:bg-cyan-300 selection:text-cyan-900">

        <div className="fixed top-0 -z-10 h-full w-full ">
          
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),
          rgba(255,255,255,0))]"> 
          </div>
        
        </div>
        <div className='container mx-auto px-8'>
          <Navbar/>
        </div>
    <div className="container mx-auto px-12 py-20 md:flex md:justify-between">
      <div className='max-w-md'>
        <h1 className="text-3xl font-bold mb-4">Contact
          <span className='px-2 text-blue-500'>Us</span>
        </h1>
        <p className='text-slate-300'>For questions, technical assistance, or collaboration opportunities via the contact information provided.</p>
        <h2 className='mt-4 text-slate-300'>+ 123-456-7890</h2>
        <h3 className='mt-1 text-slate-300'>hello@reallygreatsite.com </h3>
        <h4 className='mt-1 text-slate-300'>123 Anywhere St.,Any City, ST 12345</h4>
        <Link href={"/"}>
          <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mt-6'>
            Back
          </button>
        </Link>
      </div>
      <div className='md:mr-40'>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mt-8">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-12 py-3 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-12 py-3 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-12 py-10 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
