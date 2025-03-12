import logo from '../assets/logo.png'

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-10 h-30 items-center flex">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            {/* Logo and Name */}
            <div>
              <img src={logo} className='w-30'/>
              <p className="text-gray-400 text-sm">Your dream home is just a click away.</p>
            </div>
  
            {/* Links */}
            <div className="flex gap-6 my-4 md:my-0">
              <a href="#" className="hover:text-gray-300">Home</a>
              <a href="#" className="hover:text-gray-300">Properties</a>
              <a href="#" className="hover:text-gray-300">Contact</a>
              <a href="#" className="hover:text-gray-300">About</a>
            </div>
  
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Capella RealEstate All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    );
  }
  