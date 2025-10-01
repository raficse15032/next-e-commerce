import type { Metadata } from "next";
import { RootLayoutClient } from "./layout-client";

export const metadata: Metadata = {
  title: "NextShop - Modern E-commerce Store",
  description: "Discover amazing products at NextShop. Your one-stop destination for quality items with fast delivery and excellent customer service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}