import { AnnouncementBar } from "@/components/announcement-bar"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ImageGallery } from "@/components/image-gallery"
import { ProductPricing } from "@/components/product-pricing"
import { ProductOptions } from "@/components/product-options"
import { DescriptionSection } from "@/components/description-section"
import { ReviewsSection } from "@/components/reviews-section"
import { CustomerTestimonials } from "@/components/customer-testimonials"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <AnnouncementBar />
      <SiteHeader />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-6 lg:py-10">
        {/* Product */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Gallery */}
          <ImageGallery />

          {/* Info */}
          <div className="flex flex-col">
            <h1 className="text-xl lg:text-2xl font-bold text-[#111] mb-3 text-balance">
              Capas de Banco Premium com Design em Diamante
            </h1>

            <ProductPricing />
            <ProductOptions />
          </div>
        </div>

        <DescriptionSection />
        <ReviewsSection />
        <CustomerTestimonials />
      </main>

      <SiteFooter />
    </div>
  )
}
