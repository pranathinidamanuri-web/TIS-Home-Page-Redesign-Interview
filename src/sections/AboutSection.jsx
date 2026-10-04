import { motion } from "framer-motion"

function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        {/* LEFT - IMAGE */}
        <motion.img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350"
          alt="School"
          className="rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        {/* RIGHT - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            About Tulas International School
          </h2>

          <p className="text-gray-600 mb-4">
            Tulas International School (TIS) is a premier residential school
            focused on delivering holistic education through modern teaching
            methodologies and world-class infrastructure.
          </p>

          <p className="text-gray-600 mb-6">
            Established in 2012, TIS nurtures students with a perfect blend of
            academics, sports, and life skills to prepare them for global
            challenges.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded">
            Learn More
          </button>
        </motion.div>

      </div>
    </section>
  )
}

export default AboutSection