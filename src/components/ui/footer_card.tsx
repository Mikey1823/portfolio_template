import Link from "next/link";

interface FooterLink {
    label: string;
    href: string;
}

interface FooterProps {
    links?: FooterLink[];
    developerName?: string;
    description?: string;
}

export function Footer({links = [
    {label: "About Me", href: "#about"},
    {label: "Offers", href: "#offers"},
    {label: "Socials", href: "#socials"},
    {label: "Projects", href: "#projects"},
    {label: "Background", href: "#background"},],
                           developerName = "Michael C. Labastida",
                           description = "This portfolio was developed to showcase the skills, projects, and achievements I have built throughout my career."
    }: FooterProps) {
    return (
        <footer className="w-full py-12 px-6 flex flex-col items-center justify-center text-center gap-6 mt-15 sm:mt-26">
            <nav className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
                {links.map((link, index) => (
                    <div key={link.label} className="flex items-center gap-3">
                        <Link
                            href={link.href}
                            className="text-secondary text-sm sm:text-base font-medium hover:text-white transition-colors duration-300"
                        >
                            {link.label}
                        </Link>

                        {index < links.length - 1 && (
                            <span className="text-text-secondary/60 text-xs sm:text-sm">
                                •
                            </span>
                        )}
                    </div>
                ))}
            </nav>

            <div className="flex flex-col items-center gap-4">
                <p className="text-text-secondary text-sm sm:text-base">
                    Designed and developed by {developerName} using Next.js and Tailwind CSS
                </p>

                <p className="text-text-secondary/40 text-xs sm:text-sm max-w-3xl leading-relaxed">
                    {description}
                </p>
            </div>

        </footer>
    );
}