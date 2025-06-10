import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Icon name="Scale" className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">ЮрПрофи</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </a>
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200">
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Phone" className="h-4 w-4 mr-1" />
                +7 (495) 123-45-67
              </div>
              <Button
                variant="default"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Консультация
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                О нас
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Icon name="Phone" className="h-4 w-4 mr-1" />
                  +7 (495) 123-45-67
                </div>
                <Button
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700 w-full"
                >
                  Консультация
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
