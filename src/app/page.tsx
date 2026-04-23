"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { products as allProducts, categories, HERO_IMAGE } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { SkeletonCard } from '../components/ui/SkeletonCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [searchQ, setSearchQ] = useState('');
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const mostLoved = useMemo(() => allProducts.slice(0, 5), []);

  return (
    <div className="min-h-screen bg-background text-foreground">

      <main className="px-4 py-12">
        <div className="site-container">
        {/* Hero */}
        <section className="relative rounded-xl overflow-hidden mb-12">
          <div className="w-full h-64 sm:h-[420px] rounded-xl overflow-hidden">
            <ImageWithFallback src={HERO_IMAGE} alt="Hero" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="absolute left-8 top-14 max-w-lg text-white">
            <h1 className="text-4xl font-bold">Thời trang <span className="text-primary">sang trọng</span> cho mọi khoảnh khắc</h1>
            <p className="mt-4 text-sm">Thuê trang phục cao cấp với giá phải chăng. Hơn 5,000 thiết kế.</p>
            <div className="mt-6 flex gap-3">
              <Link href="/products" className="px-6 py-3 bg-primary text-primary-foreground rounded-xl">Thuê ngay</Link>
              <a href="#how-it-works" className="px-6 py-3 border border-border rounded-xl text-white/90">Cách hoạt động</a>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); router.push(`/search?q=${encodeURIComponent(searchQ)}`); }} className="mt-6 flex gap-2">
              <input value={searchQ} onChange={(e) => setSearchQ(e.target.value)} placeholder="Tìm đầm, áo, túi..." className="px-4 py-2 rounded-xl flex-1 bg-input border border-border text-foreground placeholder:text-muted-foreground" />
              <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-xl">Tìm</button>
            </form>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs text-primary uppercase">Danh mục</span>
              <h2 className="text-2xl font-bold mt-1">Khám phá bộ sưu tập</h2>
            </div>
            <Link href="/products" className="text-primary">Xem tất cả</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/products?category=${cat.id}`} className="p-4 bg-card rounded-2xl text-center text-card-foreground">
                <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-2" style={{ backgroundColor: cat.color }}>{cat.icon}</div>
                <div className="text-sm font-medium">{cat.name}</div>
                <div className="text-xs text-muted-foreground">{cat.count} sản phẩm</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs text-primary uppercase">Nổi bật</span>
              <h2 className="text-2xl font-bold mt-1">Được yêu thích nhất</h2>
            </div>
            <Link href="/products" className="hidden sm:flex text-primary">Xem tất cả</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {loading ? Array.from({ length: 5 }).map((_, i) => (<SkeletonCard key={i} />)) : mostLoved.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>

        {/* How it works (simplified) */}
        <section id="how-it-works" className="mb-12">
          <div className="text-center mb-6">
            <span className="text-xs text-primary uppercase">Quy trình</span>
            <h2 className="text-2xl font-bold mt-1">Thuê đơn giản chỉ 3 bước</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card p-6 rounded-2xl text-card-foreground">Chọn trang phục</div>
            <div className="bg-card p-6 rounded-2xl text-card-foreground">Đặt ngày thuê</div>
            <div className="bg-card p-6 rounded-2xl text-card-foreground">Mặc &amp; hoàn trả</div>
          </div>
        </section>
        </div>
      </main>

      {/* Footer is rendered globally in the layout */}
    </div>
  );
}
