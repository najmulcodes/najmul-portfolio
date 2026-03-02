function Skill({ name }) {
  return (
    <div className="bg-slate-800 px-6 py-4 rounded-lg text-center">{name}</div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Skill name="HTML & CSS" />
          <Skill name="JavaScript" />
          <Skill name="React" />
          <Skill name="Tailwind CSS" />
          <Skill name="Node.js" />
          <Skill name="Express.js" />
          <Skill name="MongoDB" />
          <Skill name="JWT Authentication" />
          <Skill name="Git & GitHub" />
        </div>
      </div>
    </section>
  );
}
