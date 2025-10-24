"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = `antialiased overflow-x-hidden ${className}`;
  }, [className]);

  return <body className={`antialiased overflow-x-hidden ${className}`}>{children}</body>;
}
