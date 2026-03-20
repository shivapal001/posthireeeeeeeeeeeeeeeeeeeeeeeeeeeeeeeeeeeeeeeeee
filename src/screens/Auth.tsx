import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Rocket, Video, ArrowRight, Github, Linkedin, Mail, Lock, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { role: globalRole, setRole, setIsAuthenticated } = useApp();
  const [role, setLocalRole] = useState<'founder' | 'creator'>(globalRole);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setRole(role);
    setIsAuthenticated(true);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950 font-sans selection:bg-primary selection:text-slate-50 dark:selection:bg-primary dark:selection:text-slate-50">
      <div className="hidden md:flex flex-col justify-between w-[420px] bg-gradient-to-b from-primary via-secondary to-accent p-12 relative overflow-hidden border-r border-slate-50/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <div className="text-slate-50 text-[14px] font-bold uppercase tracking-[0.4em] cursor-pointer mb-24" onClick={() => navigate('/')}>
            POSTHIRE
          </div>
          
          <h2 className="text-slate-50 text-4xl font-extralight tracking-tighter leading-tight mb-6">
            Welcome <br />Back.
          </h2>
          <p className="text-slate-50/60 text-[11px] font-medium uppercase tracking-widest leading-relaxed mb-12">
            Sign in to continue your journey with PostHire and connect with the best creators or startups.
          </p>
          
          <div className="space-y-6">
            {[
              { icon: Rocket, text: 'Smart Discovery' },
              { icon: User, text: 'One-Click Connect' },
              { icon: Lock, text: 'Verified Profiles' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-4 text-slate-50/40 text-[10px] font-bold uppercase tracking-widest"
              >
                <item.icon size={14} className="text-slate-50/20" />
                {item.text}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative z-10 text-[9px] font-bold text-slate-50/20 uppercase tracking-widest">
          © 2025 POSTHIRE. ALL RIGHTS RESERVED.
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full max-w-[400px]"
        >
          <motion.h1 variants={itemVariants} className="text-primary text-2xl font-extralight tracking-tighter mb-2">Sign In</motion.h1>
          <motion.p variants={itemVariants} className="text-neutral-400 dark:text-neutral-500 text-[10px] font-bold uppercase tracking-widest mb-10">Enter your details to access your account.</motion.p>
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 mb-8">
            <button 
              onClick={() => setLocalRole('founder')}
              className={`flex flex-col items-center gap-3 p-6 border transition-all rounded-xl ${role === 'founder' ? 'border-primary bg-primary/5 dark:bg-primary/10 glow-primary' : 'border-primary/10 hover:border-primary/30'}`}
            >
              <Rocket size={20} className={role === 'founder' ? 'text-primary' : 'text-neutral-300 dark:text-neutral-700'} />
              <span className={`text-[9px] font-bold uppercase tracking-widest ${role === 'founder' ? 'text-primary' : 'text-neutral-400 dark:text-neutral-600'}`}>Founder</span>
            </button>
            <button 
              onClick={() => setLocalRole('creator')}
              className={`flex flex-col items-center gap-3 p-6 border transition-all rounded-xl ${role === 'creator' ? 'border-secondary bg-secondary/5 dark:bg-secondary/10 glow-secondary' : 'border-primary/10 hover:border-primary/30'}`}
            >
              <Video size={20} className={role === 'creator' ? 'text-secondary' : 'text-neutral-300 dark:text-neutral-700'} />
              <span className={`text-[9px] font-bold uppercase tracking-widest ${role === 'creator' ? 'text-secondary' : 'text-neutral-400 dark:text-neutral-600'}`}>Creator</span>
            </button>
          </motion.div>

          <form onSubmit={handleLogin} className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-[9px] font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-widest">Email Address</label>
              <div className="relative group">
                <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300 dark:text-neutral-700 group-focus-within:text-primary transition-colors" />
                <input 
                  type="email" 
                  className="w-full bg-transparent border border-primary/10 px-12 py-4 text-[13px] outline-none focus:border-primary transition-all text-primary" 
                  placeholder="NAME@COMPANY.COM" 
                  required 
                />
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-[9px] font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-widest">Password</label>
              <div className="relative group">
                <Lock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300 dark:text-neutral-700 group-focus-within:text-primary transition-colors" />
                <input 
                  type="password" 
                  className="w-full bg-transparent border border-primary/10 px-12 py-4 text-[13px] outline-none focus:border-primary transition-all text-primary" 
                  placeholder="••••••••" 
                  required 
                />
              </div>
            </motion.div>
            <motion.button 
              variants={itemVariants}
              type="submit" 
              className="w-full flex items-center justify-center gap-3 h-14 bg-gradient-colorful text-slate-50 text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity rounded-xl glow-primary"
            >
              Sign In <ArrowRight size={14} />
            </motion.button>
          </form>

          <motion.div variants={itemVariants} className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-primary/10"></div>
            <span className="text-[8px] font-bold text-neutral-300 dark:text-neutral-700 uppercase tracking-widest">OR CONTINUE WITH</span>
            <div className="flex-1 h-px bg-primary/10"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-3 h-12 border border-primary/10 text-[9px] font-bold uppercase tracking-widest hover:bg-primary/5 transition-all text-primary rounded-xl hover:glow-primary">
              <Linkedin size={14} /> LinkedIn
            </button>
            <button className="flex items-center justify-center gap-3 h-12 border border-primary/10 text-[9px] font-bold uppercase tracking-widest hover:bg-primary/5 transition-all text-primary rounded-xl hover:glow-primary">
              <Github size={14} /> Github
            </button>
          </motion.div>

          <motion.p variants={itemVariants} className="text-center mt-12 text-[10px] font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-widest">
            Don't have an account? <a onClick={() => navigate('/signup')} className="text-primary cursor-pointer hover:underline underline-offset-4 decoration-primary/30">Sign Up</a>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { role: globalRole, setRole, setIsAuthenticated } = useApp();
  const [role, setLocalRole] = useState<'founder' | 'creator'>(globalRole);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setRole(role);
    setIsAuthenticated(true);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950 font-sans selection:bg-primary selection:text-slate-50 dark:selection:bg-primary dark:selection:text-slate-50">
      <div className="hidden md:flex flex-col justify-between w-[420px] bg-primary dark:bg-primary/10 p-12 relative overflow-hidden border-r border-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent)] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <div className="text-slate-50 text-[14px] font-bold uppercase tracking-[0.4em] cursor-pointer mb-24" onClick={() => navigate('/')}>
            POSTHIRE
          </div>
          
          <h2 className="text-slate-50 text-4xl font-extralight tracking-tighter leading-tight mb-6">
            Start Your <br />Journey.
          </h2>
          <p className="text-slate-50/60 text-[11px] font-medium uppercase tracking-widest leading-relaxed mb-12">
            Join thousands of founders and creators building the future together.
          </p>
          
          <div className="space-y-6">
            {[
              { icon: Rocket, text: 'Smart Discovery' },
              { icon: User, text: 'One-Click Connect' },
              { icon: Lock, text: 'Verified Profiles' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-4 text-slate-50/40 text-[10px] font-bold uppercase tracking-widest"
              >
                <item.icon size={14} className="text-slate-50/20" />
                {item.text}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative z-10 text-[9px] font-bold text-slate-50/20 uppercase tracking-widest">
          © 2025 POSTHIRE. ALL RIGHTS RESERVED.
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full max-w-[400px]"
        >
          <motion.h1 variants={itemVariants} className="text-primary text-2xl font-extralight tracking-tighter mb-2">Create Account</motion.h1>
          <motion.p variants={itemVariants} className="text-neutral-400 dark:text-neutral-500 text-[10px] font-bold uppercase tracking-widest mb-10">Join PostHire and start collaborating.</motion.p>
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 mb-8">
            <button 
              onClick={() => setLocalRole('founder')}
              className={`flex flex-col items-center gap-3 p-6 border transition-all rounded-xl ${role === 'founder' ? 'border-primary bg-primary/5 dark:bg-primary/10 glow-primary' : 'border-primary/10 hover:border-primary/30'}`}
            >
              <Rocket size={20} className={role === 'founder' ? 'text-primary' : 'text-neutral-300 dark:text-neutral-700'} />
              <span className={`text-[9px] font-bold uppercase tracking-widest ${role === 'founder' ? 'text-primary' : 'text-neutral-400 dark:text-neutral-600'}`}>Founder</span>
            </button>
            <button 
              onClick={() => setLocalRole('creator')}
              className={`flex flex-col items-center gap-3 p-6 border transition-all rounded-xl ${role === 'creator' ? 'border-secondary bg-secondary/5 dark:bg-secondary/10 glow-secondary' : 'border-primary/10 hover:border-primary/30'}`}
            >
              <Video size={20} className={role === 'creator' ? 'text-secondary' : 'text-neutral-300 dark:text-neutral-700'} />
              <span className={`text-[9px] font-bold uppercase tracking-widest ${role === 'creator' ? 'text-secondary' : 'text-neutral-400 dark:text-neutral-600'}`}>Creator</span>
            </button>
          </motion.div>

          <form onSubmit={handleSignup} className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-[9px] font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-widest">Full Name</label>
              <div className="relative group">
                <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300 dark:text-neutral-700 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  className="w-full bg-transparent border border-primary/10 px-12 py-4 text-[13px] outline-none focus:border-primary transition-all text-primary" 
                  placeholder="JOHN DOE" 
                  required 
                />
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-[9px] font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-widest">Email Address</label>
              <div className="relative group">
                <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300 dark:text-neutral-700 group-focus-within:text-primary transition-colors" />
                <input 
                  type="email" 
                  className="w-full bg-transparent border border-primary/10 px-12 py-4 text-[13px] outline-none focus:border-primary transition-all text-primary" 
                  placeholder="NAME@COMPANY.COM" 
                  required 
                />
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-[9px] font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-widest">Password</label>
              <div className="relative group">
                <Lock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300 dark:text-neutral-700 group-focus-within:text-primary transition-colors" />
                <input 
                  type="password" 
                  className="w-full bg-transparent border border-primary/10 px-12 py-4 text-[13px] outline-none focus:border-primary transition-all text-primary" 
                  placeholder="••••••••" 
                  required 
                />
              </div>
            </motion.div>
            <motion.button 
              variants={itemVariants}
              type="submit" 
              className="w-full flex items-center justify-center gap-3 h-14 bg-gradient-colorful text-slate-50 text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity rounded-xl glow-primary"
            >
              Sign Up <ArrowRight size={14} />
            </motion.button>
          </form>

          <motion.div variants={itemVariants} className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-primary/10"></div>
            <span className="text-[8px] font-bold text-neutral-300 dark:text-neutral-700 uppercase tracking-widest">OR JOIN WITH</span>
            <div className="flex-1 h-px bg-primary/10"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-3 h-12 border border-primary/10 text-[9px] font-bold uppercase tracking-widest hover:bg-primary/5 transition-all text-primary rounded-xl hover:glow-primary">
              <Linkedin size={14} /> LinkedIn
            </button>
            <button className="flex items-center justify-center gap-3 h-12 border border-primary/10 text-[9px] font-bold uppercase tracking-widest hover:bg-primary/5 transition-all text-primary rounded-xl hover:glow-primary">
              <Github size={14} /> Github
            </button>
          </motion.div>

          <motion.p variants={itemVariants} className="text-center mt-12 text-[10px] font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-widest">
            Already have an account? <a onClick={() => navigate('/login')} className="text-primary cursor-pointer hover:underline underline-offset-4 decoration-primary/30">Sign In</a>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};
