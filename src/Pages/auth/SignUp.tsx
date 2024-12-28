import ParticleBackground from '@/components/ParticleBackground/ParticleBackground'
import { Link, useNavigate } from 'react-router-dom'
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const [showPass, setShowPass] = useState(false)
    const [showconfirmPass, setConfirmPass] = useState(false)


    const [isAgreed, setIsAgreed] = useState(false)
    const [hasShownError, setHasShownError] = useState(false)
    const navigate = useNavigate();

    const agree = () => toast("please agree privasy ");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!isAgreed) {
            if (!hasShownError) {
                toast.error("Iltimos, shartlar va maxfiylik siyosatiga rozi bo'ling.");
                setHasShownError(true);
            }
            return
        }
        setHasShownError(false);
        // ... boshqa sahifaga o'tish kodlari ...
        if (isAgreed == true) {
            navigate('/')
        }
    }


    return (
        <div className='h-screen w-screen flex items-center justify-center'>
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
                        Create Account
                    </h1>

                    {/* Form content */}
                    <form className='space-y-6 relative z-10' onSubmit={handleSubmit}>
                        {/* Input fields */}
                        <div className='space-y-2'>
                            <label className='text-gray-200 text-sm font-medium pl-1'>Full Name</label>
                            <input
                                className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                                focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 
                                text-white outline-none transition-all duration-300'
                                placeholder='Enter your full name'
                            />
                        </div>

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
                            <div className='flex'>
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                                focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 
                                text-white outline-none transition-all duration-300'
                                    placeholder='Create a password'
                                />
                                <button onClick={() => setShowPass(!showPass)} className='text-gray-400 absolute right-3 mt-4'>{showPass ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}</button>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <label className='text-gray-200 text-sm font-medium pl-1'>Confirm Password</label>
                            <div className="flex">
                                <input
                                    type={showconfirmPass ? 'text' : 'password'}
                                    className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                                focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 
                                text-white outline-none transition-all duration-300'
                                    placeholder='Confirm your password'
                                />
                                <button onClick={() => setConfirmPass(!showconfirmPass)}  className='text-gray-400 absolute right-3 mt-4' >{showPass ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}</button>
                            </div>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-pink-500 
                                    focus:ring-pink-500/20 bg-white/5"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsAgreed(e.target.checked)}
                                />
                            </div>
                            <label className="ml-2 block text-sm text-gray-200">
                                I agree to the{' '}
                                <a href="#" className="text-blue-400 hover:text-blue-300">
                                    Terms of Service
                                </a>
                                {' '}and{' '}
                                <a href="#" className="text-blue-400 hover:text-blue-300">
                                    Privacy Policy
                                </a>
                            </label>
                        </div>

                        {/* Xato xabari ko'rsatish - modalcha ko'rinishida */}
                        {hasShownError && (
                            <button onClick={agree}></button>
                        )}

                        {/* Sign Up Button */}
                        <button
                            type='submit'
                            className='w-full py-3 px-4 
                                relative
                                bg-gradient-to-r from-[#4f46e5] via-[#ec4899] to-[#8b5cf6]
                                text-white rounded-lg font-medium
                                hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]
                                transition-all duration-300 
                                transform hover:scale-[1.02]
                                active:scale-[0.98]
                                bg-[length:200%_auto]
                                animate-gradient-x
                                before:absolute before:inset-0 before:blur-xl before:bg-inherit before:opacity-40'
                        >
                            Create Account
                        </button>

                        {/* Login Link */}
                        <Link to="/signin">
                            <p className='text-center text-gray-400'>
                                Already have an account?{' '}
                                <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors'>
                                    Sign in
                                </a>
                            </p>
                        </Link>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default SignUp
