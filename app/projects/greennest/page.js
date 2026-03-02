export default function GreenNest() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-300 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">
          GreenNest – Indoor Plant Care & Store
        </h1>

        <p className="mb-6">
          A responsive plant care and store-inspired web application designed
          for plant enthusiasts to explore and manage indoor plants.
        </p>

        <h2 className="text-2xl text-blue-400 mb-4">Technology Stack</h2>
        <ul className="mb-8 space-y-2">
          <li>Frontend: React, Tailwind CSS</li>
          <li>Deployment: Netlify</li>
        </ul>

        <h2 className="text-2xl text-blue-400 mb-4">Core Features</h2>
        <ul className="mb-8 space-y-2 list-disc pl-6">
          <li>Product listing with detailed pages</li>
          <li>Responsive layout design</li>
          <li>Interactive UI components</li>
          <li>Clean and structured interface</li>
        </ul>

        <h2 className="text-2xl text-blue-400 mb-4">Challenges Faced</h2>
        <ul className="mb-8 space-y-2 list-disc pl-6">
          <li>Design consistency across screen sizes</li>
          <li>Component reusability structuring</li>
        </ul>

        <h2 className="text-2xl text-blue-400 mb-4">Future Improvements</h2>
        <ul className="mb-8 space-y-2 list-disc pl-6">
          <li>Backend integration</li>
          <li>Shopping cart with payment system</li>
          <li>Admin product management</li>
        </ul>

        <div className="flex gap-6">
          <a
            href="https://neon-cendol-639b69.netlify.app"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Live Site
          </a>

          <a
            href="https://github.com/Shariarx6T9/GreenNest---Indoor-Plant-Care-and-Store"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}
