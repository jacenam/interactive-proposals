import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { services } from '../../data/services'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#161616] h-12">
      <div className="max-w-[1584px] mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 h-full">
          <img src={`${import.meta.env.BASE_URL}images/logos/docfriends-logo-white.png`} alt="Docfriends" className="h-5" />
        </Link>

        <div className="hidden lg:flex items-center h-full">
          {services.map(s => (
            <Link
              key={s.id}
              to={s.route}
              className={`h-full flex items-center px-4 text-sm tracking-[0.16px] border-b-2 transition-colors ${
                location.pathname === s.route
                  ? 'text-white border-white'
                  : 'text-[#a8a8a8] border-transparent hover:text-white hover:bg-[#262626]'
              }`}
            >
              {s.title.replace('Doctalk ', '')}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white hover:bg-[#262626]"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#262626]">
          <div className="px-0">
            {services.map(s => (
              <Link
                key={s.id}
                to={s.route}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 text-sm tracking-[0.16px] border-l-2 ${
                  location.pathname === s.route
                    ? 'text-white border-white bg-[#393939]'
                    : 'text-[#a8a8a8] border-transparent hover:bg-[#393939] hover:text-white'
                }`}
              >
                <span>{s.icon}</span>{s.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
