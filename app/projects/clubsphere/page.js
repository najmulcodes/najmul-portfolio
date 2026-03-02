export default function ClubSphere() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-300 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">
          ClubSphere – Membership & Event Management System
        </h1>

        <p className="mb-6">
          A full-stack web application designed for local clubs to manage
          members, events, and administrative workflows efficiently.
        </p>

        <h2 className="text-2xl text-blue-400 mb-4">Technology Stack</h2>
        <ul className="mb-8 space-y-2">
          <li>Frontend: React, Tailwind CSS</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB</li>
          <li>Authentication: JWT</li>
          <li>Deployment: Netlify (Client), Render/Other (Server)</li>
        </ul>

        <h2 className="text-2xl text-blue-400 mb-4">Core Features</h2>
        <ul className="mb-8 space-y-2 list-disc pl-6">
          <li>Secure user authentication and protected routes</li>
          <li>Role-based dashboard (Admin / Member)</li>
          <li>Event creation and management system</li>
          <li>Membership request approval workflow</li>
          <li>Full CRUD functionality</li>
          <li>Responsive UI across all devices</li>
        </ul>

        <h2 className="text-2xl text-blue-400 mb-4">Challenges Faced</h2>
        <ul className="mb-8 space-y-2 list-disc pl-6">
          <li>Implementing role-based access control</li>
          <li>Securing private routes with JWT</li>
          <li>Handling server-side validation errors</li>
          <li>Deployment configuration debugging</li>
        </ul>

        <h2 className="text-2xl text-blue-400 mb-4">Future Improvements</h2>
        <ul className="mb-8 space-y-2 list-disc pl-6">
          <li>Payment gateway integration</li>
          <li>Real-time event notifications</li>
          <li>Advanced analytics dashboard</li>
        </ul>

        <div className="flex gap-6">
          <a
            href="https://clubsphere-client1.netlify.app/"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Live Site
          </a>

          <a
            href="https://github.com/Shariarx6T9/clubsphere-client"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Client Repo
          </a>

          <a
            href="https://github.com/Shariarx6T9/clubsphere-server"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Server Repo
          </a>
        </div>
      </div>
    </div>
  );
}
