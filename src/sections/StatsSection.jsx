import { motion } from "framer-motion"

const stats = [
  { number: "22+", label: "Acre Campus" },
  { number: "16+", label: "Sports Activities" },
  { number: "24x7", label: "Medical Support" },
  { number: "6:1", label: "Student-Teacher Ratio" },
]

function StatsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-3xl font-bold text-blue-600">
              {item.number}
            </h2>
            <p className="text-gray-600 mt-2">{item.label}</p>
          </motion.div>
        ))}

      </div>
    </section>
  )
}

export default StatsSection