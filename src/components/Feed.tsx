//Feed.jsx

"use client";

import { Twitter, Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import React from "react";

type Story = {
  key: number;
  story: string;
  name: string;
  twitter: string;
  insta: string;
};

const FeedCard = ({ story, name, twitter, insta }: Story) => {
  const twitterUrl = twitter ? `https://twitter.com/${twitter}` : null;
  const instaUrl = insta ? `https://instagram.com/${insta}` : null;

  return (
    <div className="bg-[#0f0f0f] text-[#eaeaea] rounded-lg border border-[#1a1a1a] p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between ">
      <p className="text-sm mt-2 text-[#e6e6e6]">{story}</p>

      <div className="flex justify-between items-center text-sm text-[#aaa] mt-4">
        <span>{name || "Anonymous"}</span>

        <div className="flex space-x-2">
          {twitterUrl && (
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] hover:text-blue-500 transition-colors"
            >
              <Twitter className="w-4 h-4 font-normal" />
            </a>
          )}
          {instaUrl && (
            <a
              href={instaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] hover:text-blue-500 transition-colors"
            >
              <Instagram className="w-4 h-4 font-normal " />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Feed = () => {
  //type Story
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await fetch("/api/story");
        const data = await res.json();
        console.log(data);
        setStories(data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };
    
    fetchStories();
  }, []);

  return (
    <section className="w-full bg-black px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-[#AFDDA5] mb-8">
        Stories from the People
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {stories?.length > 0 &&
          stories.map((post,index) => (
            <FeedCard
              key={index}
              story={post.story}
              name={post.name}
              twitter={post.twitter}
              insta={post.insta}
            />
          ))}
      </div>
    </section>
  );
};

export default Feed;
