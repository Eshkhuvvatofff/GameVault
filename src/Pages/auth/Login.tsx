import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Footer from '@/components/auth(components)/Footer'
import Header from '@/components/auth(components)/Header'
import { useAuth } from '@/components/authcontext/AuthContext'
import ParticleBackground from '@/components/ParticleBackground/ParticleBackground'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const SignIn: React.FC = () => {
    const { googleSignIn, githubSignIn } = useAuth(); // Add githubSignIn
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            console.log("Google bilan kirildi!");
            navigate('/');
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'An error occurred');
        }
    };

    const handleGithubSignIn = async () => {
        try {
            await githubSignIn();
            console.log("GitHub bilan kirildi!");
            navigate('/');
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'An error occurred');
        }
    };

    return (
        <>
            <div className='overflow-x-hidden'>
                <Header />
                <div className='h-screen mt-14 w-screen flex items-center justify-center'>
                    <ParticleBackground />
                    <div className='absolute z-10 w-[90%] max-w-md rounded-2xl backdrop-blur-xl 
                 p-[2.5px] bg-transparent
                overflow-hidden
                before:content-[""]
                before:absolute
                before:w-[500%]
                before:h-[100%]
                before:bg-[linear-gradient(115deg,#4f46e5,#ec4899,#8b5cf6,#3b82f6,#f43f5e,#6366f1,#d946ef,#4f46e5,#ec4899,#8b5cf6)]
                before:animate-shine
                before:top-0
                before:left-[-250%]
                after:content-[""]
                after:absolute
                after:inset-[2.5px]
                after:rounded-2xl
                after:bg-[#111]
                after:pointer-events-none
                group
                shadow-[0_0_50px_rgba(236,72,153,0.5)]
                hover:shadow-[0_0_70px_rgba(236,72,153,0.7)]
                transition-shadow duration-300'>

                        {/* Main content container */}
                        <div className="relative flex flex-col p-8 rounded-2xl z-20
                    bg-[#111]
                    shadow-[inset_0_0_30px_rgba(236,72,153,0.3)]
                    group-hover:shadow-[inset_0_0_50px_rgba(236,72,153,0.4)]
                    transition-all duration-500">

                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-2xl opacity-50 blur-xl z-10
                        bg-gradient-to-r from-indigo-600/20 via-pink-600/20 to-purple-600/20"></div>

                            {/* Logo */}
                            <h1 className='text-3xl font-bold text-center mb-8 relative z-10
                        text-transparent bg-clip-text bg-gradient-to-r 
                        from-[#4f46e5] via-[#ec4899] to-[#8b5cf6]
                        animate-gradient-x'>
                                Welcome Back
                            </h1>

                            {/* Form content */}
                            <form className='space-y-6 relative z-10'>
                                {/* Input fields */}
                                <div className='space-y-2'>
                                    <label className='text-gray-200 text-sm font-medium pl-1'>Email</label>
                                    <input
                                        type="email"
                                        className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                                focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 
                                text-white outline-none transition-all duration-300'
                                        placeholder='Enter your email'
                                    />
                                </div>

                                <div className='space-y-2'>
                                    <label className='text-gray-200 text-sm font-medium pl-1'>Password</label>
                                    <input
                                        type="password"
                                        className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                                focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 
                                text-white outline-none transition-all duration-300'
                                        placeholder='Enter your password'
                                    />
                                </div>

                                {/* Remember Me Checkbox */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-pink-500 
                                    focus:ring-pink-500/20 bg-white/5"
                                        />
                                        <label className="ml-2 block text-sm text-gray-200">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link to="/restorepassword">
                                        <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                                            Forgot password?
                                        </a>
                                    </Link>
                                </div>

                                {/* Login Button */}
                                <button
                                    type='submit'
                                    className='w-full py-3 px-4 mt-7
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
                                    Sign in
                                </button>

                                {/* Register Link */}
                                <Link to="/signup" className='text-blue-400 hover:text-blue-300 transition-colors'>
                                    <p className='text-center mt-4 text-gray-400'>
                                        Don't have an account?{' '}
                                        <span>Sign up</span>
                                    </p>
                                </Link>

                                {/* Google & Github Sign In buttons */}
                                <div className="flex w-full gap-4 mt-6">
                                    <button
                                        type="button"
                                        onClick={handleGoogleSignIn}
                                        className="flex-1 h-12 flex items-center justify-center gap-2 bg-white/10 
                                        border border-white/20 rounded-lg shadow-lg hover:bg-white/15 
                                        transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                                        group"
                                    >
                                        <FcGoogle className="text-2xl" />
                                        <span className="text-gray-200 font-medium">Google</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleGithubSignIn}  // Hook up to GitHub Sign In
                                        className="flex-1 h-12 flex items-center justify-center gap-2 bg-white/10 
                                        border border-white/20 rounded-lg shadow-lg hover:bg-white/15 
                                        transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                                        group"
                                    >
                                        <FaGithub className="text-2xl text-gray-200 group-hover:text-white" />
                                        <span className="text-gray-200 font-medium">Github</span>
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <div className='-mt-32'>
                    <Footer />
                </div>
            </div>

        </>
    );
};

export default SignIn;