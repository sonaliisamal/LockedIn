'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Flame, Calendar, Award, Star } from 'lucide-react';
import { CourseResponse } from '@/types/database.types';
import CourseCard from './CourseCard';

interface BentoGridProps {
  courses: CourseResponse;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.01 }
  }
};

const tileVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 24 } }
};

export default function BentoGrid({ courses }: BentoGridProps) {
  const totalBlocks = 32 * 7;
  const contributionGrid = Array.from({ length: totalBlocks }, (_, i) => {
    const activeSeed = Math.sin(i * 0.25) + Math.cos(i * 0.08) * 1.4;
    return {
      id: i,
      level: activeSeed > 1.3 ? 'high' : activeSeed > 0.3 ? 'medium' : activeSeed > -0.5 ? 'low' : 'none'
    };
  });

  const months = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-6 w-full pb-24 md:pb-0">
      
      {/* 1. Hero Greeting Panel */}
      <motion.section
        variants={tileVariants}
        className="p-6 sm:p-8 rounded-3xl bg-surface border border-border-muted relative overflow-hidden bg-hero-mesh flex flex-col sm:flex-row sm:items-center justify-between gap-6"
      >
        <div className="relative z-10">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Hey Sonali 👋</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
            Welcome back!
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-sm font-medium leading-relaxed">
            Keep learning, keep growing. You are doing great work!
          </p>

          <div className="flex flex-wrap gap-3 mt-5">
            {/* Orange Learning Streak Badge */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-xl">
              <Flame size={14} className="text-orange-500 fill-orange-500" />
              <span className="text-xs font-bold text-orange-400">12 Day Streak</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-xl">
              <Star size={14} className="text-amber-400 fill-amber-400" />
              <span className="text-xs font-bold text-amber-400">840 XP Earned</span>
            </div>
          </div>
        </div>

        {}
        <div className="w-full sm:w-48 bg-black/30 border border-border-muted rounded-2xl p-4 flex flex-col justify-between min-h-28 relative z-10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Weekly Goal Status</span>
            <span className="text-xs font-mono font-bold text-cyan-400">4 / 5 hrs</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden p-px border border-border-muted">
              <div className="h-full w-4/5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full" />
            </div>
            <p className="text-[10px] text-zinc-500 leading-normal">
              Spend <span className="text-zinc-300 font-medium">60 more minutes</span> in platform environments to unlock this week's achievement token.
            </p>
          </div>
        </div>
      </motion.section>

      {}
      <div>
        <div className="flex justify-between items-center mb-4 px-1">
          <h3 className="text-sm font-bold text-white tracking-tight">My Courses</h3>
          <button className="text-xs font-bold text-zinc-500 hover:text-indigo-400 transition-colors">View all →</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {}
      <motion.section variants={tileVariants} className="p-5 rounded-3xl bg-surface border border-border-muted flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Calendar size={15} className="text-cyan-400" />
              <h3 className="font-bold text-zinc-200 text-xs tracking-tight">Learning Activity <span className="text-zinc-500 font-normal ml-1">• Last 12 months</span></h3>
            </div>
            <span className="text-[10px] text-zinc-500 font-mono bg-black/30 px-2 py-1 rounded-md border border-border-muted/40">2025 - 2026</span>
          </div>

          <div className="hidden sm:flex justify-between text-[9px] text-zinc-600 font-bold px-6 mb-1.5 select-none">
            {months.map((m) => <span key={m} className="w-full text-center">{m}</span>)}
          </div>

          <div className="overflow-x-auto pb-1 scrollbar-none">
            <div className="flex gap-2">
              <div className="flex flex-col justify-between text-[9px] text-zinc-600 font-bold py-1 select-none">
                <span>Mon</span><span>Wed</span><span>Fri</span>
              </div>
              <div className="grid grid-flow-col grid-rows-7 gap-0.75 flex-1">
                {contributionGrid.map((block) => (
                  <div
                    key={block.id}
                    className={`w-2.5 h-2.5 rounded-xs transition-all duration-150 hover:scale-125 ${
                      block.level === 'high' ? 'bg-cyan-400' :
                      block.level === 'medium' ? 'bg-cyan-500/60' :
                      block.level === 'low' ? 'bg-cyan-950/40' :
                      'bg-zinc-900/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-border-muted/30 text-[10px] text-zinc-500">
          <div className="flex items-center gap-1.5">
            <Award size={13} className="text-emerald-500" />
            <span>Learn more about your learning habits</span>
          </div>
          <div className="flex items-center gap-1 font-semibold">
            <span>Less</span>
            <div className="w-2 h-2 rounded-[1px] bg-zinc-900/50" />
            <div className="w-2 h-2 rounded-[1px] bg-cyan-950/40" />
            <div className="w-2 h-2 rounded-[1px] bg-cyan-500/60" />
            <div className="w-2 h-2 rounded-[1px] bg-cyan-400" />
            <span>More</span>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}