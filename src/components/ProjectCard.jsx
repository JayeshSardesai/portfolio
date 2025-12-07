// src/components/ProjectCard.jsx
import React, { useState } from "react";

export default function ProjectCard({ p }) {
    const [open, setOpen] = useState(false);
    const safeId = p.title.replace(/\s+/g, "-").toLowerCase();

    // toggle handler for keyboard accessibility
    const onHeaderKey = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(v => !v);
        }
    };

    return (
        <div className="rounded-xl overflow-hidden transition-shadow hover:shadow-xl self-start">
            <div
                className="p-4"
                style={{
                    border: "1px solid rgba(255,255,255,0.04)",
                    background: "linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.00))",
                    borderRadius: 12
                }}
            >
                {/* HEADER: clickable area toggles expansion */}
                <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setOpen(v => !v)}
                    onKeyDown={onHeaderKey}
                    className="flex items-start justify-between gap-4 cursor-pointer"
                    aria-expanded={open}
                    aria-controls={`proj-${safeId}`}
                >
                    <div className="min-w-0">
                        <h3 className="text-lg font-semibold truncate">{p.title}</h3>
                        <p className="text-muted text-sm mt-1 truncate">{p.tech}</p>
                    </div>

                    {/* chevron - visual only but also clickable because it's inside header */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={(e) => { e.stopPropagation(); setOpen(v => !v); }}
                            aria-label={open ? "Collapse" : "Expand"}
                            className="p-2 rounded-md bg-surface/60 hover:bg-surface/80"
                        >
                            <svg
                                className={`w-5 h-5 transform transition-transform ${open ? "rotate-180" : ""}`}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* collapsible content */}
                <div
                    id={`proj-${safeId}`}
                    className={`mt-3 overflow-hidden transition-all ${open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                    <div className="text-gray-200 text-sm leading-relaxed">
                        <p>{p.desc}</p>

                        {p.features && p.features.length > 0 && (
                            <ul className="mt-2 list-disc list-inside text-muted text-sm">
                                {p.features.map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                        )}

                        {p.link && (
                            <div className="mt-4">
                                {/* Stop propagation in case button is clicked while header area overlaps */}
                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block btn-accent"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    View Project
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
