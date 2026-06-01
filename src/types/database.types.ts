import * as Icons from 'lucide-react';

// Extract valid Lucide icon component names dynamically
export type LucideIconName = keyof typeof Icons;

export interface DBCourse {
  id: string;             
  title: string;          
  progress: number;      
  icon_name: LucideIconName; 
  created_at: string;   
}

// For service layer responses
export type CourseResponse = DBCourse[];