import { Hero } from "@/components/Hero";
import { Dashboard } from "@/components/Dashboard";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <Dashboard />
    </div>
  );
}
