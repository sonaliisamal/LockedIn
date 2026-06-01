# LockedIn ⚡ Next-Gen Learning Dashboard

A high-fidelity, futuristic student tracking dashboard built with a performant, zero-layout-shift architecture. The platform orchestrates real-time data flows streaming from a Supabase PostgreSQL backend directly into a hardware-accelerated, multi-column Bento Grid UI.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router Architecture)
- **Database**: Supabase BaaS (PostgreSQL Engine)
- **Styling**: Tailwind CSS v4 (Native `@theme` configuration)
- **Animations**: Framer Motion (Strict Spring Physics Optimization)
- **Type Safety**: Pure TypeScript

---

## 📐 Data Architecture & Component Split

To maximize performance and satisfy strict optimization constraints, this project enforces a sharp separation between **Server Data Orchestrators** and **Interactive Client Views**:

### 1. React Server Components (RSC)
- `src/app/page.tsx` acts as the primary data orchestrator. It queries the database layer securely on the server side using the `@supabase/ssr` container.
- **Security Profile**: Database transactions, connection pooling, and sensitive access tokens never leak to the browser.
- **Zero Layout Shifts**: Data fetching is resolved completely before HTML compilation, eliminating asynchronous layout jumps or browser repaints.

### 2. Micro-Interaction Client Components
- UI layout modules (`BentoGrid.tsx`, `Sidebar.tsx`, `CourseCard.tsx`) are designated as `"use client"`.
- They receive strongly typed records natively via read-only props from the server parent.
- **Animation Performance**: Interactive states rely exclusively on `transform` and `opacity` properties to prevent heavy browser repaints, running on spring-based physics for a fluid feel.

### 3. Data Access Layer (DAL)
- All SQL transactions are completely isolated within `src/services/courses.ts`.
- The presentation components do not know where data originates; they simply request typed payloads through the `CourseService` abstraction layer.

---

## 📊 Database Schema Blueprint

The data model targets a single, highly optimized table containing the following relational constraints:

```sql
CREATE TABLE public.courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    progress INTEGER NOT NULL CHECK (progress >= 0 AND progress <= 100),
    icon_name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);