import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log('Form submitted:', formData);
    // Add your logic for sending data to the server for signup
  };

  return (
   <div className='w-[1043px] mx-auto'>
      <div className='flex items-center justify-between mb-20'>
        <img src="../img/logo.jpg" alt="" />
        <Header />
        </div>
      <div>
        <h2>Нэвтрэх</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder='И-мэйл эсвэл утасны дугаар'
              className='w-[480px] bg-[#F5F7F9] py-6 gap-[10px] rounded-[10px] placeholder:pl-4'
            />
          </label>
          <br />
  
          <label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder='Нууц үг'

              className='w-[480px] bg-[#F5F7F9] py-6 gap-[10px] rounded-[10px] placeholder:pl-4'
            />
          </label>
          <br />
  
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
  
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <br />
  
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <Footer />
   </div>
  );
};

export default Signup;
