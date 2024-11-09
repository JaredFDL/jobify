import Image from "next/image";
import Logo from "../assets/logo.svg";
import LandingImg from "../assets/main.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
export default function Home() {
  return (
    <main>
      <header className=" flex justify-between max-w-6xl mx-auto px-4 sm:px-8 py-6 ">
        <Image src={Logo} alt="logo" />
        <ThemeToggle />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary">tracking</span> app
          </h1>
          <p className="leading-loose max-w-md md:max-w-lg mt-4">
            The job tracking app helps users streamline and manage their job
            application process. It offers an organized way to track job
            details, application status, and important milestones. Users can set
            reminders for follow-ups, store documents, and keep notes for each
            position. With visual analytics, they can monitor progress and gain
            insights into their job search activities. This app simplifies job
            hunting, keeping everything in one place and enhancing productivity
            during the search.
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt="landing" className="hidden lg:block " />
      </section>
    </main>
  );
}
