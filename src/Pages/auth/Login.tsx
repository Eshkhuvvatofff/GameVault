import ParticleBackground from '@/components/ParticleBackground/ParticleBackground'
import React, { ButtonHTMLAttributes } from 'react'

const Login = () => {
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
                            <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                                Forgot password?
                            </a>
                        </div>

                        {/* Login Button */}
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
                            Sign in
                        </button>

                        {/* Register Link */}
                        <p className='text-center text-gray-400'>
                            Don't have an account?{' '}
                            <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors'>
                                Sign up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
