import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className="grid h-[60px] w-full grid-cols-3 items-center border-b border-neutral-200 bg-white pl-1 pr-3 md:pl-2.5 md:pr-5">
        <div className="font-montserrat col-span-1 flex items-center gap-3 font-bold">
          <Image
            src="/images/glitz_logo.svg"
            alt="GLITZ"
            width={38}
            height={38}
            className="!shadow-red-500 drop-shadow-[0_2px_4px_rgba(190,188,255,1)]"
          />
          <span className="text-2xl">GLITZ</span>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1 flex justify-end">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
      <div className="flex w-full">
        <section className="h-[calc(100vh-60px)] w-[60px] items-center border-r border-neutral-200 bg-white px-1"></section>
        <main className="h-full w-[calc(100%-60px)]">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
