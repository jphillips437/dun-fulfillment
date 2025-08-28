import HeroCarousel from './components/HeroCarousel'

export default function Page() {
  return (
    <main className="px-10 space-y-32">

      {/* Hero Section */}
      <section className="py-20">
        <HeroCarousel />
      </section>

      {/* Services Section */}
      <section className="py-20">
        <h2 className="text-3xl text-orange mb-8">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl shadow-lg bg-white">
            <h3 className="text-xl mb-2">Order Preparation</h3>
            <p>Precise, process-driven preparation following client instructions to create a premium unboxing experience.</p>
          </div>
          <div className="p-6 rounded-xl shadow-lg bg-white">
            <h3 className="text-xl mb-2">Repackaging</h3>
            <p>Transform bulk items into individual client packaging, ready for shipment.</p>
          </div>
          <div className="p-6 rounded-xl shadow-lg bg-white">
            <h3 className="text-xl mb-2">Warehousing</h3>
            <p>Secure storage for small, high-value items with careful inventory management.</p>
          </div>
          <div className="p-6 rounded-xl shadow-lg bg-white">
            <h3 className="text-xl mb-2">Packaging Assistance</h3>
            <p>Guidance on packaging design to elevate your brand’s unboxing experience.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-cream rounded-xl px-6">
        <h2 className="text-3xl text-orange mb-8">How It Works</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>Submit your order requests by end of day.</li>
          <li>We prepare, repackage, and warehouse your items with care.</li>
          <li>Orders ship within 48 hours (within 200 miles of Dallas hub).</li>
          <li>Track your shipments easily with clear updates.</li>
        </ol>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <h2 className="text-3xl text-orange mb-8">Pricing</h2>
        <p className="mb-6">
          Straightforward pricing with “Starting At” rates. Custom quotes are easy — communicate however you prefer, no salesmen involved.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl shadow-lg bg-white text-center">
            <h3 className="text-xl mb-2">Order Prep</h3>
            <p className="text-lg font-bold mb-2">Starting at $5 / item</p>
          </div>
          <div className="p-6 rounded-xl shadow-lg bg-white text-center">
            <h3 className="text-xl mb-2">Repackaging</h3>
            <p className="text-lg font-bold mb-2">Starting at $1 / item</p>
          </div>
          <div className="p-6 rounded-xl shadow-lg bg-white text-center">
            <h3 className="text-xl mb-2">Warehousing</h3>
            <p className="text-lg font-bold mb-2">Starting at $50 / month</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-cream rounded-xl px-6">
        <h2 className="text-3xl text-orange mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl shadow-lg bg-white">
            <p className="italic">“Dun Fulfillment transformed our unboxing experience. Everything arrives perfectly every time!”</p>
            <p className="mt-2">— Leather Band Co.</p>
          </div>
          <div className="p-6 rounded-xl shadow-lg bg-white">
            <p className="italic">“Reliable, calm, and precise. They handle our high-value items with care.”</p>
            <p className="mt-2">— Antique Currency Shop</p>
          </div>
        </div>
      </section>

      {/* Contact / Call to Action */}
      <section className="py-20">
        <h2 className="text-3xl text-orange mb-8">Get Started</h2>
        <p className="mb-6">
          Reach out today for a custom quote or to start working with Dun Fulfillment. Simple, reliable service with no salesmen.
        </p>
        <a
          href="mailto:hello@dunfulfillment.com"
          className="inline-block bg-orange text-cream px-6 py-3 rounded-xl font-bold shadow hover:bg-orange-700 transition"
        >
          Contact Us
        </a>
      </section>

    </main>
  )
}
