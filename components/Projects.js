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
    <section id="projects" className="section">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div key={index} className="glass p-8 hover-lift">
              <h3 className="text-xl font-semibold mb-4">{project.name}</h3>

              <div className="space-x-6 text-blue-400">
                <a href={project.live} target="_blank">
                  Live Site
                </a>
                <a href={project.github} target="_blank">
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
