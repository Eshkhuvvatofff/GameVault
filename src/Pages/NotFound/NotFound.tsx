import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111]">
      <div className="text-center space-y-8">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#ec4899] to-[#8b5cf6]">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-white">Page Not Found</h2>
        <p className="text-gray-400 max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-[#4f46e5] via-[#ec4899] to-[#8b5cf6] text-white font-medium
            hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]
            transition-all duration-300 
            transform hover:scale-[1.02]
            active:scale-[0.98]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;