// src/components/Hero.jsx
import React from "react";

export default function Hero() {
    return (
        <section className="py-12">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* IMAGE SIDE: order-first on mobile, order-last on md+ */}
                <div className="flex-0 order-first md:order-last">
                    <div
                        className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-accentTo ring-offset-4 ring-offset-bg mx-auto"
                        style={{ boxShadow: "0 10px 30px rgba(15,23,42,0.9)" }}
                    >
                        <img
                            src="/assets/profile.png"
                            alt="Jayesh Sardesai"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* TEXT SIDE: order-second on mobile, order-first on md+ */}
                <div className="flex-1 text-center md:text-left order-last md:order-first">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Hi, I’m{" "}
                        <span className="text-accentTo">
                            Jayesh Sardesai
                        </span>
                    </h1>

                    <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto md:mx-0">
                        Full Stack Developer, AI/ML Engineer & Cybersecurity Enthusiast. I design and build
                        production-grade web applications, deploy applied machine-learning models for real-world
                        problems, and work on practical security tooling and assessments.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                        <a href="/assets/resume_software.pdf" className="btn-accent">
                            Software Engineer Resume
                        </a>
                        <a href="/assets/resume_aiml.pdf" className="btn-accent">
                            AI / ML Resume
                        </a>
                        <a href="/assets/resume_cyber.pdf" className="btn-accent">
                            Cybersecurity Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
