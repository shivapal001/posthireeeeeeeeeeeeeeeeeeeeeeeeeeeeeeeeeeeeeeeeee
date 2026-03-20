import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  MoreVertical, 
  CheckCircle2, 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  LogOut,
  ExternalLink,
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

export default function Profile() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useApp();

  const handleSignOut = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col flex-1 bg-slate-50 dark:bg-slate-950"
    >
      {/* Top Header */}
      <header className="px-6 py-8 flex items-center justify-between sticky top-0 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-xl z-20 border-b border-primary/10">
        <button 
          onClick={() => navigate(-1)}
          className="text-primary flex size-8 items-center justify-start hover:opacity-50 transition-opacity"
        >
          <ChevronLeft size={18} />
        </button>
        <h2 className="text-primary text-[11px] font-bold uppercase tracking-[0.4em]">Profile</h2>
        <button className="text-neutral-400 dark:text-neutral-500 flex size-8 items-center justify-end hover:text-primary transition-colors">
          <MoreVertical size={16} />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto pb-32">
        {/* Profile Hero Section */}
        <motion.div variants={itemVariants} className="px-6 py-12 flex flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="size-32 rounded-full p-1 border border-primary/10 overflow-hidden bg-primary/5 dark:bg-primary/10">
              <img 
                className="size-full rounded-full object-cover transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfNhPHQY2tOH4uH20lYDn-uPWvAo_H_fLzfQTDNFamXpVr6dFLI73RGxo4wOZWnRBhWe6mV-Pc4CRc4UGS6tn60Vg2slIqXObsaYWqnDDUTYkO4e4f7SklbtmuCNtMD-gkcQJIC4DONcSTUNc-cy6oWB5XUu9CTQR1hBGZ5QwNsLCBj4ePX_559BgszF0ohHbvDYeACI0lt5cuziSirDYAeM7Mj1dovt2k9laxMQLQi6slf44KaklREhnLQSZutph3nNQjovbM5_pg" 
                alt="Alex Rivers"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-2 right-2 bg-primary text-slate-50 p-1.5 rounded-full border-2 border-slate-50 dark:border-slate-950">
              <CheckCircle2 size={12} />
            </div>
          </div>
          
          <h1 className="text-3xl font-light text-primary tracking-tighter mb-2">Alex Rivers</h1>
          <p className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.3em] mb-8">Product Designer at PostHire</p>

          <div className="flex gap-4">
            <div className="px-6 py-2.5 bg-primary/10 border border-primary/20">
              <p className="text-primary text-[10px] font-bold uppercase tracking-widest">Starter 🚀</p>
            </div>
            <button 
              onClick={() => navigate('/plans')}
              className="px-6 py-2.5 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-slate-50 transition-all flex items-center gap-3 group"
            >
              Plans <ArrowUpRight size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Account Settings List */}
        <motion.div variants={itemVariants} className="px-6">
          <div className="border-t border-primary/10 pt-12">
            <h3 className="text-neutral-400 dark:text-neutral-600 text-[9px] font-bold uppercase tracking-[0.4em] mb-10">Account Settings</h3>
            <div className="space-y-1">
              {[
                { icon: User, label: 'Personal Information', desc: 'Manage your profile details' },
                { icon: Bell, label: 'Notifications', desc: 'Configure alert preferences' },
                { icon: Shield, label: 'Security & Privacy', desc: 'Secure your account' },
                { icon: CreditCard, label: 'Billing & Subscription', desc: 'Manage payments', path: '/plans' }
              ].map((item, i) => (
                <button 
                  key={i} 
                  onClick={() => item.path && navigate(item.path)}
                  className="w-full flex items-center justify-between p-5 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all group border-b border-primary/5 last:border-0"
                >
                  <div className="flex items-center gap-6">
                    <div className="size-10 flex items-center justify-center rounded-full bg-primary/5 dark:bg-primary/10 text-neutral-400 dark:text-neutral-600 group-hover:text-primary transition-colors">
                      <item.icon size={18} />
                    </div>
                    <div className="text-left">
                      <p className="text-[11px] font-bold text-primary uppercase tracking-widest mb-0.5">{item.label}</p>
                      <p className="text-[9px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">{item.desc}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-neutral-200 dark:text-neutral-800 opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              ))}
            </div>

            {/* Logout */}
            <div className="mt-16">
              <button 
                onClick={handleSignOut}
                className="w-full py-6 border border-primary text-primary text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-red-500 hover:border-red-500 hover:text-slate-50 transition-all flex items-center justify-center gap-3 group"
              >
                <LogOut size={14} className="group-hover:-translate-x-1 transition-transform" />
                Sign Out
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
