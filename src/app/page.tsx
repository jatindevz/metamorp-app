import React from "react";
import Link from "next/link";
import Feed from "@/components/Feed";

const Home = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 sm:px-0">
      <main className="min-h-[80vh] flex flex-col items-center justify-center text-center space-y-6">
        <div className="inline-flex items-center rounded-full bg-white px-4 py-1 text-sm font-medium text-black shadow">
          <span className="mr-2">🎉</span>
          <span className="border-l border-[#0FA4AF] pl-2">Introducing Metamorphosis</span>
        </div>

        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-6xl font-bold text-[#a4e9f5]">
            Explore and Share Life&apos;s
          </h1>
          <h2 className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-[#AFDDA5] via-[#0FA4AF] to-[#204950] bg-clip-text text-transparent">
            Transformations
          </h2>
        </div>

        <p className="text-[#9fe2ee] max-w-xl text-base sm:text-lg leading-relaxed">
          &quot;Every story has a turning point. Share yours &#8212; and discover how others found light through the collective voice of the internet.&quot;
        </p>

        <Link
          href="/create-post"
          className="mt-4 sm:mt-6 bg-[#0FA4AF] text-white font-semibold px-6 py-2 rounded-full transition hover:bg-[#0D8B91] active:scale-95"
        >
          What Changed Your Life?
        </Link>
      </main>

      <Feed />
    </div>
  );
};

export default Home;
