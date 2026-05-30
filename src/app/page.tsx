import { CourseService } from '@/services/courses';

// Force Next.js to bypass static cache and pull fresh live data from Supabase on every request
export const revalidate = 0;

export default async function DashboardPage() {
  // Fetch live, strongly typed data straight from the Supabase client container
  const courses = await CourseService.getActiveCourses();

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff', padding: '2rem' }}>
      {/* This is a temporary architectural viewport placeholder. 
        In the upcoming UI phases, this cleanly fetched 'courses' array 
        will be injected straight into our Bento Grid client components.
      */}
      <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#eaeaea' }}>
          Backend Layer Handshake: <span style={{ color: '#4ade80' }}>Connected</span>
        </h1>
        <p style={{ color: '#a3a3a3', marginBottom: '2rem' }}>
          Database data loaded safely via Server Components.
        </p>
        
        <details style={{ background: '#171717', padding: '1rem', borderRadius: '8px', border: '1px solid #262626' }}>
          <summary style={{ cursor: 'pointer', color: '#60a5fa', fontWeight: '500' }}>
            View Verified Live Payload ({courses.length} courses fetched)
          </summary>
          <pre style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#cbd5e1', overflowX: 'auto' }}>
            {JSON.stringify(courses, null, 2)}
          </pre>
        </details>
      </section>
    </main>
  );
}