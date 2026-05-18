import { createFileRoute } from "@tanstack/react-router";
import {
  BedDouble,
  Waves,
  UtensilsCrossed,
  CarFront,
  Sparkles,
  Flame,
  Star,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  ArrowUpRight,
  ChevronDown,
  ShieldCheck,
  Headphones,
  Award,
  Leaf,
  MessageCircle,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";

import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomGanga from "@/assets/room-ganga.jpg";
import expAarti from "@/assets/exp-aarti.jpg";
import expBoat from "@/assets/exp-boat.jpg";
import expDining from "@/assets/exp-dining.jpg";
import expRetreat from "@/assets/exp-retreat.jpg";
import expEvents from "@/assets/exp-events.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import ctaNight from "@/assets/cta-night.jpg";

// Cinematic free drone-style ambient footage (Pexels CDN, no auth required)
const HERO_VIDEO =
  "https://videos.pexels.com/video-files/2169880/2169880-uhd_3840_2160_30fps.mp4";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Luxury Riverside Resort in Varanasi | Shiv Rudraksh" },
      {
        name: "description",
        content:
          "Shiv Rudraksh — a luxury riverside resort in Varanasi offering boutique suites, premium stay near Ganga, fine dining and soulful boutique resort experiences.",
      },
      {
        name: "keywords",
        content:
          "Luxury Resort in Varanasi, Riverside Stay Varanasi, Premium Stay near Ganga, Boutique Resort Experience, Shiv Rudraksh Resort, Hotels near Assi Ghat",
      },
      { property: "og:title", content: "Luxury Riverside Resort in Varanasi | Shiv Rudraksh" },
      {
        property: "og:description",
        content:
          "Boutique luxury riverside resort by the Ganga — premium suites, Aarti evenings and timeless hospitality in Varanasi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Resort",
          name: "Shiv Rudraksh Resort",
          description:
            "Luxury riverside boutique resort in Varanasi near the Ganga, offering premium suites and soulful experiences.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Near Assi Ghat",
            addressLocality: "Varanasi",
            addressRegion: "UP",
            postalCode: "221005",
            addressCountry: "IN",
          },
          starRating: { "@type": "Rating", ratingValue: "3" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "512" },
        }),
      },
    ],
  }),
});

const features = [
  { icon: BedDouble, label: "Premium Rooms" },
  { icon: Waves, label: "Riverside Ambience" },
  { icon: UtensilsCrossed, label: "Fine Dining" },
  { icon: CarFront, label: "Free Parking" },
  { icon: Sparkles, label: "Event Space" },
  { icon: Flame, label: "Spiritual Experience" },
];

const stats = [
  { icon: Star, value: "4.8", label: "Guest Rating" },
  { icon: BedDouble, value: "500+", label: "Happy Guests" },
  { icon: Waves, value: "Riverside", label: "Ganga Experience" },
  { icon: Flame, value: "Assi Ghat", label: "Walking Distance" },
];

const trustSignals = [
  { icon: ShieldCheck, label: "Safe & Comfortable Stay" },
  { icon: Headphones, label: "24×7 Guest Assistance" },
  { icon: Award, label: "Rated by Travelers" },
];

const rooms = [
  {
    name: "Deluxe Room",
    img: roomDeluxe,
    desc: "A refined sanctuary of warm linens, soft lighting and serene textures.",
    price: "From ₹6,500 / night",
  },
  {
    name: "Family Suite",
    img: roomFamily,
    desc: "Generous space for the whole family, framed by garden views and natural light.",
    price: "From ₹9,800 / night",
  },
  {
    name: "Ganga View Room",
    img: roomGanga,
    desc: "Wake to the river. A private balcony opens to the timeless Ganges.",
    price: "From ₹12,400 / night",
  },
];

const experiences = [
  { name: "Ganga Aarti Evenings", img: expAarti, tag: "Spiritual" },
  { name: "Sunrise Boat Rides", img: expBoat, tag: "Heritage" },
  { name: "Rooftop Dining", img: expDining, tag: "Culinary" },
  { name: "Riverside Mornings", img: expRetreat, tag: "Wellness" },
  { name: "Spiritual Retreats", img: expEvents, tag: "Soulful" },
];

