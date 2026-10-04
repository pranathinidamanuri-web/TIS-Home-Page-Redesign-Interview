
function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 text-black dark:text-white shadow-md">      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">TIS</h1>      

        <nav className="hidden md:flex gap-6">
          <a href="#">About</a>
          <a href="#">Academics</a>
          <a href="#">Sports</a>
          <a href="#">Admissions</a>
        </nav>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Apply Now
        </button>
      </div>
    </header>
  )
}

export default Navbar