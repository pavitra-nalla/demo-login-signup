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
    <main
      className="relative min-h-screen w-full overflow-hidden px-4 py-8 md:px-8 md:py-12 flex items-center justify-center"
      style={{ background: "var(--gradient-soft), var(--background)" }}
    >
      <BackgroundBlobs />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-6xl"
      >
        <div
          className={`relative grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden bg-cream-50/80 backdrop-blur-xl
            shadow-[0_30px_80px_-30px_rgba(127,124,175,0.35),0_10px_30px_-10px_rgba(74,74,74,0.1)]
            border border-white/40 ${reverse ? "lg:[direction:rtl]" : ""}`}
        >
          <BrandPanel
            illustrationTitle={illustrationTitle}
            illustrationText={illustrationText}
          />

          <div className="relative p-8 sm:p-12 lg:p-16 [direction:ltr] flex flex-col justify-center">
            <Link
              to="/"
              className="absolute top-6 right-6 text-xs text-ink-soft hover:text-lavender-600 transition-colors"
            >
              ← Home
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-2 mb-8"
            >
              <h1 className="font-display text-3xl lg:text-4xl text-ink">{title}</h1>
              <p className="text-ink-soft text-sm">{subtitle}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              {children}
            </motion.div>

            <div className="mt-8 text-center text-sm text-ink-soft">{footer}</div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
