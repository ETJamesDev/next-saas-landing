import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DataSense - AI-Powered Analytics Platform",
  description: "Transform your business with AI-powered analytics. Get real-time insights and make data-driven decisions faster than ever before.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <nav className="fixed w-full bg-white/60 backdrop-blur-xl z-50 border-b border-gray-200/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  DataSense
                </span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-2 rounded-full hover:bg-gray-50 transition-all duration-200">Features</a>
                <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-2 rounded-full hover:bg-gray-50 transition-all duration-200">How it Works</a>
                <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-2 rounded-full hover:bg-gray-50 transition-all duration-200">Pricing</a>
                <div className="w-px h-6 bg-gray-200 mx-2" />
                <Button variant="ghost" className="rounded-full">Sign In</Button>
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </div>
              <button className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-50 border-t border-gray-200/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Product</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Features</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Integrations</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Changelog</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">About</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Careers</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Documentation</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">API Reference</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Support</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Status</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Security</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200/60">
              <p className="text-sm text-gray-600 text-center">
                © 2024 DataSense. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
