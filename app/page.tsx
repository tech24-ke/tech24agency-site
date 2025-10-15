export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Hero */}
      <section className="flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Tech24 Agency
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Affordable websites and digital tools for small businesses across Africa and beyond.
        </p>
        <a
          href="https://wa.me/254748699460"
          target="_blank"
          className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Web Design</h3>
              <p className="text-gray-600">
                Tailored websites for cafés, salons, and small businesses with WhatsApp integration.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Brand Identity</h3>
              <p className="text-gray-600">
                Logos, business cards, and social-media branding that make your business stand out.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Hosting & Domains</h3>
              <p className="text-gray-600">
                End-to-end domain, email, and hosting setup — ready to go live in 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 border-t text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Tech24 Agency — All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2 text-gray-600">
          <a href="https://www.instagram.com/tech24kenya/" target="_blank" className="hover:text-black">Instagram</a>
          <a href="https://facebook.com/tech24kenya" target="_blank" className="hover:text-black">Facebook</a>
          <a href="https://tiktok.com/@tech24kenya" target="_blank" className="hover:text-black">TikTok</a>
          <a href="https://x.com/tech24kenya" target="_blank" className="hover:text-black">X</a>
        </div>
      </footer>
    </main>
  );
}
