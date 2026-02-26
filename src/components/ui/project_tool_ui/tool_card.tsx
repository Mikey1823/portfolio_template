import Image from "next/image";

export interface Tool {
    image: string;
    alt: string;
    title: string;
    description: string;
    width?: number;
    height?: number;
}

export function ToolCard({ image, alt, title, description, width = 36, height = 36 }: Tool) {
    return (
        <div className="group bg-primary border border-line-primary flex flex-col items-center justify-center rounded-xl px-8 py-6 cursor-pointer relative overflow-hidden transition-all duration-300 ease-out hover:border-secondary/50 hover:shadow-[0_0_24px_0_rgba(0,180,210,0.08)] hover:-translate-y-1">

            <div className="absolute inset-0 bg-linear-to-b from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6">
                <Image
                    src={image}
                    alt={alt}
                    width={width}
                    height={height}
                    style={{ objectFit: "contain" }}
                />
            </div>

            <h3 className="text-text-primary mt-3 font-mont font-bold transition-colors duration-300 group-hover:text-secondary">
                {title}
            </h3>

            <p className="text-text-secondary text-xs mt-4 text-center transition-colors duration-300 group-hover:text-text-primary">
                {description}
            </p>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-secondary group-hover:w-full transition-all duration-300 ease-out" />
        </div>
    );
}