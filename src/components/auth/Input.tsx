import { forwardRef, useState, type InputHTMLAttributes, type ReactNode } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, error, type = "text", id, ...props }, ref) => {
    const [show, setShow] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword ? (show ? "text" : "password") : type;
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-1.5">
        <label
          htmlFor={inputId}
          className="block text-xs font-medium tracking-wide text-ink-soft uppercase"
        >
          {label}
        </label>
        <div className="relative group">
          {icon && (
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lavender-400 text-lg pointer-events-none">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            type={inputType}
            aria-invalid={!!error}
            className={`w-full rounded-2xl bg-cream-50 text-ink placeholder:text-ink-soft/50
              py-3.5 ${icon ? "pl-12" : "pl-5"} ${isPassword ? "pr-12" : "pr-5"}
              border border-transparent
              [box-shadow:var(--shadow-input)]
              outline-none transition-all duration-300
              focus:border-lavender-400/40 focus:[box-shadow:var(--shadow-input),var(--shadow-glow)]
              ${error ? "border-destructive/50" : ""}`}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              aria-label={show ? "Hide password" : "Show password"}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-lavender-400 hover:text-lavender-600 transition-colors"
            >
              {show ? <FiEyeOff /> : <FiEye />}
            </button>
          )}
        </div>
        {error && (
          <p className="text-xs text-destructive/80 pl-1 animate-fade-up">{error}</p>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";
