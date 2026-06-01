import { createClient } from '@/lib/supabase/server';
import { CourseResponse } from '@/types/database.types';

export class CourseService {
  
  static async getActiveCourses(): Promise<CourseResponse> {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('courses')
      .select('id, title, progress, icon_name, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      console.error(`[CourseService.getActiveCourses] Error fetching data:`, error);
      throw new Error('Failed to retrieve course data from the server database.');
    }

    if (!data) {
      return [];
    }

    // Explicit structural casting back to our typed application interface
    return data as CourseResponse;
  }
}