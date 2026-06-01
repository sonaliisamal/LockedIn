import React from 'react';
import { CourseService } from '@/services/courses';
import Sidebar from '@/components/dashboard/Sidebar';
import BentoGrid from '@/components/dashboard/BentoGrid';
import RightPanel from '@/components/dashboard/RightPanel';
import { Bell } from 'lucide-react';

export const revalidate = 0;

export default async function DashboardPage() {
  const courses = await CourseService.getActiveCourses();

  return (
    <div className="flex min-h-screen bg-background font-sans antialiased">
      {/* 1. Left Navigation Menu column */}
      <Sidebar />

      {/* 2. Unified Scroll Content Viewport Wrapper */}
      <main className="flex-1 overflow-y-auto px-4 py-6 sm:p-8 xl:pr-4">
        <div className="max-w-350 mx-auto flex flex-col xl:flex-row gap-6 items-start">
          
          {/* Mobile/Tablet Inline Brand Header Track */}
          <header className="w-full flex xl:hidden items-center justify-between border-b border-border-muted/60 pb-4 mb-2">
            <div>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Workspace</span>
              <h1 className="text-lg font-black text-white tracking-tight mt-0.5">Student Overview</h1>
            </div>
            <button className="p-2 rounded-xl bg-surface border border-border-muted text-zinc-400 relative">
              <Bell size={16} />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-orange-500 rounded-full" />
            </button>
          </header>

          {/* Center Column Container Stack */}
          <div className="flex-1 w-full">
            <BentoGrid courses={courses} />
          </div>

          {/* 3. Right Dashboard Data Utility Panels Column */}
          <div className="w-full xl:w-auto pt-2 xl:pt-0">
            <RightPanel />
          </div>

        </div>
      </main>
    </div>
  );
}