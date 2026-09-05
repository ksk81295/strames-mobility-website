export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#071b3a] px-6 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm font-semibold text-yellow-400 hover:text-yellow-300">
          ← Back to Strames Mobility LLP
        </a>

        <p className="mt-12 text-sm font-bold tracking-[0.25em] text-yellow-400">
          TERMS & CONDITIONS
        </p>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Terms & Conditions</h1>
        <p className="mt-5 leading-8 text-slate-400">
          These website terms provide a general framework for using the Strames Mobility LLP website and submitting transportation enquiries.
        </p>

        <div className="mt-12 space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white">Website information</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Service descriptions, vehicle availability and other website information are provided for general enquiry purposes and may change based on operational requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Enquiries and quotations</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Submitting an enquiry does not by itself confirm a booking. Availability, pricing, service scope and other applicable conditions should be confirmed directly with Strames Mobility LLP.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Third-party services</h2>
            <p className="mt-3 leading-7 text-slate-400">
              This website may link to or use third-party services such as WhatsApp, Google Maps and social media platforms. Their respective terms and policies apply to your use of those services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Contact</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Questions about these terms can be directed to info@stramesmobility.com.
            </p>
          </section>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Strames Mobility LLP. All rights reserved.
        </div>
      </div>
    </main>
  );
}
