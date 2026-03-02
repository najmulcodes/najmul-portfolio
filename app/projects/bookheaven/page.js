export default function BookHeaven() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-300 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">
          The Book Heaven – Online Book Platform
        </h1>

        <p className="mb-6">
          A dynamic book browsing and management platform where users can
          explore, add, edit, and manage books.
        </p>

        <h2 className="text-2xl text-blue-400 mb-4">Technology Stack</h2>
        <ul className="mb-8 space-y-2">
          <li>Frontend: React</li>
          <li>Backend: Node.js, Express</li>
          <li>Database: MongoDB</li>
          <li>Deployment: Surge / Other</li>
        </ul>

        <h2 className="text-2xl text-blue-400 mb-4">Core Features</h2>
        <ul className="mb-8 space-y-2 list-disc pl-6">
          <li>Book listing with dynamic rendering</li>
          <li>Add / Edit / Delete functionality</li>
          <li>Search and filtering system</li>
          <li>Responsive user interface</li>
          <li>REST API integration</li>
        </ul>

        <h2 className="text-2xl text-blue-400 mb-4">Challenges Faced</h2>
        <ul className="mb-8 space-y-2 list-disc pl-6">
          <li>Managing CRUD operations properly</li>
          <li>State synchronization issues</li>
          <li>Server deployment debugging</li>
        </ul>

        <h2 className="text-2xl text-blue-400 mb-4">Future Improvements</h2>
        <ul className="mb-8 space-y-2 list-disc pl-6">
          <li>User authentication system</li>
          <li>Book review and rating feature</li>
          <li>Admin dashboard</li>
        </ul>

        <div className="flex gap-6">
          <a
            href="https://bookhub-heaven.surge.sh"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Live Site
          </a>

          <a
            href="https://github.com/Shariarx6T9/bookhub-client"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Client Repo
          </a>

          <a
            href="https://github.com/Shariarx6T9/bookhub-server"
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
