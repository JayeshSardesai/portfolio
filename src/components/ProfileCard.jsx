// src/components/ProfileCard.jsx
import React, { useState, useEffect } from "react";

/**
 * ProfileCard
 * - Clicking the header (or pressing Enter/Space) toggles expand/collapse.
 * - Buttons inside the header/content use stopPropagation so they don't toggle.
 * - Modal preview for certificates remains.
 */
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

    const toggle = (e) => {
        // default toggle behavior
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
            <div
                className="card self-start w-full"
                style={{ cursor: "auto" }}
            >
                {/* Header area: clickable to toggle */}
                <div
                    role="button"
                    tabIndex={0}
                    onClick={toggle}
                    onKeyDown={onHeaderKey}
                    aria-expanded={open}
                    aria-controls={`profile-${safeId}`}
                    className="flex items-start gap-4 p-4 md:p-4"
                    style={{ cursor: "pointer" }}
                >
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className="w-14 h-14 md:w-16 md:h-16 rounded-lg object-cover flex-shrink-0"
                            onClick={(e) => e.stopPropagation()} // prevent image clicks toggling if user clicks on image controls later
                        />
                    ) : null}

                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-3">
                            <div className="min-w-0">
                                <h4 className="font-semibold text-base md:text-lg truncate">{title}</h4>
                                <p className="text-muted text-sm mt-1 truncate">{short}</p>
                            </div>

                            {/* Right side small actions — stopPropagation so they don't toggle */}
                            <div className="flex items-center gap-2">
                                {achievements.length > 0 && (
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setModalSrc(achievements[0].src); }}
                                        title="Preview first certificate"
                                        className="p-1 rounded-md bg-surface/70 hover:bg-surface/80 hidden sm:inline-flex"
                                        aria-label="Preview first certificate"
                                    >
                                        {/* eye icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                )}

                                <button
                                    onClick={(e) => { e.stopPropagation(); toggle(); }}
                                    className="text-sm px-3 py-1 rounded-md bg-surface/70"
                                    aria-label={open ? "Collapse card" : "Expand card"}
                                >
                                    {open ? "Less" : "More"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content area: expands/collapses */}
                <div
                    id={`profile-${safeId}`}
                    className={`px-4 pb-4 overflow-hidden transition-all ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                    <div className="text-gray-200 text-sm leading-relaxed">
                        {/* Make sure content clicks do not close card */}
                        <div onClick={(e) => e.stopPropagation()}>
                            {details}

                            {/* Achievements list */}
                            {achievements.length > 0 && (
                                <div className="mt-4 space-y-3">
                                    {achievements.map((a, i) => (
                                        <div key={i} className="flex items-center justify-between gap-3 p-3 rounded-md bg-surface/70">
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-medium truncate">{a.label}</div>
                                                {a.note && <div className="text-muted text-xs mt-0.5 truncate">{a.note}</div>}
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setModalSrc(a.src); }}
                                                    title={`View ${a.label}`}
                                                    className="p-2 rounded-md bg-surface/60 hover:bg-surface/80"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </button>

                                                <a
                                                    onClick={(e) => e.stopPropagation()}
                                                    href={a.src}
                                                    download
                                                    title={`Download ${a.label}`}
                                                    className="p-2 rounded-md bg-surface/60 hover:bg-surface/80"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
            </div>

            {/* Modal for certificate preview */}
            {modalSrc && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={() => setModalSrc(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="absolute inset-0 bg-black/70" />

                    <div className="relative max-w-[95%] max-h-[90%] bg-transparent" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setModalSrc(null)} className="absolute top-2 right-2 z-50 p-2 rounded-md bg-surface/80" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <img src={modalSrc} alt="Certificate" className="max-w-full max-h-[80vh] rounded-lg shadow-xl object-contain" />
                    </div>
                </div>
            )}
        </>
    );
}
