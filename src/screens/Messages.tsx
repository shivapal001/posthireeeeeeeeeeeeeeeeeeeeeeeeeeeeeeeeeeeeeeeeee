import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  SquarePen, 
  Search,
  ChevronRight
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

export default function Messages() {
  const navigate = useNavigate();

  const chats = [
    {
      id: 1,
      name: 'Alex Rivera',
      msg: "I've sent over the initial draft for the campaign...",
      time: '12m ago',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2D0Jf0POqHNS91cfIDGwgolHexbC9VdeQXMLozObGl_Z4I7nhdF17wicuUw_K5gaPS1G2aHxLgsgV0CpztZHrHGnEBmUwq85QIk8LmV9jSE45D8_GmuCfHYQKv4ppvK-3DhSGef-LDXnsS0cOa8yLwObJ1i2Dx-Zb6iHXrkpAsfxcyNeAuUvLo6iahenRSt8JJBsHcEj67eADla7KxjMBYKGGZAMkFlua6eIekrSBHps3fNiSQzfxlhlFENzEONiK19lcrs_oMOtM',
      unread: true
    },
    {
      id: 2,
      name: 'Sophie Chen',
      msg: 'Looking forward to our meeting tomorrow!',
      time: '2h ago',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBN_n8qjRK5DVGO8bBe1fUdsipXGGusBr5uQ8_XomAawFpdXkCE08iOearAoz3RGpC_m2eFtxbpsbz2uQ6X-W-8GbfjkYJ0ylUt3238p6aVgIJt9xQE4ai6YppXjLASi_SWgksu2fJP7tKBBeTkYO2nqe34FYuP0XxsinplXmU_4yYBoSuCXThVUgaOpTKjhQcnhZzcOYdVm8DMhCEUxIXhrjNEXmsaGADAPK8byro74gGZ7p0tIZBlnvllQQRDg7DYD0-1rGeqMGxn',
      unread: false
    },
    {
      id: 3,
      name: 'Marcus Chen',
      msg: 'The tech review video is ready for your feedback.',
      time: '5h ago',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRm59QuNj8qZw6TTn-fV_BwDftH6cfv1x3hVfUyMxpLEbtRXsikAd3JDaL8eRwg1SkeIeDRmImsyqX4NzMQA1uXJc5i_YBpaJ0XepaDiNfYzgmjxu5uXkrXc8UswnMd-nJDZ4yj1sxIINLJ2uRy3ic0-z3Emr2f0BthWc047j61llsNbRJ6T-EqIYqzbCkveqwmiiBagQHlvhpHLBFPcGefqHI0CMfm7P1G894uOpYPLDwaEi2PrlNxQIFRJadaq41pHI0sv3GcjFn',
      unread: false
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col flex-1 bg-slate-50 dark:bg-slate-950"
    >
      <header className="px-6 py-8 flex items-center justify-between sticky top-0 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-xl z-20 border-b border-primary/10">
        <h1 className="text-[11px] font-bold uppercase tracking-[0.4em] text-gradient-colorful">Messages</h1>
        <button className="p-2 hover:opacity-50 transition-opacity">
          <SquarePen size={18} className="text-primary" />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto pb-32">
        <div className="px-6 py-8">
          <motion.div variants={itemVariants} className="relative mb-10">
            <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-600" />
            <input 
              type="text" 
              placeholder="SEARCH MESSAGES..." 
              className="w-full bg-slate-100 dark:bg-slate-900/50 border border-primary/10 rounded-none py-4 pl-12 pr-4 text-[10px] font-bold uppercase tracking-widest focus:ring-0 focus:border-primary/40 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all placeholder:text-neutral-300 dark:placeholder:text-neutral-700"
            />
          </motion.div>

          <div className="space-y-2">
            {chats.map((chat) => (
              <motion.div 
                key={chat.id}
                variants={itemVariants}
                className="flex items-center gap-6 p-4 hover:bg-slate-100 dark:hover:bg-slate-900/50 transition-all cursor-pointer group border-b border-primary/5 last:border-0 hover:glow-primary hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
              >
                <div className="size-14 rounded-full overflow-hidden relative shrink-0 border border-primary/10 p-0.5">
                  <img className="size-full rounded-full object-cover transition-all duration-500" src={chat.img} alt={chat.name} referrerPolicy="no-referrer" />
                  {chat.unread && (
                    <div className="absolute top-1 right-1 size-2.5 bg-gradient-colorful border-2 border-slate-50 dark:border-slate-950 rounded-full shadow-[0_0_8px_rgba(236,72,153,0.5)]"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <p className={`text-[11px] font-bold uppercase tracking-widest truncate ${chat.unread ? 'text-primary' : 'text-neutral-400 dark:text-neutral-600'}`}>
                      {chat.name}
                    </p>
                    <span className="text-[8px] font-bold text-neutral-300 dark:text-neutral-700 uppercase tracking-widest shrink-0">{chat.time}</span>
                  </div>
                  <p className={`text-[10px] truncate leading-relaxed ${chat.unread ? 'text-neutral-600 dark:text-neutral-300 font-medium' : 'text-neutral-400 dark:text-neutral-500'}`}>
                    {chat.msg}
                  </p>
                </div>
                <ChevronRight size={12} className="text-neutral-200 dark:text-neutral-800 opacity-0 group-hover:opacity-100 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
