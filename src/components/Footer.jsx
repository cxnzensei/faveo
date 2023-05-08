import React from 'react'
import { logo, whatsapp } from '../assets';
import { styles } from '../styles';
import Icon from '@mdi/react';
import { mdiFacebook, mdiInstagram, mdiTwitter } from '@mdi/js';

const Footer = () => {
  return (
    <div className='w-full bg-black p-5 pt-12'>
      <div className='flex items-center justify-center flex-col gap-4'>
        <img src={logo} alt="logo" className='w-20 h-auto' />
        <div className={`${styles.mdText}`}>Let's Talk!</div>
      </div>
      <div className='lg:grid flex flex-col gap-5 px-20 grid-cols-3 items-center text-center justify-center lg:py-10 py-8 border-b border-slate-700'>
        <a href="mailto:hello@faveostudy.com" className={styles.footer}>hello@faveostudy.com</a>
        <div className='w-full flex items-center justify-center'>
          <div className="bg-green-700 flex items-center justify-between gap-2 text-sm hover:scale-105 duration-300 ease-out py-3 px-7 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
            <img src={whatsapp} alt="whatsapp" className="w-5 h-5" />
            <a target="_blank" href="https://api.whatsapp.com/send?phone=12403072274&text=Hi, I need help with my academics. Can you provide information on your services, pricing, and turnaround time? Thanks.">Chat with us</a>
          </div>
        </div>
        <a className={`${styles.footer}`} href="tel:+12403072274">+1(240)307-2274</a>
      </div>
      <div className='pt-5 flex gap-3 items-center justify-around'>
        <div className='flex flex-col p-3'>
          <div className='text-xs'>&#169; Faveo, 2023</div>
          <div className='text-[10px]'>Faveo is not sponsored or endorsed by any college or university.</div>
        </div>
        <div className='flex items-center justify-center gap-3'>
          <Icon className={styles.icons} path={mdiInstagram} size={1.3} />
          <Icon className={styles.icons} path={mdiFacebook} size={1.3} />
          <Icon className={styles.icons} path={mdiTwitter} size={1.3} />
        </div>
      </div>
    </div>
  );
}
export default Footer;