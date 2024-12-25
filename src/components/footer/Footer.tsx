import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-transparent mt-[500px] backdrop-blur-md text-white/80">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start items-center">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:max-w-xs">
            <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8rounded-full">
                  <img src="/logo.png" alt="Webstite logo" />
                </div>
              <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                GameVault
              </span>
            </Link>
            
            <p className="mt-4 text-sm text-gray-400 leading-relaxed text-center md:text-left">
              Discover the best gaming experience with our curated collection of games. 
              Join our community and explore the world of gaming.
            </p>
            
            <div className="flex space-x-6 mt-6">
              <SocialLink href="#" icon={<FaFacebookF />} />
              <SocialLink href="#" icon={<FaTwitter />} />
              <SocialLink href="#" icon={<FaInstagram />} />
              <SocialLink href="#" icon={<FaGithub />} />
              <SocialLink href="#" icon={<FaDiscord />} />
            </div>
          </div>

          {/* Middle Section - Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center md:justify-items-start mb-8 md:mb-0">
            {/* Quick Links */}
            <div>
              <FooterSection title="Quick Links">
                <FooterLink to="/games" text="Games" />
                <FooterLink to="/categories" text="Categories" />
                <FooterLink to="/about" text="About Us" />
                <FooterLink to="/blog" text="Blog" />
              </FooterSection>
            </div>

            {/* Support */}
            <div>
              <FooterSection title="Support">
                <FooterLink to="/contact" text="Contact" />
                <FooterLink to="/faq" text="FAQ" />
                <FooterLink to="/help" text="Help Center" />
                <FooterLink to="/community" text="Community" />
              </FooterSection>
            </div>

            {/* Legal */}
            <div>
              <FooterSection title="Legal">
                <FooterLink to="/privacy" text="Privacy Policy" />
                <FooterLink to="/terms" text="Terms of Service" />
                <FooterLink to="/cookies" text="Cookie Policy" />
                <FooterLink to="/licenses" text="Licenses" />
              </FooterSection>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4 text-center md:text-left">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form className="w-full md:max-w-xs space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2.5 bg-white/5 border border-gray-700/50 rounded-lg 
                  text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50
                  transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 
                  hover:from-blue-600 hover:to-purple-600 rounded-lg text-sm font-medium
                  transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                  focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-800" />

        {/* Bottom Section */}
        <div className="text-center md:text-left">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} GameStore. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="text-center md:text-left">
    <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
    {children}
  </div>
);

const FooterLink = ({ to, text }: { to: string; text: string }) => (
  <Link 
    to={to} 
    className="block text-sm text-gray-400 hover:text-white transition-colors duration-300 py-1.5"
  >
    {text}
  </Link>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-gray-400 hover:text-white transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="text-xl">{icon}</span>
  </a>
);

export default Footer;