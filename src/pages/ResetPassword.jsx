import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { Terminal, Lock, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const { t } = useApp();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [completed, setCompleted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            toast.error("Invalid Request", { description: "Reset token is missing." });
            navigate('/login');
        }
    }, [token, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Mismatch", { description: "Passwords do not match." });
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(`${window.VITE_API_URL || '/api'}/auth/reset-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, new_password: password })
            });

            if (response.ok) {
                setCompleted(true);
                toast.success("Success", { description: "Password updated successfully." });
                setTimeout(() => navigate('/login'), 3000);
            } else {
                const err = await response.json();
                toast.error("Error", { description: err.error || "Failed to reset password." });
            }
        } catch (error) {
            toast.error("Network Error", { description: "Could not connect to server." });
        } finally {
            setLoading(false);
        }
    };

    if (completed) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6 pb-32">
                <div className="max-w-[480px] w-full bg-white/5 backdrop-blur-3xl p-12 md:p-16 rounded-[48px] shadow-2xl border border-white/10 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-600/10 text-red-600 mb-10 border border-red-600/20 shadow-2xl">
                        <CheckCircle2 size={48} />
                    </div>
                    <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-4">Update <span className="text-red-600">Success</span></h1>
                    <p className="text-slate-400 mb-10 font-medium">Access protocols restored. You are being redirected to the terminal login.</p>
                    <div className="flex justify-center">
                        <div className="w-10 h-10 border-4 border-red-600/20 border-t-red-600 rounded-full animate-spin"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-6 pb-32">
            <div className="max-w-[480px] w-full bg-white/5 backdrop-blur-3xl p-12 md:p-16 rounded-[48px] shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>

                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-600/10 text-red-600 mb-8 border border-red-600/20 shadow-xl">
                        <Terminal size={32} />
                    </div>
                    <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-3">Access <span className="text-red-600">Recovery</span></h1>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em]">Initialize Security Credentials</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-3">
                        <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 ml-1">Terminal Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:ring-1 focus:ring-red-600/50 transition-all font-bold text-sm placeholder:text-slate-800"
                                placeholder="••••••••••••"
                                required minLength={8}
                            />
                            <Lock className="absolute right-6 top-5 text-slate-700" size={20} />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 ml-1">Confirm Protocol</label>
                        <div className="relative">
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:ring-1 focus:ring-red-600/50 transition-all font-bold text-sm placeholder:text-slate-800"
                                placeholder="••••••••••••"
                                required
                            />
                            <Lock className="absolute right-6 top-5 text-slate-700" size={20} />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-red-600 text-white font-black uppercase tracking-[0.3em] text-xs py-6 rounded-2xl shadow-2xl shadow-red-900/40 hover:bg-red-500 transition-all active:scale-[0.98] disabled:opacity-50 italic"
                    >
                        {loading ? "Adjusting Credentials..." : "Execute Reset Sequence"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
