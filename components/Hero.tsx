import styles from '../style'
import panel from '../assets/panel.png';
import logo from '../assets/logo.svg';

const Hero = () => (
    // <div>Hero</div>
    <section id="home" className={`place-content-center flex relative `}>
          <img src={panel} alt="logo" className="w-[2500px] h-[529px]" />
          <div className="absolute bg-black/50 box-content  h-[450px] w-[500px] -bottom-80 left-20">
    <div className='text-center font-poppins  xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full textBorder'>Lorem Ipsum
    </div>
    <div className='text-left text-white font-poppins font-normal leading-[28.8px] px-6'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </div>
    </section>
  )

export default Hero