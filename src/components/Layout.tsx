import { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Compass, MessageSquare, User } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  
  // Hide nav on specific screens if needed
  const showNav = !['/plans'].includes(location.pathname);

  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Home' },
    { to: '/discover', icon: Compass, label: 'Explore' },
    { to: '/messages', icon: MessageSquare, label: 'Chat', hasNotification: true },
    { to: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="relative flex min-h-screen w-full bg-slate-50 dark:bg-slate-950 overflow-x-hidden">
      {/* Desktop Sidebar */}
      {showNav && (
        <aside className="hidden lg:flex flex-col w-64 bg-slate-50 dark:bg-slate-950 border-r border-primary/10 sticky top-0 h-screen p-8 z-30">
          <div className="text-primary text-[14px] font-bold uppercase tracking-[0.4em] mb-12">
            POSTHIRE
          </div>
          
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink 
                key={item.to}
                to={item.to} 
                className={({ isActive }) => `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${isActive ? 'bg-primary/5 text-primary glow-primary' : 'text-neutral-400 dark:text-neutral-500 hover:text-primary dark:hover:text-slate-50 hover:bg-primary/5'}`}
              >
                {({ isActive }) => (
                  <>
                    <div className="relative">
                      <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                      {item.hasNotification && (
                        <div className="absolute -top-0.5 -right-0.5 size-1.5 bg-primary rounded-full border border-slate-50 dark:border-slate-950 shadow-sm"></div>
                      )}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-primary/10">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
              <div className="size-8 rounded-full bg-gradient-colorful flex items-center justify-center text-slate-50 text-[10px] font-bold">JD</div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">John Doe</span>
                <span className="text-[8px] text-neutral-400 uppercase tracking-widest">Pro Member</span>
              </div>
            </div>
          </div>
        </aside>
      )}

      <main className={`flex-1 flex flex-col min-w-0 ${showNav ? 'pb-20 lg:pb-0' : ''}`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      {showNav && (
        <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl border-t border-primary/10 px-6 py-4 flex items-center justify-between z-30">
          {navItems.map((item) => (
            <NavLink 
              key={item.to}
              to={item.to} 
              className={({ isActive }) => `flex flex-col items-center gap-1.5 transition-all duration-300 ${isActive ? 'text-primary scale-110' : 'text-neutral-400 dark:text-neutral-500 hover:text-primary dark:hover:text-slate-50'}`}
            >
              {({ isActive }) => (
                <>
                  <div className="relative">
                    <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                    {item.hasNotification && (
                      <div className="absolute -top-0.5 -right-0.5 size-1.5 bg-primary rounded-full border border-slate-50 dark:border-slate-950 shadow-sm"></div>
                    )}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
}
