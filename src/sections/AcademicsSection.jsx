import { motion } from "framer-motion"

const data = [
  {
    title: "CBSE Curriculum",
    desc: "Structured learning aligned with national education standards.",
  },
  {
    title: "Digital Classrooms",
    desc: "Smart boards and modern learning tools for better understanding.",
  },
  {
    title: "Holistic Development",
    desc: "Focus on academics, sports, arts, and life skills.",
  },
  {
    title: "Experienced Faculty",
    desc: "Qualified teachers ensuring quality education delivery.",
  },
]

function AcademicsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Why Choose TIS Academics
        </h2>

        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We focus on building strong academic foundations with modern teaching methods and practical exposure.
        </p>

        <div className="grid md:grid-cols-4 gap-6">

          {data.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-md border hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default AcademicsSection