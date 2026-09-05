export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#071b3a] px-6 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm font-semibold text-yellow-400 hover:text-yellow-300">
          ← Back to Strames Mobility LLP
        </a>

        <p className="mt-12 text-sm font-bold tracking-[0.25em] text-yellow-400">
          PRIVACY POLICY
        </p>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Privacy Policy</h1>
        <p className="mt-5 leading-8 text-slate-400">
          Strames Mobility LLP respects your privacy. This page explains how information submitted through this website may be used to respond to enquiries and provide mobility-related services.
        </p>

        <div className="mt-12 space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white">Information we receive</h2>
            <p className="mt-3 leading-7 text-slate-400">
              When you contact us, we may receive details such as your name, phone number, email address, company name, selected service and requirement details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">How information is used</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Information may be used to respond to enquiries, discuss transportation requirements, provide quotations and coordinate requested services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">WhatsApp enquiries</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Enquiry submissions on this website can open WhatsApp with the information you entered. WhatsApp is a third-party service and its own privacy practices apply when you use it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Contact</h2>
            <p className="mt-3 leading-7 text-slate-400">
              For privacy-related questions, contact Strames Mobility LLP at info@stramesmobility.com.
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
