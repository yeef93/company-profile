function Menu() {
  return (
    <ul
      className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 
           md:flex-row md:mt-0 md:border-0 md:bg-white"
    >
      <li>
        <a
          href="/"
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                md:hover:text-darkTangerine md:p-0"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/about"
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                 md:hover:text-darkTangerine md:p-0"
        >
          About Us
        </a>
      </li>
      <li>
        <a
          href="/programs"
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                md:hover:text-darkTangerine md:p-0"
        >
          Programs
        </a>
      </li>
      <li>
        <a
          href="/teams"
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                md:hover:text-darkTangerine md:p-0"
        >
          Teams
        </a>
      </li>
    </ul>
  );
}
export default Menu;
