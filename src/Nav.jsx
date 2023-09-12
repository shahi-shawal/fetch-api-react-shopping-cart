
const Nav = () => {
    return (
        <div>
               <nav className="bg-green-500 p-4">
           <div className="container mx-auto flex justify-between items-center">
    {/* <!-- Logo --> */}
    <a href="#" className="text-white text-2xl font-semibold">ShoopingKoro</a>

    {/* <!-- Navigation Links --> */}
    <ul className="hidden md:flex space-x-4">
      <li><a href="#" className="text-white hover:text-green-300">Home</a></li>
      <li><a href="#" className="text-white hover:text-green-300">Products</a></li>
      <li><a href="#" className="text-white hover:text-green-300">About Us</a></li>
      <li><a href="#" className="text-white hover:text-green-300">Contact</a></li>
    </ul>

    {/* <!-- Shopping Cart Icon --> */}
    <div className="relative">
      <a href="#" className="text-white hover:text-green-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 10l5 5 5-5M7 16v-4M3 4h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2z">
          </path>
        </svg>
      </a>
    </div>

      {/* <!-- Cart Badge (Optional) -->
      <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">3</span> */}

    {/* <!-- Responsive Menu Button for Small Screens --> */}
    <button className="md:hidden text-white hover:text-green-300">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
  
  {/* <!-- Responsive Mobile Menu (Hidden by Default) --> */}
  <div className="md:hidden bg-green-500 p-4 hidden" id="mobile-menu">
    <ul className="flex flex-col space-y-4">
      <li><a href="#" className="text-white hover:text-green-300">Home</a></li>
      <li><a href="#" className="text-white hover:text-green-300">Products</a></li>
      <li><a href="#" className="text-white hover:text-green-300">About Us</a></li>
      <li><a href="#" className="text-white hover:text-green-300">Contact</a></li>
    </ul>
  </div>
    </nav>

    </div>
    );
};

export default Nav;