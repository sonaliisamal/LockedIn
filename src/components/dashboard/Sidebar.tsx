'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, BookOpen, Video, FileText, 
  Trophy, Folder, Users, Settings, LogOut, ChevronRight, Bell, Search 
} from 'lucide-react';

const primaryNav = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'courses', label: 'My Courses', icon: BookOpen },
  { id: 'live', label: 'Live Classes', icon: Video },
  { id: 'assignments', label: 'Assignments', icon: FileText },
  { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
  { id: 'resources', label: 'Resources', icon: Folder },
  { id: 'community', label: 'Community', icon: Users },
];

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <>
      
      <nav className="hidden md:flex flex-col justify-between border-r border-border-muted bg-surface/40 p-4 min-h-screen md:w-20 lg:w-64 shrink-0 transition-all duration-300">
        <div className="w-full">
          {/* Brand Identity Header Block */}
          <div className="flex h-12 items-center px-3 mb-6 gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-linear-to-tr from-brand-purple to-purple-400 flex items-center justify-center text-white font-black text-xs">
              L
            </div>
            <span className="hidden lg:block text-base font-bold text-white tracking-tight">
              LockedIn
            </span>
          </div>

          
          <ul className="space-y-1">
            {primaryNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center h-10 px-3 rounded-xl text-sm font-medium transition-colors relative z-10 justify-center lg:justify-start ${
                      isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <Icon size={18} className="shrink-0" />
                    <span className="hidden lg:block ml-3.5 tracking-tight">{item.label}</span>
                    
                    {isActive && (
                      <motion.div
                        layoutId="activeTabHighlight"
                        className="absolute inset-0 bg-brand-purple/20 border border-brand-purple/30 rounded-xl -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        
        <div className="w-full space-y-1 border-t border-border-muted/60 pt-4">
          <button className="w-full flex items-center h-10 px-3 rounded-xl text-sm font-medium text-zinc-400 hover:text-zinc-200 justify-center lg:justify-start">
            <Settings size={18} />
            <span className="hidden lg:block ml-3.5">Settings</span>
          </button>
          <button className="w-full flex items-center h-10 px-3 rounded-xl text-sm font-medium text-zinc-400 hover:text-red-400 justify-center lg:justify-start">
            <LogOut size={18} />
            <span className="hidden lg:block ml-3.5">Logout</span>
          </button>

          
          <div className="hidden lg:flex items-center gap-3 p-2 bg-zinc-900/20 border border-border-muted/40 rounded-xl mt-4">
            <div className="w-9 h-9 rounded-full bg-linear-to-tr from-brand-purple to-pink-500 overflow-hidden shrink-0 flex items-center justify-center border border-brand-purple/30">
              <span className="text-xs font-bold text-white">SK</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-zinc-200 truncate">Sonali Kumari</div>
              <div className="text-[10px] text-zinc-500 truncate">Student</div>
            </div>
            <ChevronRight size={14} className="text-zinc-500" />
          </div>
        </div>
      </nav>

      {/* Mobile Sticky Navigation Strip bar Container */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface/90 backdrop-blur-md border-t border-border-muted z-50 flex justify-around items-center px-2">
        {primaryNav.slice(0, 4).map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center flex-1 py-1 relative ${
                isActive ? 'text-brand-purple' : 'text-zinc-500'
              }`}
            >
              <Icon size={18} />
              <span className="text-[9px] font-medium mt-1">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}