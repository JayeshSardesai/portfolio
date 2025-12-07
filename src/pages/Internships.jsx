import React from "react";

const internships = [
    { company: "Vinidra Softech", role: "Full Stack Dev Intern", duration: "Sep 2025 – Present", desc: "Enterprise modules, payments, and APIs.", cert: "/certificates/vinidra.png" },
    { company: "Acmegrade", role: "Cybersecurity Intern", duration: "Feb 2025 – Apr 2025", desc: "Vulnerability assessment & reporting.", cert: "/certificates/acmegrade.jpg" },
    { company: "Edunet (AI)", role: "AI Intern", duration: "Apr 2025 – May 2025", desc: "ML & Azure AI projects.", cert: "/certificates/edunet-ai.png" },
    { company: "Edunet (Sec)", role: "Cybersecurity Intern", duration: "May 2025 – Jun 2025", desc: "Cryptography & stego.", cert: "/certificates/edunet-sec.png" },
    { company: "Tata Forage", role: "Cybersecurity Analyst (Sim)", duration: "Apr 2025", desc: "SOC simulation & incident response.", cert: "/certificates/tata-forage.png" },
    { company: "Pranaksh Technologies", role: "Java Intern", duration: "Sep 2024 – Dec 2024", desc: "Java app dev.", cert: "/certificates/pranaksh.png" },
    { company: "Softmusk", role: "Cloud Intern", duration: "Nov 2023 – Dec 2023", desc: "Cloud deployments.", cert: "/certificates/softmusk.jpg" }
];

export default function Internships() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Internships & Certificates</h2>
            <p className="text-muted">Click an internship to view the completion certificate.</p>

            <div className="grid sm:grid-cols-2 gap-6 mt-4">
                {internships.map((it, i) => (
                    <a key={i} href={it.cert} target="_blank" rel="noopener noreferrer" className="block card hover:scale-[1.02] transition p-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-semibold text-lg">{it.company}</h3>
                                <p className="text-muted text-sm">{it.role} • {it.duration}</p>
                                <p className="mt-2 text-gray-200">{it.desc}</p>
                            </div>
                            <div className="text-sm text-gray-400">View certificate ↗</div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
