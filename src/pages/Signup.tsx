import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { AuthLayout } from "@/layouts/AuthLayout";
import { Input } from "@/components/auth/Input";
import { Button } from "@/components/auth/Button";
import { authAPI } from "@/lib/api";

interface SignupValues {
  fullName: string;
  email: string;
  password: string;
  confirm: string;
}

export function SignupPage() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupValues>();
  const password = watch("password");

  const onSubmit = async (values: SignupValues) => {
    setLoading(true);
    try {
      const { confirm, ...signupData } = values;
      const response = await authAPI.signup(signupData);
      toast.success("Account created", {
        description: `Welcome, ${values.fullName.split(" ")[0]}!`,
      });
      // TODO: Handle successful signup (redirect to login, auto-login, etc.)
      console.log("Signup successful:", response);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Signup failed";
      toast.error("Signup failed", { description: message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      reverse
      title="Create your account"
      subtitle="A few details and your soft little corner is ready."
      illustrationTitle="Begin gently. Build beautifully."
      illustrationText="Join a quiet community designing calmer products, one breath at a time."
      footer={
        <>
          Already a member?{" "}
          <Link
            to="/login"
            className="text-lavender-600 font-medium hover:underline underline-offset-4"
          >
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <Input
          label="Full name"
          placeholder="Ada Lovelace"
          icon={<FiUser />}
          autoComplete="name"
          error={errors.fullName?.message}
          {...register("fullName", {
            required: "Full name is required",
            minLength: { value: 2, message: "Name is too short" },
          })}
        />
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
          placeholder="At least 6 characters"
          icon={<FiLock />}
          autoComplete="new-password"
          error={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum 6 characters" },
          })}
        />
        <Input
          label="Confirm password"
          type="password"
          placeholder="Repeat your password"
          icon={<FiLock />}
          autoComplete="new-password"
          error={errors.confirm?.message}
          {...register("confirm", {
            required: "Please confirm your password",
            validate: (v) => v === password || "Passwords do not match",
          })}
        />

        <Button type="submit" loading={loading} className="w-full mt-2">
          Create account
        </Button>

        <p className="text-[11px] text-ink-soft text-center leading-relaxed">
          By signing up you agree to our{" "}
          <a href="#" className="underline underline-offset-2 hover:text-lavender-600">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="underline underline-offset-2 hover:text-lavender-600">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </AuthLayout>
  );
}
