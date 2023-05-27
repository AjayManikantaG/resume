import { useEffect, useRef } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typed from 'typed.js';
import { RiHeartPulseFill } from 'react-icons/ri';
import { TfiWrite } from 'react-icons/tfi';

const HomePage = () => {
  const el = useRef(null);

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

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
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
                    strong affinity for crafting web experiences. My fascination
                    with web development ignited in 2017 when I ventured into
                    the realm of customizing website in{' '}
                    <span className='highlight'>Chubb</span>. Little did I know
                    that my endeavor to create a personalized portfolio would
                    lead me to acquire extensive knowledge in{' '}
                    <span className='highlight'>HTML, CSS & JAVASCRIPT!</span>
                  </p>
                  <p>
                    Looking ahead to the present, I've been fortunate to
                    accumulate valuable experience across diverse environments,
                    including working at{' '}
                    <span className='highlight'>Microsoft</span>. Currently, my
                    primary dedication lies in the development of accessible and
                    inclusive products, as well as digital experiences, at{' '}
                    <span className='highlight'>Tech Mahindra</span>. I
                    collaborate with a wide array of clients to bring their
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
                  <div>
                    <img src='./Ajay_inSuit.png' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Me */}
        {/* <a
              className='main-header-contactme'
              href='mailto:ajay.vijay1123@gmail.com?subject=Reaching%20out%20to%20you%20&body=Hi%20Ajay,%20Can%20we%20connect%20'
              rel='noopener noreferrer'
              target='_blank'
            >
              Contact Me
            </a> */}
      </div>
    </main>
  );
};

export default HomePage;
