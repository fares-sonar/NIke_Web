import { hamburger } from '../assets/icons';
import {headerLogo} from '../assets/images';
import {navLinks} from '../constants/index'
const Nav = () => {
  return (
    <header className=' padding-x py-8 absolute z-10 w-full '>
      <nav className='flex justify-between items-center max-container '>
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden '>
          {navLinks.map((items) =>(
            <li key={items.label}>
              <a href={items.href} className=' font-montserrat leading-normal text-lg text-slate-gray '>
                {items.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img src={hamburger} alt="hamburger" width={25} height={25} className='lg:hidden block' />
        </div>
      </nav>
    </header>
  )
}

export default Nav