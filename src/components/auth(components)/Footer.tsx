const Footer = () => {
  return (
    <footer className="bg-[#111]/80 backdrop-blur-md text-white/80 mt-20">
      <div className="container mx-auto px-6 py-6">
        {/* Divider */}
        <hr className="my-7 mb-6 mt-15 border-gray-800" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} GameVault. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;