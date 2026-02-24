"use client";
import { ArrowRightIcon, Copy } from 'lucide-react';
import Image from "next/image";
import { useTypewriter } from "@/hooks/useTypewriter";
import {ServiceCard} from "@/components/ui/service_card";
import {ProjectCard} from "@/components/ui/project_card";

export default function Home() {
    const { roleTextRef, cursorRef } = useTypewriter();

    return (
        <div className="flex flex-col items-center min-h-screen relative bg-primary font-sans dark:bg-black bg-[url('/images/noise_background.png')] bg-repeat">
            <Image
                src="/images/left_blue.png"
                alt="left decoration"
                width={900}
                height={500}
                className="absolute left-0 top-0 w-1/2 md:w-auto"
                style={{ objectFit: "cover" }}
            />
            <Image
                src="/images/red_right.png"
                alt="right decoration"
                width={900}
                height={500}
                className="absolute right-0 top-0 w-1/2 md:w-auto"
                style={{ objectFit: "cover" }}
            />

            <div className="relative z-10 header_section text-center mt-24 sm:mt-28 md:mt-32 px-8 sm:px-14 w-full max-w-3xl mx-auto">
                <div>
                    <h3 className="text-white text-sm sm:text-base md:text-lg pb-1">
                        &lt; Hello, I&#39;m Michael Labastida /&gt;
                    </h3>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
                        A passionate{" "}
                        <span className="inline-flex items-center whitespace-nowrap" style={{ verticalAlign: "baseline" }}>
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

                <div className="w-full flex items-center justify-center mt-12">
                    <div className="flex flex-row space-x-3 px-3 py-2 bg-primary border border-line-primary w-fit rounded-full items-center justify-center align-middle cursor-pointer hover:bg-white/5 transition-colors">
                        <div className="bg-secondary text-white py-1 px-3 rounded-full text-[10px] sm:text-xs font-semibold">
                            <p>FAQ</p>
                        </div>

                        <div className="flex flex-row space-x-2 align-middle justify-center items-center">
                            <p className="text-white text-xs sm:text-sm font-medium">Get to know me</p>
                            <ArrowRightIcon className="text-text-secondary" size={14}/>
                        </div>
                    </div>
                </div>
            </div>

            {/*
                What I Offer
                This section is where I will list my services
                TODO: // - Will need to add automation for this section.
            */}
            <div className="relative z-10 offer_section w-full max-w-4xl mx-auto px-6 sm:px-10 mt-20 sm:mt-24 md:mt-28">
                <div>
                    <h1 className="text-white text-[24px] font-bold font-mont">What I Offer</h1>
                    <div className="line w-20 h-1 bg-secondary pt-1"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
                    <ServiceCard
                        image="/images/android_icon.png"
                        title="Android Dev"
                        subtitle="I develop high-quality Android applications using Flutter with GetX for efficient state management and clean architecture."
                    />
                    <ServiceCard
                        image="/images/apple_icon.png"
                        title="IOS Dev"
                        subtitle="I develop high-quality iOS applications using Flutter with GetX for efficient state management and clean architecture."
                    />
                    <ServiceCard
                        image="/images/web_icon.png"
                        title="Web Dev"
                        subtitle="Experienced web developer with a strong background in Laravel and PHP, delivering reliable and well-structured web applications."
                    />
                    <ServiceCard
                        image="/images/ui_ux_icon.png"
                        title="UI/UX Design"
                        subtitle="UI/UX designer crafting seamless and engaging digital experiences through thoughtful design and user research."
                    />
                </div>
            </div>

            {/*
                Contact & Profiles
                This section is where my personal information is displayed
            */}
            <div className="relative z-10 offer_section w-full max-w-4xl mx-auto px-6 sm:px-10 mt-20 sm:mt-24 md:mt-28">
                <div>
                    <h1 className="text-white text-[24px] font-bold font-mont">Contact & Profiles</h1>
                    <div className="line w-20 h-1 bg-secondary pt-1"></div>
                </div>

                <div className="flex flex-col w-full rounded-xl border border-line-primary bg-primary mt-6">
                    {/* Top Section */}
                    <div className="bg-[#0B1020] px-6 py-4 grid grid-cols-[repeat(1,max-content)] sm:grid-cols-[repeat(2,max-content)] sm:overflow-auto rounded-xl justify-between items-center">
                        <div className=" left-panel flex flex-row space-x-6 items-center">
                            <div className="menu-button flex flex-row gap-2">
                                <div className="red-circle w-4 h-4 rounded-full bg-red-500">.</div>
                                <div className="yellow-circle w-4 h-4 rounded-full bg-yellow-500">.</div>
                                <div className="green-circle w-4 h-4 rounded-full bg-green-500">.</div>
                            </div>

                            <div className="socials-details bg-[#0C1126] rounded-md flex flex-row gap-2 items-center">
                                <div className="bg-secondary text-black text-bold px-3 py-1 text-sm rounded-md">Facebook</div>
                                <div className="text-text-secondary px-3 py-1 text-sm">LinkedIn</div>
                                <div className="text-text-secondary px-3 py-1 text-sm">GitHub</div>
                                <div className="text-text-secondary px-3 py-1 text-sm">Figma</div>
                            </div>
                        </div>
                        <div className="right-panel flex flex-row space-x-6 mt-6 sm:mt-0 items-center">
                            <div className="text-text-secondary text-sm">
                                MLWorks/Mikeyyh
                            </div>

                            <div className="px-3 py-1 border border-line-primary rounded-md ">
                                <p className="text-text-secondary text-xs"><span className="font-swash text-lg mr-1">R</span> RESUME</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="bg-[#101627]/80 py-6 rounded-bl-xl rounded-br-xl">
                        <div className="px-6">
                            <p className="text-text-secondary"># &nbsp;&nbsp; This is my Facebook profile. If you can’t reach me by phone, please message me here.</p>
                        </div>

                        <div className="px-6 pt-4 pb-1 flex flex-row justify-between items-center">
                            <p className="text-text-primary"><span className="text-secondary">$</span> &nbsp;&nbsp; https://www.facebook.com/michael.labastida.96</p>

                            <button className="p-2 rounded-md bg-[#1F2434]">
                                <Copy size={16} className="text-[#373E56]"/>
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            <div className="relative z-10 offer_section w-full max-w-4xl mx-auto px-6 sm:px-10 mt-20 sm:mt-24 md:mt-28">
                <div>
                    <h1 className="text-white text-[24px] font-bold font-mont">My Projects</h1>
                    <div className="line w-20 h-1 bg-secondary pt-1"></div>
                </div>

                <div className="py-4 w-full flex flex-row gap-3 justify-start">
                    <div className="py-2 px-4 rounded-full text-black bg-secondary w-fit">
                        <p className="text-sm">Web Development</p>
                    </div>

                    <div className="py-2 px-4 rounded-full text-text-primary border border-line-primary w-fit">
                        <p className="text-sm">Mobile Development</p>
                    </div>

                    <div className="py-2 px-4 rounded-full text-text-primary border border-line-primary w-fit">
                        <p className="text-sm">UI Designs</p>
                    </div>
                </div>

                <div className="projects-card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    <ProjectCard
                        title="Dibuho"
                        description="Dibuho is a tech-driven creative company delivering UI/UX, web, Android, and SEO solutions."
                        techStack={["React", "Supabase", "Anime.js"]}
                    />

                    <ProjectCard
                        title="UnionCare"
                        description="UnionCare is a smart hospital management system streamlining patient care, records, and billing"
                        techStack={["Laravel", "Tailwind", "MySQL"]}
                    />

                    <ProjectCard
                        title="FilGram"
                        description="FilGram is a web-based game platform that helps teachers track student progress."
                        techStack={["Laravel", "Tailwind", "MySQL"]}
                    />

                    <ProjectCard
                        title="Growify"
                        description="Is an IoT-powered Flutter app that monitors mushroom conditions in real time and tracks harvest yield."
                        techStack={["Flutter", "Firebase", "IoT"]}
                    />

                    <ProjectCard
                        title="Open Record"
                        description="Open Record is a blockchain-based voting system ensuring secure and transparent elections."
                        techStack={["Vue", "Go", "Blockchain", "Tailwind"]}
                    />

                    <ProjectCard
                        title="Serbisyo"
                        description="Is a platform connecting clients with trusted local experts to solve everyday problems."
                        techStack={["Flutter", "Firebase", "IoT"]}
                    />
                </div>
            </div>
        </div>
    );
}