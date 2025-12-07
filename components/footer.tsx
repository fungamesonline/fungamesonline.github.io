export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Credits Section */}
          <div className="text-xs sm:text-sm text-gray-400">
            <span>© 2025 Fun Games | </span>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-6 sm:gap-8 text-xs sm:text-sm">
            <a href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
