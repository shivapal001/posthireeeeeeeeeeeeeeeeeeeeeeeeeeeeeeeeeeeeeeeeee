import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  MoreVertical, 
  CheckCircle2, 
  Instagram, 
  Youtube, 
  Music2, 
  Globe, 
  Lock, 
  ArrowUpRight,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function CreatorProfile() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative max-w-md mx-auto min-h-screen bg-slate-50 dark:bg-slate-950 shadow-xl flex flex-col"
    >
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-xl p-6 justify-between border-b border-primary/10">
        <button 
          onClick={() => navigate(-1)}
          className="text-primary flex size-8 items-center justify-start hover:opacity-50 transition-opacity"
        >
          <ChevronLeft size={18} />
        </button>
        <h2 className="text-primary text-[11px] font-bold uppercase tracking-[0.4em]">Creator Profile</h2>
        <button className="text-neutral-400 dark:text-neutral-500 flex size-8 items-center justify-end hover:text-primary transition-colors">
          <MoreVertical size={16} />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto pb-32">
        {/* Profile Hero Section */}
        <motion.div variants={itemVariants} className="flex p-8 flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="size-32 rounded-full p-1 border border-primary/5 dark:border-slate-50/10 overflow-hidden bg-slate-50 dark:bg-slate-50/5">
              <img 
                className="size-full rounded-full object-cover transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRm59QuNj8qZw6TTn-fV_BwDftH6cfv1x3hVfUyMxpLEbtRXsikAd3JDaL8eRwg1SkeIeDRmImsyqX4NzMQA1uXJc5i_YBpaJ0XepaDiNfYzgmjxu5uXkrXc8UswnMd-nJDZ4yj1sxIINLJ2uRy3ic0-z3Emr2f0BthWc047j61llsNbRJ6T-EqIYqzbCkveqwmiiBagQHlvhpHLBFPcGefqHI0CMfm7P1G894uOpYPLDwaEi2PrlNxQIFRJadaq41pHI0sv3GcjFn" 
                alt="Marcus Chen"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-2 right-2 bg-primary text-slate-50 p-1.5 rounded-full border-2 border-slate-50 dark:border-slate-950">
              <CheckCircle2 size={12} />
            </div>
          </div>
          
          <h1 className="text-3xl font-light text-primary tracking-tighter mb-2">Marcus Chen</h1>
          <p className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.3em] mb-6">Lifestyle & Tech Reviewer</p>
          
          <div className="px-6 py-2.5 bg-gradient-colorful rounded-full glow-primary">
            <p className="text-slate-50 text-[10px] font-bold uppercase tracking-widest">Pro Creator ✨</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 w-full gap-8 mt-12 border-y border-primary/10 py-12">
            <div className="flex flex-col items-center">
              <p className="text-primary font-light text-3xl tracking-tighter">124K</p>
              <p className="text-neutral-400 dark:text-neutral-600 text-[8px] font-bold uppercase tracking-widest mt-2">Followers</p>
            </div>
            <div className="flex flex-col items-center border-x border-primary/10">
              <p className="text-primary font-light text-3xl tracking-tighter">4.8%</p>
              <p className="text-neutral-400 dark:text-neutral-600 text-[8px] font-bold uppercase tracking-widest mt-2">Engagement</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-primary font-light text-3xl tracking-tighter">52</p>
              <p className="text-neutral-400 dark:text-neutral-600 text-[8px] font-bold uppercase tracking-widest mt-2">Brands</p>
            </div>
          </div>

          {/* About Section */}
          <div className="w-full mt-12 text-left">
            <h3 className="text-neutral-400 dark:text-neutral-600 text-[9px] font-bold uppercase tracking-[0.4em] mb-4">About</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-medium uppercase tracking-tight">
              Helping brands reach Gen-Z through authentic tech storytelling and aesthetic lifestyle content. 5+ years of experience in high-end video production.
            </p>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-4 gap-6 w-full mt-12">
            {[
              { icon: Instagram, label: 'Instagram' },
              { icon: Youtube, label: 'YouTube' },
              { icon: Music2, label: 'TikTok', locked: true },
              { icon: Globe, label: 'Website', locked: true }
            ].map((social, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group relative">
                <div className={`size-12 flex items-center justify-center text-neutral-400 dark:text-neutral-600 group-hover:text-primary transition-all ${social.locked ? 'opacity-30' : ''}`}>
                  <social.icon size={20} strokeWidth={1.5} />
                </div>
                <span className={`text-[8px] font-bold text-neutral-400 uppercase tracking-widest ${social.locked ? 'opacity-30' : ''}`}>{social.label}</span>
                {social.locked && <Lock size={8} className="absolute top-0 right-2 text-neutral-300 dark:text-neutral-700" />}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex w-full gap-4 mt-16">
            <button className="flex-1 bg-gradient-colorful text-slate-50 h-16 text-[11px] font-bold uppercase tracking-[0.3em] hover:opacity-90 transition-opacity flex items-center justify-center gap-3 rounded-xl glow-primary">
              Request Collaboration
            </button>
            <button className="w-16 border border-secondary/20 text-secondary h-16 flex items-center justify-center relative cursor-not-allowed group rounded-xl hover:glow-secondary">
              <MessageSquare size={20} strokeWidth={1.5} />
              <Lock size={8} className="absolute top-3 right-3" />
              <div className="absolute -top-12 scale-0 group-hover:scale-100 transition-transform bg-secondary text-slate-50 text-[8px] font-bold uppercase tracking-widest py-2.5 px-4 whitespace-nowrap rounded-lg glow-secondary">
                Upgrade to Message
              </div>
            </button>
          </div>
        </motion.div>

        {/* Portfolio Section */}
        <motion.div variants={itemVariants} className="px-8 py-12 border-t border-primary/10">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-neutral-400 dark:text-neutral-600 text-[9px] font-bold uppercase tracking-[0.4em]">Portfolio</h3>
            <button className="text-primary text-[9px] font-bold uppercase tracking-widest flex items-center gap-2 hover:opacity-50 transition-opacity">
              View All <ArrowUpRight size={12} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-[3/4] bg-slate-50 dark:bg-slate-50/5 relative group overflow-hidden border border-primary/5 dark:border-slate-50/5">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFQpM41ZNXGdtK8gOTd5f76Pv0qVEEDwj1MdT50d1MkNW9HfiHEMoQcZaDi8Hgsk30q5Hma3bzrRn3x3iw7IcH4i_L2jQ9FG42xvogB14BAtMfiMSdE6QavFLAiqTXGKmtIO4V5sU4_Ts8-bdrpmJCFagWwVBv_gZuXjuQBAg3XJEu-qCZ62TucV-Mnxzd5PSFjbIQtMKbUcdSaYNiEAM_XgreQd7wkdWahpk4qwB_oBkgEyW-pwSr0VYc99lw8qxitjigfhnXC-ij" alt="Portfolio 1" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-slate-50 text-[9px] font-bold uppercase tracking-widest">Tech Review</span>
              </div>
            </div>
            <div className="aspect-[3/4] bg-slate-50 dark:bg-slate-50/5 relative group overflow-hidden border border-primary/5 dark:border-slate-50/5">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALZ9B0A6hwL0fQ1MVzsKkLjWgTIBiKv8TW3SAlEmCPgFzilr50uWPpvq_7dE3u8ZPQaEvUKwL8eUCVw_YNPBUi65iHdlHKirDlur3xqABR-7iPN-_H72VJQzPW5yZq9tLgORo6FBLrvoHkJDhBB33uGnmiC9BqF1i9BRjUZHPGYr6DnjQNDWUIqUlylg3P5bmZeNFGLZvQWr2OcBcI5pxmbaILRNh9iRGTtP7t8pNMHTOPNrMQlR1e5pQwXZ4pjhqUtrHC01V0fH79" alt="Portfolio 2" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-slate-50 text-[9px] font-bold uppercase tracking-widest">Fashion Collab</span>
              </div>
            </div>
            {/* Blurred Locked Portfolio Item */}
            <div className="aspect-[3/4] bg-slate-50 dark:bg-slate-50/5 relative group overflow-hidden border border-primary/5 dark:border-slate-50/5">
              <img className="w-full h-full object-cover blur-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwfpDMDjDC-LFah322RQ90nqA9S4i_IsYFTD3jwGfrYR62kbg7v27KZyHF7KYEHkDVL3Vg8W6OZmt_auOGwrhH_HZUVDOxXVay8TlkrwiWud1J8EWXF-DJc9y1vAWWQm7oK6BwLLstoAeEHskXGFkWrbjeeYt0lDpgmnKH1dWfRwSMERDY_rd5CvalqRADTE6ML53lmBn8hitWqIFpa--HsEZzA-xjhibuijAywRI7kcWqS7ExZESd4mla9fzPSXtLaMMoJ4d_CPPT" alt="Portfolio 3" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[4px] flex flex-col items-center justify-center p-8 text-center">
                <Lock size={18} className="text-slate-50/80 mb-4" strokeWidth={1.5} />
                <span className="text-slate-50 text-[9px] font-bold uppercase tracking-[0.4em]">UPGRADE TO VIEW</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Analytics Nudge */}
        <motion.div variants={itemVariants} className="mx-8 mt-4 p-10 bg-primary/5 dark:bg-primary/10 border border-primary/10 relative overflow-hidden group">
          <div className="relative z-10">
            <h4 className="text-primary font-bold text-[11px] uppercase tracking-[0.3em] mb-3">Detailed Analytics</h4>
            <p className="text-neutral-500 dark:text-neutral-500 text-[11px] leading-relaxed mb-8 max-w-[220px] uppercase tracking-tight">See audience demographics, growth trends, and historical ROI for Marcus Chen.</p>
            <button 
              onClick={() => navigate('/plans')}
              className="px-8 py-4 bg-gradient-colorful text-slate-50 text-[10px] font-bold uppercase tracking-[0.3em] hover:opacity-90 transition-all flex items-center gap-3 group rounded-xl glow-primary"
            >
              Unlock Analytics <ArrowUpRight size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
          <TrendingUp size={140} strokeWidth={0.5} className="absolute -right-10 -bottom-10 text-primary/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
        </motion.div>
      </div>
    </motion.div>
  );
}