const whyUs = [
  { icon: Waves, title: "Riverside Serenity", desc: "Wake to the sacred Ganga and let the river set the pace of your day." },
  { icon: Sparkles, title: "Elegant Hospitality", desc: "Quiet, attentive service that anticipates rather than interrupts." },
  { icon: BedDouble, title: "Premium Comfort", desc: "Plush bedding, curated interiors and considered detail in every suite." },
  { icon: Leaf, title: "Authentic Varanasi", desc: "Walk to Assi Ghat, witness Aarti, and live the soul of the city." },
];

const gallery = [
  { src: g1, h: "tall" },
  { src: g2, h: "short" },
  { src: g5, h: "tall" },
  { src: g4, h: "short" },
  { src: g3, h: "tall" },
  { src: g6, h: "short" },
];

const testimonials = [
  {
    name: "Ananya Kapoor",
    place: "Mumbai",
    text: "An unforgettable stay. The river views at sunrise and the impeccable service made every moment feel sacred.",
  },
  {
    name: "James Whitaker",
    place: "London",
    text: "A rare blend of spiritual depth and modern luxury. The rooftop dining alone is worth the journey.",
  },
  {
    name: "Priya & Rohan",
    place: "Bengaluru",
    text: "We came for a weekend and stayed for five days. The staff treats you like family in a palace.",
  },
];

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />

      {/* HERO — cinematic drone video */}
      <section
        id="home"
        className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover kenburns"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={heroImg}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.7)_100%)]" />
        </div>

        <div className="relative z-10 px-6 text-center max-w-5xl mx-auto">
          <Reveal>
            <span className="eyebrow text-gold/90">Luxury · Riverside · Varanasi</span>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mt-8 font-display text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.2rem] text-white leading-[1.04] text-balance">
              Experience the Soul of Varanasi <br className="hidden sm:block" />
              in <em className="not-italic text-gradient-gold">Luxury</em>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-7 font-display italic text-xl md:text-2xl text-white/85 text-balance">
              Where spiritual serenity meets modern comfort.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <p className="mt-6 max-w-xl mx-auto text-white/70 leading-relaxed text-balance">
              A boutique riverside resort by the sacred Ganga — premium suites, soulful evenings
              and timeless hospitality in the eternal city.
            </p>
          </Reveal>
          <Reveal delay={600}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a href="#contact" className="luxe-btn">Reserve Your Stay</a>
              <a href="#rooms" className="luxe-btn-ghost">Explore Suites</a>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 float-slow z-10">
          <ChevronDown size={22} />
        </div>
      </section>

      {/* TRUST STATS STRIP */}
      <section className="relative -mt-px bg-charcoal text-white border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-10 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="flex items-center gap-4 md:justify-center">
                <s.icon size={22} className="text-gold" strokeWidth={1.4} />
                <div>
                  <p className="font-display text-xl md:text-2xl text-white leading-none">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[0.65rem] tracking-[0.25em] uppercase text-white/60">
                    {s.label}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[0.7rem] tracking-[0.2em] uppercase text-white/60">
            {trustSignals.map((t) => (
              <span key={t.label} className="inline-flex items-center gap-2">
                <t.icon size={14} className="text-gold" strokeWidth={1.5} />
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="py-20 md:py-28 border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
            {features.map((f, i) => (
              <Reveal key={f.label} delay={i * 80}>
                <div className="group flex flex-col items-center text-center">
                  <div className="w-14 h-14 flex items-center justify-center border border-border text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-charcoal group-hover:border-gold group-hover:-translate-y-1">
                    <f.icon size={22} strokeWidth={1.3} />
                  </div>
                  <p className="mt-5 text-[0.72rem] tracking-[0.22em] uppercase text-foreground/80">
                    {f.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-36 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src={aboutImg}
                  alt="Luxury riverside resort exterior in Varanasi with reflecting pool"
                  width={1280}
                  height={1600}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 md:-right-12 bg-charcoal text-white px-8 py-6 shadow-luxe">
                <p className="font-display text-4xl text-gradient-gold">15+</p>
                <p className="text-[0.7rem] uppercase tracking-[0.25em] mt-1 text-white/70">
                  Years of Hospitality
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow">About the Resort</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
                A Peaceful Riverside <br />
                Escape in <em className="not-italic text-gold">Varanasi</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="divider-gold my-8" />
            </Reveal>
            <Reveal delay={250}>
              <p className="text-muted-foreground leading-relaxed text-lg max-w-lg">
                Set steps from the sacred Ganga, Shiv Rudraksh is a luxury riverside resort that
                blends modern comfort with the timeless soul of Varanasi — quiet luxury, elegant
                hospitality and unhurried mornings by the river.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-6">
              {["Elegant Suites", "Family Friendly", "Near Assi Ghat", "Premium Hospitality"].map(
                (s, i) => (
                  <Reveal key={s} delay={300 + i * 100}>
                    <div className="border border-border p-5 hover:border-gold/60 transition-colors duration-500">
                      <p className="font-display text-lg">{s}</p>
                    </div>
                  </Reveal>
                )
              )}
            </div>

            <Reveal delay={700}>
              <a href="#rooms" className="luxe-btn mt-12">Discover Suites</a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-32 bg-charcoal text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal><span className="eyebrow">Why Shiv Rudraksh</span></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl text-white text-balance">
                A Boutique Resort Experience, <br />
                <em className="not-italic text-gradient-gold">Crafted with Soul</em>
              </h2>
            </Reveal>
            <Reveal delay={200}><div className="divider-gold mx-auto my-8" /></Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 120}>
                <div className="group h-full border border-white/10 p-8 hover:border-gold/50 transition-all duration-500 hover:-translate-y-1 bg-white/[0.02]">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/40 text-gold mb-6 group-hover:bg-gold group-hover:text-charcoal transition-all duration-500">
                    <w.icon size={20} strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-2xl text-white">{w.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/65">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="py-24 md:py-36 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal><span className="eyebrow">Accommodation</span></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-4xl md:text-6xl text-balance">
                Suites Designed for <em className="not-italic text-gold">Quiet Luxury</em>
              </h2>
            </Reveal>
            <Reveal delay={200}><div className="divider-gold mx-auto my-8" /></Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {rooms.map((r, i) => (
              <Reveal key={r.name} delay={i * 150}>
                <article className="group bg-card hover-zoom">
                  <div className="overflow-hidden aspect-[4/5]">
                    <img
                      src={r.img}
                      alt={`${r.name} — luxury riverside stay near Ganga`}
                      width={1280}
                      height={960}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-2xl">{r.name}</h3>
                      <span className="text-xs tracking-[0.2em] uppercase text-gold">
                        {r.price}
                      </span>
                    </div>
                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-[0.72rem] tracking-[0.25em] uppercase text-foreground border-b border-gold pb-1 hover:gap-3 transition-all"
                    >
                      Reserve Suite <ArrowUpRight size={14} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section id="experiences" className="py-24 md:py-36 bg-charcoal text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal><span className="eyebrow">Experiences</span></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-4xl md:text-6xl text-white text-balance">
                Moments by the <em className="not-italic text-gradient-gold">Sacred River</em>
              </h2>
            </Reveal>
            <Reveal delay={200}><div className="divider-gold mx-auto my-8" /></Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((e, i) => (
              <Reveal
                key={e.name}
                delay={i * 120}
                className={i === 0 ? "lg:row-span-2" : ""}
              >
                <article
                  className={`group relative overflow-hidden hover-zoom ${
                    i === 0 ? "aspect-[3/5] lg:h-full" : "aspect-[4/5]"
                  }`}
                >
                  <img
                    src={e.img}
                    alt={`${e.name} — boutique resort experience in Varanasi`}
                    width={1280}
                    height={1600}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <div className="glass-card p-6">
                      <span className="text-[0.62rem] tracking-[0.3em] uppercase text-gold">
                        {e.tag}
                      </span>
                      <h3 className="mt-2 font-display text-2xl md:text-3xl text-white">
                        {e.name}
                      </h3>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-16">
            <Reveal>
              <a href="#contact" className="luxe-btn">Discover Experiences</a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-36 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal><span className="eyebrow">Resort Moments</span></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-4xl md:text-6xl text-balance">
                A Glimpse into <em className="not-italic text-gold">the Resort</em>
              </h2>
            </Reveal>
            <Reveal delay={200}><div className="divider-gold mx-auto my-8" /></Reveal>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {gallery.map((g, i) => (
              <Reveal key={i} delay={(i % 3) * 100} className="mb-6 break-inside-avoid">
                <div className="relative overflow-hidden hover-zoom group">
                  <img
                    src={g.src}
                    alt="Luxury riverside resort interior in Varanasi"
                    loading="lazy"
                    className={`w-full object-cover ${
                      g.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-16">
            <Reveal>
              <a href="#contact" className="luxe-btn-ghost !text-foreground !border-gold/60">
                View Resort Moments
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-36 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal><span className="eyebrow">Guest Reflections</span></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-4xl md:text-6xl text-balance">
                Words from <em className="not-italic text-gold">Our Guests</em>
              </h2>
            </Reveal>
            <Reveal delay={200}><div className="divider-gold mx-auto my-8" /></Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 150}>
                <figure className="bg-card p-10 h-full flex flex-col border border-border hover:border-gold/40 transition-colors duration-500">
                  <div className="flex gap-1 text-gold mb-6">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="font-display text-lg leading-relaxed text-foreground/90 flex-1">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-border">
                    <p className="font-medium">{t.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                      {t.place}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden text-white"
      >
        <div className="absolute inset-0">
          <img
            src={ctaNight}
            alt="Shiv Rudraksh Resort at night by the Ganga"
            width={1920}
            height={1280}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/95" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto py-24">
          <Reveal><span className="eyebrow">Reserve Your Sanctuary</span></Reveal>
          <Reveal delay={150}>
            <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[1.05] text-balance">
              Your Peaceful Luxury <br />
              <em className="not-italic text-gradient-gold">Escape Awaits</em>
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-8 text-white/70 max-w-xl mx-auto text-balance">
              Reserve your riverside suite at Shiv Rudraksh Resort and let Varanasi unfold around you.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+919999999999" className="luxe-btn">Plan Your Escape</a>
              <a href="mailto:reservations@shivrudraksh.com" className="luxe-btn-ghost">
                Contact Concierge
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal text-white/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <p className="font-display text-3xl text-white">
              Shiv <span className="text-gradient-gold">Rudraksh</span>
            </p>
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-white/50 mt-1">
              Luxury Riverside Resort · Varanasi
            </p>
            <p className="mt-6 text-sm leading-relaxed text-white/60 max-w-sm">
              A boutique riverside retreat blending modern comfort with the timeless spirit of the
              Ganga — premium stays, soulful experiences, quiet luxury.
            </p>
            <div className="flex gap-3 mt-8">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-white/15 hover:bg-gold hover:text-charcoal hover:border-gold transition-all"
                  aria-label="Social"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-6">Explore</p>
            <ul className="space-y-3 text-sm">
              {["Rooms", "Experiences", "Gallery", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-gold transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-6">Contact</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 text-gold" />
                <span>Assi Ghat Road, Varanasi, UP 221005</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold" />
                <a href="tel:+919999999999">+91 99999 99999</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold" />
                <a href="mailto:reservations@shivrudraksh.com">
                  reservations@shivrudraksh.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
            <p>© {new Date().getFullYear()} Shiv Rudraksh Resort. All rights reserved.</p>
            <p className="tracking-[0.2em] uppercase">Crafted with quiet luxury</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919999999999?text=Hello%20Shiv%20Rudraksh%2C%20I%27d%20like%20to%20reserve%20a%20stay."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white pulse-whats hover:scale-110 transition-transform duration-300"
        style={{ background: "#25D366" }}
      >
        <MessageCircle size={26} strokeWidth={1.8} />
      </a>
    </main>
  );
}
