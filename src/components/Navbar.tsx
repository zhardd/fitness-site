import { useState } from 'react';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import account from '../assets/account.png';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const Navbar = () => {
const [toggle, setToggle] = useState(false);
const {currentUser} = useAuth()
  
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <Link to='/fitness-site/'>
        <img className='w-[160px] h-[64px]' src={logo} alt='nuuttiks'/>
      </Link>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
            <Link to={nav.to} >{nav.title}</Link>
          </li>
          ))}
      </ul>

      {currentUser && <div className='sm:flex hidden px-8 items-end '>
      <Link to='/fitness-site/account'>
      <img src={account} className=' w-[25px] h-[25px]   cursor-pointer'
          alt='account'
          />
      </Link>
      </div>}
      
      

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu}
          alt='menu'
          className="w-[28px] h-[28px]
          object-contain"
          onClick={() => setToggle((prev) => !prev)}/>
      </div>

      <div
      className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-3'} text-white`}>
                <Link to={nav.to} >{nav.title}</Link>
            </li>
            ))}
            {currentUser && <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white py-2`}>
                 <Link to='/fitness-site/account' >Tili</Link>
             </li>}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar