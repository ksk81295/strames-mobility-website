"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const fleet = [
  {
    number: "01",
    name: "Maruti Suzuki Dzire",
    category: "Premium Sedan",
    image: "/images/fleet/dzire.png",
    description:
      "A comfortable and efficient sedan suited for corporate travel, airport transfers and everyday mobility.",
    features: ["4+1 Seating", "Comfortable Ride", "Corporate Travel"],
  },
  {
    number: "02",
    name: "Maruti Suzuki Ertiga",
    category: "7-Seater MPV",
    image: "/images/fleet/ertiga.png",
    description:
      "A practical and spacious MPV ideal for employee transportation, family travel and group journeys.",
    features: ["7 Seater", "Spacious Cabin", "Group Travel"],
  },
  {
    number: "03",
    name: "Toyota Innova Crysta",
    category: "Premium MPV",
    image: "/images/fleet/crysta.png",
    description:
      "A premium and spacious vehicle designed for executive travel, corporate requirements and comfortable outstation journeys.",
    features: ["7/8 Seater", "Premium Comfort", "Executive Travel"],
  },
];

const whyChooseUs = [
  {
    number: "01",
    title: "Reliable Operations",
    description:
      "Dependable transportation services built around punctuality, consistency and smooth day-to-day operations.",
  },
  {
    number: "02",
    title: "Safety First",
    description:
      "Passenger safety and comfort remain central to the way we approach every mobility requirement.",
  },
  {
    number: "03",
    title: "Professional Service",
    description:
      "A professional approach designed to meet the expectations of businesses, employees and travellers.",
  },
  {
    number: "04",
    title: "Flexible Solutions",
    description:
      "Mobility solutions can be tailored to corporate, employee, rental, airport and travel requirements.",
  },
];

const leadership = [
  {
    number: "01",
    name: "Mandar Kamble",
    role: "Designated Partner – Operations",
    phone: "73509 82953 / 86684 47309",
    description:
      "Driving day-to-day operations with a focus on dependable service, smooth coordination and efficient mobility solutions.",
  },
  {
    number: "02",
    name: "Komal Kamble",
    role: "Designated Partner – Finance & Accounts",
    phone: "84129 23668",
    description:
      "Managing finance and accounts with a focus on disciplined processes, transparency and responsible business operations.",
  },
  {
    number: "03",
    name: "Kunal Kamble",
    role: "Business Development & Marketing",
    phone: "85510 53573 / 86830 81295",
    description:
      "Focused on business development, marketing and building strong relationships around Strames Mobility's growing mobility solutions.",
  },
];

const services = [
  {
    title: "Corporate Travel",
    description:
      "Professional transportation solutions for corporate meetings, business travel and executive mobility.",
    icon: "briefcase",
  },
  {
    title: "Employee Transportation",
    description:
      "Safe and dependable employee transportation designed around operational requirements.",
    icon: "people",
  },
  {
    title: "Fleet Management",
    description:
      "Efficient fleet coordination and transportation management for businesses and organisations.",
    icon: "fleet",
  },
  {
    title: "Car Rentals",
    description:
      "Flexible vehicle rental options for business travel, personal journeys and special requirements.",
    icon: "car",
  },
  {
    title: "Airport Transfers",
    description:
      "Comfortable and timely airport pickup and drop services for individuals and corporate travellers.",
    icon: "plane",
  },
  {
    title: "Tours & Transfers",
    description:
      "Comfortable transportation for local tours, outstation journeys and customised travel requirements.",
    icon: "route",
  },
];

