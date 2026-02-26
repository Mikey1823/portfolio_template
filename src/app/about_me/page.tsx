import {NoiseCanvas} from "@/components/ui/NoiseCanvas";
import Image from "next/image";
import {ArrowLeft} from "lucide-react";
import Link from "next/link";

export default function AboutMe() {
    return (
        <div className="flex flex-col items-center min-h-screen relative bg-primary font-sans dark:bg-black">
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

            <div className="animate-section relative z-10 offer_section w-full max-w-4xl mx-auto px-6 sm:px-10 mt-10 sm:mt-20 md:mt-30">
                <Link href="/">
                    <div className="flex flex-row gap-2 items-center">
                        <ArrowLeft size={14} className="text-text-secondary" />
                        <h1 className="text-xs text-text-secondary">
                            Back to homepage
                        </h1>
                    </div>
                </Link>

                <div className="flex flex-col items-start mt-18">
                    <h1 className="text-6xl font-mont font-extrabold bg-linear-to-r from-blue-50 to-cyan-700 bg-clip-text text-transparent">Call Me Mikeeyh</h1>

                    <p className="text-sm text-text-secondary mt-8 leading-6">
                        I’m a Mobile Developer and UI/UX Designer with over <span className="text-secondary">2 years of experience</span>,
                        and I also have <span className="text-secondary">1 year of hands-on experience</span> in web development.
                        I’m based in Tagum City and a <span className="text-secondary">Cum Laude</span> graduate of the University of Southeastern Philippines,
                        where I earned my degree in Bachelor of Science in Information Technology.
                    </p>

                    <p className="text-sm text-text-secondary mt-6 leading-6">
                        My passion for technology started back in high school,
                        where I first became fascinated with computers and how software works.
                        That curiosity inspired me to pursue a career in development, and it continues to drive me to learn,
                        build, and design meaningful digital experiences.
                    </p>
                </div>

                <div className="profile-banner px-5 py-5 rounded-2xl border border-line-primary bg-primary flex flex-col sm:flex-row items-center md:justify-between gap-4 md:gap-0 w-full mt-8">
                    <div className="flex flex-row gap-4 items-center justify-center">
                        <Image
                            src="/images/profile.png"
                            alt="profile picture"
                            width={50}
                            height={50}
                            className="rounded-full object-cover"
                        />

                        <div className="flex flex-col">
                            <h2 className="text-text-primary text-lg font-semibold">Michael Labastida</h2>
                            <p className="text-xs text-secondary mt-1.5">@mikkeeeyy23</p>
                        </div>
                    </div>

                    <div className="flex flex-row text-text-secondary text-sm">
                        <p>January 23, 2003 &nbsp; • &nbsp; Developer</p>
                    </div>
                </div>

                <div className="quote-section mt-8">
                    <p className="text-text-primary font-mont">
                        This experience shaped the principle I live by today: “Believe in yourself. Just because it’s hard doesn’t mean it’s impossible.”
                        That belief continues to guide how I learn, build, and design.
                    </p>
                </div>

                <div className="my-story-section flex flex-col w-full mt-8">
                    <h2 className="font-mont text-2xl font-bold text-text-primary">My Story</h2>
                    <p className="text-sm text-text-secondary mt-2 leading-6">
                        I started my journey in development during my college years, where I was exposed to various programming languages and technologies.
                        I quickly found myself drawn to mobile development and UI/UX design,
                        as I loved the idea of creating intuitive and engaging digital experiences for users.
                    </p>
                </div>

                <div className="my-story-section flex flex-col w-full mt-8">
                    <h2 className="font-mont text-2xl font-bold text-text-primary">The Turning Point</h2>
                    <p className="text-sm text-text-secondary mt-2 leading-6">
                        Everything changed in Grade 9 when a teacher saw potential in me that I couldn’t see in myself.
                        She told me I was a late bloomer—that growth takes time, but effort makes all the difference.
                        That moment became a turning point in my life.
                    </p>

                    <ol className="list-disc list-inside mt-4 text-text-primary">
                        <li className="text-sm text-text-primary mt-2 leading-6 font-semibold">
                            It challenged <span className="text-text-secondary font-normal">my self-doubt</span>
                        </li>
                        <li className="text-sm text-text-primary mt-2 leading-6 font-semibold">
                            It pushed <span className="text-text-secondary font-normal">me to take learning seriously</span>
                        </li>
                        <li className="text-sm text-text-primary mt-2 leading-6 font-semibold">
                            It taught <span className="text-text-secondary font-normal">me that improvement is always possible</span>
                        </li>
                    </ol>

                    <p className="text-sm text-text-secondary mt-4 leading-6">
                        Everything changed in Grade 9 when a teacher saw potential in me that I couldn’t see in myself. She told me I was a
                        <span className="text-secondary">late bloomer</span>—that growth takes time, but effort makes all the difference. That moment became a turning point in my life.
                    </p>
                </div>

                <div className="my-story-section flex flex-col w-full mt-8">
                    <h2 className="font-mont text-2xl font-bold text-text-primary">Discovering Technology</h2>
                    <p className="text-sm text-text-secondary mt-2 leading-6">
                        By Grade 10, I found something that truly sparked my curiosity—computers and creativity. I became fascinated with:
                    </p>

                    <ol className="list-disc list-inside mt-4 text-text-primary">
                        <li className="text-sm text-text-primary mt-2 leading-6 font-semibold">
                            Editing <span className="text-text-secondary font-normal">and image enhancement</span>
                        </li>
                        <li className="text-sm text-text-primary mt-2 leading-6 font-semibold">
                            Designing <span className="text-text-secondary font-normal">interfaces</span>
                        </li>
                        <li className="text-sm text-text-primary mt-2 leading-6 font-semibold">
                            Developing <span className="text-text-secondary font-normal">simple applications</span>
                        </li>
                    </ol>

                    <p className="text-sm text-text-secondary mt-4 leading-6">
                        I began learning on my own and was introduced to <span className="text-secondary">HTML, CSS, and JavaScript</span>. My first real project was a landing page for our school,
                        where I handled both the design and concept. Completing that project gave me a sense of pride I had never felt before—it was the
                        moment I realized I could create something meaningful from nothing.
                    </p>
                </div>

                <div className="my-story-section flex flex-col w-full mt-8 mb-14">
                    <h2 className="font-mont text-2xl font-bold text-text-primary">Growth Through Consistency</h2>
                    <p className="text-sm text-text-secondary mt-2 leading-6">
                        At the time, I had no natural talent in design and no formal background in development. What I had instead was curiosity and persistence.
                        Over time, I improved through practice, experimentation, and continuous learning.
                    </p>
                </div>
            </div>

        </div>
    );
}