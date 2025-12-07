import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const loc = useLocation();
    const [open, setOpen] = useState(false);

    const NavLink = ({ to, children }) => (
        <Link
            to={to}
            onClick={() => setOpen(false)}
            className={`block px-3 py-2 rounded-md ${loc.pathname === to ? "text-white font-semibold" : "text-muted"}`}
        >
            {children}
        </Link>
    );

    return (
        <nav className="bg-surface/70 backdrop-blur sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-white font-bold text-lg">Jayesh Sardesai</Link>
                </div>

                {/* desktop links */}
                <div className="hidden md:flex items-center gap-6">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/internships">Internships</NavLink>
                    <NavLink to="/about">Profile</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>

                {/* right side: resume & phone */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="/assets/resume_software.pdf" className="px-3 py-1 border rounded text-sm">Resume</a>
                    <a href="tel:+918317378055" className="text-muted text-sm">📞 83173 78055</a>
                </div>

                {/* mobile hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setOpen(v => !v)} aria-label="Toggle menu" className="p-2 rounded-md">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-200">
                            {open ? (
                                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            ) : (
                                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* mobile menu */}
            {open && (
                <div className="md:hidden bg-surface/80 border-t border-surface/50">
                    <div className="px-4 py-4 space-y-1">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                        <NavLink to="/internships">Internships</NavLink>
                        <NavLink to="/about">Profile</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <div className="mt-2">
                            <a href="/assets/resume_software.pdf" className="block px-3 py-2 rounded-md text-muted">Download Resume</a>
                            <a href="tel:+918317378055" className="block px-3 py-2 rounded-md text-muted">📞 83173 78055</a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
