import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";

export async function GET(req) {
  try {
    await connectMongoDB();  // เชื่อมต่อกับ MongoDB
    const users = await User.find();  // ดึงข้อมูลผู้ใช้ทั้งหมดจากฐานข้อมูล

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while fetching users." },
      { status: 500 }
    );
  }
}
