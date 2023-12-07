/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typed from 'typed.js';
import { RiHeartPulseFill } from 'react-icons/ri';
import { TfiWrite } from 'react-icons/tfi';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import explode from '../utilities/explode';
import toast, { Toaster } from 'react-hot-toast';

import emailjs from '@emailjs/browser';

const HomePage = () => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  // const [successMessage, setSuccessMessage] = useState('');

  const notify = (toastInput: any) =>
    toast.error(toastInput, { duration: 3000, position: 'bottom-center' });

  const notifySuccess = (toastInput: any) =>
    toast.success(toastInput, { duration: 3000, position: 'bottom-center' });

  const el = useRef(null);
  const form: any = useRef();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Creating Web Experiences',
        'Building server-side apps',
        'Designing and managing DB',
        'Architecting AWS Serverless',
        'Utilizing GIT',
        'Planning, coordinating projects',
      ], // Strings to display
      // Speed settings, try diffrent values until you get good results
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    });

    document
      ?.querySelector('.aboutme-section-photo')
      ?.addEventListener('mouseover', (e: any) => explode(e.pageX, e.pageY));

    document
      ?.querySelector('.aboutme-section-photo')
      ?.addEventListener('ontouchstart', (e: any) => explode(e.pageX, e.pageY));

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (nameInput === '') {
      notify('Please enter a valid name');
      return;
    }

    const pattern = /^\S+@\S+\.\S+$/;
    const isValidEmail = pattern.test(emailInput);

    if (!isValidEmail) {
      notify('Please enter a valid email id');
      return;
    }

    if (messageInput === '') {
      notify('Please enter a valid message');
      return;
    }

    emailjs
      .sendForm(
        'service_qd3p5ys',
        'template_5vymobo',
        form.current,
        'LjLsiWNpLdOowCNc6'
      )
      .then(
        (result) => {
          console.log(result.text);
          notifySuccess('Message has been sent successfully');
          setEmailInput('');
          setMessageInput('');
          setNameInput('');
        },
        (error) => {
          console.log(error.text);
          notifySuccess('Message has been sent successfully');
          setEmailInput('');
          setMessageInput('');
          setNameInput('');
        }
      );
  };

  return (
    <>
      <Toaster />
      <main className='main'>
        <div className='main-container'>
          {/* Hero Section */}
          <section className='main-header-section fadeInUp'>
            <div className='main-header-blobs'>
              <svg
                className='cl-ak shape cl_af'
                style={{ color: '#FBE5F1' }}
                viewBox='0 0 312 303'
                width='312'
                height='303'
                fill='none'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M139.7 8.8c37.8 2.8 76.4 1.8 106.6 24.9C280.7 59.9 307.9 97 311.4 140c3.9 46.3-12 94-45.8 125.8-33 31.2-80.6 39.6-126 36.5-42-3-83-20-109.5-52.9-24.1-30-18.6-70.8-20.9-109.4-2.5-42.7-23.1-92.8 7-123.2C46.5-13.5 97 5.7 139.8 9z'
                  fill='currentColor'
                ></path>
              </svg>

              <svg
                className='cl-al shape cl_af'
                style={{ color: '#ddebf8' }}
                viewBox='0 0 388 307'
                width='388'
                height='307'
                fill='none'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M187.4 6.4c54.2-4 114.7-19.1 154 18.6C384.8 66.7 397.5 134.2 381 192c-15.6 55-64 95.4-118.7 111.6-46.2 13.6-88-18.1-131.9-37.5-47.3-21-110.4-27.1-126.2-76.5C-12.2 138.3 21.9 84.4 60 46.2 93.1 13 140.7 9.9 187.4 6.4z'
                  fill='currentColor'
                ></path>
              </svg>
            </div>

            <div className='main-header-section--left'>
              <img src='./programmer_working.svg' alt='Programmer Working' />
            </div>
            <div className='main-header-section--right'>
              <p className='greeting'>Hello! My Name is</p>
              <h1 className='main-header-myname'>Ajay Manikanta</h1>
              <p className='titles-header'>
                I <RiHeartPulseFill />
              </p>
              <div className='titles'>
                <span ref={el}></span> &nbsp;
              </div>
              <a
                className='main-header-contactme'
                target='_blank'
                href='./Resume.pdf'
              >
                RESUME&nbsp; <TfiWrite />
              </a>
            </div>
          </section>

          {/* About me section */}
          <div className='swipe-through-here' id='aboutme'></div>
          <br />
          <br />
          <br />
          <br />
          <section className='aboutme'>
            <div className='aboutme-container'>
              <div className='aboutme-content-container'>
                <div className='aboutme-section--content'>
                  <div className='aboutme-section--left'>
                    <div className='aboutme-heading--container'>
                      <h2 className='aboutme-heading'>About Me</h2>
                      <span></span>
                    </div>
                    <p>
                      Hola! My name is{' '}
                      <span
                        className='highlight'
                        style={{
                          cursor: "url('../assets/Ajay_image.ico'), auto",
                        }}
                      >
                        Ajay
                      </span>{' '}
                      and I am based out of{' '}
                      <span className='highlight'>BANGALORE</span>. I have a
                      strong affinity for crafting web experiences. My
                      fascination with web development ignited in 2017 when I
                      ventured into the realm of customizing website in{' '}
                      <span className='highlight'>Chubb</span>. Little did I
                      know that my endeavor to create a personalized portfolio
                      would lead me to acquire extensive knowledge in{' '}
                      <span className='highlight'>HTML, CSS & JAVASCRIPT!</span>
                    </p>
                    <p>
                      Looking ahead to the present, I've been fortunate to
                      accumulate valuable experience across diverse
                      environments, including working at{' '}
                      <span className='highlight'>Microsoft</span>. Currently,
                      my primary dedication lies in the development of
                      accessible and inclusive products, as well as digital
                      experiences, at <span className='highlight'>Bosch</span>.
                      I collaborate with a wide array of clients to bring their
                      visions to life.
                    </p>
                    <p>
                      These are some of the technologies I've been actively
                      engaged with in recent times :
                    </p>
                    <ul className='aboutme-technologylist'>
                      <li>HTML & CSS</li>
                      <li>Javascript</li>
                      <li>Typescript</li>
                      <li>React</li>
                      <li>Node.js</li>
                      <li>AWS</li>
                      <li>Jenkins</li>
                      <li>D365 Commerce</li>
                    </ul>
                  </div>
                  <div className='aboutme-section--right'>
                    <div className='aboutme-section-photo-container'>
                      <img
                        className='aboutme-section-photo'
                        src='./Ajay_inSuit.png'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* myWork */}
          <div className='swipe-through-here' id='mywork'></div>
          <br />
          <br />
          <br />
          <br />
          <section className='mywork'>
            <div className='mywork-container'>
              <div className='mywork-header-container'>
                <h2 className='mywork-heading'>My Journey</h2>
                <span></span>
              </div>
              <div className='mywork-content-container'>
                <div className='mywork-content-cognizant mywork-content-company'>
                  <div className='mywork-content-cognizant--left'>
                    <img src='./Cognizant_Logo.png' alt='Cognizant' />
                  </div>
                  <div className='mywork-content-cognizant--right'>
                    <h3
                      style={{
                        color: '#343434',
                        fontSize: '18px',
                        fontWeight: '600',
                      }}
                    >
                      Cognizant (2017 - 2020)
                    </h3>
                    <p>
                      Developed and maintained code for in-house and client
                      websites primarily using technologies like DB2, HTML, CSS,
                      Javascript, React, NodeJS. Worked across various projects
                      and learnt the development patterns. Deliver precise
                      documentation for the development process.
                    </p>
                  </div>
                </div>
                <div className='mywork-content-infosys mywork-content-company'>
                  <div className='mywork-content-infosys--left'>
                    <img src='./Infosys_Logo.png' alt='Infosys' />
                  </div>
                  <div className='mywork-content-infosys--right'>
                    <h3
                      style={{
                        color: '#343434',
                        fontSize: '18px',
                        fontWeight: '600',
                      }}
                    >
                      Infosys (2020 - 2021)
                    </h3>
                    <p>
                      Work on AWS cloud to deliver performant microservices
                      using AWS Lambda, DynamoDB, Cloud Formation, Serverless,
                      NodeJS. Write UI using ReactJS, JSX, CSS. Deploy the
                      builds using JFrog and Jenkins. Worked on designing entire
                      architecture of the serverless app.
                    </p>
                  </div>
                </div>
                <div className='mywork-content-techm mywork-content-company'>
                  <div className='mywork-content-techm--left'>
                    <img src='./Tech_Mahindra_Logo.png' alt='TechM' />
                  </div>
                  <div className='mywork-content-techm--right'>
                    <h3
                      style={{
                        color: '#343434',
                        fontSize: '18px',
                        fontWeight: '600',
                      }}
                    >
                      Tech Mahindra (2021 - 2023)
                    </h3>
                    <p>
                      Write modern, performant, maintainable code for diverse
                      array of clients and internal projects. Work with a
                      variety of different languages, platforms, frameworks,
                      content management systems like ReactJS, HTML, CSS, D365
                      Ecomm, Typescript, NodeJS, Javascript. Communicate with
                      multi-disciplinary teams of engineers, designer and
                      clients on daily basis.
                    </p>
                  </div>
                </div>
                <div className='mywork-content-bosch mywork-content-company'>
                  <div className='mywork-content-bosch--left'>
                    <img src='./Bosch_Logo.jpg' alt='Bosch' />
                  </div>
                  <div className='mywork-content-bosch--right'>
                    <h3
                      style={{
                        color: '#343434',
                        fontSize: '18px',
                        fontWeight: '600',
                      }}
                    >
                      Bosch (2023 - Present)
                    </h3>
                    <p>
                      Engaged in collaborative interactions with highly skilled
                      professionals, contributing to the development of
                      innovative solutions within the realm of D365 ECommerce
                      storefronts. Specializing in leveraging React and
                      sitebuilder technologies to craft aesthetically pleasing
                      and customized websites. Proficiently tasked with the
                      creation of sophisticated UI components using ReactJS,
                      JSX, and CSS. Responsible for the seamless deployment of
                      builds through the utilization of Lifecycle Services
                      (LCS).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Me */}
          <div className='swipe-through-here' id='contactme'></div>
          <br />
          <br />
          <br />
          <br />
          <section className='contactme'>
            <div className='contactme-container'>
              <div className='contactme-heading-container'>
                <h2 className='contactme-heading'>Contact Me</h2>
                <span></span>
              </div>
              <div className='contactme-content-container'>
                <div className='contactme-content--left'>
                  {/* <h3>Send me a message</h3> */}
                  <p style={{ marginBottom: '1rem' }}>
                    Please feel free to contact me for any queries
                  </p>
                  <form
                    ref={form}
                    className='contactme-form'
                    onSubmit={sendEmail}
                  >
                    <div className='contactme-form-inputs'>
                      <input
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        type='text'
                        name='from_name'
                        placeholder='Enter Your Name'
                      />
                      <input
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        type='text'
                        name='from_email'
                        placeholder='Enter Your Email'
                      />
                      <textarea
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        name='message'
                        id=''
                        placeholder='Enter Your Message'
                      ></textarea>
                    </div>
                    <div className='contactme-form-btn-container'>
                      <button type='submit' value='submit'>
                        SEND NOW
                      </button>
                      <a
                        href={`mailto:ajay.vijay1123@gmail.com?subject=Reaching%20out%20to%20you%20&body=${messageInput
                          .split(' ')
                          .join('%20')}`}
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        SEND EMAIL
                      </a>
                    </div>
                  </form>
                </div>
                <div className='contactme-content--right'>
                  <div className='contactme-details-container'>
                    <div className='contactme-details--address contactme-details--icons'>
                      <FaMapMarkerAlt size={20} />
                      <h3>Address</h3>
                      <p>Yelachenahalli, Bangalore</p>
                    </div>
                    <div className='contactme-details--phone contactme-details--icons'>
                      <FaPhoneAlt size={20} />
                      <h3>Phone</h3>
                      <p>+91 7981263843</p>
                    </div>
                    <div className='contactme-details--email contactme-details--icons'>
                      <HiMail size={25} />
                      <h3>Email</h3>
                      <p>ajay.vijay1123@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <a
              className='contactme-mail-btn'
              href='mailto:ajay.vijay1123@gmail.com?subject=Reaching%20out%20to%20you%20&body=Hi%20Ajay,%20Can%20we%20connect%20'
              rel='noopener noreferrer'
              target='_blank'
            >
              Contact Me
            </a> */}
        </div>
      </main>
    </>
  );
};

export default HomePage;
