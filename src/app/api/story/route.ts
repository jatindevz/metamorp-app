import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Story from "@/models/story.model";

export async function POST(req) {
  await connectDB();
  const { story, name, twitter, insta } = await req.json();

  try {
    const newStory = new Story({ story, name, twitter, insta });
    await newStory.save();
    return NextResponse.json({ message: "Story submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Failed to submit story." }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();

  try {
    const stories = await Story.find().sort({ createdAt: -1 });
    return NextResponse.json(stories, { status: 200 });
  } catch (error) {
    console.error("Error fetching stories:", error);
    return NextResponse.json({ message: "Failed to fetch stories." }, { status: 500 });
  }
}
