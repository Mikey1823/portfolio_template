import Image from "next/image";

interface ServiceCardProps {
    image: string;
    title: string;
    subtitle: string;
}

export function ServiceCard({ image, title, subtitle }: ServiceCardProps) {
    const isIOS = title.toLowerCase().includes("ios");
    const imageSize = isIOS ? 30 : 44;

    return (
        <div className="border border-line-primary w-full h-30 flex flex-col rounded-2xl px-8 py-24 items-center justify-center cursor-default transition-all duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-2xl hover:shadow-secondary/15">
            <div className="flex flex-row gap-4 items-center justify-center mb-4">
                <Image
                    src={image}
                    alt={`${title} icon`}
                    width={imageSize}
                    height={imageSize}
                    style={{ objectFit: "cover" }}
                />
                <h2 className="text-[#888EB1] font-mont font-bold text-lg">{title}</h2>
            </div>
            <div>
                <p className="text-text-secondary text-center text-sm">{subtitle}</p>
            </div>
        </div>
    );
}