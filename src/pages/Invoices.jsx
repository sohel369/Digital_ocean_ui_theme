import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
    FileText,
    Download,
    ExternalLink,
    Search,
    Filter,
    Calendar,
    ChevronRight,
    CheckCircle2,
    Clock,
    AlertCircle,
    ArrowUpRight
} from 'lucide-react';

const Invoices = () => {
    const { getAuthHeaders, API_BASE_URL, formatCurrency, t, currency } = useApp();
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/invoices/`, {
                    headers: getAuthHeaders()
                });
                if (res.ok) {
                    const data = await res.json();
                    setInvoices(data);
                }
            } catch (error) {
                console.error("Failed to fetch invoices:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchInvoices();
    }, [API_BASE_URL]);

    const filteredInvoices = invoices.filter(inv =>
        inv.invoice_number.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusStyle = (status) => {
        switch (status.toLowerCase()) {
            case 'paid':
                return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
            case 'pending':
                return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
            case 'cancelled':
                return 'bg-red-500/10 text-red-400 border-red-500/20';
            default:
                return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
            {/* Header Area */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
                        Billing <span className="text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">& Invoices</span>
                    </h1>
                    <p className="text-slate-400 font-bold text-xs md:text-sm uppercase tracking-widest pl-1">
                        Management of your financial commitments and transaction history
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="relative group w-full sm:w-64">
                        <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-lg group-focus-within:bg-primary/10 transition-all duration-500"></div>
                        <div className="relative flex items-center h-12">
                            <Search className="absolute left-4 text-slate-500" size={18} />
                            <input
                                type="text"
                                placeholder="Search Invoice #"
                                className="w-full h-full bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl pl-12 pr-4 text-sm text-slate-100 outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600 font-bold"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <button className="h-12 px-6 flex items-center justify-center gap-2 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all">
                        <Filter size={18} />
                        <span className="text-xs font-black uppercase tracking-widest">Filter</span>
                    </button>
                </div>
            </div>

            {/* Invoices List */}
            <div className="glass-panel rounded-[2.5rem] overflow-hidden border border-white/5 bg-slate-950/40 backdrop-blur-3xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/5">
                                <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] italic">Invoice Information</th>
                                <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] italic">Billing Cycle</th>
                                <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] italic">Status</th>
                                <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] italic text-right">Total Amount</th>
                                <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] italic text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {loading ? (
                                Array(5).fill(0).map((_, i) => (
                                    <tr key={i} className="animate-pulse">
                                        <td colSpan="5" className="px-8 py-6">
                                            <div className="h-4 bg-white/5 rounded w-full"></div>
                                        </td>
                                    </tr>
                                ))
                            ) : filteredInvoices.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="px-8 py-20 text-center">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-slate-700">
                                                <FileText size={32} />
                                            </div>
                                            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">No invoices found</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                filteredInvoices.map((inv) => (
                                    <tr key={inv.id} className="group hover:bg-primary/5 transition-colors">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                    <FileText size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-black text-white italic tracking-tight">{inv.invoice_number}</p>
                                                    <p className="text-[10px] text-slate-500 font-bold uppercase">Campaign ID: #{inv.campaign_id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                                                    <Calendar size={14} className="text-slate-500" />
                                                    {new Date(inv.billing_date).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}
                                                </div>
                                                <p className="text-[10px] text-slate-600 font-bold uppercase tracking-tighter">Due: {new Date(inv.due_date).toLocaleDateString()}</p>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest italic border ${getStatusStyle(inv.status)}`}>
                                                {inv.status === 'paid' ? <CheckCircle2 size={10} /> : (inv.status === 'pending' ? <Clock size={10} /> : <AlertCircle size={10} />)}
                                                {inv.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <p className="text-base font-black text-white italic tracking-tighter">{formatCurrency(inv.total_amount)}</p>
                                            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">({formatCurrency(inv.amount)} + Tax)</p>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-2.5 bg-white/5 hover:bg-primary hover:text-white rounded-xl text-slate-400 transition-all border border-white/5">
                                                    <Download size={18} />
                                                </button>
                                                <button className="p-2.5 bg-white/5 hover:bg-slate-800 rounded-xl text-slate-400 transition-all border border-white/5">
                                                    <ExternalLink size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Support Box */}
            <div className="glass-panel p-8 rounded-[2.5rem] bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                            <ArrowUpRight size={28} />
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-white uppercase italic tracking-tighter">Need Billing Support?</h3>
                            <p className="text-sm text-slate-500 font-medium">Our finance team is available 24/7 for account reconciliation and tax inquiries.</p>
                        </div>
                    </div>
                    <button className="premium-btn px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] italic shadow-2xl">
                        Open Support Ticket
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Invoices;
