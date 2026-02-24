interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
}

export function ProjectCard({ title, description, techStack }: ProjectCardProps) {

    return (
        <div className="group relative flex flex-col w-full h-full bg-primary border border-line-primary rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-secondary/50 hover:shadow-[0_10px_40px_-10px_rgba(0,212,255,0.15)] cursor-pointer overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex flex-col grow">
                <div className="flex justify-between items-start mb-3 gap-4">
                    <h2 className="text-xl text-text-primary font-mont font-bold group-hover:text-secondary transition-colors duration-300">
                        {title}
                    </h2>

                    <svg
                        className="w-5 h-5 shrink-0 text-text-secondary group-hover:text-secondary transform transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-6 grow">
                    {description}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-line-primary/50">
                {techStack.map((tech) => (
                    <div
                        key={tech}
                        className="py-1 px-3 rounded-full text-text-secondary border border-line-primary bg-line-primary/20 transition-all duration-300 group-hover:border-secondary/30 group-hover:bg-secondary/10 group-hover:text-text-primary"
                    >
                        <p className="text-[11px] font-medium tracking-wide uppercase">{tech}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}