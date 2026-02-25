import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Lock, Mail, ChevronRight, Eye, EyeOff } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Login = () => {
    const { login, signup, user, t } = useApp();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (!email.includes('@') && email.toUpperCase() !== 'ADMIN') {
                toast.error("Invalid Email", {
                    description: 'Please use your registered Email Address.'
                });
                setLoading(false);
                return;
            }

            const result = await login(email, password);
            if (result.success && result.user) {
                toast.success("Login Successful", {
                    description: `Authorized as ${result.user.username || result.user.email || 'User'}`
                });

                if (result.user.role === 'admin' || result.user.role === 'country_admin') {
                    navigate('/dashboard/admin/campaigns');
                } else {
                    navigate('/dashboard');
                }
            } else if (!result.success) {
                toast.error("Login Failed", { description: result.message || 'Invalid credentials provided.' });
            }
        } catch (error) {
            console.error('Auth Error:', error);
            toast.error("Authentication Error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center">

            <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12 relative">

                {/* Central Login Card */}
                <div className="flex-1 max-w-[500px] w-full mt-4 md:mt-12">
                    <div className="bg-[#0a0f1d]/60 backdrop-blur-3xl border border-white/5 rounded-[40px] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative overflow-hidden group">
                        {/* Red Accent Bar at Top */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-600 to-transparent opacity-50"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            {/* Security Icon */}
                            <div className="w-16 h-16 bg-rose-600/10 border border-rose-500/20 rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-rose-900/10">
                                <Lock className="w-7 h-7 text-rose-500" />
                            </div>

                            <h2 className="text-3xl font-black text-white tracking-tighter mb-3">Welcome Back</h2>
                            <p className="text-slate-500 text-sm font-bold mb-12">Login with your Rule 7 account</p>

                            <form onSubmit={handleSubmit} className="w-full space-y-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Email Address</label>
                                    <div className="relative group/input">
                                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within/input:text-rose-500 transition-colors" />
                                        <input
                                            type="text"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="name@company.com"
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-2xl pl-12 pr-6 py-5 text-sm font-bold text-white placeholder:text-slate-700 focus:outline-none focus:border-rose-500/50 focus:ring-4 focus:ring-rose-500/5 transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Password</label>
                                    <div className="relative group/input">
                                        <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within/input:text-rose-500 transition-colors" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-2xl pl-12 pr-14 py-5 text-sm font-bold text-white placeholder:text-slate-700 focus:outline-none focus:border-rose-500/50 focus:ring-4 focus:ring-rose-500/5 transition-all"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white transition-colors"
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative w-5 h-5">
                                            <input
                                                type="checkbox"
                                                checked={rememberMe}
                                                onChange={() => setRememberMe(!rememberMe)}
                                                className="peer sr-only"
                                            />
                                            <div className="w-full h-full bg-slate-900 border border-white/10 rounded-md peer-checked:bg-rose-600 peer-checked:border-rose-600 transition-all"></div>
                                            <svg className="absolute inset-0 w-full h-full text-white scale-0 peer-checked:scale-100 transition-transform p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-bold text-slate-500 group-hover:text-slate-300 transition-colors">Remember me</span>
                                    </label>
                                    <Link to="/reset-password" title="Under Construction" className="text-xs font-bold text-rose-500 hover:text-rose-400 hover:underline transition-all underline-offset-4">
                                        Forgot Password?
                                    </Link>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-rose-700 hover:bg-rose-600 text-white font-black uppercase tracking-widest text-[11px] py-6 rounded-2xl shadow-2xl shadow-rose-900/40 transition-all flex items-center justify-center gap-3 active:scale-[0.98] group/btn"
                                >
                                    {loading ? "Authorizing..." : (
                                        <>
                                            Sign In <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="mt-12 text-center">
                                <p className="text-slate-500 text-sm font-bold">
                                    Don't have an account? <Link to="/subscribe" className="text-white hover:text-rose-500 transition-all underline decoration-rose-500 underline-offset-8 decoration-2">Sign Up</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Rectangle Ad Placeholder below card */}
                    <div className="mt-12 w-full aspect-[300/250] max-w-[300px] mx-auto bg-slate-900/30 border border-white/5 rounded-lg flex items-center justify-center relative overflow-hidden group hover:border-white/10 transition-colors">
                        <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,#fff,#fff_10px,transparent_10px,transparent_20px)]"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-700 text-center px-4">Medium Rectangle - 300x250</span>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Login;