const businessTypes = [
  {
    number: "01",
    title: "Corporate Teams",
    description:
      "Professional mobility support for meetings, business travel, executive movement and day-to-day requirements.",
  },
  {
    number: "02",
    title: "Employees & Organisations",
    description:
      "Dependable employee transportation solutions designed around operational schedules and workforce mobility.",
  },
  {
    number: "03",
    title: "Travellers & Families",
    description:
      "Comfortable vehicles and flexible travel support for airport transfers, local movement and outstation journeys.",
  },
  {
    number: "04",
    title: "Business Partners",
    description:
      "A professional approach for organisations looking for dependable transportation coordination and mobility support.",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? "reveal-up" : "opacity-0 translate-y-8"} ${className}`}
      style={{
        animationDelay: visible ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
}

function ServiceIcon({ type }: { type: string }) {
  if (type === "briefcase") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
      >
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
        <path d="M3 12h18" />
      </svg>
    );
  }

  if (type === "people") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
      >
        <circle cx="9" cy="7" r="3" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M14.5 14.5a5 5 0 0 1 6 5.5" />
      </svg>
    );
  }

  if (type === "fleet" || type === "car") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
      >
        <path d="M5 17h14" />
        <path d="M6 17V11l2-5h8l2 5v6" />
        <path d="M6 11h12" />
        <circle cx="8" cy="17" r="1.7" />
        <circle cx="16" cy="17" r="1.7" />
      </svg>
    );
  }

  if (type === "plane") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
      >
        <path d="M3 18h18" />
        <path d="M5 15l5-1 3-8 2 .5-1 8 5-1.5 1.5 1.5-7 3-5-.5z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <path d="M4 19c4-8 8-12 16-14" />
      <path d="M16 5h4v4" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="7" r="2" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M6.5 8.2H3.2V21h3.3V8.2ZM4.85 3A2 2 0 1 0 4.85 7 2 2 0 0 0 4.85 3ZM21 13.65c0-3.84-2.05-5.63-4.79-5.63-2.21 0-3.2 1.22-3.75 2.08V8.2H9.15V21h3.31v-6.33c0-1.67.32-3.29 2.39-3.29 2.04 0 2.07 1.91 2.07 3.4V21H21v-7.35Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.3"
        cy="6.8"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46h1.7V4a22.6 22.6 0 0 0-2.47-.13c-2.45 0-4.13 1.5-4.13 4.25V10H7.4v3h2.7v8h3.4Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-7 w-7"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5.0.17 5.33.17 11.88c0 2.1.55 4.15 1.6 5.96L.07 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.44h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.17-3.42-8.43ZM12.06 21.78h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.23-.37a9.84 9.84 0 0 1-1.51-5.27c0-5.45 4.43-9.88 9.89-9.88a9.83 9.83 0 0 1 7 2.9 9.86 9.86 0 0 1 2.89 7c0 5.45-4.44 9.88-9.9 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const company = String(formData.get("company") || "");
    const service = String(formData.get("service") || "");
    const message = String(formData.get("message") || "");

    const whatsappMessage = `*New Enquiry - Strames Mobility LLP*

*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email}
*Company:* ${company || "Not provided"}
*Service Required:* ${service || "Not selected"}

