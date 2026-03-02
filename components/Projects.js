export default function Projects() {
  const projects = [
    {
      name: "ClubSphere – Membership & Event Management",
      live: "https://clubsphere-client1.netlify.app/",
      github: "https://github.com/Shariarx6T9/clubsphere-client",
    },
    {
      name: "The Book Heaven",
      live: "https://bookhub-heaven.surge.sh",
      github: "https://github.com/Shariarx6T9/bookhub-client",
    },
    {
      name: "GreenNest – Indoor Plant Care & Store",
      live: "https://neon-cendol-639b69.netlify.app",
      github:
        "https://github.com/Shariarx6T9/GreenNest---Indoor-Plant-Care-and-Store",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-800 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-lg hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-white text-xl mb-4">{project.name}</h3>

              <div className="flex gap-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Live Site
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
