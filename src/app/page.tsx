import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Link href="/dashboard" className={buttonVariants()}>
        You should not see this page
      </Link>
    </div>
  );
}
