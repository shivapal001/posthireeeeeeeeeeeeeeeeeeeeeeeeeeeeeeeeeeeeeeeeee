import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  CheckCircle2, 
  Sparkles, 
  Trophy, 
  BarChart3, 
  Headphones, 
  ChevronDown,
  Home,
  Search,
  CreditCard,
  User,
  ArrowUpRight
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

export default function Plans() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-slate-50 dark:bg-slate-950 shadow-xl overflow-x-hidden"
    >
      <header className="sticky top-0 z-30 flex items-center bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-xl px-6 py-8 border-b border-primary/10 justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="text-primary flex size-8 items-center justify-start hover:opacity-50 transition-opacity"
        >
          <ChevronLeft size={18} />
        </button>
        <h2 className="text-gradient-colorful text-[11px] font-bold uppercase tracking-[0.4em] flex-1 text-center pr-8">Subscription Plans</h2>
      </header>

      <main className="flex-1 pb-32 overflow-y-auto">
        <motion.div variants={itemVariants} className="px-8 py-12 text-center">
          <h1 className="text-4xl font-light tracking-tighter text-gradient-colorful mb-4">Upgrade Your Experience</h1>
          <p className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.3em] leading-relaxed">Choose the best plan for your recruitment and networking needs on PostHire.</p>
        </motion.div>

        <div className="space-y-12 px-6">
          {/* Free Plan */}
          <motion.div variants={itemVariants} className="flex flex-col gap-8 border border-primary/10 bg-primary/5 dark:bg-primary/10 p-10 relative overflow-hidden hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-primary text-[11px] font-bold uppercase tracking-[0.4em]">Free Plan</h3>
                <span className="text-neutral-400 dark:text-neutral-600 text-[8px] font-bold uppercase tracking-widest border border-primary/10 px-4 py-1.5">Current</span>
              </div>
              <p className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-6">For new users testing the platform.</p>
              <p className="flex items-baseline gap-3 text-primary">
                <span className="text-5xl font-light tracking-tighter">₹0</span>
                <span className="text-neutral-400 dark:text-neutral-600 text-[11px] font-bold uppercase tracking-widest">/month</span>
              </p>
            </div>
            <button className="w-full cursor-not-allowed flex items-center justify-center h-16 border border-primary/10 text-neutral-300 dark:text-neutral-700 text-[11px] font-bold uppercase tracking-[0.3em]" disabled>
              Active Plan
            </button>
            <div className="flex flex-col gap-5 mt-4">
              {['10 profile views/day', '3 requests/month', 'Basic filters', 'Limited details'].map((feature, i) => (
                <div key={i} className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-5 text-neutral-500 dark:text-neutral-400">
                  <CheckCircle2 size={14} className="text-neutral-300 dark:text-neutral-700" />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Starter Plan */}
          <motion.div variants={itemVariants} className="flex flex-col gap-8 border border-primary/40 bg-slate-50 dark:bg-slate-950 p-10 relative hover:glow-primary hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all rounded-2xl">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-colorful text-slate-50 text-[9px] font-bold uppercase tracking-[0.5em] px-6 py-2 rounded-full glow-primary">Recommended</div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-primary text-[11px] font-bold uppercase tracking-[0.4em]">Starter Plan</h3>
              </div>
              <p className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-6">For early-stage founders & small creators.</p>
              <p className="flex items-baseline gap-3 text-primary">
                <span className="text-5xl font-light tracking-tighter">₹299</span>
                <span className="text-neutral-400 dark:text-neutral-600 text-[11px] font-bold uppercase tracking-widest">/month</span>
              </p>
            </div>
            <button className="w-full flex items-center justify-center h-16 bg-gradient-colorful text-slate-50 text-[11px] font-bold uppercase tracking-[0.3em] hover:opacity-90 transition-opacity rounded-xl glow-primary">
              Upgrade Now
            </button>
            <div className="flex flex-col gap-5 mt-4">
              {['Unlimited browsing', '20 requests/month', 'Advanced filters', 'Messaging & Basic Analytics', 'No ads'].map((feature, i) => (
                <div key={i} className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-5 text-primary">
                  <CheckCircle2 size={14} className="text-primary" />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div variants={itemVariants} className="flex flex-col gap-8 border border-slate-50/10 bg-gradient-to-br from-primary to-indigo-600 p-10 relative overflow-hidden group rounded-2xl glow-primary">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-1000">
              <Sparkles size={140} className="text-slate-50" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-slate-50 text-[11px] font-bold uppercase tracking-[0.4em]">Pro Plan</h3>
                <span className="text-slate-50 text-[9px] font-bold uppercase tracking-widest border border-slate-50/30 px-4 py-1.5 rounded-full backdrop-blur-md">ULTIMATE</span>
              </div>
              <p className="text-[10px] text-slate-50/80 uppercase tracking-widest mb-6">For serious founders & active creators.</p>
              <p className="flex items-baseline gap-3 text-slate-50">
                <span className="text-5xl font-light tracking-tighter">₹599</span>
                <span className="text-slate-50/60 text-[11px] font-bold uppercase tracking-widest">/month</span>
              </p>
            </div>
            <button className="w-full flex items-center justify-center h-16 bg-slate-50 text-primary text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-slate-100 transition-all rounded-xl shadow-xl">
              Go Pro
            </button>
            <div className="flex flex-col gap-5 mt-4">
              {[
                { icon: CheckCircle2, text: 'Unlimited requests & messaging' },
                { icon: Sparkles, text: 'AI match suggestions' },
                { icon: Trophy, text: 'Featured badge & top search' },
                { icon: BarChart3, text: 'Audience analytics' },
                { icon: Headphones, text: 'Priority support' }
              ].map((feature, i) => (
                <div key={i} className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-5 text-slate-50/90">
                  <feature.icon size={14} className="text-slate-50/70" />
                  {feature.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div variants={itemVariants} className="py-16 space-y-10">
            <h4 className="text-gradient-colorful text-[12px] font-bold uppercase tracking-[0.4em] px-2">Frequently Asked Questions</h4>
            <div className="divide-y divide-primary/10">
              {[
                { q: 'Can I cancel my subscription?', a: 'Yes, you can cancel your subscription at any time from your account settings without any hidden fees. Your benefits will continue until the end of the current billing cycle.' },
                { q: 'How does AI Match work?', a: 'Our AI analyzes your profile and requirements to suggest the most relevant talent or founders, saving you hours of manual browsing.' },
                { q: 'What is priority support?', a: 'Pro users get access to a dedicated support queue with a response time of less than 4 hours during business days.' }
              ].map((faq, i) => (
                <details key={i} className="group py-8 px-2">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="text-[11px] font-bold text-primary dark:text-neutral-200 uppercase tracking-widest group-hover:tracking-[0.15em] transition-all">{faq.q}</span>
                    <ChevronDown size={16} className="text-neutral-300 dark:text-neutral-700 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-8 text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium uppercase tracking-wider">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-xl border-t border-primary/10 px-10 py-5 flex items-center justify-between z-40">
        <button onClick={() => navigate('/')} className="flex flex-col items-center gap-2 text-neutral-300 dark:text-neutral-700 hover:text-primary transition-colors">
          <Home size={20} strokeWidth={1.5} />
          <span className="text-[9px] font-bold uppercase tracking-widest">Home</span>
        </button>
        <button onClick={() => navigate('/discover')} className="flex flex-col items-center gap-2 text-neutral-300 dark:text-neutral-700 hover:text-primary transition-colors">
          <Search size={20} strokeWidth={1.5} />
          <span className="text-[9px] font-bold uppercase tracking-widest">Search</span>
        </button>
        <button className="flex flex-col items-center gap-2 text-primary group">
          <CreditCard size={20} strokeWidth={1.5} className="group-hover:glow-primary" />
          <span className="text-[9px] font-bold uppercase tracking-widest text-gradient-colorful">Plans</span>
        </button>
        <button onClick={() => navigate('/profile')} className="flex flex-col items-center gap-2 text-neutral-300 dark:text-neutral-700 hover:text-primary transition-colors">
          <User size={20} strokeWidth={1.5} />
          <span className="text-[9px] font-bold uppercase tracking-widest">Profile</span>
        </button>
      </nav>
    </motion.div>
  );
}
