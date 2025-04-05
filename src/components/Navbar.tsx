import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" w-full text-white bg-blue-700 p-2">
      <div className="h-12 w-full md:max-w-3xl mx-auto rounded-b-lg flex flex-row justify-between items-center ">
        <Link href={"/"}>
          {" "}
          <div className="">Zenstality</div>
        </Link>
        <Link href={"/dashboard/billing"}>
          {" "}
          <div className="">Pricing</div>
        </Link>
        <div>
          <SignedOut>
            <SignInButton >Dashboard</SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
