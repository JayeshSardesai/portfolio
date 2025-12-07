// src/pages/Projects.jsx
import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

/*
  Projects listed per your data.
  - Tabs at the top: Development | AI / ML | Cybersecurity
  - Each tab shows cards in a responsive grid
  - Each card is an accordion (ProjectCard handles expand/collapse and View Project)
  - Update the 'link' fields to your actual GitHub / demo URLs
*/

const development = [
    {
        title: "Digital Assist to Indian Farming (FarmFlow)",
        tech: "Web Dashboard",
        desc: "Real-time dashboard for farmers with crop-specific views, prediction results and actionable recommendations. (Web interface only)",
        link: "https://majorfarmflow.netlify.app/"
    },
    {
        title: "Globe Travels",
        tech: "React + TypeScript • Tailwind • Firebase (Auth/Firestore)",
        desc: "Full travel platform: user pages, trip/package listings, booking modal, and admin dashboard supporting CRUD operations.",
        link: "https://globtravels-app.onrender.com/"
    },
    {
        title: "Service Race",
        tech: "Full-Stack Platform",
        desc: "Marketplace connecting customers with professionals; multi-role logins and supervisor features. (Top 7 Finalist)",
        link: "https://github.com/JayeshSardesai/Hack4-ClashOfCodes"
    },
    {
        title: "School ERP + Mobile App",
        tech: "Full-Stack • React Native • MySQL",
        desc: "Complete ERP with web admin panels + mobile app for students and teachers. Reduced manual administrative work by ~70–80%.",
        link: "https://jayesh-erp.web.app/"
    },
    {
        title: "SaaS Platform – PDF Extractor",
        tech: "SaaS Model • PostgreSQL • Razorpay",
        desc: "Pay-as-you-go PDF extraction platform with secure payment integration and processing pipelines.",
        link: "https://github.com/JayeshSardesai/Saas-Platform"
    },
    {
        title: "Medicine Reminder",
        tech: "Web UI/UX • API Integration",
        desc: "Frontend + backend logic for medication tracking and reminder workflows. (AI/ML OCR & gesture detection handled in AI project.)",
        link: "https://github.com/JayeshSardesai/Prescription"
    },
    {
        title: "Smart Campus Navigator",
        tech: "Interactive Website • Map APIs",
        desc: "Interactive website with maps and conversational UI to guide users across campus (AI features implemented separately).",
        link: "https://github.com/JayeshSardesai/ai_navigator"
    },
    {
        title: "Crisis Response Platform",
        tech: "Web Portal • Bluetooth Hybrid System",
        desc: "Emergency reporting web portal combined with an offline Bluetooth messaging app for communication redundancy.",
        link: "https://github.com/JayeshSardesai/OfflineMessagingApp"
    },
    {
        title: "StudentInfo (Marks Management System)",
        tech: "Scripting • Parsing",
        desc: "Automated extraction of student marks from PDFs and generation of analysis and reports (CSV/Excel export).",
        link: "https://github.com/JayeshSardesai/studentInfo"
    }
];

const aiprojects = [
    {
        title: "Digital Assist to Indian Farming",
        tech: "Ensemble ML • Classification & Regression",
        desc: "Voting Classifier ensemble for crop suitability (F1 > 0.999) and ensemble regression for yield estimation (R² ≈ 0.8789).",
        link: "https://majorfarmflow.netlify.app/"
    },
    {
        title: "Movie Recommendation System",
        tech: "Recommendation Algorithms",
        desc: "Collaborative + content-based recommendation engine implemented in Jupyter notebooks with evaluation metrics and demos.",
        link: "https://github.com/JayeshSardesai/Movie-recommendation-system"
    },
    {
        title: "Medicine Reminder",
        tech: "Gemini OCR • YOLO-based gesture detection",
        desc: "Handwritten prescription OCR (Gemini) and gesture detection to enable automated medication reminders and compliance tracking.",
        link: "https://github.com/JayeshSardesai/Prescription"
    },
    {
        title: "Smart Campus Navigator",
        tech: "YOLO • Botpress AI",
        desc: "Object detection + conversational AI for indoor navigation assistance. Award-winning project for usability and reliability.",
        link: "https://github.com/JayeshSardesai/ai_navigator"
    },
    {
        title: "Crisis Response Platform",
        tech: "YOLO Threat Detection • AI Chatbot",
        desc: "Threat detection pipelines and chatbot integration to assist emergency response workflows.",
        link: "https://github.com/JayeshSardesai/OfflineMessagingApp"
    },
    {
        title: "SMS Spam Detection",
        tech: "NLP • Supervised ML",
        desc: "Pipeline for feature extraction (text processing) and training classifiers to detect spam messages with improved accuracy.",
        link: "https://github.com/JayeshSardesai/sms-spam-detection"
    }
];

const cyber = [
    {
        title: "ChaCha20 Steganography Project",
        tech: "ChaCha20 • Steganography",
        desc: "ChaCha20 encryption combined with XOR-based image steganography for secure hidden communication.",
        link: "https://stego-sec.onrender.com/"
    },
    {
        title: "Ethical Hacking & Pen Testing Toolkit",
        tech: "Recon • Exploitation",
        desc: "Practical toolkit and playbooks: Nmap, Netdiscover, Searchsploit and MSFvenom custom payload examples & scripts.",
        link: "https://github.com/JayeshSardesai/Acmegrade"
    },
    {
        title: "Acmegrade Project Reports",
        tech: "Vulnerability Assessment & Reporting",
        desc: "Detailed reports on footprinting, exploitation (DVWA-style), and remediation recommendations produced during internship.",
        link: "https://github.com/JayeshSardesai/Acmegrade"
    }
];

export default function Projects() {
    const [tab, setTab] = useState("dev");

    const tabStyleActive = "px-4 py-2 rounded-full text-sm bg-accentTo text-white";
    const tabStyleInactive = "px-4 py-2 rounded-full text-sm bg-surface text-muted";

    const getList = () => {
        if (tab === "dev") return development;
        if (tab === "ai") return aiprojects;
        return cyber;
    };

    const list = getList();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Projects</h2>

            {/* Tabs */}
            <div className="flex gap-3 flex-wrap mt-2">
                <button className={tab === "dev" ? tabStyleActive : tabStyleInactive} onClick={() => setTab("dev")}>
                    Development Projects
                </button>
                <button className={tab === "ai" ? tabStyleActive : tabStyleInactive} onClick={() => setTab("ai")}>
                    AI / Machine Learning
                </button>
                <button className={tab === "cyber" ? tabStyleActive : tabStyleInactive} onClick={() => setTab("cyber")}>
                    Cybersecurity
                </button>
            </div>

            {/* List for active tab */}
            <div className="grid sm:grid-cols-2 gap-6 mt-4">
                {list.map((p) => (
                    <ProjectCard key={p.title} p={p} />
                ))}
            </div>
        </div>
    );
}
