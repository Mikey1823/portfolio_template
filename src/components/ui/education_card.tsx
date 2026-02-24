import {GraduationCap, Award} from 'lucide-react';
import React from 'react';

interface AwardBadge {
    label: string;
    theme: 'gold' | 'cyan';
}

interface EducationCardProps {
    type: string;
    degree: string;
    school: string;
    year: string;
    description: React.ReactNode;
    capstoneTitle?: string;
    capstoneDescription?: string;
    awards?: AwardBadge[];
}

export function EducationCard({type, degree, school, year, description, capstoneTitle, capstoneDescription, awards}: EducationCardProps) {
    return (
        <div
            className="group relative overflow-hidden border border-line-primary rounded-2xl p-6 sm:p-8 bg-primary transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-[0_8px_30px_-10px_rgba(0,212,255,0.15)]">

            <div
                className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="w-5 h-5 text-secondary"/>
                        <span
                            className="text-secondary font-semibold text-xs sm:text-sm tracking-wider uppercase">{type}</span>
                    </div>
                    <h1 className="text-text-primary text-xl sm:text-2xl font-bold font-mont leading-tight mt-4">
                        {degree}
                    </h1>
                    <h3 className="text-text-secondary text-sm sm:text-base mt-1.5 font-medium">
                        {school}
                    </h3>
                </div>

                <div className="shrink-0">
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0C1126] border border-line-primary text-text-secondary text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                        {year}
                    </div>
                </div>
            </div>

            <div className="relative z-10 space-y-5">
                <p className="text-text-secondary text-sm leading-relaxed max-w-3xl">
                    {description}
                </p>

                {/* Only render the Capstone block if capstoneDescription is provided */}
                {capstoneDescription && (
                    <div
                        className="bg-[#0C1126]/80 border-l-2 border-secondary p-4 rounded-r-xl group-hover:bg-[#0C1126] transition-colors duration-300">
                        <p className="text-[10px] sm:text-xs text-secondary/80 font-bold uppercase tracking-wider mb-1.5">
                            {capstoneTitle || "Capstone Project"}
                        </p>
                        <p className="text-sm text-text-primary italic leading-relaxed">
                            {capstoneDescription}
                        </p>
                    </div>
                )}
            </div>

            {awards && awards.length > 0 && (
                <div
                    className="relative z-10 flex flex-wrap justify-start sm:justify-end items-center mt-8 pt-5 border-t border-line-primary/50 gap-3">
                    {awards.map((award, index) => {
                        const isGold = award.theme === 'gold';

                        return (
                            <div
                                key={index}
                                className={`group/badge cursor-pointer px-4 py-2 rounded-full border flex flex-row gap-2 w-fit justify-center items-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 ${
                                    isGold
                                        ? 'border-yellow-500/30 bg-yellow-500/10 hover:border-yellow-500/60 hover:bg-yellow-500/20 hover:shadow-[0_8px_20px_-6px_rgba(234,179,8,0.25)]'
                                        : 'border-secondary/30 bg-secondary/10 hover:border-secondary/60 hover:bg-secondary/20 hover:shadow-[0_8px_20px_-6px_rgba(0,212,255,0.25)]'
                                }`}
                            >
                                <Award
                                    className={`w-4 h-4 transition-transform duration-300 group-hover/badge:rotate-12 ${isGold ? 'text-yellow-500' : 'text-secondary'}`}/>
                                <p className={`text-xs font-semibold tracking-wide ${isGold ? 'text-yellow-500' : 'text-secondary'}`}>
                                    {award.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}