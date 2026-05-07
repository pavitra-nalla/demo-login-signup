import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { FiMail, FiLock } from "react-icons/fi";
import { AuthLayout } from "@/layouts/AuthLayout";
import { Input } from "@/components/auth/Input";
import { Button } from "@/components/auth/Button";

interface LoginValues {
  email: string;
  password: string;
}

export function LoginPage() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>();

  const onSubmit = async (values: LoginValues) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setLoading(false);
    toast.success("Welcome back!", { description: values.email });
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue your calm, focused journey."
      illustrationTitle="Soft mornings, sharper days."
      illustrationText="Pick up where you left off. Your space is exactly how you arranged it."
      footer={
        <>
          New here?{" "}
          <Link
            to="/signup"
            className="text-lavender-600 font-medium hover:underline underline-offset-4"
          >
            Create an account
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <Input
          label="Email"
          type="email"
          placeholder="you@studio.com"
          icon={<FiMail />}
          autoComplete="email"
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
        />
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          icon={<FiLock />}
          autoComplete="current-password"
          error={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "At least 6 characters" },
          })}
        />

        <div className="flex items-center justify-between text-xs text-ink-soft">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="h-4 w-4 rounded-md accent-lavender-500"
            />
            Remember me
          </label>
          <a href="#" className="hover:text-lavender-600 transition-colors">
            Forgot password?
          </a>
        </div>

        <Button type="submit" loading={loading} className="w-full mt-2">
          Sign in
        </Button>
      </form>
    </AuthLayout>
  );
}
