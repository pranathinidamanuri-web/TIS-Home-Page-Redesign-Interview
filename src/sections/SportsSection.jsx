import { motion } from "framer-motion"

const sports = [
  { name: "Football", img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d" },
  { name: "Basketball", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc" },
  { name: "Swimming", img: "https://images.unsplash.com/photo-1530549387789-4c1017266635" },
  { name: "Cricket", img: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d" },
]

function SportsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Sports & Campus Life
        </h2>

        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We believe sports build discipline, teamwork, and leadership skills alongside academics.
        </p>

        <div className="grid md:grid-cols-4 gap-6">

          {sports.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default SportsSection