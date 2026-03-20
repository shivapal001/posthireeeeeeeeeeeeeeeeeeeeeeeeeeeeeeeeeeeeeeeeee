import { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Compass, MessageSquare, User } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  
  // Hide nav on specific screens if needed
  const showNav = !['/plans'].includes(location.pathname);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-slate-50 dark:bg-slate-950 overflow-x-hidden max-w-md mx-auto shadow-2xl border-x border-primary/10">
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {showNav && (
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl border-t border-primary/10 px-8 py-4 flex items-center justify-between z-30">
          <NavLink to="/" className={({ isActive }) => `flex flex-col items-center gap-1.5 transition-all duration-300 ${isActive ? 'text-primary scale-110' : 'text-neutral-400 dark:text-neutral-500 hover:text-primary dark:hover:text-slate-50'}`}>
            {({ isActive }) => (
              <>
                <LayoutDashboard size={18} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Home</span>
              </>
            )}
          </NavLink>
          <NavLink to="/discover" className={({ isActive }) => `flex flex-col items-center gap-1.5 transition-all duration-300 ${isActive ? 'text-primary scale-110' : 'text-neutral-400 dark:text-neutral-500 hover:text-primary dark:hover:text-slate-50'}`}>
            {({ isActive }) => (
              <>
                <Compass size={18} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Explore</span>
              </>
            )}
          </NavLink>
          <NavLink to="/messages" className={({ isActive }) => `flex flex-col items-center gap-1.5 transition-all duration-300 ${isActive ? 'text-primary scale-110' : 'text-neutral-400 dark:text-neutral-500 hover:text-primary dark:hover:text-slate-50'}`}>
            {({ isActive }) => (
              <>
                <div className="relative">
                  <MessageSquare size={18} strokeWidth={isActive ? 2.5 : 2} />
                  <div className="absolute -top-0.5 -right-0.5 size-1.5 bg-primary rounded-full border border-slate-50 dark:border-slate-950 shadow-sm"></div>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Chat</span>
              </>
            )}
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => `flex flex-col items-center gap-1.5 transition-all duration-300 ${isActive ? 'text-primary scale-110' : 'text-neutral-400 dark:text-neutral-500 hover:text-primary dark:hover:text-slate-50'}`}>
            {({ isActive }) => (
              <>
                <User size={18} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Profile</span>
              </>
            )}
          </NavLink>
        </nav>
      )}
    </div>
  );
}
