import { NextResponse } from 'next/server';
// import {prisma} from '../../../lib/prisma';
// filepath: ./app/api/create/route.ts
import { prisma } from '../../../lib/prisma';

export async function POST(req: Request) {
  const { title, description, price, image } = await req.json();
  const product = await prisma.product.create({
    data: { title, description, price: parseFloat(price), image },
  });
  return NextResponse.json(product);
}