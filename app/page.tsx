import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Link href={"/sign-in"}>giriş</Link>
      <SignOutButton />
    </div>
  );
}
