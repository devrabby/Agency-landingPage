import React, { useState } from 'react';
import Hero from './component/Hero';
import Thursted from './component/Thursted';
import Services from './component/Services';
import Ourwork from './component/Ourwork';
import Team from './component/Team';
import ContactUs from './component/ContactUs';
import { Toaster } from 'react-hot-toast';
import Footer from './component/Footer';
import Navbar from './component/navbar';


const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <Thursted />
      <Services />
      <Ourwork />
      <Team />
      <ContactUs />
      <Footer theme={theme} />
    </div>
  )
}

export default App