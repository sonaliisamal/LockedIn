import './globals.css';

export const metadata = {
  title: 'LockedIn - Next-Gen Learning Dashboard',
  description: 'Futuristic education tracking platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-zinc-100 antialiased min-h-screen selection:bg-sky-500/30">
        {children}
      </body>
    </html>
  );
}