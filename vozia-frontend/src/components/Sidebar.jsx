import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  LayoutDashboard,
  PanelLeftClose,
  PanelLeftOpen,
  Mic,
  Headphones,
  History,
  Speech
} from "lucide-react";

export default function Sidebar({ collapsed, setCollapsed }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  const handleNavClick = () => {
    setMobileOpen(false);
    setCollapsed(true);
  };

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden absolute top-4 left-4 z-50 w-9 h-9 flex items-center justify-center text-slate-200 hover:text-white"
      >
        <PanelLeftOpen size={20} />
      </button>

      {mobileOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          flex-shrink-0
          h-screen
          flex
          flex-col
          justify-between
          bg-[#0A0F1C]/95
          border-r border-white/[0.04]
          backdrop-blur-xl
          transition-transform duration-300 ease-in-out
          overflow-hidden
          ${collapsed ? "w-[88px]" : "w-64"}
          fixed md:relative top-0 left-0 z-50
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div>
          <div className="px-4 py-5 border-b border-white/[0.03]">
            <div className="flex items-center justify-between gap-2">
              <Link
                to="/"
                onClick={handleNavClick}
                className="flex items-center gap-3 min-w-0 hover:opacity-80 transition-opacity"
              >
          <div className="w-9 h-9 min-w-9 rounded-xl bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-center">
  <Speech size={18} className="text-cyan-400" />
</div>
                {!collapsed && (
                  <span className="text-base font-bold tracking-tight text-white">
                    VozIA
                  </span>
                )}
              </Link>

              <button
                onClick={closeMenu}
                className="md:hidden w-8 h-8 flex items-center justify-center text-slate-300 hover:text-white"
              >
                <PanelLeftClose size={18} />
              </button>

              <button
                onClick={() => setCollapsed(!collapsed)}
                className="hidden md:flex w-8 h-8 items-center justify-center rounded-lg hover:bg-white/5"
              >
                {collapsed ? (
                  <PanelLeftOpen size={18} className="text-slate-400" />
                ) : (
                  <PanelLeftClose size={18} className="text-slate-400" />
                )}
              </button>
            </div>
          </div>

          <div className="px-3 py-4 flex flex-col gap-1.5">
            <NavItem
              to="/"
              icon={<Mic size={18} />}
              title="AI Voz"
              collapsed={collapsed}
              onClick={handleNavClick}
            />

            <NavItem
              to="/dashboard"
              icon={<LayoutDashboard size={18} />}
              title="Dashboard"
              collapsed={collapsed}
              onClick={handleNavClick}
            />

            <NavItem
              to="/historial"
              icon={<History size={18} />}
              title="Historial"
              collapsed={collapsed}
              onClick={handleNavClick}
            />
          </div>
        </div>
      </aside>
    </>
  );
}

function NavItem({ to, icon, title, collapsed, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => `
        w-full flex items-center rounded-xl transition-all duration-200
        ${collapsed ? "justify-center px-0 py-3" : "gap-3 px-3 py-2.5"}
        ${isActive ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"}
      `}
    >
      <div className="flex items-center justify-center">{icon}</div>
      {!collapsed && (
        <span className="text-[13px] font-medium whitespace-nowrap">{title}</span>
      )}
    </NavLink>
  );
}