import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Settings, 
  ChevronRight, 
  Lock, 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  CreditCard,
  Sparkles,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  Users,
  Eye,
  MousePointer2,
  DollarSign
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

const usageData = [
  { name: 'Mon', value: 1 },
  { name: 'Tue', value: 2 },
  { name: 'Wed', value: 1.5 },
  { name: 'Thu', value: 3 },
  { name: 'Fri', value: 2.5 },
  { name: 'Sat', value: 4 },
  { name: 'Sun', value: 3 },
];

const earningsData = [
  { name: 'Week 1', value: 4500 },
  { name: 'Week 2', value: 7200 },
  { name: 'Week 3', value: 5800 },
  { name: 'Week 4', value: 6000 },
];

const insightData = [
  { name: 'Reach', value: 85, color: '#8b5cf6' },
  { name: 'Eng.', value: 65, color: '#ec4899' },
  { name: 'Conv.', value: 45, color: '#06b6d4' },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Dashboard() {
  const { role } = useApp();
  const navigate = useNavigate();

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col flex-1 bg-slate-50 dark:bg-premium-bg"
    >
      {/* Header */}
      <header className="px-6 py-8 flex items-center justify-between sticky top-0 bg-slate-50/90 dark:bg-premium-bg/90 backdrop-blur-xl z-20 border-b border-primary/10">
        <div className="flex items-center gap-4">
          <div className="size-10 rounded-full bg-premium-surface/50 p-0.5 border border-primary/10 overflow-hidden">
            <img 
              className="size-full object-cover rounded-full transition-all duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQF5dqmoGFRK9CXgGboNbQG6-EWhUus3hKTAW9LKMpNZdePxm6zvYMJyK5bKPUzUqjkmpaEnNu7zAT89el9Y30yNni-Q3P_b93-y4TMP7Ua_Vok2aizEkJMDFRwY1Ymok7boGZl4zpHYhm_YCr8NPe_MjsqdoC6qCCi9KQKABhrqmlzRFbBBT-ces_6b4Rk93VsmyUlE5p2WD3v1b8jqrpHz_1z32trR1bcUh26j-4Sf23zKi8fvhW9s0hk5Y9G_Iu5kQKcsNeKE-M" 
              alt="User"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="text-[12px] font-bold tracking-[0.2em] text-gradient-colorful uppercase">
              {role === 'founder' ? 'Workspace' : 'Hub'}
            </h1>
            <p className="text-[9px] font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.3em]">PostHire Pro</p>
          </div>
        </div>
        <button className="size-10 flex items-center justify-center rounded-full border border-primary/10 text-neutral-400 dark:text-neutral-500 hover:text-primary hover:bg-primary/5 transition-all">
          <Settings size={16} />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto pb-32 pt-8">
        {role === 'founder' ? (
          <>
            {/* Usage Overview Card */}
            <motion.div variants={itemVariants} className="px-6 mb-20">
              <div className="relative p-10 bg-white dark:bg-premium-surface rounded-[2rem] border border-primary/10 shadow-xl shadow-primary/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px] -ml-32 -mb-32"></div>
                
                <div className="relative flex items-center justify-between mb-12">
                  <div>
                    <p className="text-neutral-400 dark:text-neutral-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-6">Current Usage</p>
                    <div className="flex items-baseline gap-4">
                      <h2 className="text-7xl font-light text-primary tracking-tighter">03</h2>
                      <span className="text-slate-300 dark:text-slate-700 text-[18px] font-light uppercase tracking-[0.2em]">/ 20</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-secondary text-[24px] font-light tracking-tighter">15%</p>
                    <p className="text-neutral-400 dark:text-neutral-500 text-[9px] font-bold uppercase tracking-[0.2em]">Capacity</p>
                  </div>
                </div>

                {/* Usage Chart */}
                <div className="h-16 w-full mb-12 opacity-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={usageData}>
                      <defs>
                        <linearGradient id="usageGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="var(--color-primary)" 
                        strokeWidth={2}
                        fill="url(#usageGradient)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-8">
                  <div className="w-full h-[2px] bg-premium-surface/50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '15%' }}
                      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                    ></motion.div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-neutral-400 dark:text-neutral-500 text-[10px] font-bold uppercase tracking-[0.2em]">17 slots available</p>
                    <button className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-50 flex items-center gap-2 group">
                      Manage Limits 
                      <ChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Saved Creators Section */}
            <motion.div variants={itemVariants} className="mb-24">
              <div className="px-6 flex items-center justify-between mb-12">
                <h3 className="font-bold text-[11px] text-primary uppercase tracking-[0.4em]">Saved Talent</h3>
                <button className="text-neutral-400 dark:text-neutral-500 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors">View All</button>
              </div>
              <div className="flex overflow-x-auto gap-12 px-6 no-scrollbar pb-4">
                {[
                  { name: 'Sarah J.', niche: 'Tech', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSmNl6xDGUqauHihgU1fxHhaqSEhq7MS-NKCXgKxsT4S9cnPRtkLOnMs_IJxX9WVxEX7jYcW9Le_WUXa7Anp5AyHIXi_c7Mmz2IwSZTccJJ4n6ZmA_gwjEnYHL9mMNunlUJThyryoMOteswwfZUcjRpRoXfaNivFyM2EPTSCSKsxsfThYcp1gJYaNME4Ud_1srUISouURAXGAnwlUABqE5wyFnY9Idk5ht3fS3RQwrqjtKkwBr1Sb70e9zEGKI-Sh3Pq5ANt40lEaX' },
                  { name: 'Marcus K.', niche: 'Visual', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2HOkvV8ozjQE4xzsjvWRodMspk1uI8ukdG2PazJEEAMwLZWSNzkXhAYCAfgDj7MUl_BcMAulaY0bX_8QyifGYOS3JJ_rUWQ66VEfrV8xYM6bL7rs4TnBtp4VhsRIDhsERsGFOVh83lVziNHZwV64q3PnWJXPaOXdMmhxk9p1Wob0xS_kCnI_SLIb29gpq2sZEoFm-I3xRlN90x9N5nhItDIBchtE3tggGWeQZHYJZ3SUhP76jSxmONagweSs7QT-QE8rRTBdI_9Mj' },
                  { name: 'Elena R.', niche: 'Life', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqNrWo8-VSy8ViyT18C82C-atEPoqnPVjNkbGTpMCEb4p58sKCddaZdSVsMqK8vDkyMkK70isnU16eBUMzv1Ov15fOTDKiT1qUz65JqlIsVRu8I7RV5kdkxMVPrH_BYS8nXp9dQ5ym-C_WmsGUGY-sHJuMC7edLd3NDV-dqojyekD6GcgNiHh7NRHtsql5qQR0uDk22ZFjjwgEW6ImcKAi5VaHJ0OGEnEV8XrqOnOqSlCwh7_2FnWJD1TeUY1D70Fv_EBvs0h7xCwN' }
                ].map((creator, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    className="min-w-[120px] flex flex-col items-center text-center group cursor-pointer"
                  >
                    <div className="size-20 rounded-full p-1 border border-premium-surface/50 mb-6 group-hover:border-secondary transition-all duration-500 group-hover:glow-secondary group-hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                      <img className="size-full rounded-full object-cover transition-all duration-700" src={creator.img} alt={creator.name} referrerPolicy="no-referrer" />
                    </div>
                    <p className="font-bold text-primary group-hover:text-secondary transition-colors text-[12px] mb-1.5 uppercase tracking-tight">{creator.name}</p>
                    <p className="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em]">{creator.niche}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Active Chats */}
            <motion.div variants={itemVariants} className="px-6 mb-24">
              <div className="flex items-center justify-between mb-12">
                <h3 className="font-bold text-[11px] text-primary uppercase tracking-[0.4em]">Recent Activity</h3>
                <div className="flex items-center gap-2.5">
                  <div className="size-2 rounded-full bg-secondary animate-ping"></div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Live</span>
                </div>
              </div>
              <div className="space-y-12">
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="size-12 rounded-full overflow-hidden flex-shrink-0 transition-all duration-500 border border-primary/5 dark:border-primary/10 group-hover:glow-primary group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                    <img className="size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2D0Jf0POqHNS91cfIDGwgolHexbC9VdeQXMLozObGl_Z4I7nhdF17wicuUw_K5gaPS1G2aHxLgsgV0CpztZHrHGnEBmUwq85QIk8LmV9jSE45D8_GmuCfHYQKv4ppvK-3DhSGef-LDXnsS0cOa8yLwObJ1i2Dx-Zb6iHXrkpAsfxcyNeAuUvLo6iahenRSt8JJBsHcEj67eADla7KxjMBYKGGZAMkFlua6eIekrSBHps3fNiSQzfxlhlFENzEONiK19lcrs_oMOtM" alt="Alex" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-bold text-[12px] text-primary uppercase tracking-widest">Alex Rivera</p>
                      <span className="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">12m ago</span>
                    </div>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate font-medium uppercase tracking-tight">Draft sent for review</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="size-12 rounded-full overflow-hidden flex-shrink-0 transition-all duration-500 border border-primary/5 dark:border-primary/10 group-hover:glow-secondary group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                    <img className="size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN_n8qjRK5DVGO8bBe1fUdsipXGGusBr5uQ8_XomAawFpdXkCE08iOearAoz3RGpC_m2eFtxbpsbz2uQ6X-W-8GbfjkYJ0ylUt3238p6aVgIJt9xQE4ai6YppXjLASi_SWgksu2fJP7tKBBeTkYO2nqe34FYuP0XxsinplXmU_4yYBoSuCXThVUgaOpTKjhQcnhZzcOYdVm8DMhCEUxIXhrjNEXmsaGADAPK8byro74gGZ7p0tIZBlnvllQQRDg7DYD0-1rGeqMGxn" alt="Sophie" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-bold text-[12px] text-primary uppercase tracking-widest">Sophie Chen</p>
                      <span className="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">2h ago</span>
                    </div>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate font-medium uppercase tracking-tight">Meeting scheduled</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Detailed Analytics Locked State */}
            <motion.div variants={itemVariants} className="px-6">
              <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 dark:from-primary/20 dark:via-secondary/10 dark:to-accent/20 rounded-3xl p-16 relative overflow-hidden border border-primary/10 group cursor-pointer shadow-xl shadow-primary/5">
                <div className="absolute inset-0 bg-premium-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="size-12 rounded-full border border-primary/20 bg-white/50 dark:bg-premium-surface/50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Lock className="text-primary" size={16} />
                  </div>
                  <h3 className="text-primary font-bold text-[12px] mb-4 uppercase tracking-[0.5em]">Advanced Analytics</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-[10px] mb-12 max-w-[220px] leading-relaxed font-medium uppercase tracking-[0.2em]">Unlock deep ROI tracking & predictive insights.</p>
                  <button 
                    onClick={() => navigate('/plans')}
                    className="w-full bg-premium-gradient text-slate-50 hover:opacity-90 font-bold py-5 rounded-xl transition-all text-[11px] uppercase tracking-[0.4em] glow-primary"
                  >
                    Upgrade Now
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          <>
            {/* Creator Earnings Overview */}
            <motion.div variants={itemVariants} className="px-6 mb-20">
              <div className="relative p-10 bg-white dark:bg-premium-surface rounded-[2rem] border border-secondary/10 shadow-xl shadow-secondary/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] -mr-32 -mt-32"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-12">
                  <div>
                    <p className="text-neutral-400 dark:text-neutral-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-6">Total Earnings</p>
                    <div className="flex items-baseline gap-4">
                      <h2 className="text-6xl font-light text-primary tracking-tighter">₹23,500</h2>
                      <span className="text-secondary text-[14px] font-bold uppercase tracking-[0.2em] bg-secondary/10 px-2 py-1 rounded">
                        +15%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Earnings Chart */}
                <div className="h-16 w-full mb-12 opacity-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={earningsData}>
                      <defs>
                        <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--color-secondary)" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="var(--color-secondary)" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#ec4899" 
                        strokeWidth={3}
                        fill="url(#earningsGradient)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-8">
                  <div className="w-full h-[2px] bg-premium-surface/50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '65%' }}
                      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-premium-gradient"
                    ></motion.div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-neutral-400 dark:text-neutral-500 text-[10px] font-bold uppercase tracking-[0.2em]">65% of monthly goal</p>
                    <button className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-50 flex items-center gap-2 group">
                      View Payouts 
                      <CreditCard size={10} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

            {/* Creator Insights */}
            <motion.div variants={itemVariants} className="px-6 mb-24">
              <div className="border-t border-primary/5 dark:border-primary/10 pt-12">
                <div className="flex items-center justify-between mb-16">
                  <h3 className="font-bold text-[11px] text-primary uppercase tracking-[0.4em]">Performance</h3>
                  <div className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] bg-secondary/10 px-3 py-1.5 border border-secondary/20">
                    +12% Trend
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-16 mb-16">
                  <div className="group cursor-pointer">
                    <p className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.3em] mb-4 group-hover:text-primary transition-colors">Total Reach</p>
                    <p className="text-5xl font-light text-primary tracking-tighter group-hover:scale-105 transition-transform origin-left duration-500">1.2M</p>
                  </div>
                  <div className="group cursor-pointer">
                    <p className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.3em] mb-4 group-hover:text-secondary transition-colors">Engagement</p>
                    <p className="text-5xl font-light text-secondary tracking-tighter group-hover:scale-105 transition-transform origin-left duration-500">5.4%</p>
                  </div>
                </div>

                <div className="h-20 w-full opacity-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={insightData}>
                      <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                        {insightData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>

            {/* New Opportunities Section */}
            <motion.div variants={itemVariants} className="mb-24">
              <div className="px-6 flex items-center justify-between mb-12">
                <h3 className="font-bold text-[11px] text-primary uppercase tracking-[0.4em]">New Opportunities</h3>
                <button className="text-neutral-400 dark:text-neutral-500 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors">Explore</button>
              </div>
              <div className="flex overflow-x-auto gap-12 px-6 no-scrollbar pb-4">
                {[
                  { name: 'EcoStream', industry: 'Sustainability', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=200&h=200' },
                  { name: 'FitAI', industry: 'HealthTech', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=200&h=200' },
                  { name: 'CloudScale', industry: 'SaaS', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200&h=200' }
                ].map((startup, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05 }}
                    className="min-w-[130px] flex flex-col items-center text-center group cursor-pointer"
                  >
                    <div className="size-16 rounded-2xl overflow-hidden mb-6 transition-all duration-700 border border-primary/5 dark:border-primary/10 shadow-sm group-hover:shadow-xl group-hover:glow-accent group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                      <img className="size-full object-cover" src={startup.img} alt={startup.name} referrerPolicy="no-referrer" />
                    </div>
                    <p className="font-bold text-primary text-[12px] mb-1.5 truncate w-full uppercase tracking-tight">{startup.name}</p>
                    <p className="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em]">{startup.industry}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Active Collaborations */}
            <motion.div variants={itemVariants} className="px-6 mb-24">
              <div className="flex items-center justify-between mb-12">
                <h3 className="font-bold text-[11px] text-primary uppercase tracking-[0.4em]">Active Projects</h3>
                <div className="flex items-center gap-2.5">
                  <div className="size-2 rounded-full bg-secondary animate-pulse"></div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Ongoing</span>
                </div>
              </div>
              <div className="space-y-12">
                {[
                  { brand: 'PostHire', status: 'In Progress', budget: '₹15,000', deadline: '2d left', img: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=100&h=100' },
                  { brand: 'TechFlow', status: 'Drafting', budget: '₹8,500', deadline: '5d left', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=100&h=100' }
                ].map((collab, i) => (
                  <div key={i} className="flex items-center gap-8 group cursor-pointer">
                    <div className="size-12 rounded-full overflow-hidden flex-shrink-0 transition-all duration-500 border border-primary/5 dark:border-primary/10">
                      <img className="size-full object-cover" src={collab.img} alt={collab.brand} referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-bold text-[12px] text-primary uppercase tracking-widest">{collab.brand}</p>
                        <p className="text-[14px] font-light text-secondary tracking-tighter">{collab.budget}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em]">{collab.status}</p>
                        <p className="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em]">{collab.deadline}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Portfolio Section */}
            <motion.div variants={itemVariants} className="px-6">
              <div className="bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10 dark:from-secondary/20 dark:via-primary/10 dark:to-accent/20 rounded-3xl p-16 relative overflow-hidden border border-secondary/10 group cursor-pointer shadow-xl shadow-secondary/5">
                <div className="absolute inset-0 bg-premium-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="size-12 rounded-full border border-secondary/20 bg-white/50 dark:bg-premium-surface/50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <ArrowUpRight className="text-secondary" size={16} />
                  </div>
                  <h3 className="text-secondary font-bold text-[12px] mb-4 uppercase tracking-[0.5em]">Creator Portfolio</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-[10px] mb-12 max-w-[200px] leading-relaxed font-medium uppercase tracking-[0.2em]">Showcase your best work and boost requests by 5x.</p>
                  <button className="w-full bg-premium-gradient text-slate-50 hover:opacity-90 font-bold py-5 rounded-xl transition-all text-[11px] uppercase tracking-[0.4em] glow-secondary">
                    Update Portfolio
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
}
