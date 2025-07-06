import { prisma } from '@/lib/prisma';
export const dynamic = 'force-dynamic';
// import { prisma } from '../lib/prisma';
import ProductCard from '../components/ProductCard';

export default async function Home() {
  const products = await prisma.Product.findMany();
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 px-4 py-10 bg-[#ffffff] min-h-screen">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
