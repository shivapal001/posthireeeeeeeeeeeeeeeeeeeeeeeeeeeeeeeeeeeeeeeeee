import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { 
  Settings2, 
  CheckCircle2, 
  MapPin, 
  X, 
  Heart,
  ArrowUpRight,
  Zap
} from 'lucide-react';

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
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function Discover() {
  const navigate = useNavigate();
  const { role } = useApp();

  const isFounder = role === 'founder';

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col flex-1 bg-slate-50 dark:bg-slate-950"
    >
      <header className="sticky top-0 z-50 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-primary/10">
        <div className="max-w-md mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap size={20} className="text-primary" />
            <h1 className="text-[12px] font-bold uppercase tracking-[0.4em] text-gradient-colorful">PostHire</h1>
          </div>
          <button className="size-10 flex items-center justify-center rounded-full border border-primary/10 text-neutral-400 dark:text-neutral-500 hover:text-primary hover:bg-primary/5 transition-all">
            <Settings2 size={18} />
          </button>
        </div>
      </header>

      <main className="flex-1 p-6 flex flex-col gap-10 pb-32">
        <motion.div variants={itemVariants} className="flex items-center justify-between px-1">
          <div>
            <h2 className="text-3xl font-light text-gradient-colorful tracking-tighter mb-1">Discover</h2>
            <p className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.3em]">
              {isFounder ? 'Find your next brand ambassador' : 'Find your next brand collaboration'}
            </p>
          </div>
          <div className="px-4 py-1.5 bg-gradient-colorful text-[10px] font-bold uppercase tracking-widest text-slate-50 rounded-full glow-primary">
            12 New Matches
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="relative flex-1 min-h-[540px] group">
          <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 overflow-hidden flex flex-col border border-primary/20 transition-all duration-700 hover:shadow-2xl dark:hover:shadow-primary/5 hover:border-primary/40">
            <div className="relative h-[60%] w-full overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-all duration-1000" 
                style={{ backgroundImage: `url('${isFounder ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuAClKVh0dbi0tm-a0Aby9ajt0sZJ2ihVQA5OA7244rtG_uoe2aWOOVBGa-9FVvk3ppLAtCTTrCwGbPokY6KBvOAjt5QU0hZ42misj0ADefmFvhXQO8yNtXPAnK2RV6SF2fMIaKRakpJXKhjneOScJkWiZa9gknpMB8UeQQFRclyLDwh7qSioX-6zXRxNv3XIrUwlP79paguh5HI9NWAtA4f3kWuPbndRjtxrZdqGGzMcwFhFQ6QNO4UwfVe8ddLb0xbdquwraSPZnE2' : 'https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800&h=600'}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-slate-50">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="text-3xl font-light tracking-tighter">{isFounder ? 'Marcus Chen, 26' : 'PostHire Tech'}</h3>
                  <CheckCircle2 size={16} className="text-slate-50" />
                </div>
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] opacity-60">
                  <MapPin size={12} />
                  {isFounder ? 'San Francisco, CA' : 'Bangalore, KA'}
                </div>
              </div>
              <div className="absolute top-8 right-8 bg-gradient-to-r from-primary/80 to-secondary/80 backdrop-blur-xl border border-slate-50/20 text-slate-50 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.4em] rounded-full glow-secondary">
                {isFounder ? '98% Match' : 'High Budget'}
              </div>
            </div>
            <div className="p-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex gap-10 mb-10">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-neutral-400 dark:text-neutral-500 font-bold uppercase tracking-[0.3em] mb-2.5">{isFounder ? 'Niche' : 'Industry'}</span>
                    <span className="text-[12px] font-bold text-primary uppercase tracking-widest">{isFounder ? 'Tech & Lifestyle' : 'SaaS & HR Tech'}</span>
                  </div>
                  <div className="w-px h-12 bg-primary/10"></div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-neutral-400 dark:text-neutral-500 font-bold uppercase tracking-[0.3em] mb-2.5">{isFounder ? 'Followers' : 'Budget Range'}</span>
                    <span className="text-[12px] font-bold text-primary uppercase tracking-widest">{isFounder ? '184K' : '₹10K - ₹50K'}</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2 mb-10 leading-relaxed font-medium uppercase tracking-tight">
                  {isFounder 
                    ? 'Helping brands tell stories through cinematic tech reviews and minimalist workspace setups. Focused on high-quality production.'
                    : 'We are looking for tech-savvy creators to showcase our new platform features to a professional audience. Long-term partnership possible.'}
                </p>
                <div className="flex flex-wrap gap-4">
                  {[isFounder ? 'SaaS' : 'B2B', isFounder ? 'Productivity' : 'Networking', isFounder ? 'Minimalism' : 'Career'].map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 border border-primary/10 text-neutral-400 dark:text-neutral-500 text-[9px] font-bold uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-6 mt-12">
                <button 
                  onClick={() => isFounder ? navigate('/creator/1') : navigate('/brand/1')}
                  className="flex-1 py-5 border border-primary/40 text-primary text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-primary/5 hover:border-primary transition-all duration-500 flex items-center justify-center gap-3 group rounded-xl"
                >
                  {isFounder ? 'View Profile' : 'View Brand'} <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <button className="flex-1 py-5 bg-gradient-colorful text-slate-50 text-[11px] font-bold uppercase tracking-[0.3em] hover:opacity-90 transition-opacity rounded-xl glow-primary">
                  {isFounder ? 'Collab Request' : 'Apply Now'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-16 py-8">
          <button className="size-24 rounded-full border border-primary/10 flex items-center justify-center text-neutral-300 dark:text-neutral-700 hover:text-danger hover:border-danger hover:bg-danger/5 transition-all duration-700 group hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]">
            <X size={40} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-700" />
          </button>
          <button className="size-24 rounded-full border border-primary/10 flex items-center justify-center text-neutral-300 dark:text-neutral-700 hover:text-secondary hover:border-secondary hover:bg-secondary/5 transition-all duration-700 group hover:glow-secondary hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]">
            <Heart size={40} strokeWidth={1} className="group-hover:scale-125 transition-transform duration-700" />
          </button>
        </motion.div>
      </main>
    </motion.div>
  );
}
