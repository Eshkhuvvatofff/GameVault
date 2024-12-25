import { Link } from 'react-router-dom';
import { FaTelegram, FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#111]/80 backdrop-blur-md text-white/80 mt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Main Sections Container */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* GameVault Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                GameVault
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FooterLink to="/games" text="Games" />
              <FooterLink to="/categories" text="New Games" />
              <FooterLink to="/about" text="Popular" />
              <FooterLink to="/blog" text="Top Rated" />
              <FooterLink to="/faq" text="Coming Soon" />
              <FooterLink to="/help" text="Most Played" />
            </div>
            <div className="flex space-x-4">
              <SocialLink href="https://t.me/Eshkhuvvatoff" icon={<FaTelegram />} />
              <SocialLink href="https://www.instagram.com/eshkhuvvatoff/" icon={<FaInstagram />} />
              <SocialLink href="https://github.com/Eshkhuvvatoff" icon={<FaGithub />} />
              <SocialLink href="#" icon={<FaLinkedin />} />
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Get in Touch
            </h2>
            <div className="space-y-4">
              <ContactItem icon={<FaEnvelope />} text="info@gamevault.com" href="mailto:info@gamevault.com" />
              <ContactItem icon={<FaPhone />} text="+998 90 123 45 67" href="tel:+998901234567" />
              <ContactItem icon={<FaMapMarkerAlt />} text="Tashkent, Uzbekistan" href="#" />
            </div>
          </div>
        </div>

        {/* Comment Section */}
        <div className="max-w-3xl mx-auto">
          <form action="https://formspree.io/f/your_form_id" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['name', 'email'].map((field) => (
                <input
                  key={field}
                  type={field}
                  name={field}
                  placeholder={`Your ${field}`}
                  className="w-full px-6 py-4 bg-white/5 border border-transparent rounded-xl 
                    text-base focus:outline-none transition-all duration-300 transform
                    placeholder:text-gray-500
                    shadow-[0_0_0_0_rgba(56,189,248,0.3)]
                    focus:shadow-[0_0_20px_0_rgba(56,189,248,0.5)]
                    focus:border-sky-500/50
                    hover:border-sky-500/50
                    relative overflow-hidden
                    before:content-['']
                    before:absolute before:w-full before:h-full before:top-0 before:left-0
                    before:bg-gradient-to-r before:from-transparent before:via-sky-500/50 before:to-transparent
                    before:transition-all before:duration-300 before:scale-0 focus:before:scale-100"
                  required
                />
              ))}
            </div>
            <textarea
              name="comment"
              placeholder="Your comment"
              rows={3}
              className="w-full px-6 py-4 bg-white/5 border border-transparent rounded-xl 
                text-base focus:outline-none transition-all duration-300 transform
                placeholder:text-gray-500
                shadow-[0_0_0_0_rgba(56,189,248,0.3)]
                focus:shadow-[0_0_20px_0_rgba(56,189,248,0.5)]
                focus:border-sky-500/50 hover:border-sky-500/50
                relative overflow-hidden
                before:content-['']
                before:absolute before:w-full before:h-full before:top-0 before:left-0
                before:bg-gradient-to-r before:from-transparent before:via-sky-500/50 before:to-transparent
                before:transition-all before:duration-300 before:scale-0 focus:before:scale-100
                resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-sky-500 via-blue-500 to-sky-500 
                rounded-xl text-base font-medium relative overflow-hidden
                bg-[length:200%_auto] animate-gradient-xy
                transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                focus:outline-none focus:ring-2 focus:ring-sky-500/50
                shadow-[0_0_0_0_rgba(56,189,248,0.3)]
                hover:shadow-[0_0_30px_0_rgba(56,189,248,0.5)]
                focus:shadow-[0_0_30px_0_rgba(56,189,248,0.5)]"
            >
              Send Comment
            </button>
          </form>
        </div>

        {/* Divider */}
        <hr className="mb-6 mt-16 border-gray-800" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} GameVault. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const FooterLink = ({ to, text }: { to: string; text: string }) => (
  <Link to={to} className="text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-1">
    {text}
  </Link>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a href={href} className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer">
    <span className="text-xl">{icon}</span>
  </a>
);

const ContactItem = ({ icon, text, href }: { icon: React.ReactNode; text: string; href: string }) => (
  <a href={href} className="flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 group transform hover:translate-x-1">
    <span className="text-xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
    <span>{text}</span>
  </a>
);

export default Footer;