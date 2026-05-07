import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: "primary" | "ghost";
  children: ReactNode;
}

export function Button({
  loading,
  variant = "primary",
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-2xl font-medium tracking-wide px-6 py-3.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed";
  const styles =
    variant === "primary"
      ? "text-white [background:var(--gradient-lavender)] shadow-[0_10px_30px_-10px_rgba(127,124,175,0.6)] hover:shadow-[0_18px_40px_-12px_rgba(127,124,175,0.7)]"
      : "bg-cream-50 text-ink hover:bg-cream-100";

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      disabled={disabled || loading}
      className={`${base} ${styles} ${className}`}
      {...(props as Record<string, unknown>)}
    >
      {loading ? (
        <>
          <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
          <span>Please wait…</span>
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}
