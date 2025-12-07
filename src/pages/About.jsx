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
                    <p>I build production-grade web apps, deploy ML models, and perform practical security testing. I focus on shipping reliable, well-documented features that solve real problems.</p>
                    <p className="mt-2">Currently interning at Vinidra Softech — working on SaaS modules, payments integration, and reliability improvements.</p>
                </>
            ),
            image: "/assets/profile.png"
        },
        {
            title: "Education",
            short: "Academic background",
            details: (
                <>
                    <ul className="list-disc list-inside text-muted">
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
                    <div className="flex flex-wrap gap-2 mt-2">
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
                    <p className="text-muted text-sm">
                        Below are my verified certificates from competitions, hackathons,
                        internships and academic achievements.
                    </p>
                </>
            ),
            achievements: [
                { label: "Think Bots Coding Quiz (Winner, 2023)", src: "/certificates/think-bots-2023.png" },
                { label: "Code Prahari (Winner, 2025)", src: "/certificates/code-prahari-2025.png" },
                { label: "Digital Decipher (Winner, 2025)", src: "/certificates/digital-decipher-2025.png" },
                { label: "Smart Campus Navigator (1st Prize, 2025)", src: "/certificates/smart-campus-2025.png" },
                { label: "Service Race — INCET Presentation (2025)", src: "/certificates/service-race-incet-2025.png" },
                { label: "Crisis Response — Top 25 Finalist (2025)", src: "/certificates/crisis-response-top25-2025.png" },
                { label: "Kaggle Basic Machine Learning Course", src: "/certificates/kaggle.png" },
                { label: "Kaggle Intermidiate Machine Learning Course", src: "/certificates/kaggle2.png" },
                { label: "Isro Cybersecurity Course", src: "/certificates/isro.png" },
                { label: "B.E. Computer Science Engineering — CGPA 9.37", src: "/certificates/be-cgpa.png" }
            ]
        },
        {
            title: "Location",
            short: "Belagavi, Karnataka, India — 590014",
            details: (
                <>
                    <p className="text-muted">Based in Belagavi. Open to internships and remote/full-time opportunities that match my skills.</p>
                </>
            )
        }
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Profile</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {cards.map((c, i) => <ProfileCard key={i} {...c} />)}
            </div>
        </div>
    );
}
