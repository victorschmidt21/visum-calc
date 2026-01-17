import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function News() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-heading text-primary mb-12">Notícias</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200" />
                <div className="p-6">
                  <div className="text-sm text-secondary font-bold mb-2">Janeiro 2026</div>
                  <h3 className="text-xl font-bold text-primary mb-3">Novidades sobre a Reforma Tributária</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">Acompanhe as principais mudanças e prepare sua empresa para o novo cenário fiscal brasileiro.</p>
                  <button className="text-secondary font-bold hover:underline">Ler mais →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
