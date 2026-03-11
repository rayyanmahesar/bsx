import { Link, useLocation } from 'react-router';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-white">BlueStoneX</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-white hover:text-white/80 transition-colors ${
              location.pathname === '/' ? 'text-white' : 'text-white/60'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/buy" 
            className={`text-white hover:text-white/80 transition-colors ${
              location.pathname === '/buy' ? 'text-white' : 'text-white/60'
            }`}
          >
            Buy
          </Link>
          <Link 
            to="/sell" 
            className={`text-white hover:text-white/80 transition-colors ${
              location.pathname === '/sell' ? 'text-white' : 'text-white/60'
            }`}
          >
            Sell
          </Link>
        </div>
      </div>
    </nav>
  );
}
