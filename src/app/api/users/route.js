import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

// GET: ดึงข้อมูลผู้ใช้ทั้งหมด
export async function GET(req) {
  try {
    await connectMongoDB(); // เชื่อมต่อกับ MongoDB
    const users = await User.find(); // ดึงข้อมูลผู้ใช้ทั้งหมดจากฐานข้อมูล

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while fetching users." },
      { status: 500 }
    );
  }
}

// POST: สร้างผู้ใช้ใหม่
export async function POST(req) {
  try {
    const { name, email, password } = await req.json(); // รับข้อมูลจาก body
    const hashedPassword = await bcrypt.hash(password, 10); // เข้ารหัสรหัสผ่าน

    await connectMongoDB(); // เชื่อมต่อกับ MongoDB
    await User.create({ name, email, password: hashedPassword }); // สร้างผู้ใช้ใหม่

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}

// PUT: อัปเดตข้อมูลผู้ใช้
export async function PUT(req) {
  try {
    const { id, name, email, password } = await req.json(); // รับข้อมูลจาก body
    const hashedPassword = await bcrypt.hash(password, 10); // เข้ารหัสรหัสผ่านใหม่

    await connectMongoDB(); // เชื่อมต่อกับ MongoDB
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, password: hashedPassword },
      { new: true }
    ); // อัปเดตผู้ใช้ตาม ID

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    return NextResponse.json(
      { message: "User updated.", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while updating the user." },
      { status: 500 }
    );
  }
}

// DELETE: ลบผู้ใช้ตาม ID
export async function DELETE(req, { params }) {
  try {
    const { id } = params; // ดึง ID ของผู้ใช้จาก URL path
    await connectMongoDB(); // เชื่อมต่อกับ MongoDB
    const deletedUser = await User.findByIdAndDelete(
      id,
      { name, email, password: hashedPassword },
      { new: true }
    ); // ลบผู้ใช้โดยใช้ ID

    if (!deletedUser) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    return NextResponse.json({ message: "User deleted." }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while deleting the user." },
      { status: 500 }
    );
  }
}
