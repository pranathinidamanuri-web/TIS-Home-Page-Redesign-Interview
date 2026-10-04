function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-100">
      <h1 className="text-5xl font-bold mb-4">
        Where Learning Becomes an Adventure
      </h1>

      <p className="max-w-xl text-gray-600 mb-6">
        Tulas International School offers world-class education with modern
        facilities and holistic development.
      </p>

      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Explore
        </button>

        <button className="border px-6 py-3 rounded">
          Apply Now
        </button>
      </div>
    </section>
  )
}

export default HeroSection