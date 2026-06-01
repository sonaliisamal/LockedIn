/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

// Ensure modern build tools understand PostCSS utility layers natively
declare module '*.css';