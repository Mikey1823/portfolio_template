import Image from "next/image";

interface ToolsCard {
    image: string;
    title: string;
}

export function ToolsCard({image, title}: ToolsCard) {

    // Image Size 13
    const isFirebase = title.toLowerCase().includes("firebase");

    // Image Size 16
    const isTailwind = title.toLowerCase().includes("tailwind");
    const isMySQL = title.toLowerCase().includes("mysql");
    const isGitHub = title.toLowerCase().includes("github");
    const isVercel = title.toLowerCase().includes("vercel");
    const isAndroid = title.toLowerCase().includes("android studio");
    const isPhpStorm = title.toLowerCase().includes("phpstorm");

    // Image Size 10
    const isFigma = title.toLowerCase().includes("figma");

    const imageSize = isTailwind || isMySQL || isGitHub || isVercel || isAndroid || isPhpStorm ? 16 : isFirebase ? 13 : isFigma ? 10 : 14;

    return (
        <div className="group cursor-pointer px-4 py-2 rounded-full border flex flex-row gap-2 border-line-primary w-fit bg-primary justify-center items-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:border-secondary hover:bg-secondary/10 hover:shadow-[0_8px_20px_-6px_rgba(0,212,255,0.3)]">
            <Image
                src={image}
                alt={`${title} icon`}
                width={imageSize}
                height={imageSize}
                className="transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6"
                style={{ objectFit: "contain" }}
            />
            <p className="text-sm text-text-secondary transition-colors duration-300 group-hover:text-text-primary font-medium">
                {title}
            </p>
        </div>
    );
}