import { useEffect, useRef } from "react";

const roles = [
    {
        text: "UI/UX Designer",
        className:
            "font-bold bg-gradient-to-r from-sky-300 to-cyan-900 bg-clip-text text-transparent",
    },
    {
        text: "Mobile Developer",
        className:
            "font-bold bg-gradient-to-r from-red-100 to-red-800 bg-clip-text text-transparent",
    },
    {
        text: "Web Developer",
        className:
            "font-bold bg-gradient-to-r from-sky-300 to-cyan-900 bg-clip-text text-transparent",
    },
];

export function useTypewriter() {
    const roleTextRef = useRef<HTMLSpanElement>(null);
    const cursorRef = useRef<HTMLSpanElement>(null);
    const currentRoleRef = useRef(0);

    useEffect(() => {
        const roleEl = roleTextRef.current;
        const cursorEl = cursorRef.current;

        if (!roleEl || !cursorEl) return;

        import("gsap").then(({ gsap }) => {
            gsap.to(cursorEl, {
                opacity: 0,
                repeat: -1,
                yoyo: true,
                duration: 0.5,
                ease: "steps(1)",
            });

            const typeText = (text: string, onComplete: () => void) => {
                roleEl.textContent = "";
                let i = 0;
                const interval = setInterval(() => {
                    roleEl.textContent += text[i];
                    i++;
                    if (i >= text.length) {
                        clearInterval(interval);
                        setTimeout(onComplete, 1800);
                    }
                }, 80);
                return interval;
            };

            const eraseText = (onComplete: () => void) => {
                const interval = setInterval(() => {
                    const current = roleEl.textContent ?? "";
                    if (current.length === 0) {
                        clearInterval(interval);
                        onComplete();
                        return;
                    }
                    roleEl.textContent = current.slice(0, -1);
                }, 45);
                return interval;
            };

            const cycle = () => {
                const role = roles[currentRoleRef.current];
                roleEl.className = role.className;
                roleEl.textContent = "\u200B";
                typeText(role.text, () => {
                    eraseText(() => {
                        currentRoleRef.current = (currentRoleRef.current + 1) % roles.length;
                        cycle();
                    });
                });
            };

            setTimeout(cycle, 400);
        });

        return () => {
            import("gsap").then(({ gsap }) => gsap.killTweensOf(cursorEl));
        };
    }, []);

    return { roleTextRef, cursorRef };
}