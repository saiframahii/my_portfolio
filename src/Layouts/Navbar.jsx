import { useState, useEffect } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'nav-scroll' : ''}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-heading font-bold text-gray-900">
            Saif Alramahi
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {nav.map((item, i) => (
              <a
                key={i}
                href={item.link}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  i === active ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {createElement(item.icon)}
                <span>{item.text}</span>
              </a>
            ))}
          </nav>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-colors"
            onClick={() => setShowMenu(!showMenu)}
          >
            <HiMenuAlt2 size={24} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 z-40 transform transition-transform duration-300 ${
        showMenu ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" onClick={() => setShowMenu(false)} />
        <nav className="relative glass-panel h-full w-64 max-w-sm ml-auto py-4 px-6 flex flex-col">
          <div className="flex justify-end mb-8">
            <button
              className="p-2 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-colors"
              onClick={() => setShowMenu(false)}
            >
              <HiMenuAlt2 size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            {nav.map((item, i) => (
              <a
                key={i}
                href={item.link}
                onClick={() => {
                  setActive(i);
                  setShowMenu(false);
                }}
                className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                  i === active
                    ? 'bg-primary-50/50 backdrop-blur-sm text-primary-600'
                    : 'text-gray-600 hover:bg-white/50 backdrop-blur-sm'
                }`}
              >
                {createElement(item.icon)}
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;