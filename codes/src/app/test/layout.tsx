import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Page - NextShop | Development Testing",
  description: "NextShop test page for development and testing features. Explore our latest implementations and user interface components.",
  keywords: "nextshop test, development, testing, ui components, e-commerce features",
  openGraph: {
    title: "Test Page - NextShop Development",
    description: "Testing and development page for NextShop e-commerce platform features and components.",
    type: "website",
  },
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}