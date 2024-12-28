import ParticleBackground from '@/components/ParticleBackground/ParticleBackground';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style/SignUp.css'

const SignUp = () => {
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setConfirmPass] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [isToastShown, setIsToastShown] = useState(false);
    const [passwordError, setPasswordError] = useState("");

    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const handleToastExit = () => {
        setIsToastShown(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Agar inputlar to'liq bo'lmasa
        if (!username || !email || !password || !confirmPassword) {
            toast.error("Please fill in all the fields.", {
                autoClose: 3000,
            });
        }
        // Agar foydalanuvchi shartnoma bilan rozi bo'lmasa
        else if (!isAgreed) {
            if (!isToastShown) {
                toast.error("Please agree to the terms and privacy policy.", {
                    onClose: handleToastExit,
                    autoClose: 3000,
                });
                setIsToastShown(true);
            }
        }
        // Agar parollar mos kelmasa
        else if (password !== confirmPassword) {
            // Borderni qizil qilish va shake animatsiyasini qo'llash
            if (passwordRef.current && confirmPasswordRef.current) {
                passwordRef.current.classList.add("border-red-500", "shake");
                confirmPasswordRef.current.classList.add("border-red-500", "shake");

                // Shake animatsiyasini o'chirish uchun vaqtni belgilaymiz
                setTimeout(() => {
                    if (passwordRef.current && confirmPasswordRef.current) {
                        passwordRef.current.classList.remove("shake");
                        confirmPasswordRef.current.classList.remove("shake");
                    }
                }, 500);
            }
        }
        // Agar parol 8 raqamdan kam bo'lsa
        else if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters long.");
        } else {
            toast.success("Account created successfully!", {
                autoClose: 3000,
            });
            navigate('/');
        }
    };

    return (
        <div className="h-screen overflow-hidden w-screen flex items-center justify-center">
            <ParticleBackground />
            <div className="absolute z-10 w-[90%] max-w-md rounded-2xl backdrop-blur-xl 
                p-[2.5px] bg-transparent
                overflow-hidden
                before:content-['']
                before:absolute
                before:w-[500%]
                before:h-[100%]
                before:bg-[linear-gradient(115deg,#4f46e5,#ec4899,#8b5cf6,#3b82f6,#f43f5e,#6366f1,#d946ef,#4f46e5,#ec4899,#8b5cf6)]
                before:animate-shine
                before:top-0
                before:left-[-250%]
                after:content-['']
                after:absolute
                after:inset-[2.5px]
                after:rounded-2xl
                after:bg-[#111]
                after:pointer-events-none
                group
                shadow-[0_0_50px_rgba(236,72,153,0.5)]
                hover:shadow-[0_0_70px_rgba(236,72,153,0.7)]
                transition-shadow duration-300">
                <div className="relative flex flex-col p-8 rounded-2xl z-20
                    bg-[#111]
                    shadow-[inset_0_0_30px_rgba(236,72,153,0.3)]
                    group-hover:shadow-[inset_0_0_50px_rgba(236,72,153,0.4)]
                    transition-all duration-500">

                    <div className="absolute inset-0 rounded-2xl opacity-50 blur-xl z-10
                        bg-gradient-to-r from-indigo-600/20 via-pink-600/20 to-purple-600/20"></div>

                    <h1 className="text-3xl font-bold text-center mb-8 relative z-10
                        text-transparent bg-clip-text bg-gradient-to-r 
                        from-[#4f46e5] via-[#ec4899] to-[#8b5cf6]
                        animate-gradient-x">
                        Create Account
                    </h1>

                    <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                        {/* Username input */}
                        <div className="space-y-2">
                            <label className="text-gray-200 text-sm font-medium pl-1">Username</label>
                            <input
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                                focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 
                                text-white outline-none transition-all duration-300"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        {/* Email input */}
                        <div className="space-y-2">
                            <label className="text-gray-200 text-sm font-medium pl-1">Email Address</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                                focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 
                                text-white outline-none transition-all duration-300"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password input */}
                        <div className="space-y-2">
                            <label className="text-gray-200 text-sm font-medium pl-1">Password</label>
                            <div className="flex">
                                <input
                                    ref={passwordRef}
                                    type={showPass ? "text" : "password"}
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                                    focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 
                                    text-white outline-none transition-all duration-300"
                                    placeholder="Create a strong password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPass(!showPass)}
                                    className="text-gray-400 absolute right-3 mt-4"
                                >
                                    {showPass ? (
                                        <EyeSlashIcon className="h-5 w-5" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                            {passwordError && (
                                <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                            )}
                        </div>

                        {/* Confirm Password input */}
                        <div className="space-y-2">
                            <label className="text-gray-200 text-sm font-medium pl-1">Confirm Password</label>
                            <div className="flex">
                                <input
                                    ref={confirmPasswordRef}
                                    type={showConfirmPass ? "text" : "password"}
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                                    focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 
                                    text-white outline-none transition-all duration-300"
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setConfirmPass(!showConfirmPass)}
                                    className="text-gray-400 absolute right-3 mt-4"
                                >
                                    {showConfirmPass ? (
                                        <EyeSlashIcon className="h-5 w-5" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Terms and Privacy checkbox */}
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
                                I agree to the{" "}
                                <a href="#" className="text-blue-400 hover:text-blue-300">
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a href="#" className="text-blue-400 hover:text-blue-300">
                                    Privacy Policy
                                </a>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={!isAgreed || !username || !email || !password || !confirmPassword}
                            className={`w-full py-3 px-4 relative bg-gradient-to-r from-[#4f46e5] via-[#ec4899] to-[#8b5cf6] text-white rounded-lg font-medium
    hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
    bg-[length:200%_auto] animate-gradient-x before:absolute before:inset-0 before:blur-xl before:bg-inherit before:opacity-40
    ${!isAgreed || !username || !email || !password || !confirmPassword ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Create Account
                        </button>

                    </form>

                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
