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
      className="flex flex-col flex-1 bg-[#f3f2ef]"
    >
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap size={24} className="text-primary fill-primary" />
            <h1 className="text-[18px] font-bold text-primary tracking-tight">PostHire</h1>
          </div>
          <button className="size-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 transition-all">
            <Settings2 size={20} />
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto w-full p-6 flex flex-col gap-6 pb-32">
        <motion.div variants={itemVariants} className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Discover Opportunities</h2>
            <p className="text-sm text-slate-500">
              {isFounder ? 'Find your next brand ambassador' : 'Find your next brand collaboration'}
            </p>
          </div>
          <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
            12 New Matches
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="relative flex-1 min-h-[500px]">
          <div className="bg-white overflow-hidden flex flex-col border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative h-[300px] w-full overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url('${isFounder ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuAClKVh0dbi0tm-a0Aby9ajt0sZJ2ihVQA5OA7244rtG_uoe2aWOOVBGa-9FVvk3ppLAtCTTrCwGbPokY6KBvOAjt5QU0hZ42misj0ADefmFvhXQO8yNtXPAnK2RV6SF2fMIaKRakpJXKhjneOScJkWiZa9gknpMB8UeQQFRclyLDwh7qSioX-6zXRxNv3XIrUwlP79paguh5HI9NWAtA4f3kWuPbndRjtxrZdqGGzMcwFhFQ6QNO4UwfVe8ddLb0xbdquwraSPZnE2' : 'https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800&h=600'}')` }}
              ></div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-semibold text-slate-900">{isFounder ? 'Marcus Chen' : 'PostHire'}</h3>
                <CheckCircle2 size={16} className="text-primary" />
              </div>
              <div className="flex items-center gap-1 text-sm text-slate-500 mb-4">
                <MapPin size={14} />
                {isFounder ? 'San Francisco, CA' : 'Bangalore, KA'}
              </div>

              <div className="flex gap-8 mb-6 border-y border-slate-100 py-4">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-medium mb-1">{isFounder ? 'Niche' : 'Industry'}</span>
                  <span className="text-sm font-semibold text-slate-900">{isFounder ? 'Tech & Lifestyle' : 'SaaS & HR Tech'}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-medium mb-1">{isFounder ? 'Followers' : 'Budget Range'}</span>
                  <span className="text-sm font-semibold text-slate-900">{isFounder ? '184K' : '₹10K - ₹50K'}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-medium mb-1">Match Score</span>
                  <span className="text-sm font-semibold text-primary">98%</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                {isFounder 
                  ? 'Helping brands tell stories through cinematic tech reviews and minimalist workspace setups. Focused on high-quality production.'
                  : 'We are looking for tech-savvy creators to showcase our new platform features to a professional audience. Long-term partnership possible.'}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {[isFounder ? 'SaaS' : 'B2B', isFounder ? 'Productivity' : 'Networking', isFounder ? 'Minimalism' : 'Career'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">{tag}</span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <button 
                  onClick={() => isFounder ? navigate('/creator/1') : navigate('/brand/1')}
                  className="flex-1 py-2 border border-primary text-primary text-sm font-semibold hover:bg-primary/5 transition-colors rounded-full flex items-center justify-center gap-2"
                >
                  View Profile <ArrowUpRight size={16} />
                </button>
                <button className="flex-1 py-2 bg-primary text-white text-sm font-semibold hover:bg-secondary transition-colors rounded-full">
                  {isFounder ? 'Collab Request' : 'Apply Now'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-8 py-4">
          <button className="size-14 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-500 hover:text-danger hover:border-danger hover:bg-danger/5 transition-all duration-300 group shadow-sm">
            <X size={24} />
          </button>
          <button className="size-14 rounded-full border border-primary bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 group shadow-sm">
            <Heart size={24} />
          </button>
        </motion.div>
      </main>
    </motion.div>
  );
}
