import { NoiseCanvas } from "@/components/ui/NoiseCanvas";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ToolSection } from "@/components/ui/project_tool_ui/tool_section";
import { webTools, mobileTools, ideTools, uiuxTools } from "@/data/tools_data";

export default function ProjectTools() {
    return (
        <div className="flex flex-col items-center min-h-screen relative bg-primary font-sans dark:bg-black">
            <NoiseCanvas />

            <Image src="/images/left_blue.png" alt="left decoration" width={900} height={500}
                   className="absolute left-0 top-0 w-1/2 md:w-auto" style={{ objectFit: "cover" }} />
            <Image src="/images/red_right.png" alt="right decoration" width={900} height={500}
                   className="absolute right-0 top-0 w-1/2 md:w-auto" style={{ objectFit: "cover" }} />

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 mt-10 sm:mt-20 md:mt-30">
                <Link href="/">
                    <div className="flex flex-row gap-2 items-center">
                        <ArrowLeft size={14} className="text-text-secondary" />
                        <h1 className="text-xs text-text-secondary">Back to homepage</h1>
                    </div>
                </Link>

                <div className="flex flex-col items-start mt-18">
                    <h1 className="text-6xl font-mont font-extrabold bg-linear-to-r from-blue-50 to-cyan-700 bg-clip-text text-transparent">
                        Project Tools
                    </h1>
                    <p className="text-sm text-text-secondary mt-8 leading-6">
                        I have worked with over 20+ tools and technologies across UI/UX design, web development and mobile
                        application development allowing me to build well designed functional and user focused digital products.
                    </p>
                </div>

                <div className="w-full mt-24 pb-20">
                    <ToolSection title="Web Development"    subtitle="Tools I used in building modern responsive and scalable websites."        tools={webTools}    cols={4} />
                    <ToolSection title="Mobile Development" subtitle="Tools I used in building modern responsive and scalable mobile apps."     tools={mobileTools} cols={3} />
                    <ToolSection title="IDE Development"    subtitle="Tools I used in coding my websites and mobile apps."                     tools={ideTools}    cols={3} />
                    <ToolSection title="UI/UX Design"       subtitle="Tools I use to design and build user-focused web and mobile experiences." tools={uiuxTools}   cols={4} />
                </div>
            </div>
        </div>
    );
}