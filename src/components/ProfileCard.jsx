// src/components/ProfileCard.jsx
import React, { useState, useEffect } from "react";

export default function ProfileCard({ title, short, details, image, achievements = [] }) {
    const [open, setOpen] = useState(false);
    const [modalSrc, setModalSrc] = useState(null);

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") setModalSrc(null);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const safeId = title.replace(/\s+/g, "-").toLowerCase();

    const toggle = () => {
        setOpen(v => !v);
    };

    const onHeaderKey = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
        }
    };

    return (
        <>
            <div className="card w-full flex flex-col min-w-0">
                {/* Header area: clickable to toggle */}
                <div
                    role="button"
                    tabIndex={0}
                    onClick={toggle}
                    onKeyDown={onHeaderKey}
                    aria-expanded={open}
                    aria-controls={`profile-${safeId}`}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 flex-shrink-0 cursor-pointer"
                >
                    {image && (
                        <img
                            src={image}
                            alt={title}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg object-cover flex-shrink-0"
                            onClick={(e) => e.stopPropagation()}
                        />
                    )}

                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                            <div className="min-w-0 flex-1">
                                <h4 className="font-semibold text-sm sm:text-base md:text-lg truncate">{title}</h4>
                                <p className="text-muted text-xs sm:text-sm mt-1 line-clamp-2 sm:truncate">{short}</p>
                            </div>

                            {/* Right side actions */}
                            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                                <button
                                    onClick={(e) => { e.stopPropagation(); toggle(); }}
                                    className="text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-md bg-surface/70 whitespace-nowrap hover:bg-surface/80 transition-colors"
                                    aria-label={open ? "Collapse card" : "Expand card"}
                                >
                                    {open ? "Less" : "More"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content area */}
                <div
                    id={`profile-${safeId}`}
                    className={`px-3 sm:px-4 pb-3 sm:pb-4 overflow-hidden transition-all duration-300 ${open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                        <div onClick={(e) => e.stopPropagation()}>
                            {details}

                            {/* Achievements list */}
                            {achievements.length > 0 && (
                                <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                                    {achievements.map((a, i) => (
                                        <div key={i} className="flex items-center justify-between gap-2 sm:gap-3 p-2 sm:p-3 rounded-md bg-surface/70">
                                            <div className="flex-1 min-w-0">
                                                <div className="text-xs sm:text-sm font-medium break-words">{a.label}</div>
                                                {a.note && <div className="text-muted text-xs mt-0.5 break-words">{a.note}</div>}
                                            </div>

                                            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setModalSrc(a.src); }}
                                                    title={`View ${a.label}`}
                                                    className="p-1 sm:p-2 rounded-md bg-surface/60 hover:bg-surface/80 transition-colors"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </button>

                                                <a
                                                    onClick={(e) => e.stopPropagation()}
                                                    href={a.src}
                                                    download
                                                    title={`Download ${a.label}`}
                                                    className="p-1 sm:p-2 rounded-md bg-surface/60 hover:bg-surface/80 transition-colors"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v12" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11l4 4 4-4" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21H3" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div >

            {/* Modal for certificate preview */}
            {
                modalSrc && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={() => setModalSrc(null)}
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                        <div className="relative w-full max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => setModalSrc(null)}
                                className="absolute -top-10 right-0 sm:top-2 sm:right-2 z-50 p-2 rounded-md bg-surface/90 hover:bg-surface transition-colors"
                                aria-label="Close"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <img
                                src={modalSrc}
                                alt="Certificate"
                                className="w-full h-auto max-h-[85vh] rounded-lg shadow-2xl object-contain"
                            />
                        </div>
                    </div>
                )
            }
        </>
    );
}