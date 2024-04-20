import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

// Import the Prisma client
const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Create a new user using Prisma
        const newUser = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                // Make sure password is a valid field in your User model
            } as any, // As a temporary solution, use 'as any' if TypeScript can't recognize the type
        });
//response returned from the handler
        return NextResponse.json(newUser);
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    } 
    // finally { await prisma.$disconnect(); }
}
