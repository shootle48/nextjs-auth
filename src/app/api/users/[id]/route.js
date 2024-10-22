import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";

export async function DELETE(req, { params }) {
  try {
    const { id } = params; // ดึง ID ของผู้ใช้จาก URL path
    await connectMongoDB(); // เชื่อมต่อกับ MongoDB
    const deletedUser = await User.findByIdAndDelete(id); // ลบผู้ใช้โดยใช้ ID

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
