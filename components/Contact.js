import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section bg-slate-900">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>

        <p className="text-gray-400 mb-8">
          Feel free to reach out for collaboration or opportunities.
        </p>

        <div className="flex justify-center gap-10 text-3xl mb-8">
          <a
            href="https://github.com/Shariarx6T9"
            target="_blank"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shaariar"
            target="_blank"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/8801840242448"
            target="_blank"
            className="hover:text-green-400"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="text-gray-400">najmulhasanshahin@gmail.com</p>
      </div>
    </section>
  );
}
