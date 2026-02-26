"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ToolCard, Tool } from "@/components/ui/project_tool_ui/tool_card";

gsap.registerPlugin(ScrollTrigger);

interface ToolSectionProps {
    title: string;
    subtitle: string;
    tools: Tool[];
    cols?: 3 | 4;
}

const gridCols: Record<number, string> = {
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

export function ToolSection({ title, subtitle, tools, cols = 4 }: ToolSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".section-heading",
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".section-heading",
                        start: "top 88%",
                        toggleActions: "play none none none",
                    },
                }
            );

            gsap.fromTo(".section-line",
                { scaleX: 0, transformOrigin: "left center" },
                {
                    scaleX: 1,
                    duration: 0.5,
                    ease: "power2.out",
                    delay: 0.15,
                    scrollTrigger: {
                        trigger: ".section-heading",
                        start: "top 88%",
                        toggleActions: "play none none none",
                    },
                }
            );

            gsap.fromTo(".tool-card",
                { opacity: 0, y: 40, filter: "blur(4px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.5,
                    ease: "power3.out",
                    stagger: {
                        amount: 0.6,
                        grid: "auto",
                        from: "start",
                    },
                    scrollTrigger: {
                        trigger: ".tool-card",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="w-full mt-18">
            <div>
                <h1 className="section-heading text-white text-[24px] font-bold font-mont">{title}</h1>
                <div className="section-line line w-20 h-1 bg-secondary pt-1"></div>
                <p className="section-heading text-sm text-text-secondary mt-4 leading-6">{subtitle}</p>
            </div>
            <div className={`grid ${gridCols[cols] ?? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"} gap-4 mt-6`}>
                {tools.map((tool) => (
                    <div key={tool.title} className="tool-card">
                        <ToolCard {...tool} />
                    </div>
                ))}
            </div>
        </div>
    );
}