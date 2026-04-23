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

        {/* How it works (decorated) */}
        <section id="how-it-works" className="mb-12">
          <div className="text-center mb-6">
            <span className="text-xs text-primary uppercase">Quy trình</span>
            <h2 className="text-3xl font-bold mt-1">Thuê đơn giản chỉ 3 bước</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Chọn mẫu, đặt ngày và tận hưởng — chúng tôi lo phần còn lại: đóng gói, giao nhận và vệ sinh.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <div className="bg-card p-6 rounded-3xl text-card-foreground flex flex-col items-center text-center gap-4 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">🧾</div>
              <h3 className="font-semibold">Chọn trang phục</h3>
              <p className="text-sm text-muted-foreground">Duyệt bộ sưu tập, chọn size và thêm vào giỏ.</p>
            </div>

            <div className="bg-card p-6 rounded-3xl text-card-foreground flex flex-col items-center text-center gap-4 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">📅</div>
              <h3 className="font-semibold">Đặt ngày thuê</h3>
              <p className="text-sm text-muted-foreground">Chọn ngày nhận và trả — lịch rõ ràng, không lo chồng chéo.</p>
            </div>

            <div className="bg-card p-6 rounded-3xl text-card-foreground flex flex-col items-center text-center gap-4 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">✅</div>
              <h3 className="font-semibold">Mặc &amp; hoàn trả</h3>
              <p className="text-sm text-muted-foreground">Mặc đẹp, trả gọn — chúng tôi xử lý vệ sinh và kiểm tra.</p>
            </div>
          </div>
        </section>

        {/* Sustainability banner */}
        <section className="mb-12">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-700 dark:to-green-600 text-white">
            <div className="site-container py-10 text-center">
              <p className="text-sm font-medium uppercase opacity-90">Thời trang bền vững</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Mặc đẹp, sống xanh</h2>
              <p className="mt-4 max-w-2xl mx-auto text-sm opacity-90">Mỗi lần thuê thay vì mua mới, bạn đã giúp giảm 73% lượng nước tiêu thụ và 80% khí thải carbon. rent4u là lựa chọn thời trang có trách nhiệm với hành tinh.</p>

              <div className="mt-8 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-extrabold">73%</div>
                  <div className="text-sm mt-1">Tiết kiệm nước</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold">80%</div>
                  <div className="text-sm mt-1">Giảm carbon</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold">100%</div>
                  <div className="text-sm mt-1">Tái sử dụng</div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/products" className="inline-block px-8 py-3 bg-white text-foreground rounded-full font-semibold">Thuê ngay</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="mb-12">
          <div className="site-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-card p-6 rounded-2xl text-card-foreground">
                <div className="text-2xl mb-3">🛡️</div>
                <h4 className="font-semibold">Bảo hiểm 100%</h4>
                <p className="mt-2 text-sm text-muted-foreground">Mọi trang phục đều có bảo hiểm</p>
              </div>

              <div className="bg-card p-6 rounded-2xl text-card-foreground">
                <div className="text-2xl mb-3">🔁</div>
                <h4 className="font-semibold">Đổi trả dễ dàng</h4>
                <p className="mt-2 text-sm text-muted-foreground">Không vừa? Đổi ngay miễn phí</p>
              </div>

              <div className="bg-card p-6 rounded-2xl text-card-foreground">
                <div className="text-2xl mb-3">🧼</div>
                <h4 className="font-semibold">Chất lượng đảm bảo</h4>
                <p className="mt-2 text-sm text-muted-foreground">Vệ sinh &amp; kiểm tra trước mỗi lần thuê</p>
              </div>

              <div className="bg-card p-6 rounded-2xl text-card-foreground">
                <div className="text-2xl mb-3">🌍</div>
                <h4 className="font-semibold">Thân thiện môi trường</h4>
                <p className="mt-2 text-sm text-muted-foreground">Giảm thiểu lãng phí thời trang</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section className="mb-16">
          <div className="site-container">
            <div className="rounded-2xl bg-card p-8 text-center">
              <h3 className="text-lg font-medium">Bắt đầu ngay hôm nay</h3>
              <h2 className="text-3xl font-bold mt-2">Mở tủ đồ vô hạn</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Chỉ với vài click. Đăng ký ngay hôm nay và nhận ưu đãi giảm 20% cho đơn thuê đầu tiên.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/register" className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold">Đăng ký miễn phí</Link>
                <Link href="/products" className="px-6 py-3 border border-border rounded-full text-foreground">Xem bộ sưu tập</Link>
              </div>
            </div>
          </div>
        </section>
        </div>
      </main>

      {/* Footer is rendered globally in the layout */}
    </div>
  );
}
