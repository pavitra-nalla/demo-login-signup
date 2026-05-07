import { createFileRoute } from "@tanstack/react-router";
import { SignupPage } from "@/pages/Signup";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create account — Lumen" },
      { name: "description", content: "Create your Lumen account." },
      { property: "og:title", content: "Create account — Lumen" },
      { property: "og:description", content: "Create your Lumen account." },
    ],
  }),
  component: SignupPage,
});
