function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-white text-xl font-bold mb-2">TIS</h3>
          <p> Tulas International School focuses on academic excellence and holistic development.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>About</li>
            <li>Academics</li>
            <li>Sports</li>
            <li>Admissions</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p>Dehradun, Uttarakhand</p>
          <p>Email: info@tis.edu.in</p>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        © 2026 TIS. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer