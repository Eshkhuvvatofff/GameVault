import ParticleBackground from '@/components/ParticleBackground/ParticleBackground'
import React, { ButtonHTMLAttributes } from 'react'

const Login = () => {
    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <ParticleBackground />
            <div className='absolute z-10 w-[90%] max-w-md p-8 rounded-2xl backdrop-blur-xl bg-black/30 border border-white/10 shadow-2xl'>
                {/* Neon effect wrapper */}
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl -z-10'></div>
                
                {/* Logo yoki Sarlavha */}
                <h1 className='text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse'>
                    Welcome Back
                </h1>

                {/* Form */}
                <form className='space-y-6'>
                    {/* Email Input */}
                    <div className='space-y-2'>
                        <label className='text-gray-300 text-sm font-medium pl-1'>Email</label>
                        <input 
                            type="email"
                            className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-white outline-none transition-all duration-300'
                            placeholder='Enter your email'
                        />
                    </div>

                    {/* Password Input */}
                    <div className='space-y-2'>
                        <label className='text-gray-300 text-sm font-medium pl-1'>Password</label>
                        <input 
                            type="password"
                            className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 text-white outline-none transition-all duration-300'
                            placeholder='Enter your password'
                        />
                    </div>

                    {/* Remember & Forgot */}
                    <div className='flex items-center justify-between text-sm'>
                        <label className='flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer'>
                            <input type="checkbox" className='mr-2 rounded border-gray-600 text-blue-500 focus:ring-blue-500/20' />
                            Remember me
                        </label>
                        <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors'>
                            Forgot password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button 
                        type='submit'
                        className='w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium
                        hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02]
                        focus:ring-2 focus:ring-purple-500/70 active:scale-[0.98] shadow-lg shadow-purple-500/25'
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
    )
}

export default Login
