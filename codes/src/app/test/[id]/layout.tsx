import type { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
  params: { id: string };
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  return {
    title: `Test ID: ${params.id} - NextShop | Parameter Demo`,
    description: `Test page demonstrating URL parameter ${params.id} and query parameters in Next.js App Router.`,
  };
}

export default function TestIdLayout({ children }: LayoutProps) {
  return children;
}