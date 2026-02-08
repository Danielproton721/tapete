import { AnnouncementBar } from "@/components/announcement-bar";
import { CustomerTestimonials } from "@/components/customer-testimonials";
import { DescriptionSection } from "@/components/description-section";
import { ImageGallery } from "@/components/image-gallery";
import { ProductOptions } from "@/components/product-options";
import { ProductPricing } from "@/components/product-pricing";
import { ReviewsSection } from "@/components/reviews-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <AnnouncementBar />
      <SiteHeader />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:py-10">
          {/* Product Layout */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-10">
            {/* Left: Image Gallery */}
            <div>
              <ImageGallery />
            </div>

            {/* Right: Product Info */}
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-[#111] leading-tight mb-4">
                Capas de Bancos Premium - Design em Diamante - Couro Sintetico
                Impermeavel - Para 5 Lugares
              </h1>

              <ProductPricing />
              <ProductOptions />
            </div>
          </div>

          {/* Description */}
          <DescriptionSection />

          {/* Reviews */}
          <ReviewsSection />

          {/* Testimonials */}
          <CustomerTestimonials />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
