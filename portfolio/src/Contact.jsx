import { useState } from 'react'
import './App.css'


const Contact=()=> {
 
  const [FormData,setFormData]=useState({
    name:'',
    email:'',
    message:''
  });
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData((prevState)=>({
        ...prevState,
        [name]:value
    }))};
  const handleSubmit=(e)=>{
   e.preventDefault()
   console.log('Form Submitted Successfully')
  };
  return (
   
    <div className='grid grid-cols-2 gap-4 m-9 justify-items-center  items-center'>
    <h1 className='font-bold text-4xl'>Connect With Me!</h1>
    <form onSubmit={handleSubmit} className='flex-col '>
        <div className='m-4 p-2'>
            <label for='name' className='p-2 m-1 block text=gray-700'>Your Name:</label>
            <input className='text-gray-700' type="text" id='name' name='name' value={FormData.name} onChange={handleChange} />
        </div>
        <div  className='m-4 p-2'>
            <label for='email'  className='p-2 m-1 block text=gray-700'>Your Email:</label>
            <input className='text-gray-700' type="text" id='email' name='email' value={FormData.email} onChange={handleChange} />
        </div>
        <div  className='m-4 p-2'>
            <label for='message'  className='p-2 m-1 block text=gray-700'>Message:</label>
            <input className='text-gray-700' type="text" id='message' name='message' value={FormData.message} onChange={handleChange}/>
        </div>

        <button type='submit' className='bg-blue-500 border-2 rounded-lg'>Submit</button>
    </form>
    </div>
  )
};

export default Contact;
