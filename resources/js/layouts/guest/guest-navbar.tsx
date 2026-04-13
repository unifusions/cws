import { Link } from "@inertiajs/react";
import {   ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];


export default function GuestNavbar() {

     const [isOpen, setIsOpen] = useState(false);
    return (
       <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-10">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-accent-foreground font-heading text-sm font-bold">U</span>
          </div>
          <span className="font-heading text-lg font-bold text-foreground">
            Unifusions
          </span>
        </Link>

        {/* Center nav - pill style */}
        <div className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full bg-secondary/80 backdrop-blur-md border border-border">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-5 py-2 rounded-full text-sm font-body font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-body text-sm font-medium hover:scale-105 transition-transform"
          >
            Let's Talk <ArrowUpRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden w-11 h-11 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col"
          >
            <div className="px-6 py-5 flex items-center justify-between">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-heading text-sm font-bold">U</span>
                </div>
                <span className="font-heading text-lg font-bold text-foreground">Unifusions</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-4xl md:text-6xl font-bold text-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="px-6 py-8 text-sm text-muted-foreground font-body text-center">
              projects@unifusions.com
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
    )
}