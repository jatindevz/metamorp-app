"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CreatePost() {
  const [post, setPost] = useState({
    story: "",
    name: "",
    twitter: "",
    insta: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!post.story.trim()) {
      alert("Story is required!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });

      if (!res.ok) {
        alert("Failed to submit story.");
        return;
      }

      await res.json();
      setPost({ story: "", name: "", twitter: "", insta: "" });
      window.location.href = "/";
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit story.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-white">
      <div className="text-center space-y-2 max-w-xl">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Share With <span className="bg-gradient-to-r from-[#AFDDA5] via-[#0FA4AF] to-[#204950] bg-clip-text text-transparent">Us</span>
        </h1>
        <p className="text-[#9fe2ee] text-base">
          Your words will be shared anonymously or with credit — your choice.
        </p>
        <p className="text-white text-xs">
          Your story matters. Share funny, inspiring, or emotional stories with us. Or drop a quote you like.
        </p>
      </div>

      <Card className="mt-10 w-full max-w-2xl p-6 space-y-5 bg-[#0F0F1C] border border-[#1e1e1e] shadow-lg text-white">
        <Textarea
          maxLength={320}
          placeholder="Write your story..."
          className="resize-none h-32 bg-[#121212] text-white placeholder:text-gray-400 border border-[#1e1e1e]"
          value={post.story}
          onChange={(e) => setPost({ ...post, story: e.target.value })}
        />

        <Input
          placeholder="Your name or nickname"
          maxLength={32}
          value={post.name}
          className="text-white"
          onChange={(e) => setPost({ ...post, name: e.target.value })}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            placeholder="X (Twitter) handle"
            maxLength={15}
            value={post.twitter}
            onChange={(e) => setPost({ ...post, twitter: e.target.value })}
          />
          <Input
            placeholder="Instagram handle"
            maxLength={30}
            value={post.insta}
            onChange={(e) => setPost({ ...post, insta: e.target.value })}
          />
        </div>

        <div className="flex justify-center pt-4 gap-2">
          <Button onClick={() => window.location.href = "/"}>
            Back
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </Card>
    </main>
  );
}
