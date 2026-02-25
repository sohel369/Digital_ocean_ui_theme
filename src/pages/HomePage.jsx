import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { MapPin, CheckCircle2, Share2, Users, Rocket, Target, Shield, Zap, ChevronLeft, ChevronRight, Cookie } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useApp();
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');

  // If already logged in, redirect to dashboard
  useEffect(() => {
    if (user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    import('sonner').then(({ toast }) => {
      toast.success("Subscription Received!", {
        description: "Your spot has been secured. Welcome to Rule 7 Media."
      });
      navigate('/subscribe-success');
    });
  };

  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "The 30 Hidden Benefits to Vehicle Wrapping Businesses by Joining a Global Platform",
      category: "Growth Strategy",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Unlocking Success: The Power of Global Platforms for Vehicle Wrapping Businesses",
      category: "Success Stories",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Maximize Your Fleet Value: How Global Brands Choose Local Specialists",
      category: "Fleet Management",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Why Global Advertisers are Pushing for Local Wrap Experts in 2026",
      category: "Industry Trends",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "From Local Shop to Global Partner: Scalability in Vehicle Wrapping",
      category: "Scale & Efficiency",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Exclusive Territory Rights: Securing Your Business Future",
      category: "Exclusivity",
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-rose-500/30 font-sans">

      {/* HERO SECTION */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-rose-900/40 via-transparent to-transparent blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-10">
            <div className="px-5 py-2 rounded-full border border-rose-500/20 bg-rose-500/5 backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-400">Elite Network: Limited Availability</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-[1.05] tracking-tighter mb-10">
            <span className="block mb-2">Unlock <span className="text-rose-600 italic">Explosive</span> Growth</span>
            <span className="text-white/40">Exclusive Global Platform</span>
          </h1>

          <p className="max-w-3xl mx-auto mb-12 text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
            The first-of-its-kind resource connecting reputable <span className="text-white">Local wrapping specialists</span> with high-value national and global fleet managers and advertisers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => navigate('/subscribe')}
              className="w-full sm:w-auto px-10 py-5 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl transition-all flex items-center justify-center gap-3 shadow-2xl shadow-red-900/40 hover:scale-105 active:scale-95"
            >
              Join the Auction Platform <Rocket className="w-4 h-4" />
            </button>
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl transition-all backdrop-blur-xl"
            >
              Explore Features
            </button>
          </div>
        </div>
      </section>

      {/* ===== TRUSTED PARTNERS ===== */}
      <section className="py-16 px-6 border-y border-white/5 bg-slate-900/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-12 md:gap-24 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-rose-500" />
            <span className="text-xs font-black uppercase tracking-tighter text-slate-300">SecureFleet</span>
          </div>
          <div className="flex items-center gap-3">
            <Rocket className="w-5 h-5 text-rose-500" />
            <span className="text-xs font-black uppercase tracking-tighter text-slate-300">FastTrack Ad</span>
          </div>
          <div className="flex items-center gap-3">
            <Target className="w-5 h-5 text-rose-500" />
            <span className="text-xs font-black uppercase tracking-tighter text-slate-300">PrecisionGeo</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-rose-500" />
            <span className="text-xs font-black uppercase tracking-tighter text-slate-300">SparkMedia</span>
          </div>
        </div>
      </section>

      {/* ===== VIDEO SECTION ===== */}
      <section className="py-32 px-6 bg-[#02040a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-rose-900/5 blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 italic uppercase">
              Knowledge <span className="text-rose-600">Hub</span>
            </h2>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Industry Insights & Strategy</p>
          </div>

          <div className="relative group/slider">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={40}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
              breakpoints={{
                768: { slidesPerView: 1.5, spaceBetween: 30 },
                1280: { slidesPerView: 2, spaceBetween: 40 },
              }}
              className="pb-24"
            >
              {videos.map((video, index) => (
                <SwiperSlide key={index}>
                  <div className="px-4 group">
                    <div className="video-container mb-10 shadow-2xl bg-black rounded-[32px] overflow-hidden border border-white/5 group-hover:border-rose-500/30 transition-all duration-700">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="space-y-4 text-center md:text-left px-2">
                      <span className="text-[9px] font-black uppercase tracking-widest text-rose-500/60">
                        {video.category}
                      </span>
                      <h3 className="text-2xl font-black text-white italic uppercase tracking-tight leading-[1.15] group-hover:text-rose-500 transition-colors duration-500">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="swiper-button-prev-custom absolute left-[-20px] top-[40%] -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-black/80 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-all duration-500 hover:bg-rose-600">
              <ChevronLeft size={30} />
            </button>
            <button className="swiper-button-next-custom absolute right-[-20px] top-[40%] -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-black/80 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-all duration-500 hover:bg-rose-600">
              <ChevronRight size={30} />
            </button>

            <div className="swiper-pagination-custom flex justify-center gap-3 mt-4"></div>
          </div>
        </div>
      </section>

      {/* ===== UNTAPPED MARKET SECTION ===== */}
      <section id="how-it-works" className="py-32 px-6 border-y border-white/5 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-rose-500 mb-6 block leading-none">New Revenue Stream</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-[1.05] uppercase">
                Access the <br />
                <span className="text-rose-600 italic">Untapped</span> <br />
                Ad-Hoc Market
              </h2>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-lg font-medium">
                Reach an entirely new segment of businesses eager to promote products but lacking their own vehicles. We bridge the gap, bringing high-intent advertisers directly to your doorstep.
              </p>

              <ul className="space-y-6">
                {[
                  "Direct Fleet Manager Pipeline",
                  "No Vehicle? No Problem Advertising Leads",
                  "Rapid Scalability for Local Businesses"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-rose-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2 grid grid-cols-2 gap-8">
              <div className="bg-[#0a0f1d] p-12 rounded-[40px] border border-white/5 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-rose-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-6xl font-black text-rose-600 mb-3 tracking-tighter scale-110">10X</div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Market Reach</div>
              </div>
              <div className="bg-[#0a0f1d] p-12 rounded-[40px] border border-white/5 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-6xl font-black text-white mb-3 tracking-tighter scale-110">0</div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Competition</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE GOTTA SCAN BANNER ===== */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-[#0a0f1d] rounded-[4rem] p-12 md:p-24 border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center gap-16 shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
            <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none">
              <Zap className="w-[500px] h-[500px] text-rose-500" />
            </div>

            <div className="flex-1 space-y-10 relative z-10 text-center md:text-left">
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-rose-500 block">Proprietary Viral Engine</span>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1] uppercase">
                The Gotta Scan<br />
                <span className="text-rose-600 italic">Them All ™</span>
              </h2>
              <p className="text-slate-400 max-w-md text-lg leading-relaxed font-medium">
                Our game-changing viral initiative turns every wrapped vehicle into a lead-generating powerhouse. We drive word-of-mouth referrals through interactive engagement.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-5">
                {[
                  { icon: <Share2 size={18} />, label: "Viral Share" },
                  { icon: <Users size={18} />, label: "Community" },
                  { icon: <Rocket size={18} />, label: "Growth" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-white/70">
                    <div className="text-rose-500">{item.icon}</div>
                    <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-[400px] relative group">
              <div className="absolute inset-0 bg-rose-600/20 blur-[60px] rounded-full opacity-30 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-[#111827]/80 backdrop-blur-3xl p-12 rounded-[40px] border border-white/10 shadow-2xl relative z-10">
                <div className="text-[10px] font-black text-rose-500 mb-12 tracking-[0.4em] uppercase">Engine Performance</div>
                <div className="space-y-10">
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <div className="text-[10px] font-black text-white uppercase tracking-widest">Viral Engagement</div>
                      <div className="text-sm font-black text-rose-500">98.4%</div>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-600 rounded-full w-[98.4%] shadow-[0_0_15px_rgba(225,29,72,0.5)]"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <div className="text-[10px] font-black text-white uppercase tracking-widest">Lead Intensity</div>
                      <div className="text-sm font-black text-white/90">ULTRA+</div>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {[100, 80, 95, 100].map((h, i) => (
                        <div key={i} className="bg-white/10 h-16 rounded-xl relative overflow-hidden">
                          <div className="absolute bottom-0 left-0 right-0 bg-rose-600/40" style={{ height: `${h}%` }}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TERRITORY LOCK ===== */}
      <section id="exclusive" className="py-44 px-6 text-center bg-[#02040a]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-[2rem] bg-rose-600/10 border border-rose-500/20 flex items-center justify-center shadow-2xl shadow-rose-900/20">
              <MapPin className="w-8 h-8 text-rose-500" />
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-[1] uppercase">
            Exclusive <br />
            <span className="text-rose-600">Territory Lock.</span>
          </h2>

          <p className="text-base text-slate-500 font-bold leading-relaxed max-w-2xl mx-auto uppercase tracking-[0.3em]">
            Strict 30-Mile radius protection for early partners. Secure your market dominance before it's gone.
          </p>

          <button
            onClick={() => navigate('/subscribe')}
            className="px-12 py-5 bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-2xl shadow-red-900/40 hover:scale-105 active:scale-95"
          >
            Check Availability
          </button>
        </div>
      </section>

      {/* Transitional Spacer before Footer */}
      <div className="h-24 bg-gradient-to-b from-[#02040a] to-black"></div>

    </div>
  );
};

export default HomePage;
