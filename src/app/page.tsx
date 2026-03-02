import HeroAnimation from "@/components/HeroAnimation";
import HomeSections from "@/components/HomeSections";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black">
      <HeroAnimation />
      <HomeSections />
    </main>
  );
}
