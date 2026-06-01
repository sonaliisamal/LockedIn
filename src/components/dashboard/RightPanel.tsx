'use client';

import React from 'react';
import { Calendar, Trophy, Bell, Search } from 'lucide-react';

export default function RightPanel() {
  return (
    <aside className="w-full xl:w-80 shrink-0 space-y-6">
      
      
      <div className="hidden xl:flex items-center justify-between gap-4 h-11">
        <div className="flex-1 max-w-xs relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" size={15} />
          <input 
            type="text" 
            placeholder="Search courses, lessons, resources..." 
            className="w-full h-10 pl-10 pr-4 bg-surface border border-border-muted rounded-xl text-xs text-zinc-300 placeholder-zinc-500 focus:outline-hidden focus:border-indigo-500/40 font-medium transition-colors"
          />
        </div>
        <button className="w-10 h-10 rounded-xl bg-surface border border-border-muted flex items-center justify-center text-zinc-400 hover:text-zinc-200 transition-colors relative">
          <Bell size={16} />
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-orange-500 rounded-full" />
        </button>
      </div>

      
      <div className="p-5 rounded-3xl bg-surface border border-border-muted space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="text-xs font-bold text-white tracking-tight">Upcoming Classes</h4>
          <button className="text-[10px] font-bold text-zinc-500 hover:text-zinc-400 transition-colors">View all</button>
        </div>
        
        <div className="space-y-2.5">
          {[
            { title: 'React Advanced', time: 'Today, 4:00 PM', color: 'text-sky-400 bg-sky-500/10' },
            { title: 'TypeScript Basics', time: 'Tomorrow, 11:00 AM', color: 'text-indigo-400 bg-indigo-500/10' },
          ].map((cls, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-black/20 border border-border-muted/60 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${cls.color}`}>
                  <Calendar size={14} />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-200">{cls.title}</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">{cls.time}</div>
                </div>
              </div>
              <button className="text-[10px] font-bold bg-[#0d0d16] hover:bg-indigo-600 transition-colors text-zinc-300 hover:text-white px-3 py-1.5 border border-border-muted rounded-lg">
                Join
              </button>
            </div>
          ))}
        </div>
      </div>

      {}
      <div className="p-5 rounded-3xl bg-surface border border-border-muted space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="text-xs font-bold text-white tracking-tight">To Do</h4>
          <button className="text-[10px] font-bold text-zinc-500 hover:text-zinc-400 transition-colors">View all</button>
        </div>

        <div className="space-y-2">
          {[
            { label: 'Complete React Quiz', due: 'Today' },
            { label: 'TypeScript Assignment', due: 'May 16' },
            { label: 'UI Project Submission', due: 'May 20' },
          ].map((todo, idx) => (
            <label key={idx} className="flex items-center justify-between p-3 bg-black/20 border border-border-muted/40 rounded-2xl cursor-pointer hover:bg-black/30 transition-colors">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 rounded-md border-border-muted bg-surface text-indigo-500 accent-indigo-500 focus:ring-0" />
                <span className="text-xs font-medium text-zinc-300">{todo.label}</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">{todo.due}</span>
            </label>
          ))}
        </div>
      </div>

      {}
      <div className="p-5 rounded-3xl bg-surface border border-border-muted space-y-3">
        <h4 className="text-xs font-bold text-white tracking-tight">Recent Achievements</h4>
        <div className="flex items-center gap-3 p-3 bg-black/20 border border-emerald-500/10 rounded-2xl group hover:border-emerald-500/20 transition-all duration-300">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
            <Trophy size={16} />
          </div>
          <div>
            <div className="text-xs font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">Consistent Learner</div>
            <div className="text-[10px] text-zinc-500 mt-0.5">Learned for 7 days in a row</div>
          </div>
        </div>
      </div>

    </aside>
  );
}