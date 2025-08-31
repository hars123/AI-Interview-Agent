import Link from "next/link"; // ✅ Correct import for Next.js Link
import Image from "next/image"; // ✅ Import Next.js Image
import React, { ReactNode } from "react";
import { isAuthenticated } from "@/lib/Actions/auth.action";
import { redirect } from "next/navigation";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if(!isUserAuthenticated) redirect('/sign-in')
  return (
    <div className="root-layout">
      <nav className="flex items-center gap-3 p-4">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.svg" 
            alt="Intellisense Logo" 
            height={32} 
            width={38} 
            priority // ✅ Ensures faster load for logo
          />
          <h2 className="text-primary-100 font-semibold text-lg">IntelliView</h2>
        </Link>
      </nav>

      <main className="p-4">{children}</main>
    </div>
  );
};

export default RootLayout;
