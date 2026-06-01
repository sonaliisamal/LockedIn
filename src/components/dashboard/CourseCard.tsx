'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { DBCourse } from '@/types/database.types';

interface CourseCardProps {
  course: DBCourse;
}


const getCourseTheme = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('react')) return { text: 'text-sky-400', border: 'hover:border-sky-500/30', stop1: '#38bdf8', stop2: '#0284c7' };
  if (t.includes('next')) return { text: 'text-zinc-200', border: 'hover:border-zinc-400/30', stop1: '#e4e4e7', stop2: '#71717a' };
  if (t.includes('motion') || t.includes('framer')) return { text: 'text-fuchsia-400', border: 'hover:border-fuchsia-500/30', stop1: '#e879f9', stop2: '#a21caf' };
  return { text: 'text-indigo-400', border: 'hover:border-indigo-500/30', stop1: '#818cf8', stop2: '#4f46e5' };
};

export default function CourseCard({ course }: CourseCardProps) {
  const IconComponent = (Icons[course.icon_name] || Icons.BookOpen) as React.ComponentType<{ size: number; className?: string }>;
  const theme = getCourseTheme(course.title);

  const radius = 16;
  const strokeDash = 2 * Math.PI * radius;
  const offsetValue = strokeDash - (course.progress / 100) * strokeDash;

  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`group relative flex flex-col justify-between p-5 rounded-2xl bg-surface border border-border-muted overflow-hidden min-h-42.5 select-none transition-colors duration-300 ${theme.border}`}
    >
      {}
      <div className="absolute inset-0 bg-linear-to-br from-zinc-950/40 via-zinc-900/5 to-zinc-950/20 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex justify-between items-start relative z-10">
        <div className={`w-11 h-11 flex items-center justify-center rounded-xl bg-[#0d0d16] border border-border-muted transition-colors ${theme.text}`}>
          <IconComponent size={20} />
        </div>
        <button className="text-zinc-700 hover:text-zinc-500 font-bold tracking-tight text-sm p-1 transition-colors">
          •••
        </button>
      </div>

      <div className="flex items-end justify-between mt-5 relative z-10 w-full gap-2">
        <div className="flex-1 min-w-0">
          {}
          <h3 className="font-bold text-[14px] text-zinc-200 tracking-tight leading-snug line-clamp-2 group-hover:text-white transition-colors">
            {course.title}
          </h3>
          <span className="text-[11px] text-zinc-500 font-semibold mt-1.5 block">
            {course.progress}% complete
          </span>
        </div>

        {}
        <div className="relative w-11 h-11 flex items-center justify-center shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r={radius} stroke="#0d0d14" strokeWidth="3.5" fill="transparent" />
            <motion.circle
              cx="20"
              cy="20"
              r={radius}
              stroke={`url(#gradient-${course.id})`}
              strokeWidth="3.5"
              fill="transparent"
              strokeDasharray={strokeDash}
              initial={{ strokeDashoffset: strokeDash }}
              animate={{ strokeDashoffset: offsetValue }}
              transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id={`gradient-${course.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={theme.stop1} />
                <stop offset="100%" stopColor={theme.stop2} />
              </linearGradient>
            </defs>
          </svg>
          <span className="absolute text-[9px] font-bold text-zinc-400 font-mono">
            {course.progress}%
          </span>
        </div>
      </div>
    </motion.article>
  );
}