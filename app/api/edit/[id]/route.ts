import { NextResponse } from 'next/server';
// import prisma from '@/lib/prisma';
import { prisma } from '../../../../lib/prisma';

export async function GET(_: Request, { params }) {
  const product = await prisma.product.findUnique({ where: { id: params.id } });
  return NextResponse.json(product);
}

export async function PUT(req: Request, { params }) {
  const data = await req.json();
  const product = await prisma.product.update({
    where: { id: params.id },
    data: {
      title: data.title,
      description: data.description,
      price: parseFloat(data.price),
      image: data.image,
    },
  });
  return NextResponse.json(product);
}
