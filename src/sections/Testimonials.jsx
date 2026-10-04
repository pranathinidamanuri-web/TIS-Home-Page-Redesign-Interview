import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Parent",
    text: "TIS has transformed my child’s learning experience. The environment is very supportive and disciplined.",
  },
  {
    name: "Student",
    text: "The teachers are very helpful and the sports facilities are amazing. I enjoy coming to school every day.",
  },
  {
    name: "Alumni",
    text: "TIS gave me confidence and skills that helped me in higher studies and career growth.",
  },
]

function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-4">
          What People Say
        </h2>

        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Real feedback from parents, students, and alumni of Tulas International School.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-md border bg-gray-50 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 mb-4 italic">
                "{item.text}"
              </p>

              <h4 className="font-semibold text-blue-600">
                - {item.name}
              </h4>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Testimonials