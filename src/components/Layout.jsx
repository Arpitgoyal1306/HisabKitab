import { Link, useLocation, Outlet } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();

  const navItem = "nav-item whitespace-nowrap";
  const active = "nav-item-active";
  const inactive = "nav-item-inactive";

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <aside className="sidebar w-full md:fixed md:inset-y-0 md:left-0 md:w-72 border-b md:border-b-0 md:border-r z-20">
        <div className="px-5 py-6 border-b border-[var(--border)]">
          <div className="flex items-center gap-3">
            <img 
              src="/Logo.png" 
              alt="HisabKitab Logo" 
              className="h-10 w-10 rounded-xl object-cover"
            />
            <div>
              <h1 className="text-lg font-semibold">HisabKitab</h1>
              <p className="text-sm text-muted">Smart Expense Tracker</p>
            </div>
          </div>
        </div>

        <nav className="flex md:flex-col gap-2 px-4 py-4 overflow-x-auto md:overflow-visible">
          <Link
            to="/"
            className={`${navItem} ${location.pathname === "/" ? active : inactive}`}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className={`${navItem} ${location.pathname === "/dashboard" ? active : inactive}`}
          >
            Dashboard
          </Link>
          <Link
            to="/reports"
            className={`${navItem} ${location.pathname === "/reports" ? active : inactive}`}
          >
            Reports
          </Link>
          <Link
            to="/about"
            className={`${navItem} ${location.pathname === "/about" ? active : inactive}`}
          >
            About
          </Link>
        </nav>

        <div className="flex md:hidden px-4 pb-4 pt-2 border-t border-[var(--border)] items-center justify-between">
          <DarkModeToggle />
        </div>

        <div className="hidden md:flex p-4 border-t border-[var(--border)] items-center justify-between">
          <DarkModeToggle />
        </div>
      </aside>

      {/* Main area */}
      <div className="md:ml-72 flex flex-col min-h-screen">
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
