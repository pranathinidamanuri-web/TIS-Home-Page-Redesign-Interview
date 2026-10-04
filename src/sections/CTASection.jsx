import { motion } from "framer-motion"

function CTASection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-5xl mx-auto text-center px-6">

        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Join TIS?
        </motion.h2>

        <motion.p
          className="text-lg mb-8 text-blue-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Start your journey with world-class education, modern learning, and holistic development.
        </motion.p>

        <motion.button
          className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
        >
          Apply Now
        </motion.button>

      </div>
    </section>
  )
}

export default CTASection