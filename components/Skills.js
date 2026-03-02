export default function Skills() {
  const skills = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Authentication",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 text-center py-4 rounded-lg border border-slate-700 hover:border-blue-500 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