*Requirement:*
${message}`;

    const whatsappUrl = `https://wa.me/918551053573?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    form.reset();
  };

  return (
    <main className="min-h-screen bg-[#071b3a] text-white">
      {/* =========================
          HEADER
      ========================= */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071b3a]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center"
          >
            <img
              src="/images/logo/strames-logo-tr.png"
              alt="Strames Mobility LLP"
              className="h-10 w-auto object-contain sm:h-12"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm font-medium transition hover:text-yellow-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm font-medium transition hover:text-yellow-400"
            >
              About
            </a>

            <a
              href="#services"
              className="text-sm font-medium transition hover:text-yellow-400"
            >
              Services
            </a>

            <a
              href="#why-us"
              className="text-sm font-medium transition hover:text-yellow-400"
            >
              Why Us
            </a>

            <a
              href="#leadership"
              className="text-sm font-medium transition hover:text-yellow-400"
            >
              Leadership
            </a>

            <a
              href="#businesses"
              className="text-sm font-medium transition hover:text-yellow-400"
            >
              Who We Serve
            </a>

            <a
              href="#fleet"
              className="text-sm font-medium transition hover:text-yellow-400"
            >
              Our Fleet
            </a>

            <a
              href="#contact"
              className="text-sm font-medium transition hover:text-yellow-400"
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-yellow-400 px-6 py-3 text-sm font-bold text-[#071b3a] shadow-lg shadow-yellow-400/10 transition hover:-translate-y-0.5 hover:bg-yellow-300 sm:inline-flex"
          >
            Get a Quote
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] md:hidden"
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#06162f] md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5">
              {[
                ["#home", "Home"],
                ["#about", "About"],
                ["#services", "Services"],
                ["#why-us", "Why Us"],
                ["#leadership", "Leadership"],
                ["#businesses", "Who We Serve"],
                ["#fleet", "Our Fleet"],
                ["#contact", "Contact"],
              ].map(([href, label], index) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className={`py-4 text-sm font-medium hover:text-yellow-400 ${
                    index < 7 ? "border-b border-white/10" : ""
                  }`}
                >
                  {label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-4 rounded-full bg-yellow-400 px-6 py-3 text-center text-sm font-bold text-[#071b3a]"
              >
                Get a Quote
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* =========================
          HERO
      ========================= */}
      <section
        id="home"
        className="relative isolate overflow-hidden border-b border-white/10"
      >
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-yellow-400/[0.06] blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/[0.08] blur-3xl" />

        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[38%] opacity-20 lg:block">
          <div className="absolute right-20 top-24 h-px w-64 bg-yellow-400" />
          <div className="absolute right-10 top-32 h-px w-40 bg-white/40" />
          <div className="absolute bottom-28 right-16 h-px w-56 bg-yellow-400" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="max-w-5xl">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-[2px] w-12 bg-yellow-400" />

                <p className="text-xs font-bold tracking-[0.35em] text-yellow-400 sm:text-sm">
                  STRAMES MOBILITY LLP
                </p>
              </div>

              <h1 className="max-w-5xl text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                <span className="block">Moving People.</span>

                <span className="mt-2 block text-yellow-400">
                  Connecting
                </span>

                <span className="block">Possibilities.</span>
              </h1>

              <p className="mt-9 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Professional mobility and transportation solutions for
                corporate travel, employee transportation, fleet management,
                car rentals, airport transfers and tours.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-[#071b3a] shadow-xl shadow-yellow-400/10 transition-all hover:-translate-y-1 hover:bg-yellow-300"
                >
                  Explore Services <span className="ml-2">→</span>
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/20 bg-white/[0.03] px-8 py-4 font-semibold transition-all hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-400"
                >
                  Get a Quote
                </a>
              </div>

              <div className="mt-14 grid max-w-3xl gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">
                <div>
                  <p className="text-2xl font-extrabold">
                    Professional
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Mobility Services
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-extrabold">
                    Reliable
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Transportation
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-extrabold">
                    People First
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Service Approach
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================= */}
      <section
        id="about"
        className="border-b border-white/10 bg-[#06162f] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">
                  ABOUT STRAMES
                </p>

                <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
                  Mobility built around
                  <span className="text-yellow-400"> people.</span>
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                  Strames Mobility LLP provides dependable transportation
                  solutions designed for businesses, employees and travellers.
                  Our focus is simple — safe journeys, reliable service and
                  professional mobility experiences.
                </p>

                <p className="mt-5 max-w-xl leading-7 text-slate-400">
                  From corporate transportation and employee mobility to
                  airport transfers, car rentals and tours, we aim to make
                  every journey comfortable, efficient and dependable.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5">
              {[
                [
                  "Reliable Service",
                  "Dependable transportation focused on punctuality, consistency and professional service.",
                ],
                [
                  "Safe Journeys",
                  "Safety and passenger comfort remain at the heart of every journey we provide.",
                ],
                [
                  "Professional Mobility",
                  "Professional mobility solutions tailored to modern corporate and travel requirements.",
                ],
              ].map(([title, description], index) => (
                <Reveal key={title} delay={index * 120}>
                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40">
                    <div className="mb-4 h-2 w-10 rounded-full bg-yellow-400" />

                    <h3 className="text-xl font-bold">
                      {title}
                    </h3>

                    <p className="mt-2 leading-6 text-slate-400">
                      {description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICES
      ========================= */}
      <section
        id="services"
        className="border-b border-white/10 bg-[#071b3a] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">
                OUR SERVICES
              </p>

              <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
                Transportation made{" "}
                <span className="text-yellow-400">simple.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                Professional mobility solutions tailored to your business,
                employee and travel requirements.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 100}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-transparent p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-black/20">
                  <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-yellow-400/[0.05] blur-3xl transition duration-500 group-hover:bg-yellow-400/[0.10]" />

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 transition duration-300 group-hover:bg-yellow-400 group-hover:text-[#071b3a]">
                    <ServiceIcon type={service.icon} />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <div className="mt-6 text-sm font-bold text-yellow-400 opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Learn More →
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          WHY US
      ========================= */}
      <section
        id="why-us"
        className="border-b border-white/10 bg-[#06162f] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">
                  WHY STRAMES
                </p>

                <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
                  Built for
                  <span className="text-yellow-400">
                    {" "}dependable mobility.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
                  We focus on delivering professional transportation
                  experiences that businesses, employees and travellers can
                  rely on.
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-flex rounded-full border border-yellow-400/40 px-7 py-3.5 text-sm font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-[#071b3a]"
                >
                  Discuss Your Requirement →
                </a>
              </div>
            </Reveal>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {whyChooseUs.map((item, index) => (
                <Reveal key={item.number} delay={index * 120}>
                  <div className="group grid gap-5 py-8 sm:grid-cols-[80px_1fr] sm:items-start">
                    <p className="text-sm font-bold tracking-widest text-yellow-400/70">
                      {item.number}
                    </p>

                    <div>
                      <div className="flex items-center gap-4">
                        <h3 className="text-2xl font-bold transition group-hover:text-yellow-400">
                          {item.title}
                        </h3>

                        <span className="text-xl text-white/20 transition group-hover:translate-x-1 group-hover:text-yellow-400">
                          →
                        </span>
                      </div>

                      <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          LEADERSHIP
      ========================= */}
      <section
        id="leadership"
        className="border-b border-white/10 bg-[#071b3a] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">
                OUR LEADERSHIP
              </p>

              <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
                The people behind{" "}
                <span className="text-yellow-400">
                  Strames Mobility.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                A focused leadership team working across operations, finance,
                accounts, business development and marketing to deliver
                dependable mobility solutions.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person, index) => (
              <Reveal key={person.number} delay={index * 120}>
                <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-black/20">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10 text-lg font-extrabold text-yellow-400 transition duration-300 group-hover:bg-yellow-400 group-hover:text-[#071b3a]">
                      {person.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <span className="text-sm font-bold tracking-widest text-white/20">
                      {person.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-bold">
                    {person.name}
                  </h3>

                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-yellow-400">
                    {person.role}
                  </p>

                  <p className="mt-5 leading-7 text-slate-400">
                    {person.description}
                  </p>

                  <a
                    href={`tel:${person.phone
                      .split(" / ")[0]
                      .replace(/ /g, "")}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-yellow-400"
                  >
                    <PhoneIcon />
                    {person.phone}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          WHO WE SERVE
      ========================= */}
      <section
        id="businesses"
        className="border-b border-white/10 bg-[#06162f] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">
                BUILT FOR BUSINESS & TRAVEL
              </p>

              <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
                Mobility solutions for
                <span className="text-yellow-400">
                  {" "}real requirements.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                From corporate transportation to everyday travel, Strames
                Mobility is built to support people, teams and organisations
                with dependable mobility solutions.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {businessTypes.map((item, index) => (
              <Reveal key={item.number} delay={index * 100}>
                <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/50 hover:bg-white/[0.055]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] text-yellow-400">
                      {item.number}
                    </span>

                    <span className="text-xl text-white/20 transition group-hover:translate-x-1 group-hover:text-yellow-400">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-yellow-400/20 bg-yellow-400/[0.05] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="text-lg font-bold">
                  Looking for a dependable mobility partner?
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Tell us what you need and we&apos;ll help plan the right
                  transportation solution.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-bold text-[#071b3a] transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Request Corporate Transport →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================
          OUR FLEET
      ========================= */}
      <section
        id="fleet"
        className="border-b border-white/10 bg-[#071b3a] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">
                OUR FLEET
              </p>

              <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
                Choose the right vehicle
                <span className="text-yellow-400">
                  {" "}for your journey.
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                A carefully selected range of vehicles for corporate travel,
                employee transportation, airport transfers and comfortable
                journeys.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fleet.map((vehicle, index) => (
              <Reveal key={vehicle.number} delay={index * 150}>
                <div className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-black/20">
                  <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#0b2449] px-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-blue-500/10" />

                    <div className="absolute left-0 top-0 h-px w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full" />

                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="relative z-10 h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute right-5 top-5 z-20 text-sm font-bold tracking-widest text-white/20">
                      {vehicle.number}
                    </span>
                  </div>

                  <div className="p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
                      {vehicle.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold">
                      {vehicle.name}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">
                      {vehicle.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {vehicle.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="mt-7 flex items-center gap-2 text-sm font-bold text-yellow-400"
                    >
                      Enquire About Vehicle

                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          STRONG CTA
      ========================= */}
      <section className="border-b border-white/10 bg-[#071b3a] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/[0.12] via-white/[0.04] to-transparent p-8 sm:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-yellow-400/[0.10] blur-3xl" />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">
                    READY TO MOVE?
                  </p>

                  <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                    Let&apos;s build the right mobility solution for you.
                  </h2>

                  <p className="mt-4 leading-7 text-slate-400">
                    Corporate transport, employee mobility, rentals, airport
                    transfers or travel — share your requirement with our team.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-bold text-[#071b3a] transition hover:-translate-y-0.5 hover:bg-yellow-300"
                  >
                    Book a Vehicle →
                  </a>

                  <a
                    href="https://wa.me/918551053573?text=Hello%20Strames%20Mobility%20LLP%2C%20I%20would%20like%20to%20discuss%20a%20transportation%20requirement."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-yellow-400 hover:text-yellow-400"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================
          CONTACT
      ========================= */}
      <section
        id="contact"
        className="border-b border-white/10 bg-[#06162f] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">
                GET IN TOUCH
              </p>

              <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
                Let&apos;s plan your
                <span className="text-yellow-400">
                  {" "}journey.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                Tell us about your transportation requirement and our team
                will get back to you with the right mobility solution.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-5">
              <Reveal delay={60}>
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 px-7 py-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
                        FIND STRAMES
                      </p>

                      <p className="mt-1 font-semibold">
                        View us on Google Maps
                      </p>
                    </div>

                    <a
                      href="https://maps.app.goo.gl/9yJ8D5C4VNFnrVmG7?g_st=ic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-yellow-400 transition hover:text-yellow-300"
                    >
                      Open Map ↗
                    </a>
                  </div>

                  <div className="relative h-64 bg-[#0b2449]">
                    <iframe
                      title="Strames Mobility LLP on Google Maps"
                      src="https://www.google.com/maps?q=Precious%20Avenue%20Flat%20210%20Belavali%20Badlapur%20West%2C%20Badlapur%20E.D.%2C%20Thane%2C%20Maharashtra%20421503%2C%20India&output=embed"
                      className="h-full w-full border-0 opacity-90"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <a
                  href="mailto:info@stramesmobility.com"
                  className="block rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-yellow-400/30"
                >
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 font-semibold">
                    info@stramesmobility.com
                  </p>
                </a>
              </Reveal>

              <Reveal>
                <a
                  href="tel:+918551053573"
                  className="block rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-yellow-400/30"
                >
                  <p className="text-sm text-slate-500">
                    Call
                  </p>

                  <p className="mt-1 font-semibold">
                    +91 85510 53573
                  </p>
                </a>
              </Reveal>

              <Reveal>
                <a
                  href="https://wa.me/918551053573"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-yellow-400/30"
                >
                  <p className="text-sm text-yellow-400">
                    WhatsApp
                  </p>

                  <p className="mt-1 font-semibold">
                    Chat with our mobility team
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    +91 85510 53573
                  </p>
                </a>
              </Reveal>

              <Reveal delay={240}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  <p className="text-sm font-bold uppercase tracking-widest text-yellow-400">
                    Strames Mobility LLP
                  </p>

                  <p className="mt-3 leading-7 text-slate-300">
                    Professional mobility and transportation solutions
                    designed for businesses, employees and travellers.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-slate-300"
                      >
                        Full Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        required
                        className="w-full rounded-2xl border border-white/10 bg-[#071b3a] px-5 py-4 text-white outline-none placeholder:text-slate-600 transition focus:border-yellow-400/60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold text-slate-300"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="w-full rounded-2xl border border-white/10 bg-[#071b3a] px-5 py-4 text-white outline-none placeholder:text-slate-600 transition focus:border-yellow-400/60"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-slate-300"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="w-full rounded-2xl border border-white/10 bg-[#071b3a] px-5 py-4 text-white outline-none placeholder:text-slate-600 transition focus:border-yellow-400/60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-semibold text-slate-300"
                      >
                        Company
                      </label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Company name"
                        className="w-full rounded-2xl border border-white/10 bg-[#071b3a] px-5 py-4 text-white outline-none placeholder:text-slate-600 transition focus:border-yellow-400/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      Service Required
                    </label>

                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="w-full rounded-2xl border border-white/10 bg-[#071b3a] px-5 py-4 text-white outline-none transition focus:border-yellow-400/60"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      {services.map((service) => (
                        <option
                          key={service.title}
                          value={service.title}
                        >
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      Your Requirement
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your transportation requirement..."
                      required
                      className="min-h-[150px] w-full rounded-2xl border border-white/10 bg-[#071b3a] px-5 py-4 text-white outline-none placeholder:text-slate-600 transition focus:border-yellow-400/60"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-[#071b3a] transition hover:-translate-y-0.5 hover:bg-yellow-300"
                  >
                    Send Enquiry on WhatsApp

                    <WhatsAppIcon />
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-500">
                    Clicking the button will open WhatsApp with your enquiry
                    details automatically filled in.
                  </p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}
      <footer className="border-t border-white/10 bg-[#041126]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <Reveal>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              {/* BRAND */}
              <div>
                <a
                  href="#home"
                  className="inline-flex"
                >
                  <img
                    src="/images/logo/strames-logo-tr.png"
                    alt="Strames Mobility LLP"
                    className="h-14 w-auto object-contain"
                  />
                </a>

                <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                  Reliable mobility. Professional service. Transportation
                  solutions designed around people and possibilities.
                </p>

                <div className="mt-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
                    Connect With Us
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/company/stramesmobility/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Strames Mobility LLP on LinkedIn"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-yellow-400 hover:text-[#071b3a]"
                    >
                      <LinkedInIcon />
                    </a>

                    <a
                      href="https://www.instagram.com/stramesmobility/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Strames Mobility LLP on Instagram"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-yellow-400 hover:text-[#071b3a]"
                    >
                      <InstagramIcon />
                    </a>

                    <a
                      href="https://www.facebook.com/share/19P5vXkxao/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Strames Mobility LLP on Facebook"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-yellow-400 hover:text-[#071b3a]"
                    >
                      <FacebookIcon />
                    </a>
                  </div>
                </div>
              </div>

              {/* QUICK LINKS */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-yellow-400">
                  Quick Links
                </h3>

                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href="#home"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    Home
                  </a>

                  <a
                    href="#about"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    About
                  </a>

                  <a
                    href="#services"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    Services
                  </a>

                  <a
                    href="#why-us"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    Why Us
                  </a>

                  <a
                    href="#leadership"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    Leadership
                  </a>

                  <a
                    href="#businesses"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    Who We Serve
                  </a>

                  <a
                    href="#fleet"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    Our Fleet
                  </a>

                  <a
                    href="#contact"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* LEGAL */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-yellow-400">
                  Trust & Legal
                </h3>

                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href="/privacy"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    Privacy Policy
                  </a>

                  <a
                    href="/terms"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    Terms & Conditions
                  </a>

                  <p className="pt-2 text-xs leading-6 text-slate-500">
                    Professional mobility solutions with a people-first
                    approach.
                  </p>
                </div>
              </div>

              {/* CONTACT */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-yellow-400">
                  Contact
                </h3>

                <div className="mt-5 space-y-3 text-sm text-slate-400">
                  <p>Strames Mobility LLP</p>

                  <p>
                    Professional Mobility & Transportation Solutions
                  </p>

                  <a
                    href="mailto:info@stramesmobility.com"
                    className="block transition hover:text-white"
                  >
                    info@stramesmobility.com
                  </a>

                  <a
                    href="tel:+918551053573"
                    className="block transition hover:text-white"
                  >
                    +91 85510 53573
                  </a>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                      Business Information
                    </p>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      Legal entity: Strames Mobility LLP
                      <br />
                      Website: stramesmobility.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 border-t border-white/10 pt-6">
            <p className="text-center text-sm text-slate-500">
              © {new Date().getFullYear()} Strames Mobility LLP. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* =========================
          FLOATING CALL + WHATSAPP
      ========================= */}
      <div className="floating-contact-actions fixed bottom-6 right-6 z-50 flex flex-col gap-3 sm:bottom-8 sm:right-8">
        {/* CALL */}
        <a
          href="tel:+918551053573"
          aria-label="Call Strames Mobility LLP"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-[#071b3a] shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(250,204,21,0.35)]"
        >
          <PhoneIcon />
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/918551053573"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Strames Mobility LLP on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.35)]"
        >
          <WhatsAppIcon />
        </a>
      </div>
    </main>
  );
}