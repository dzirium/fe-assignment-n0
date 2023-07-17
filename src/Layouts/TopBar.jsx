//react-router-dom
import { Outlet , NavLink } from "react-router-dom"
//constants
import { navLinks } from '../constants'
//assets
import logo from '../assets/logo.jpg'

export const TopBar = () => {
  return (
    <div className="lg:h-screen flex flex-col justify-stretch">
      <header className="w-full bg-[#E5FFF3] flex justify-between items-center p-4">
        {/* LOGO */}
        <img className="h-[30px] lg:h-[60px]" src={logo} alt="" />
        
        {/* LINKS */}
        <div className="space-x-3 lg:space-x-8">
          {navLinks.map((link)=>(
            <NavLink 
                className={({ isActive }) =>
                  isActive ? "font-semibold text-2xl lg:text-4xl" : "text-2xl lg:text-4xl"
                }       
              key={link.id} 
              to={link.content}>{link.title}</NavLink>
          ))}
        </div>
      </header>
      
      <Outlet />
    </div>
  )
}

