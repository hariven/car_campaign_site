import { useState, type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // icons for mobile menu
import { Button } from "@mui/material";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToForm = () => {
    document.getElementById("registration-form")?.scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false); // close mobile menu after click
  };

  const links = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Register", href: "#registration-form" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white backdrop-blur-sm border-b border-gray-200 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="font-heading text-2xl font-bold text-blue-600"
          >
            DreamCars
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button
              onClick={scrollToForm}
              sx={{
                backgroundColor: "#3b82f6", // Tailwind blue-500
                color: "#fff",
                px: 3,
                "&:hover": { backgroundColor: "#2563eb" },
              }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="flex flex-col space-y-4 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button
                onClick={scrollToForm}
                sx={{
                  backgroundColor: "#3b82f6",
                  color: "#fff",
                  px: 3,
                  "&:hover": { backgroundColor: "#2563eb" },
                }}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
