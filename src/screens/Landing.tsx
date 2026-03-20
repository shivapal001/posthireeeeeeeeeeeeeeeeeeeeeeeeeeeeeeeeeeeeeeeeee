import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const { setRole } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobMenuOpen, setMobMenuOpen] = useState(false);
  const [activeFlow, setActiveFlow] = useState<'founder' | 'creator'>('founder');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const goTo = (path: string, role?: 'founder' | 'creator') => {
    if (role) setRole(role);
    if (path === 'login') navigate('/login');
    else if (path === 'signup') navigate('/signup');
    else if (path === 'landing') navigate('/');
  };

  return (
    <div id="pg-landing" className="page active bg-slate-50 text-[#0f172a] font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden">
      <style>{`
        :root {
          --blue: #3b6ef0;
          --blue-mid: #5585f5;
          --blue-light: #7ba2f8;
          --blue-faint: rgba(59,110,240,0.07);
          --blue-glow: rgba(59,110,240,0.28);
          --violet: #8b5cf6;
          --cyan: #06b6d4;
          --green: #10b981;
          --amber: #f59e0b;
          --rose: #f43f5e;
          --purple: #8b5cf6;
      --ink: #0f172a;
      --ink-soft: #1e293b;
      --ink-mid: #334155;
      --ink-raised: #475569;
      --ink-border: rgba(15,23,42,0.07);
      --ink-border2: rgba(15,23,42,0.04);
      --surface: #f8fafc;
      --surface-2: #f1f5f9;
      --surface-3: #e2e8f0;
      --l-border: rgba(59,110,240,0.13);
      --l-border2: rgba(15,23,42,0.05);
      --t-primary: #0f172a;
      --t-secondary: #475569;
      --t-dim: #64748b;
      --t-white: #f8fafc;
          --t-white-60: rgba(248,250,252,0.6);
          --t-white-40: rgba(248,250,252,0.38);
          --r-sm: 6px;
          --r-md: 10px;
          --r-lg: 16px;
          --r-xl: 22px;
          --r-full: 9999px;
          --shadow-card: 0 1px 3px rgba(15,23,42,0.08), 0 4px 16px rgba(15,23,42,0.05);
          --shadow-blue: 0 4px 24px rgba(59,110,240,0.22);
          --shadow-dark: 0 8px 40px rgba(15,23,42,0.4);
          --shadow-glow: 0 0 0 3px rgba(59,110,240,0.15);
        }

        .l-nav {
          position:fixed; top:0; left:0; right:0; z-index:200;
          padding:0 48px; height:68px;
          display:flex; align-items:center; justify-content:center;
          transition:all 0.4s;
        }
        .l-nav.scrolled {
          background:rgba(248,250,252,0.94);
          backdrop-filter:blur(20px);
          border-bottom:1px solid var(--l-border);
          box-shadow:0 2px 20px rgba(59,110,240,0.06);
        }
        .l-nav-inner { width:100%; max-width:1120px; display:flex; align-items:center; justify-content:space-between; }
        .l-logo { font-family:'Cinzel',serif; font-size:18px; font-weight:700; letter-spacing:3px; color:var(--t-primary); cursor:pointer; }
        .l-logo em { font-style:normal; color:var(--blue); }
        .l-links { display:flex; gap:40px; }
        .l-links a { font-size:13px; font-weight:500; color:var(--t-secondary); text-decoration:none; letter-spacing:0.3px; transition:color 0.25s; cursor:pointer; }
        .l-links a:hover { color:var(--blue); }
        .l-nav-right { display:flex; align-items:center; gap:12px; }
        .l-btn-ghost { font-size:13px; font-weight:500; color:var(--t-secondary); background:none; border:1px solid var(--l-border); padding:9px 22px; border-radius:var(--r-full); cursor:pointer; transition:all 0.25s; }
        .l-btn-ghost:hover { border-color:var(--blue); color:var(--blue); }
        .l-btn-fill { font-size:13px; font-weight:600; color:var(--t-white); background:var(--blue); border:none; padding:10px 24px; border-radius:var(--r-full); cursor:pointer; transition:all 0.25s; box-shadow:var(--shadow-blue); }
        .l-btn-fill:hover { transform:translateY(-1px); box-shadow:0 6px 20px rgba(59,110,240,0.3); }
        .l-hamburger { display:none; flex-direction:column; gap:5px; background:none; border:none; cursor:pointer; padding:4px; }
        .l-hamburger span { display:block; width:22px; height:1.5px; background:var(--t-primary); transition:all 0.3s; border-radius:2px; }
        .l-hamburger.open span:nth-child(1) { transform:translateY(6.5px) rotate(45deg); }
        .l-hamburger.open span:nth-child(2) { opacity:0; transform:scaleX(0); }
        .l-hamburger.open span:nth-child(3) { transform:translateY(-6.5px) rotate(-45deg); }
        .l-mobile-menu {
          display:flex; position:fixed; inset:0; background:rgba(248,250,252,0.98);
          backdrop-filter:blur(24px); z-index:190;
          flex-direction:column; justify-content:center; align-items:center; gap:8px;
          transform:translateY(-100%); transition:transform 0.45s cubic-bezier(0.16,1,0.3,1);
          pointer-events:none;
        }
        .l-mobile-menu.open { transform:translateY(0); pointer-events:all; }
        .l-mob-link { font-family:'Cinzel',serif; font-size:20px; letter-spacing:3px; color:var(--t-secondary); cursor:pointer; padding:14px 32px; width:100%; text-align:center; transition:color 0.2s; }
        .l-mob-link:hover { color:var(--blue); }
        .l-mob-btns { display:flex; flex-direction:column; gap:10px; padding:20px 32px; width:100%; }

        .l-hero {
          min-height:100vh; display:flex; align-items:center; justify-content:center;
          position:relative; overflow:hidden;
          background:radial-gradient(circle at 50% 50%, #f8fafc 0%, #f1f5f9 100%);
          padding-top:68px;
        }
        .l-hero-bg { position:absolute; inset:0; pointer-events:none; overflow:hidden; }
        .l-hero-circle {
          position:absolute; border-radius:50%; animation:heroPulse 9s ease-in-out infinite;
          border:1px solid rgba(59,110,240,0.08);
        }
        .l-hero-circle:nth-child(1) { width:480px;height:480px;top:50%;left:50%;transform:translate(-50%,-50%); }
        .l-hero-circle:nth-child(2) { width:720px;height:720px;top:50%;left:50%;transform:translate(-50%,-50%);animation-delay:3s;border-color:rgba(59,110,240,0.05); }
        .l-hero-circle:nth-child(3) { width:960px;height:960px;top:50%;left:50%;transform:translate(-50%,-50%);animation-delay:6s;border-color:rgba(59,110,240,0.025); }
        @keyframes heroPulse { 0%,100%{transform:translate(-50%,-50%) scale(1);}50%{transform:translate(-50%,-50%) scale(1.035);} }
        .l-hero-dot { position:absolute; width:6px;height:6px; background:var(--blue); border-radius:50%; opacity:0; animation:dotFloat linear infinite; }
        @keyframes dotFloat { 0%{opacity:0;transform:translateY(0);}10%{opacity:0.4;}90%{opacity:0.1;}100%{opacity:0;transform:translateY(-80vh);} }
        .l-hero-dot:nth-child(4){left:15%;animation-duration:14s;animation-delay:0s;background:var(--blue);}
        .l-hero-dot:nth-child(5){left:30%;animation-duration:18s;animation-delay:3s;background:var(--violet);}
        .l-hero-dot:nth-child(6){left:55%;animation-duration:12s;animation-delay:6s;background:var(--cyan);}
        .l-hero-dot:nth-child(7){left:72%;animation-duration:16s;animation-delay:1s;background:var(--blue);}
        .l-hero-dot:nth-child(8){left:85%;animation-duration:20s;animation-delay:4s;background:var(--violet);}
        .l-hero-corner { position:absolute; width:8px;height:8px; transform:rotate(45deg); animation:cornerSpin 12s linear infinite; }
        .l-hero-corner:nth-child(9)  { top:90px;left:90px;background:var(--blue);opacity:0.35; }
        .l-hero-corner:nth-child(10) { top:90px;right:90px;background:var(--violet);opacity:0.3;animation-delay:3s; }
        .l-hero-corner:nth-child(11) { bottom:90px;left:90px;background:var(--cyan);opacity:0.3;animation-delay:6s; }
        .l-hero-corner:nth-child(12) { bottom:90px;right:90px;background:var(--blue);opacity:0.35;animation-delay:9s; }
        @keyframes cornerSpin { 0%,100%{transform:rotate(45deg);}50%{transform:rotate(135deg);opacity:0.6;} }

        .l-hero-content { position:relative;z-index:10;text-align:center;max-width:780px;padding:0 24px; }
        .l-hero-eyebrow {
          display:inline-flex; align-items:center; gap:8px;
          font-size:11px; font-weight:600; letter-spacing:3px; text-transform:uppercase;
          color:var(--blue); background:var(--blue-faint); border:1px solid var(--l-border);
          padding:7px 18px; border-radius:var(--r-full); margin-bottom:28px;
        }
        .l-hero-eyebrow span { width:5px;height:5px;background:var(--blue);border-radius:50%;display:block; }
        .l-hero-h1 { font-family:'Cinzel',serif; font-size:clamp(50px,10vw,108px); font-weight:700; color:var(--t-primary); letter-spacing:clamp(4px,1.5vw,14px); line-height:0.95; margin-bottom:18px; }
        .l-hero-h1 em { font-style:normal; color:var(--blue); }
        .l-hero-rule { width:140px;height:1px;background:var(--blue);opacity:0.2;margin:22px auto; }
        .l-hero-sub { font-size:17px; font-weight:400; color:var(--t-secondary); line-height:1.85; max-width:520px; margin:0 auto 40px; font-family:'Cormorant Garamond',serif; font-size:19px; }
        .l-hero-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; margin-bottom:56px; }
        .l-btn-hero-primary { font-size:13px;font-weight:600;color:var(--t-white);background:var(--blue);border:none;padding:15px 36px;border-radius:var(--r-full);cursor:pointer;box-shadow:var(--shadow-blue);transition:all 0.3s; }
        .l-btn-hero-primary:hover { transform:translateY(-2px);box-shadow:0 8px 30px rgba(59,110,240,0.35); }
        .l-btn-hero-ghost { font-size:13px;font-weight:500;color:var(--t-primary);background:#f8fafc;border:1px solid var(--l-border);padding:15px 36px;border-radius:var(--r-full);cursor:pointer;transition:all 0.3s; }
        .l-btn-hero-ghost:hover { border-color:var(--blue);color:var(--blue); }
        .l-hero-stats { display:flex;gap:0;justify-content:center;background:var(--surface-2);border:1px solid var(--l-border);border-radius:var(--r-xl);overflow:hidden;max-width:440px;margin:0 auto; }
        .l-hero-stat { flex:1;padding:18px 20px;text-align:center;border-right:1px solid var(--l-border); }
        .l-hero-stat:last-child { border-right:none; }
        .l-stat-val { font-family:'Cinzel',serif;font-size:22px;font-weight:700;color:var(--blue);display:block;margin-bottom:4px; }
        .l-stat-lbl { font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--t-dim); }

        .l-marquee { overflow:hidden;border-top:1px solid var(--l-border);border-bottom:1px solid var(--l-border);padding:13px 0;background:var(--surface-2); }
        .l-marquee-track { display:flex;gap:32px;animation:marquee 28s linear infinite;white-space:nowrap;align-items:center; }
        .l-marquee-track span { font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:var(--t-dim); }
        .l-marquee-sep { color:var(--blue);opacity:0.4;font-size:12px; }
        @keyframes marquee { from{transform:translateX(0);}to{transform:translateX(-50%);} }

        .l-section { padding:100px 24px; }
        .l-container { max-width:1120px;margin:0 auto; }
        .l-tag { display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#8b5cf6;margin-bottom:18px; }
        .l-tag::before { content:'';width:20px;height:2px;background:linear-gradient(90deg,#8b5cf6,#ec4899); }
        .l-h2 { font-family:'Cinzel',serif;font-size:clamp(26px,3.5vw,50px);font-weight:700;color:var(--t-primary);line-height:1.15;margin-bottom:60px; }
        .l-h2 em { font-style:italic;font-family:'Cormorant Garamond',serif;font-weight:300;color:#ec4899; }

        .l-problem { background:var(--surface-2); }
        .l-problem-grid { display:grid;grid-template-columns:1fr 1fr;gap:24px; }
        .l-pcard {
          background:var(--surface);border:1px solid var(--l-border);border-radius:var(--r-lg);padding:44px 40px;
          opacity:1;transform:translateY(0);transition:opacity 0.6s,transform 0.6s;
        }
        .l-pcard.visible { opacity:1;transform:translateY(0); }
        .l-pcard:hover { box-shadow:var(--shadow-card);transform:translateY(-3px); }
        .l-pcard-icon { font-size:36px;margin-bottom:20px;display:block; }
        .l-pcard h3 { font-size:15px;font-weight:700;color:var(--t-primary);margin-bottom:20px;letter-spacing:0.3px; }
        .l-pcard ul { list-style:none;display:flex;flex-direction:column;gap:11px; }
        .l-pcard li { font-size:14px;color:var(--t-secondary);padding-left:20px;position:relative;line-height:1.6; }
        .l-pcard li::before { content:'';position:absolute;left:0;top:9px;width:8px;height:1px;background:var(--blue);opacity:0.6; }

        .l-how-tabs { display:inline-flex;background:var(--surface-2);border:1px solid var(--l-border);border-radius:var(--r-full);padding:4px;gap:4px;margin-bottom:48px; }
        .l-tab { padding:10px 28px;border-radius:var(--r-full);background:transparent;border:none;cursor:pointer;font-size:13px;font-weight:600;color:var(--t-secondary);transition:all 0.25s; }
        .l-tab.active { background:var(--surface);color:var(--blue);box-shadow:var(--shadow-card); }
        .l-flow.hidden { display:none; }
        .l-step { display:flex;gap:20px;padding:28px 0;border-bottom:1px solid var(--l-border2);opacity:1;transform:translateX(0);transition:all 0.5s; }
        .l-step.visible { opacity:1;transform:translateX(0); }
        .l-step-num { font-family:'Cinzel',serif;font-size:11px;font-weight:700;color:var(--blue);letter-spacing:2px;min-width:32px;padding-top:3px; }
        .l-step-body h4 { font-size:14px;font-weight:700;color:var(--t-primary);margin-bottom:7px; }
        .l-step-body p { font-size:14px;color:var(--t-secondary);line-height:1.75; }

        .l-features { background:var(--surface-2); }
        .l-feat-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:20px; }
        .l-feat-card {
          background:var(--surface);border:1px solid var(--l-border);border-radius:var(--r-lg);padding:36px 30px;
          opacity:1;transform:translateY(0);transition:opacity 0.5s,transform 0.5s,box-shadow 0.3s;
        }
        .l-feat-card.visible { opacity:1;transform:translateY(0); }
        .l-feat-card:hover { box-shadow:var(--shadow-card);transform:translateY(-4px); }
        .l-feat-icon { width:44px;height:44px;border-radius:var(--r-md);background:var(--blue-faint);display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:18px; }
        .l-feat-card h4 { font-size:14px;font-weight:700;color:var(--t-primary);margin-bottom:10px; }
        .l-feat-card p { font-size:13px;color:var(--t-secondary);line-height:1.75; }

        .l-demo-inner { display:flex;gap:80px;align-items:center; }
        .l-demo-text { flex:1; }
        .l-demo-desc { font-size:15px;color:var(--t-secondary);line-height:1.85;margin-bottom:32px; }
        .l-demo-steps { display:flex;flex-direction:column;gap:12px; }
        .l-dstep { display:flex;align-items:center;gap:14px;font-size:14px;color:var(--t-secondary); }
        .l-dstep-num { width:28px;height:28px;background:var(--blue-faint);border-radius:var(--r-sm);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--blue);flex-shrink:0; }
        .l-demo-phone { flex:0 0 auto; }
        .phone-wrap { width:290px;background:#0f172a;border-radius:28px;overflow:hidden;box-shadow:var(--shadow-dark);border:1px solid var(--ink-border); }
        .phone-top { background:#1e293b;padding:14px 16px;display:flex;align-items:center;gap:11px;border-bottom:1px solid var(--ink-border2); }
        .ph-back { color:var(--t-white-40);font-size:15px; }
        .ph-av { width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--violet));display:flex;align-items:center;justify-content:center;color:var(--t-white);font-size:12px;font-weight:700;flex-shrink:0; }
        .ph-info .ph-nm { color:var(--t-white);font-size:13px;font-weight:600;display:block; }
        .ph-info .ph-st { color:var(--green);font-size:10px;display:block; }
        .phone-body { padding:18px 14px;min-height:200px;display:flex;flex-direction:column;gap:14px;background:linear-gradient(180deg,#1e293b,#0f172a); }
        .chat-date { text-align:center;font-size:9px;font-weight:600;letter-spacing:2px;color:var(--t-white-40); }
        .chat-typing { display:flex;gap:4px;align-items:center;padding:12px 15px;background:var(--ink-border);border-radius:16px 16px 16px 3px;width:fit-content; }
        .chat-typing span { width:5px;height:5px;background:var(--t-white-40);border-radius:50%;animation:tdot 1.4s ease-in-out infinite; }
        .chat-typing span:nth-child(2){animation-delay:0.2s;}
        .chat-typing span:nth-child(3){animation-delay:0.4s;}
        @keyframes tdot{0%,100%{transform:scale(0.7);opacity:0.4;}50%{transform:scale(1.2);opacity:1;}}
        .chat-sent { background:linear-gradient(135deg,var(--blue),var(--blue-mid));color:var(--t-white);padding:12px 15px;border-radius:16px 16px 3px 16px;align-self:flex-end;font-size:12px;line-height:1.5;max-width:90%;box-shadow:0 4px 16px rgba(59,110,240,0.3); }
        .chat-time { font-size:9px;opacity:0.55;margin-top:5px;text-align:right; }
        .phone-bottom { background:#1e293b;padding:11px 14px;display:flex;align-items:center;gap:9px;border-top:1px solid var(--ink-border2); }
        .ph-input-fake { flex:1;background:var(--ink-border);border-radius:20px;padding:7px 13px;font-size:11px;color:var(--t-white-40); }
        .ph-send-btn { color:var(--blue);font-size:16px; }

        .l-for { background:var(--surface-2); }
        .l-for-grid { display:grid;grid-template-columns:1fr 1fr;gap:24px; }
        .l-for-card {
          background:var(--surface);border:1px solid var(--l-border);border-radius:var(--r-lg);padding:52px 44px;
          opacity:1;transform:translateY(0);transition:all 0.6s;
        }
        .l-for-card.visible { opacity:1;transform:translateY(0); }
        .l-for-card:hover { box-shadow:var(--shadow-card); }
        .l-for-card-accent { border-top:3px solid var(--blue); }
        .l-for-eyebrow { font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--blue);margin-bottom:16px; }
        .l-for-card h3 { font-family:'Cinzel',serif;font-size:clamp(18px,2.2vw,28px);color:var(--t-primary);line-height:1.25;margin-bottom:16px; }
        .l-for-card p { font-size:14px;color:var(--t-secondary);line-height:1.85;margin-bottom:28px; }
        .l-for-list { list-style:none;margin-bottom:36px; }
        .l-for-list li { font-size:13px;color:var(--t-secondary);padding:9px 0;border-bottom:1px solid var(--l-border2);display:flex;align-items:center;gap:10px; }
        .l-for-list li::before { content:'';width:5px;height:5px;background:var(--blue);border-radius:50%;flex-shrink:0; }

        .l-pricing { background:var(--surface); }
        .l-pricing-title-wrap { text-align:center;margin-bottom:60px; }
        .l-pricing-title-wrap .l-h2 { margin-bottom:12px; }
        .l-pricing-sub { font-size:15px;color:var(--t-secondary); }
        .l-price-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:24px; }
        .l-price-card { background:var(--surface-2);border:1px solid var(--l-border);border-radius:var(--r-xl);padding:40px 34px;position:relative;transition:all 0.3s; }
        .l-price-card:hover { transform:translateY(-6px);box-shadow:0 20px 60px rgba(59,110,240,0.1); }
        .l-price-card-featured { background:var(--surface);border:2px solid var(--blue);box-shadow:var(--shadow-blue); }
        .l-price-card-featured::before { content:'Most Popular';position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:var(--blue);color:var(--t-white);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:4px 16px;border-radius:var(--r-full);white-space:nowrap; }
        .l-plan-badge { display:inline-flex;align-items:center;gap:6px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:5px 12px;border-radius:var(--r-full);margin-bottom:20px; }
        .badge-free { background:rgba(16,185,129,0.1);color:var(--green); }
        .badge-starter { background:rgba(59,110,240,0.1);color:var(--blue); }
        .badge-pro { background:rgba(139,92,246,0.1);color:var(--purple); }
        .l-price-name { font-family:'Cinzel',serif;font-size:16px;font-weight:700;letter-spacing:1px;color:var(--t-primary);margin-bottom:16px; }
        .l-price-amount { font-family:'Cinzel',serif;font-size:48px;font-weight:700;color:var(--t-primary);line-height:1;margin-bottom:4px; }
        .l-price-amount sup { font-size:20px;vertical-align:super; }
        .l-price-period { font-size:12px;color:var(--t-dim);margin-bottom:28px; }
        .l-price-divider { height:1px;background:var(--l-border);margin:20px 0; }
        .l-price-feat-list { list-style:none;display:flex;flex-direction:column;gap:11px;margin-bottom:32px; }
        .l-price-feat-list li { font-size:13px;color:var(--t-secondary);display:flex;align-items:flex-start;gap:10px;line-height:1.5; }
        .l-price-feat-list li .tick { width:16px;height:16px;background:rgba(59,110,240,0.1);border-radius:4px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:9px;color:var(--blue);margin-top:0px; }
        .l-price-feat-list li.off { opacity:0.4; }
        .l-price-feat-list li.off .tick { background:rgba(15,23,42,0.06);color:var(--t-dim); }
        .l-price-cta { width:100%;padding:14px;border-radius:var(--r-full);font-size:13px;font-weight:600;cursor:pointer;transition:all 0.25s;letter-spacing:0.3px; }
        .l-price-cta-outline { background:transparent;border:1.5px solid var(--l-border);color:var(--blue); }
        .l-price-cta-outline:hover { border-color:var(--blue);background:var(--blue-faint); }
        .l-price-cta-fill { background:var(--blue);border:none;color:var(--t-white);box-shadow:var(--shadow-blue); }
        .l-price-cta-fill:hover { transform:translateY(-2px);box-shadow:0 8px 30px rgba(59,110,240,0.35); }

        .l-cta { background:var(--ink);text-align:center;padding:120px 24px;position:relative;overflow:hidden; }
        .l-cta-inner { position:relative;z-index:2;max-width:680px;margin:0 auto; }
        .l-cta-eyebrow { font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:var(--t-white-40);margin-bottom:20px; }
        .l-cta-h2 { font-family:'Cinzel',serif;font-size:clamp(28px,5vw,64px);font-weight:700;color:var(--t-white);letter-spacing:clamp(2px,1.5vw,8px);margin-bottom:20px;text-shadow:0 0 60px rgba(59,110,240,0.4); }
        .l-cta-sub { font-size:16px;color:var(--t-white-60);line-height:1.9;margin-bottom:44px; }
        .l-cta-btns { display:flex;gap:14px;justify-content:center;flex-wrap:wrap; }
        .l-btn-cta-primary { font-size:14px;font-weight:600;color:var(--t-white);background:var(--blue);border:none;padding:16px 40px;border-radius:var(--r-full);cursor:pointer;box-shadow:var(--shadow-blue);transition:all 0.3s; }
        .l-btn-cta-primary:hover { transform:translateY(-2px);box-shadow:0 8px 30px rgba(59,110,240,0.35); }
        .l-btn-cta-ghost { font-size:14px;font-weight:500;color:rgba(248,250,252,0.8);background:rgba(248,250,252,0.07);border:1px solid rgba(248,250,252,0.15);padding:16px 40px;border-radius:var(--r-full);cursor:pointer;transition:all 0.3s; }
        .l-btn-cta-ghost:hover { background:rgba(255,255,255,0.12);border-color:rgba(255,255,255,0.3); }
        .l-footer { background:#020617;border-top:1px solid rgba(59,110,240,0.1);padding:48px 24px;text-align:center; }
        .l-footer-logo { font-family:'Cinzel',serif;font-size:20px;font-weight:700;color:var(--t-white);letter-spacing:3px;margin-bottom:8px; }
        .l-footer-logo em { font-style:normal;color:var(--blue); }
        .l-footer-tag { font-size:12px;color:rgba(248,250,252,0.2);letter-spacing:2px;margin-bottom:24px; }
        .l-footer-links { display:flex;gap:24px;justify-content:center;margin-bottom:20px; }
        .l-footer-links a { font-size:12px;color:rgba(248,250,252,0.25);text-decoration:none;cursor:pointer;transition:color 0.2s; }
        .l-footer-links a:hover { color:rgba(248,250,252,0.6); }
        .l-footer-copy { font-size:11px;color:rgba(248,250,252,0.12);letter-spacing:1px; }

        @media (max-width:900px) {
          .l-links { display:none; }
          .l-hamburger { display:flex; }
          .l-problem-grid { grid-template-columns:1fr; }
          .l-feat-grid { grid-template-columns:1fr 1fr; }
          .l-for-grid { grid-template-columns:1fr; }
          .l-price-grid { grid-template-columns:1fr; max-width:420px; margin:0 auto; }
          .l-demo-inner { flex-direction:column; gap:40px; }
          .l-demo-phone { display:flex; justify-content:center; }
          .l-nav { padding:0 20px; }
        }
        @media (max-width:600px) {
          .l-feat-grid { grid-template-columns:1fr; }
          .l-hero-h1 { font-size:clamp(38px,12vw,72px); }
          .l-hero-stats { flex-direction:column; max-width:220px; }
          .l-hero-stat { border-right:none; border-bottom:1px solid var(--l-border); }
          .l-hero-stat:last-child { border-bottom:none; }
          .l-section { padding:60px 20px; }
          .l-for-card { padding:36px 24px; }
          .l-h2 { font-size:clamp(22px,7vw,38px); }
        }
      `}</style>

      <nav className={`l-nav ${scrolled ? 'scrolled' : ''}`} id="l-nav">
        <div className="l-nav-inner">
          <div className="l-logo" onClick={() => goTo('landing')}>Post<em>Hire</em></div>
          <div className="l-links">
            <a onClick={() => sTo('l-how')}>How It Works</a>
            <a onClick={() => sTo('l-features')}>Features</a>
            <a onClick={() => sTo('l-pricing')}>Pricing</a>
            <a onClick={() => sTo('l-forwho')}>For You</a>
          </div>
          <div className="l-nav-right">
            <button className="l-btn-ghost" onClick={() => goTo('login')}>Sign In</button>
            <button className="l-btn-fill" onClick={() => goTo('signup')}>Get Started</button>
          </div>
          <button className={`l-hamburger ${mobMenuOpen ? 'open' : ''}`} id="l-ham" onClick={() => setMobMenuOpen(!mobMenuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`l-mobile-menu ${mobMenuOpen ? 'open' : ''}`} id="l-mobmenu">
        <div className="l-mob-link" onClick={() => { sTo('l-how'); setMobMenuOpen(false); }}>How It Works</div>
        <div className="l-mob-link" onClick={() => { sTo('l-features'); setMobMenuOpen(false); }}>Features</div>
        <div className="l-mob-link" onClick={() => { sTo('l-pricing'); setMobMenuOpen(false); }}>Pricing</div>
        <div className="l-mob-link" onClick={() => { sTo('l-forwho'); setMobMenuOpen(false); }}>For You</div>
        <div className="l-mob-btns">
          <button className="l-btn-fill" style={{ width: '100%', padding: '14px', borderRadius: 'var(--r-full)', fontSize: '14px' }} onClick={() => { goTo('signup'); setMobMenuOpen(false); }}>Get Started Free</button>
          <button className="l-btn-ghost" style={{ width: '100%', padding: '14px', borderRadius: 'var(--r-full)', fontSize: '14px' }} onClick={() => { goTo('login'); setMobMenuOpen(false); }}>Sign In</button>
        </div>
      </div>

      {/* HERO */}
      <section className="l-hero">
        <div className="l-hero-bg">
          <div className="l-hero-circle"></div><div className="l-hero-circle"></div><div className="l-hero-circle"></div>
          <div className="l-hero-dot"></div><div className="l-hero-dot"></div><div className="l-hero-dot"></div>
          <div className="l-hero-dot"></div><div className="l-hero-dot"></div>
          <div className="l-hero-corner"></div><div className="l-hero-corner"></div>
          <div className="l-hero-corner"></div><div className="l-hero-corner"></div>
        </div>
        <div className="l-hero-content">
          <div className="l-hero-eyebrow"><span></span>Startup × Creator Collaboration</div>
          <h1 className="l-hero-h1">POST<em>HIRE</em></h1>
          <div className="l-hero-rule"></div>
          <p className="l-hero-sub">The fastest way for startup founders to find, evaluate, and collaborate with creators — no cold outreach, no endless DMs.</p>
          <div className="l-hero-btns">
            <button className="l-btn-hero-primary" onClick={() => goTo('signup', 'founder')}>Find Creators Now →</button>
            <button className="l-btn-hero-ghost" onClick={() => sTo('l-how')}>See How It Works</button>
          </div>
          <div className="l-hero-stats">
            <div className="l-hero-stat"><span className="l-stat-val">2 min</span><span className="l-stat-lbl">to Connect</span></div>
            <div className="l-hero-stat"><span className="l-stat-val">1 Click</span><span className="l-stat-lbl">to WhatsApp</span></div>
            <div className="l-hero-stat"><span className="l-stat-val">Zero</span><span className="l-stat-lbl">Middlemen</span></div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="l-marquee">
        <div className="l-marquee-track">
          <span>Instagram Creators</span><span className="l-marquee-sep">✦</span>
          <span>YouTube Creators</span><span className="l-marquee-sep">✦</span>
          <span>LinkedIn Leaders</span><span className="l-marquee-sep">✦</span>
          <span>SaaS Founders</span><span className="l-marquee-sep">✦</span>
          <span>D2C Brands</span><span className="l-marquee-sep">✦</span>
          <span>Short-form Content</span><span className="l-marquee-sep">✦</span>
          <span>Startup Marketers</span><span className="l-marquee-sep">✦</span>
          <span>Early-Stage Startups</span><span className="l-marquee-sep">✦</span>
          <span>Instagram Creators</span><span className="l-marquee-sep">✦</span>
          <span>YouTube Creators</span><span className="l-marquee-sep">✦</span>
          <span>LinkedIn Leaders</span><span className="l-marquee-sep">✦</span>
          <span>SaaS Founders</span><span className="l-marquee-sep">✦</span>
          <span>D2C Brands</span><span className="l-marquee-sep">✦</span>
          <span>Short-form Content</span><span className="l-marquee-sep">✦</span>
          <span>Startup Marketers</span><span className="l-marquee-sep">✦</span>
          <span>Early-Stage Startups</span><span className="l-marquee-sep">✦</span>
        </div>
      </div>

      {/* PROBLEM */}
      <section className="l-section l-problem" id="l-forwho">
        <div className="l-container">
          <div className="l-tag">The Problem</div>
          <h2 className="l-h2">Finding the right match<br />is <em>broken</em></h2>
          <div className="l-problem-grid">
            <div className="l-pcard">
              <span className="l-pcard-icon">🚀</span>
              <h3>For Startup Founders</h3>
              <ul>
                <li>Can't find relevant creators in their niche</li>
                <li>No way to evaluate creator experience quickly</li>
                <li>Cold outreach gets lost in DMs</li>
                <li>No structured way to start collaborating</li>
              </ul>
            </div>
            <div className="l-pcard">
              <span className="l-pcard-icon">🎥</span>
              <h3>For Creators</h3>
              <ul>
                <li>Struggle to find serious startup clients</li>
                <li>No platform to get real visibility</li>
                <li>Past work is scattered across platforms</li>
                <li>Inbound opportunities are nearly zero</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="l-section" id="l-how">
        <div className="l-container">
          <div className="l-tag">The Process</div>
          <h2 className="l-h2">Simple by design.<br /><em>Powerful in result.</em></h2>
          <div className="l-how-tabs">
            <button className={`l-tab ${activeFlow === 'founder' ? 'active' : ''}`} onClick={() => setActiveFlow('founder')}>Startup Founder</button>
            <button className={`l-tab ${activeFlow === 'creator' ? 'active' : ''}`} onClick={() => setActiveFlow('creator')}>Creator</button>
          </div>
          {activeFlow === 'founder' && (
            <div className="l-flow" id="flow-founder">
              <div className="l-step"><div className="l-step-num">01</div><div className="l-step-body"><h4>Sign Up as a Founder</h4><p>Create your profile with startup name, industry, budget range, and collaboration needs.</p></div></div>
              <div className="l-step"><div className="l-step-num">02</div><div className="l-step-body"><h4>Browse Creator Profiles</h4><p>Explore creators filtered by niche, audience size, or category. See past work and pricing at a glance.</p></div></div>
              <div className="l-step"><div className="l-step-num">03</div><div className="l-step-body"><h4>Click Collaborate</h4><p>Hit the Collaborate button. WhatsApp opens instantly with a pre-filled message ready to send.</p></div></div>
              <div className="l-step"><div className="l-step-num">04</div><div className="l-step-body"><h4>Start Your Campaign</h4><p>Chat directly, discuss terms, and kick off — no platforms, no gatekeepers.</p></div></div>
            </div>
          )}
          {activeFlow === 'creator' && (
            <div className="l-flow" id="flow-creator">
              <div className="l-step"><div className="l-step-num">01</div><div className="l-step-body"><h4>Sign Up as a Creator</h4><p>Build your profile with niche, audience size, past collaborations, and pricing.</p></div></div>
              <div className="l-step"><div className="l-step-num">02</div><div className="l-step-body"><h4>Get Discovered</h4><p>Your profile is live and visible to hundreds of startup founders actively looking for creators like you.</p></div></div>
              <div className="l-step"><div className="l-step-num">03</div><div className="l-step-body"><h4>Receive Collaboration Requests</h4><p>Founders reach out directly on WhatsApp — no gatekeepers, no middlemen.</p></div></div>
              <div className="l-step"><div className="l-step-num">04</div><div className="l-step-body"><h4>Build Your Portfolio</h4><p>Every collaboration builds your track record, making you more discoverable over time.</p></div></div>
            </div>
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section className="l-section l-features" id="l-features">
        <div className="l-container">
          <div className="l-tag">What You Get</div>
          <h2 className="l-h2">Everything you need.<br /><em>Nothing you don't.</em></h2>
          <div className="l-feat-grid">
            <div className="l-feat-card"><div className="l-feat-icon">🔍</div><h4>Smart Discovery</h4><p>Search creators by niche, audience size, engagement rate, and platform in seconds.</p></div>
            <div className="l-feat-card"><div className="l-feat-icon">⚡</div><h4>One-Click Connect</h4><p>WhatsApp integration takes you from discovery to conversation in a single click.</p></div>
            <div className="l-feat-card"><div className="l-feat-icon">📊</div><h4>Creator Analytics</h4><p>See audience size, engagement, past collabs, and pricing at a single glance.</p></div>
            <div className="l-feat-card"><div className="l-feat-icon">🛡️</div><h4>Verified Profiles</h4><p>Creators submit real data so founders know exactly what they're partnering with.</p></div>
            <div className="l-feat-card"><div className="l-feat-icon">🎯</div><h4>Niche Filtering</h4><p>Filter by AI, Finance, Startup, Tech, Lifestyle and more — match on what matters.</p></div>
            <div className="l-feat-card"><div className="l-feat-icon">🚀</div><h4>Instant Visibility</h4><p>Creators get a structured profile page that showcases work and invites serious inbound.</p></div>
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section className="l-section">
        <div className="l-container">
          <div className="l-demo-inner">
            <div className="l-demo-text">
              <div className="l-tag">See It In Action</div>
              <h2 className="l-h2" style={{ marginBottom: '18px' }}>From browse to<br />WhatsApp <em>in 10 seconds.</em></h2>
              <p className="l-demo-desc">No forms. No waiting. No middleman. Click Collaborate and start the conversation that launches your next campaign.</p>
              <div className="l-demo-steps">
                <div className="l-dstep"><div className="l-dstep-num">1</div>Find a creator you love</div>
                <div className="l-dstep"><div className="l-dstep-num">2</div>Click "Collaborate"</div>
                <div className="l-dstep"><div className="l-dstep-num">3</div>WhatsApp opens instantly</div>
                <div className="l-dstep"><div className="l-dstep-num">4</div>Message pre-filled for you</div>
              </div>
            </div>
            <div className="l-demo-phone">
              <div className="phone-wrap">
                <div className="phone-top">
                  <div className="ph-back">←</div>
                  <div className="ph-av">A</div>
                  <div className="ph-info"><span className="ph-nm">Arjun Mehra</span><span className="ph-st">● online</span></div>
                </div>
                <div className="phone-body">
                  <div className="chat-date">TODAY</div>
                  <div className="chat-typing"><span></span><span></span><span></span></div>
                  <div className="chat-sent">Hi, I found you on PostHire. I would like to collaborate. 👋<div className="chat-time">just now ✓✓</div></div>
                </div>
                <div className="phone-bottom"><div className="ph-input-fake">Type a message...</div><div className="ph-send-btn">▶</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="l-section l-for">
        <div className="l-container">
          <div className="l-tag">Built For</div>
          <h2 className="l-h2">Two sides.<br />One platform.</h2>
          <div className="l-for-grid">
            <div className="l-for-card">
              <div className="l-for-eyebrow">Startup Founders</div>
              <h3>Stop hunting.<br />Start collaborating.</h3>
              <p>Whether you're building a SaaS, D2C brand, or early-stage startup — PostHire puts a curated creator network at your fingertips.</p>
              <ul className="l-for-list"><li>Early-stage founders</li><li>SaaS founders</li><li>D2C brands</li><li>Startup marketers</li></ul>
              <button className="l-btn-fill" onClick={() => goTo('signup', 'founder')}>Find Creators →</button>
            </div>
            <div className="l-for-card l-for-card-accent">
              <div className="l-for-eyebrow">Creators</div>
              <h3>Get seen by<br />the right clients.</h3>
              <p>Stop waiting for DMs that never come. Build a profile that speaks for you and let serious startup founders find you.</p>
              <ul className="l-for-list"><li>Instagram creators</li><li>YouTube creators</li><li>LinkedIn creators</li><li>Short-form specialists</li></ul>
              <button className="l-btn-ghost" onClick={() => goTo('signup', 'creator')}>Join as Creator →</button>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="l-section l-pricing" id="l-pricing">
        <div className="l-container">
          <div className="l-pricing-title-wrap">
            <div className="l-tag" style={{ justifyContent: 'center' }}>Simple Pricing</div>
            <h2 className="l-h2">Choose your plan.<br /><em>Grow at your pace.</em></h2>
            <p className="l-pricing-sub">Start free, upgrade when you're ready. No hidden fees.</p>
          </div>
          <div className="l-price-grid">
            <div className="l-price-card">
              <span className="l-plan-badge badge-free">Free</span>
              <div className="l-price-name">FREE PLAN</div>
              <div className="l-price-amount"><sup>₹</sup>0</div>
              <div className="l-price-period">per month — no credit card needed</div>
              <div className="l-price-divider"></div>
              <ul className="l-price-feat-list">
                <li><span className="tick">✓</span>Create profile (creator or founder)</li>
                <li><span className="tick">✓</span>Browse up to 10 profiles/day</li>
                <li><span className="tick">✓</span>3 collaboration requests/month</li>
                <li><span className="tick">✓</span>Basic search filters</li>
                <li className="off"><span className="tick">—</span>In-platform messaging</li>
                <li className="off"><span className="tick">—</span>AI match suggestions</li>
                <li className="off"><span className="tick">—</span>Featured profile badge</li>
              </ul>
              <button className="l-price-cta l-price-cta-outline" onClick={() => goTo('signup')}>Get Started Free</button>
            </div>
            <div className="l-price-card l-price-card-featured">
              <span className="l-plan-badge badge-starter">Starter</span>
              <div className="l-price-name">STARTER PLAN</div>
              <div className="l-price-amount"><sup>₹</sup>299</div>
              <div className="l-price-period">per month — billed monthly</div>
              <div className="l-price-divider"></div>
              <ul className="l-price-feat-list">
                <li><span className="tick">✓</span>Unlimited profile browsing</li>
                <li><span className="tick">✓</span>20 collaboration requests/month</li>
                <li><span className="tick">✓</span>Advanced search filters</li>
                <li><span className="tick">✓</span>Direct in-platform messaging</li>
                <li><span className="tick">✓</span>Priority listing (basic boost)</li>
                <li><span className="tick">✓</span>Collaboration tracking dashboard</li>
                <li className="off"><span className="tick">—</span>AI match suggestions</li>
              </ul>
              <button className="l-price-cta l-price-cta-fill" onClick={() => goTo('signup')}>Start Starter Plan →</button>
            </div>
            <div className="l-price-card">
              <span className="l-plan-badge badge-pro">Pro</span>
              <div className="l-price-name">PRO PLAN</div>
              <div className="l-price-amount"><sup>₹</sup>599</div>
              <div className="l-price-period">per month — billed monthly</div>
              <div className="l-price-divider"></div>
              <ul className="l-price-feat-list">
                <li><span className="tick">✓</span>Everything in Starter</li>
                <li><span className="tick">✓</span>Unlimited collaboration requests</li>
                <li><span className="tick">✓</span>Daily AI-powered match suggestions</li>
                <li><span className="tick">✓</span>Featured profile badge</li>
                <li><span className="tick">✓</span>Top search placement</li>
                <li><span className="tick">✓</span>Portfolio highlight section</li>
                <li><span className="tick">✓</span>Audience analytics + priority support</li>
              </ul>
              <button className="l-price-cta l-price-cta-outline" onClick={() => goTo('signup')}>Pay ₹599 & Activate →</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="l-cta">
        <div className="l-cta-inner">
          <div className="l-cta-eyebrow">Ready to begin?</div>
          <h2 className="l-cta-h2">Join PostHire Today</h2>
          <p className="l-cta-sub">Whether you're a founder looking for creators, or a creator looking for serious clients — PostHire is where the collaboration starts.</p>
          <div className="l-cta-btns">
            <button className="l-btn-cta-primary" onClick={() => goTo('signup', 'founder')}>I'm a Founder →</button>
            <button className="l-btn-cta-ghost" onClick={() => goTo('signup', 'creator')}>I'm a Creator →</button>
          </div>
        </div>
      </div>

      <footer className="l-footer">
        <div className="l-footer-logo">Post<em>Hire</em></div>
        <p className="l-footer-tag">Where startups meet creators.</p>
        <div className="l-footer-links"><a>Privacy</a><a>Terms</a><a>Contact</a></div>
        <p className="l-footer-copy">© 2026 PostHire. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
