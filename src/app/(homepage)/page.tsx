"use client";
import {ArrowRightIcon, Copy, Send, SquareArrowOutUpRightIcon} from 'lucide-react';
import Image from "next/image";
import {useTypewriter} from "@/hooks/useTypewriter";
import {ServiceCard} from "@/components/ui/service_card";
import {ProjectCard} from "@/components/ui/project_card";
import {ToolsCard} from "@/components/ui/tools_card";
import {EducationCard} from "@/components/ui/education_card";
import {Footer} from "@/components/ui/footer_card";
import {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { NoiseCanvas } from "@/components/ui/NoiseCanvas";
import { RobotAvatar } from "@/components/ui/robot_avatar";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const {roleTextRef, cursorRef} = useTypewriter();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const sections = gsap.utils.toArray<HTMLElement>(".animate-section");

            sections.forEach((section) => {
                const heading = section.querySelector("h1");
                const line = section.querySelector(".line");

                if (heading) {
                    gsap.fromTo(
                        heading,
                        {opacity: 0, y: 30},
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: heading,
                                start: "top 88%",
                                toggleActions: "play none none none",
                            },
                        }
                    );
                }

                if (line) {
                    gsap.fromTo(
                        line,
                        {scaleX: 0, transformOrigin: "left center"},
                        {
                            scaleX: 1,
                            duration: 0.5,
                            ease: "power2.out",
                            delay: 0.15,
                            scrollTrigger: {
                                trigger: line,
                                start: "top 88%",
                                toggleActions: "play none none none",
                            },
                        }
                    );
                }

                const cards = section.querySelectorAll(
                    ".service-card, .project-card, .tools-card, .education-card, .stagger-item"
                );

                if (cards.length > 0) {
                    gsap.fromTo(
                        cards,
                        {opacity: 0, y: 40},
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.55,
                            ease: "power3.out",
                            stagger: 0.1,
                            scrollTrigger: {
                                trigger: section,
                                start: "top 80%",
                                toggleActions: "play none none none",
                            },
                        }
                    );
                }
            });

            gsap.fromTo(
                ".hero-content",
                {opacity: 0, y: 50},
                {opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.2}
            );

            gsap.fromTo(
                ".faq-pill",
                {opacity: 0, y: 20},
                {opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.6}
            );

            gsap.fromTo(
                ".contact-block",
                {opacity: 0, y: 40},
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".contact-block",
                        start: "top 82%",
                        toggleActions: "play none none none",
                    },
                }
            );

            gsap.fromTo(
                ".cta-heading",
                {opacity: 0, y: 40},
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".cta-heading",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

            gsap.fromTo(
                ".cta-input-row",
                {opacity: 0, y: 30},
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    delay: 0.15,
                    scrollTrigger: {
                        trigger: ".cta-input-row",
                        start: "top 88%",
                        toggleActions: "play none none none",
                    },
                }
            );

            gsap.fromTo(
                ".cta-chips button",
                {opacity: 0, y: 16},
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    stagger: 0.08,
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: ".cta-chips",
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );

            gsap.fromTo(
                ".tools-item",
                {opacity: 0, scale: 0.85},
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.45,
                    ease: "back.out(1.4)",
                    stagger: 0.045,
                    scrollTrigger: {
                        trigger: ".tools-container",
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex flex-col items-center min-h-screen relative bg-primary font-sans dark:bg-black">

            <NoiseCanvas />

            <Image
                src="/images/left_blue.png"
                alt="left decoration"
                width={900}
                height={500}
                className="absolute left-0 top-0 w-1/2 md:w-auto"
                style={{objectFit: "cover"}}
            />
            <Image
                src="/images/red_right.png"
                alt="right decoration"
                width={900}
                height={500}
                className="absolute right-0 top-0 w-1/2 md:w-auto"
                style={{objectFit: "cover"}}
            />

            <div className="relative z-10 header_section text-center mt-24 sm:mt-28 md:mt-32 px-8 sm:px-14 w-full max-w-3xl mx-auto">
                <div className="flex flex-row items-center justify-center w-full mt-0 md:mt-18">
                    <RobotAvatar className="w-50 h-auto" />
                </div>

                <div className="hero-content">
                    <h3 className="text-white text-sm sm:text-base md:text-lg pb-2">
                        &lt; Hello, I&#39;m Michael Labastida /&gt;
                    </h3>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
                        A passionate{" "}
                        <span className="inline-flex items-center whitespace-nowrap"
                              style={{verticalAlign: "baseline"}}>
                            <span
                                ref={roleTextRef}
                                className="inline-block"
                                suppressHydrationWarning
                            />
                            <span
                                ref={cursorRef}
                                className="ml-0.5 inline-block w-0.75 bg-white self-stretch"
                                suppressHydrationWarning
                            />
                        </span>
                    </h1>

                    <p className="w-full md:w-160 text-xs sm:text-sm md:text-base text-text-secondary pt-6 leading-relaxed">
                        Mobile developer specializing in Flutter, with experience in web
                        development using Laravel and PHP, and a strong background in web and
                        mobile UI design.
                    </p>
                </div>

                <div className="faq-pill w-full flex items-center justify-center mt-12">
                    <div
                        className="flex flex-row space-x-3 px-3 py-2 bg-primary border border-line-primary w-fit rounded-full items-center justify-center align-middle cursor-pointer hover:bg-white/5 transition-colors">
                        <div
                            className="bg-secondary text-white py-1 px-3 rounded-full text-[10px] sm:text-xs font-semibold">
                            <p>FAQ</p>
                        </div>

                        <div className="flex flex-row space-x-2 align-middle justify-center items-center">
                            <p className="text-white text-xs sm:text-sm font-medium">Get to know me</p>
                            <ArrowRightIcon className="text-text-secondary" size={14}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="animate-section relative z-10 offer_section w-full max-w-4xl mx-auto px-6 sm:px-10 mt-50 sm:mt-32 md:mt-58">
                <div>
                    <h1 className="text-white text-[24px] font-bold font-mont">What I Offer</h1>
                    <div className="line w-20 h-1 bg-secondary pt-1"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
                    <div className="service-card">
                        <ServiceCard
                            image="/images/android_icon.png"
                            title="Android Dev"
                            subtitle="I develop high-quality Android applications using Flutter with GetX for efficient state management and clean architecture."
                        />
                    </div>
                    <div className="service-card">
                        <ServiceCard
                            image="/images/apple_icon.png"
                            title="IOS Dev"
                            subtitle="I develop high-quality iOS applications using Flutter with GetX for efficient state management and clean architecture."
                        />
                    </div>
                    <div className="service-card">
                        <ServiceCard
                            image="/images/web_icon.png"
                            title="Web Dev"
                            subtitle="Experienced web developer with a strong background in Laravel and PHP, delivering reliable and well-structured web applications."
                        />
                    </div>
                    <div className="service-card">
                        <ServiceCard
                            image="/images/ui_ux_icon.png"
                            title="UI/UX Design"
                            subtitle="UI/UX designer crafting seamless and engaging digital experiences through thoughtful design and user research."
                        />
                    </div>
                </div>
            </div>

            <div className="animate-section relative z-10 offer_section w-full max-w-4xl mx-auto px-6 sm:px-10 mt-20 sm:mt-24 md:mt-28">
                <div>
                    <h1 className="text-white text-[24px] font-bold font-mont">Contact & Profiles</h1>
                    <div className="line w-20 h-1 bg-secondary pt-1"></div>
                </div>

                <div className="contact-block flex flex-col w-full rounded-xl border border-line-primary bg-primary mt-6 overflow-hidden">
                    <div
                        className="bg-[#0B1020] px-4 sm:px-6 py-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
                            <div className="menu-button flex flex-row gap-2 shrink-0">
                                <div className="red-circle w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500"></div>
                                <div className="yellow-circle w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-yellow-500"></div>
                                <div className="green-circle w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500"></div>
                            </div>

                            <div
                                className="socials-details bg-[#0C1126] rounded-md flex flex-row p-1 gap-1 items-center w-full sm:w-auto overflow-x-auto no-scrollbar">
                                <div
                                    className="bg-secondary text-black font-semibold px-3 py-1 text-xs sm:text-sm rounded-md whitespace-nowrap cursor-pointer">Facebook
                                </div>
                                <div
                                    className="text-text-secondary px-3 py-1 text-xs sm:text-sm whitespace-nowrap hover:text-white cursor-pointer transition-colors">LinkedIn
                                </div>
                                <div
                                    className="text-text-secondary px-3 py-1 text-xs sm:text-sm whitespace-nowrap hover:text-white cursor-pointer transition-colors">GitHub
                                </div>
                                <div
                                    className="text-text-secondary px-3 py-1 text-xs sm:text-sm whitespace-nowrap hover:text-white cursor-pointer transition-colors">Figma
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex flex-row justify-between sm:justify-end items-center gap-4 w-full lg:w-auto border-t border-line-primary/30 pt-3 lg:pt-0 lg:border-none">
                            <div className="text-text-secondary text-xs sm:text-sm truncate">
                                MLWorks/Mikeyyh
                            </div>

                            <div
                                className="px-3 py-1 border border-line-primary rounded-md cursor-pointer hover:bg-white/5 transition-colors shrink-0">
                                <p className="text-text-secondary text-[10px] sm:text-xs flex items-center">
                                    <span
                                        className="font-swash text-base sm:text-lg mr-1 text-secondary">R</span> RESUME
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#101627]/95 py-6 rounded-bl-xl rounded-br-xl">
                        <div className="px-4 sm:px-6">
                            <p className="text-text-secondary text-xs sm:text-sm font-mono leading-relaxed">
                                <span className="opacity-50">#</span> &nbsp; This is my Facebook profile. If you can&apros;t
                                reach me by phone, please message me here.
                            </p>
                        </div>

                        <div className="px-4 sm:px-6 pt-4 pb-1 flex flex-row gap-4 items-start justify-between">
                            <div className="flex flex-row items-start gap-2 overflow-hidden">
                                <span className="text-secondary font-bold text-sm">$</span>
                                <p className="text-text-primary text-xs sm:text-sm font-mono break-all sm:break-normal">
                                    https://www.facebook.com/michael.labastida.96
                                </p>
                            </div>

                            <button
                                className="p-2 rounded-md bg-[#1F2434] hover:bg-[#2A3042] transition-colors shrink-0 group">
                                <Copy size={16} className="text-[#373E56] group-hover:text-white transition-colors"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="animate-section relative z-10 offer_section w-full max-w-4xl mx-auto px-6 sm:px-10 mt-20 sm:mt-24 md:mt-28">
                <div>
                    <h1 className="text-white text-[24px] font-bold font-mont">My Projects</h1>
                    <div className="line w-20 h-1 bg-secondary pt-1"></div>
                </div>

                <div className="mt-6 w-full flex flex-row flex-wrap gap-2 sm:gap-3 justify-start">
                    <div className="stagger-item py-1.5 sm:py-2 px-3 sm:px-4 rounded-full text-black font-medium bg-secondary w-fit cursor-pointer hover:opacity-90 transition-opacity">
                        <p className="text-xs sm:text-sm whitespace-nowrap">Web Development</p>
                    </div>
                    <div className="stagger-item py-1.5 sm:py-2 px-3 sm:px-4 rounded-full text-text-primary border border-line-primary w-fit cursor-pointer hover:border-secondary hover:text-secondary transition-colors">
                        <p className="text-xs sm:text-sm whitespace-nowrap">Mobile Development</p>
                    </div>
                    <div className="stagger-item py-1.5 sm:py-2 px-3 sm:px-4 rounded-full text-text-primary border border-line-primary w-fit cursor-pointer hover:border-secondary hover:text-secondary transition-colors">
                        <p className="text-xs sm:text-sm whitespace-nowrap">UI Designs</p>
                    </div>
                </div>

                <div className="projects-card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    <div className="project-card"><ProjectCard title="Dibuho" description="Dibuho is a tech-driven creative company delivering UI/UX, web, Android, and SEO solutions." techStack={["React", "Supabase", "Anime.js"]}/></div>
                    <div className="project-card"><ProjectCard title="UnionCare" description="UnionCare is a smart hospital management system streamlining patient care, records, and billing" techStack={["Laravel", "Tailwind", "MySQL"]}/></div>
                    <div className="project-card"><ProjectCard title="FilGram" description="FilGram is a web-based game platform that helps teachers track student progress." techStack={["Laravel", "Tailwind", "MySQL"]}/></div>
                    <div className="project-card"><ProjectCard title="Growify" description="Is an IoT-powered Flutter app that monitors mushroom conditions in real time and tracks harvest yield." techStack={["Flutter", "Firebase", "IoT"]}/></div>
                    <div className="project-card"><ProjectCard title="Open Record" description="Open Record is a blockchain-based voting system ensuring secure and transparent elections." techStack={["Vue", "Go", "Blockchain", "Tailwind"]}/></div>
                    <div className="project-card"><ProjectCard title="Serbisyo" description="Is a platform connecting clients with trusted local experts to solve everyday problems." techStack={["Flutter", "Firebase", "IoT"]}/></div>
                </div>
            </div>

            <div className="animate-section relative z-10 offer_section w-full max-w-4xl mx-auto px-6 sm:px-10 mt-20 sm:mt-24 md:mt-28 mb-20">
                <div>
                    <h1 className="text-white text-[24px] font-bold font-mont">Design & Project Tools</h1>
                    <div className="line w-20 h-1 bg-secondary pt-1"></div>
                </div>

                <div className="tools-container flex flex-row flex-wrap gap-2 mt-6 items-center justify-center w-full">
                    {[
                        {image: "/images/flutter_icon.svg", title: "Flutter"},
                        {image: "/images/laravel_icon.svg", title: "Laravel"},
                        {image: "/images/vue_icon.svg", title: "Vue"},
                        {image: "/images/tailwind_icon.svg", title: "Tailwind"},
                        {image: "/images/firebase_icon.svg", title: "Firebase"},
                        {image: "/images/supabase_icon.svg", title: "Supabase"},
                        {image: "/images/mysql_icon.svg", title: "MySQL"},
                        {image: "/images/github_icon.svg", title: "GitHub"},
                        {image: "/images/vercel_icon.svg", title: "Vercel"},
                        {image: "/images/android_studio_icon.svg", title: "Android Studio"},
                        {image: "/images/phpstorm_icon.svg", title: "PhpStorm"},
                        {image: "/images/illustrator_icon.svg", title: "Illustrator"},
                        {image: "/images/figma_icon.svg", title: "Figma"},
                    ].map((tool) => (
                        <div key={tool.title} className="tools-item">
                            <ToolsCard image={tool.image} title={tool.title}/>
                        </div>
                    ))}

                    <div className="tools-item mt-4 flex flex-row gap-2 items-center justify-center text-center text-secondary hover:text-[#0E9EBC] cursor-pointer">
                        <p className="text-xs">View the rest of the tools I use</p>
                        <SquareArrowOutUpRightIcon size={12}/>
                    </div>
                </div>
            </div>

            <div className="animate-section relative z-10 offer_section w-full max-w-4xl mx-auto px-6 sm:px-10 mt-8 sm:mt-10 md:mt-15 mb-20">
                <div>
                    <h1 className="text-white text-[24px] font-bold font-mont">Educational Background</h1>
                    <div className="line w-20 h-1 bg-secondary pt-1"></div>
                </div>

                <div className="educational-container flex flex-col gap-6 mt-6 w-full">
                    <div className="education-card">
                        <EducationCard
                            type="College Education"
                            degree="Bachelor of Science in Information Technology"
                            school="University of Southeastern Philippines (USeP) – Tagum Unit"
                            year="Class of 2025"
                            description={
                                <>
                                    Majored in <span className="text-text-primary font-semibold">Information Security</span> from the College
                                    of Teacher Education and Technology (CTET), located in Apokon, Tagum City.
                                </>
                            }
                            capstoneTitle="Capstone Project"
                            capstoneDescription="Trabahunti: A Web-Based and Mobile Job Search Application Using Machine Learning for PEESO Tagum City."
                            awards={[
                                {label: "Cum Laude", theme: "gold"},
                                {label: "2nd Place Agilab TBI", theme: "cyan"}
                            ]}
                        />
                    </div>

                    <div className="education-card">
                        <EducationCard
                            type="Senior High School"
                            degree="Computer Programmer (Java/Web Development)"
                            school="Tagum National Trade School in Apokon, Tagum City"
                            year="Class of 2020"
                            description={
                                <>
                                    Learned <span className="text-text-primary font-semibold">Java and Web Development</span> at Tagum
                                    National Trade School in Apokon, Tagum City, Davao del Norte, where I honed my web
                                    development and software development skills through hands-on training and practical projects.
                                </>
                            }
                            awards={[
                                {label: "With Honors", theme: "gold"}
                            ]}
                        />
                    </div>
                </div>
            </div>

            <div className="relative z-10 offer_section w-full max-w-4xl mx-auto px-6 sm:px-10 mt-8 sm:mt-10 md:mt-30 mb-20 flex flex-col items-center justify-center">
                <div className="cta-heading w-full flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl text-text-primary font-bold">
                        Let&apos;s build <span className="text-secondary">something</span>
                    </h1>
                    <h1 className="text-4xl text-text-primary mt-2 font-bold">together.</h1>
                    <p className="text-sm mt-14 text-text-secondary">Tell me about your project</p>
                </div>

                <div className="w-full max-w-3xl mt-6 flex flex-col items-center">
                    <div className="cta-input-row w-full flex flex-col sm:flex-row items-center p-2 rounded-3xl sm:rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 focus-within:border-white/20 focus-within:bg-white/10">
                        <input
                            type="text"
                            placeholder="What are we building together?"
                            className="flex-1 w-full bg-transparent text-text-primary placeholder:text-text-secondary/70 px-6 py-4 outline-none border-none text-sm sm:text-base"
                        />

                        <button className="flex flex-row items-center justify-center gap-2 mr-2 px-4 py-3 sm:py-3 w-full sm:w-auto rounded-full bg-white/10 border border-white/20 text-text-secondary hover:text-white hover:bg-white/20 transition-all duration-300 group">
                            <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300"/>
                            <span className="text-sm font-medium">Let&apos;s collaborate</span>
                        </button>
                    </div>

                    <div className="cta-chips flex flex-row flex-wrap justify-center gap-3 mt-4 w-full">
                        <button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/5 text-text-secondary text-xs sm:text-sm hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-300">
                            I have a design project in mind
                        </button>
                        <button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/5 text-text-secondary text-xs sm:text-sm hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-300">
                            Looking to collaborate on...
                        </button>
                        <button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/5 text-text-secondary text-xs sm:text-sm hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-300">
                            Interested on your design services
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <Footer/>
            </div>
        </div>
    );
}