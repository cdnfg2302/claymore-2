import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/48931e29-77ca-4715-8237-a99260434656.png" 
              alt="Claymore AI Lab" 
              className="h-10 w-auto"
            />
          </div>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              关于我们
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              我们的产品
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              新闻动态
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              企业社会责任
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              加入我们
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;