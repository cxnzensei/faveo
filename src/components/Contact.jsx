import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { whatsapp } from "../assets";
import { slideIn, fadeIn, textVariant } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const config = {
    SecureToken: "d26713a6-e0d4-493b-ab31-b2035acb0f8d",
    To: "nishitpatil3231@gmail.com",
    From: form.email,
    Subject: form.name + ": Faveo Contact Form Submission",
    Body: `${form.name}(${form.phone}: ${form.message})`,
  }

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (window.Email) {
      window.Email.send(config).then(
        () => {
          setLoading(false);
          setForm({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
          toast("Thank you! We will get back to you as soon as possible.");
        },
        (error) => {
          setLoading(false);
          toast("Ahh, something went wrong. Please try again.");
        }
      );
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center justify-center p-5 text-center">
        <motion.h1 variants={textVariant()} className={`${styles.faveo} text-white`}>
          Hi, we're <span className='text-[#915EFF]'>Faveo.</span>
        </motion.h1>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className={`${styles.heroSubText} mt-2 text-white-100`}>
          An all-in-all academic solution at your convenience!
        </motion.p>
      </div>
      <div className={`flex xl:flex-row flex-col gap-5 overflow-hidden`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-lg'
        >
          <p className={styles.smallText}>Get in touch</p>
          <h3 className={styles.mdText}>Contact.</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-2 flex flex-col gap-5'
          >
            <label className='flex flex-col'>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={styles.formControl}
              />
            </label>
            <label className='flex flex-col'>
              <input
                type='tel'
                name='phone'
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={styles.formControl}
              />
            </label>
            <label className='flex flex-col'>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email Address "
                className={styles.formControl}
              />
            </label>
            <label className='flex flex-col'>
              <textarea
                rows={5}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Enter your message here.'
                className={styles.formControl}
              />
            </label>
            <div className="flex items-center justify-center gap-4">
              <button
                type='submit'
                className='bg-gray-700 py-3 px-7 rounded-xl outline-none w-fit text-sm hover:scale-105 duration-300 ease-out text-white font-bold shadow-md shadow-primary'
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              <div className="font-bold hidden md:inline-block">OR</div>
              <div className="bg-green-700 flex items-center justify-evenly gap-2 text-sm hover:scale-105 duration-300 ease-out py-3 px-7 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
                <img src={whatsapp} alt="whatsapp" className="w-5 h-5" />
                <a target="_blank" href="https://api.whatsapp.com/send?phone=12403072274&text=Hi, I need help with my academics. Can you provide information on your services, pricing, and turnaround time? Thanks.">Chat with us</a>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
