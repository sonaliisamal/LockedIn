'use client'; 

import { useEffect } from 'react';

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DashboardError({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
   
    console.error('Captured critical dashboard boundary fault:', error);
  }, [error]);

  return (
    <section style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0a0a0a', 
      color: '#ef4444', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '2rem' 
    }}>
      <div style={{ padding: '2rem', backgroundColor: '#171717', borderRadius: '8px', border: '1px solid #262626', maxWidth: '500px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#f87171' }}>
          Data Synchronization Offline
        </h2>
        <p style={{ color: '#a3a3a3', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          {error.message || 'An error occurred while establishing a handshake with the database layer.'}
        </p>
        <button
          onClick={() => reset()}
          style={{
            backgroundColor: '#ef4444',
            color: '#fff',
            border: 'none',
            padding: '0.5rem 1.25rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '0.9rem'
          }}
        >
          Re-establish Connection
        </button>
      </div>
    </section>
  );
}