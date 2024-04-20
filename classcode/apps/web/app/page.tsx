"use client"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default function Page(): JSX.Element {
  return (
    <div className="text-2xl">HELLO</div>
  );
}
