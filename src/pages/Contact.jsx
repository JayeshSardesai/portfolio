import React from "react";

export default function Contact() {
    const contacts = [
        { label: "Email (Primary)", value: "jayeshsardesai@gmail.com", href: "mailto:jayeshsardesai@gmail.com", icon: "/icons/email.svg", color: "#EA4335" },
        { label: "Email (Backup)", value: "desaijayash@gmail.com", href: "mailto:desaijayash@gmail.com", icon: "/icons/email.svg", color: "#EA4335" },
        { label: "Phone", value: "+91 83173 78055", href: "tel:+918317378055", icon: "/icons/phone.svg", color: "#06b6d4" },
        { label: "LinkedIn", value: "jayesh-sardesai", href: "https://www.linkedin.com/in/jayesh-sardesai-5b3245279", icon: "/icons/linkedin.svg", color: "#0A66C2" },
        { label: "GitHub", value: "JayeshSardesai", href: "https://github.com/JayeshSardesai", icon: "/icons/github.png", color: "#ffffff" },
        { label: "LeetCode", value: "jayesh037", href: "https://leetcode.com/u/jayesh037/", icon: "/icons/leetcode.png", color: "#FFA116" },
        { label: "GeeksforGeeks", value: "desaijr7yu", href: "https://www.geeksforgeeks.org/profile/desaijr7yu", icon: "/icons/gfg.svg", color: "#2F9E44" }
    ];

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="text-muted text-lg">Reach out via any of the options below — typically respond within 24–48 hours.</p>

            <div className="grid sm:grid-cols-2 gap-5">
                {contacts.map((c, idx) => (
                    <a
                        key={idx}
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl card hover:scale-[1.025] transition"
                        style={{ borderLeft: `4px solid ${c.color}` }}
                    >
                        <div className="w-12 h-12 flex items-center justify-center rounded-md" style={{ background: `${c.color}22` }}>
                            <img src={c.icon} alt={c.label} className="w-7 h-7 object-contain" />
                        </div>
                        <div>
                            <p className="text-muted text-sm">{c.label}</p>
                            <p className="text-gray-100 font-semibold">{c.value}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}