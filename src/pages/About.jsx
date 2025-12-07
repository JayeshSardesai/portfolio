// src/pages/About.jsx
import React from "react";
import ProfileCard from "../components/ProfileCard";
import SkillBadge from "../components/SkillBadge";

export default function About() {
    const cards = [
        {
            title: "Summary",
            short: "Full Stack Developer • AI/ML Engineer • Cybersecurity Enthusiast",
            details: (
                <>
                    <p className="text-sm sm:text-base">I build production-grade web apps, deploy ML models, and perform practical security testing. I focus on shipping reliable, well-documented features that solve real problems.</p>
                    <p className="mt-2 text-sm sm:text-base">Currently interning at Vinidra Softech — working on SaaS modules, payments integration, and reliability improvements.</p>
                </>
            ),
            image: "/assets/profile.png"
        },
        {
            title: "Education",
            short: "Academic background",
            details: (
                <>
                    <ul className="list-disc list-inside text-muted space-y-1 text-sm sm:text-base">
                        <li><strong>10th:</strong> Thalakwadi High School, Tilakwadi — <strong>91.04% (KSEEB)</strong></li>
                        <li><strong>12th:</strong> Govindram Seksaria Science College — <strong>91.5% (PUE)</strong></li>
                        <li><strong>B.E. Computer Science:</strong> Jain College of Engineering & Research — <strong>CGPA: 9.37</strong></li>
                    </ul>
                </>
            )
        },
        {
            title: "Skills Snapshot",
            short: "Frontend • Backend • ML • Security",
            details: (
                <>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                        {[
                            "C", "C++", "Java", "TypeScript", "Python", "JavaScript",
                            "React", "React Native", "Expo", "TailwindCSS", "HTML5", "CSS3",
                            "Node.js", "Express", "Vite", "EJS",
                            "MongoDB", "MySQL", "PostgreSQL",
                            "AWS", "Netlify", "Render", "Firebase",
                            "scikit-learn", "Gemini OCR", "Azure AI", "Hugging Face",
                            "Nmap", "MSFvenom", "Proxychains", "Burp Suite", "OWASP ZAP"
                        ].map(s => <SkillBadge key={s} label={s} />)}
                    </div>
                </>
            )
        },
        {
            title: "Achievements",
            short: "Awards, hackathons & certificates",
            details: (
                <>
                    <p className="text-muted text-xs sm:text-sm">
                        Below are my verified certificates from competitions, hackathons,
                        internships and academic achievements.
                    </p>
                </>
            ),
            achievements: [
                { label: "Code Prahari (National Level Winner)", note: "1st Place, SGBIT (2025)", src: "/certificates/Sgbit.jpg" },
                { label: "Digital Decipher (Coding Competition)", note: "1st Place, JCE (2025)", src: "/certificates/JCE.jpg" },
                { label: "TCE-Hackfinity (National Hackathon)", note: "1st Place, Gadag (2025)", src: "/certificates/Gadag Hackathon.jpg" },
                { label: "Ambassadors Summit", note: "1st Place (2024)", src: "/certificates/summit.jpg" },
                { label: "Think Bots Coding Quiz", note: "2nd Place (2023)", src: "/certificates/THINK-BOTS.jpg" },
                { label: "Service Race — INCET Presentation", note: "Top 7 Finalist (2025)", src: "/certificates/ieee.png" },
                { label: "Clash Of Codes — Top 7 Finalist", note: "National Hackathon (2025)", src: "/certificates/clashofcodes.png" },
                { label: "ISRO Cybersecurity Course", note: "Completed (2024)", src: "/certificates/Isro.png" },
                { label: "B.E. Computer Science Engineering", note: "CGPA: 9.37", src: "/certificates/SecondYear.jpg" }
            ]
        },
        {
            title: "Location",
            short: "Belagavi, Karnataka, India — 590014",
            details: (
                <>
                    <p className="text-muted text-xs sm:text-sm">Based in Belagavi. Open to internships and remote/full-time opportunities that match my skills.</p>
                </>
            )
        }
    ];

    return (
        <div className="space-y-6 min-h-screen w-full overflow-x-hidden">
            <h2 className="text-xl sm:text-2xl font-semibold px-4 md:px-0">Profile</h2>

            {/* CHANGED: Added container with proper responsive padding */}
            <div className="w-full px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
                    {cards.map((c, i) => (
                        <div key={i} className="w-full h-full">
                            <ProfileCard {...c} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}