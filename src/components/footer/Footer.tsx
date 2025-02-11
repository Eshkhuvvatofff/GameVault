import { Link, useLocation } from 'react-router-dom';
import { FaTelegram, FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();
  if (location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/restorepassword' || location.pathname === '/reset-password') return null;

  return (
    <footer className="backdrop-blur-md text-white/80 mt-[800px] z-40">
      <div className="container mx-auto px-6 py-8">
        {/* Main Sections Container */}
        <div className="max-w-3xl mx-auto grid gap-6  md:grid-cols-2 mb-16">
          {/* GameVault Section */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full ">
                <img src="/logo.png" alt="GameVault Logo" />
              </div>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                GameVault
              </h2>
            </div>
            <div className="grid grid-cols gap-4">
              <FooterLink to="/games" text="Games" />
              <FooterLink to="/about" text="Popular" />
              <FooterLink to="/faq" text="Coming Soon" />
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
              <ContactItem icon={<FaEnvelope />} text="Eshkhuvvatofff@gmail.com" href="https://Eshkhuvvatofff@gmail.com" />
              <ContactItem icon={<FaPhone />} text="+998 91 813 11 88" href="tel:+998918131188" />
              <ContactItem icon={<FaMapMarkerAlt />} text="Qarshi, Uzbekistan" href="#" />
            </div>
          </div>
        </div>

        {/* Comment Section */}
        <div className="max-w-3xl mx-auto">
          <form action="https://formspree.io/f/mpwwlplo" method="POST" className="space-y-6">
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
              className='w-full mt-6 py-5  px-4 
                                relative
                                bg-gradient-to-r from-[#4f46e5] via-[#ec4899] to-[#8b5cf6]
                                text-white rounded-lg font-medium
                                hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]
                                transition-all duration-600 
                                transform hover:scale-[1.02]
                                active:scale-[0.98]
                                bg-[length:200%_auto]
                                animate-gradient-x
                                before:absolute before:inset-0 before:blur-xl before:bg-inherit before:opacity-40'
                            
            >
              Send Comment
            </button>
          </form>
        </div>

        {/* Divider */}
        <hr className="my-7 mb-6 mt-16 border-gray-800" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 -mb-2">
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