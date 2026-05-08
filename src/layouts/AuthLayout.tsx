import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { BackgroundBlobs } from "@/components/auth/BackgroundBlobs";
import { BrandPanel } from "@/components/auth/BrandPanel";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  illustrationTitle: string;
  illustrationText: string;
  children: ReactNode;
  footer: ReactNode;
  reverse?: boolean;
}

export function AuthLayout({
  title,
  subtitle,
  illustrationTitle,
  illustrationText,
  children,
  footer,
  reverse = false,
}: AuthLayoutProps) {
  return (
    <div
      className="min-h-screen w-full flex flex-col lg:flex-row items-stretch justify-stretch overflow-hidden"
      style={{ background: "var(--gradient-soft), var(--background)" }}
    >
      <BackgroundBlobs />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`relative w-full lg:w-1/2 h-auto lg:min-h-screen flex items-center justify-center p-6 sm:p-8 lg:p-12 ${reverse ? "order-2" : "order-1"}`}
      >
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="inline-block mb-6 text-xs text-ink-soft hover:text-lavender-600 transition-colors"
          >
            ← Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-2 mb-8"
          >
            <h1 className="font-display text-3xl sm:text-4xl text-ink leading-tight">{title}</h1>
            <p className="text-ink-soft text-sm sm:text-base">{subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="w-full"
          >
            {children}
          </motion.div>

          <div className="mt-8 text-center text-sm text-ink-soft">
            {footer}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className={`relative w-full lg:w-1/2 h-64 lg:h-screen overflow-hidden rounded-t-3xl lg:rounded-none lg:rounded-l-3xl ${reverse ? "order-1" : "order-2"}`}
      >
        <div className="absolute inset-0" style={{ background: "var(--gradient-lavender)" }} />
        <BrandPanel
          illustrationTitle={illustrationTitle}
          illustrationText={illustrationText}
        />
      </motion.div>
    </div>
  );
}
