import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, animate, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Menu, X, ShieldCheck, Stethoscope, HeartPulse, Baby, Activity,
  Ambulance, Home, Check, Star, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube,
} from "lucide-react";

import doctorHero from "@/assets/doctor-hero.jpg";
import indianDoctorHero from "@/assets/young-indian-female-doctor-showing-thumbs-up-white-background-62407006-removebg-preview.png";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";
import clinicImg from "@/assets/clinic.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saral Health Care — Healthcare Made Simple in Mathura" },
      { name: "description", content: "Expert doctors, diagnostics, pediatric care, physiotherapy and 24×7 emergency support in Mathura. Book your appointment with Saral Health Care in minutes." },
      { property: "og:title", content: "Saral Health Care — Healthcare Made Simple" },
      { property: "og:description", content: "Accessible, expert healthcare in Mathura. Certified doctors, seamless bookings, home visits." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

/* ---------- Utilities ---------- */

function CountUp({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);
  const display = to >= 1000 ? `${(value / 1000).toFixed(value >= 1000 ? 0 : 1)}k` : Math.round(value).toString();
  return <span ref={ref}>{display}{suffix}</span>;
}

function MagneticButton({ children, className = "", onClick, as = "button", href }: {
  children: ReactNode; className?: string; onClick?: () => void; as?: "button" | "a"; href?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.25);
  };
  const reset = () => { x.set(0); y.set(0); };
  const Comp: any = as === "a" ? motion.a : motion.button;
  return (
    <Comp
      ref={ref as any}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={className}
    >
      {children}
    </Comp>
  );
}

function PrimaryButton({ children, onClick, href }: { children: ReactNode; onClick?: () => void; href?: string }) {
  return (
    <MagneticButton
      as={href ? "a" : "button"}
      href={href}
      onClick={onClick}
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-brand px-8 py-4 text-primary-foreground font-medium"
    >
      <span className="absolute inset-0 -translate-x-full bg-brand-deep transition-transform duration-500 group-hover:translate-x-0" />
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5">
        <ArrowRight className="h-4 w-4" />
      </span>
    </MagneticButton>
  );
}

/* ---------- Sections ---------- */

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-lime"
    />
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-primary-foreground">
        <ShieldCheck className="h-5 w-5" />
      </div>
      <span className="text-lg font-bold tracking-tight text-brand">Saral Health Care</span>
    </div>
  );
}

function TopTrustBar() {
  return (
    <div className="hidden bg-brand-deep text-primary-foreground text-[11px] py-1.5 px-6 lg:block border-b border-primary-foreground/10">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
            24×7 Emergency: <a href="tel:+919876543210" className="font-bold underline hover:text-lime transition-colors">+91 98765 43210</a>
          </span>
          <span className="opacity-30">|</span>
          <span className="flex items-center gap-1.5 opacity-90">
            <ShieldCheck className="h-3.5 w-3.5 text-lime" /> NABH & ISO 9001 Certified Multi-Specialty Clinic
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 opacity-90">
            <Check className="h-3.5 w-3.5 text-lime" /> Cashless Insurance & Ayushman Bharat Accepted
          </span>
          <span className="opacity-30">|</span>
          <span className="flex items-center gap-1.5 opacity-90">
            <MapPin className="h-3.5 w-3.5 text-lime" /> Highway Plaza, NH-19, Mathura
          </span>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["Services", "Doctors", "Appointments"];
  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-ice/90 backdrop-blur-md shadow-[0_1px_0_0_var(--border)]" : "bg-transparent"
        }`}
      >
        <TopTrustBar />
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-16 lg:gap-24">
            <Logo />
            <nav className="hidden items-center gap-8 md:flex">
              {links.map((l, i) => (
                <motion.a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="group relative text-[11px] font-semibold uppercase tracking-[0.22em] text-brand transition-colors hover:text-brand-deep"
                >
                  {l}
                  <span className="absolute inset-x-0 -bottom-1.5 h-[2px] origin-right scale-x-0 bg-brand transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                </motion.a>
              ))}
            </nav>
          </div>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center rounded-full bg-brand/5 text-brand transition hover:bg-brand hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-brand-deep text-primary-foreground"
          >
            <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
              <div className="flex items-center gap-2.5">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-lime text-brand-deep">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold tracking-tight text-primary-foreground">Saral Health Care</span>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close" className="grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-lime hover:text-brand-deep">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mx-auto max-w-[1400px] px-6 pt-16 lg:px-10">
              <ul className="space-y-4">
                {["Services", "Doctors", "Appointments", "Testimonials", "Contact"].map((l, i) => (
                  <motion.li
                    key={l}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06 }}
                  >
                    <a
                      onClick={() => setOpen(false)}
                      href={`#${l.toLowerCase()}`}
                      className="font-display block text-6xl uppercase text-primary-foreground/90 transition hover:text-lime md:text-8xl"
                    >
                      {l}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-16 flex items-center gap-5 text-primary-foreground/70">
                {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="transition hover:text-lime"><Icon className="h-5 w-5" /></a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  const photoYRaw = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const photoY = useSpring(photoYRaw, { stiffness: 350, damping: 25, mass: 0.5 });

  const wordmarkYRaw = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const wordmarkY = useSpring(wordmarkYRaw, { stiffness: 350, damping: 25, mass: 0.5 });

  const lines = ["HEALTHCARE", "MADE", "SIMPLE."];
  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ice pt-28 lg:pt-32 pb-12 lg:pb-16">
      {/* VERTICAL DARK GREEN BANNER FROM TOP-0 BEHIND DOCTOR (Z-0, SHIFTED TO THE RIGHT) */}
      <motion.div
        aria-hidden
        style={{ y: wordmarkY }}
        className="pointer-events-none absolute top-0 right-[8%] md:right-[12%] lg:right-[14%] w-[240px] sm:w-[300px] lg:w-[360px] h-[680px] sm:h-[780px] lg:h-[860px] bg-brand-deep rounded-b-3xl overflow-hidden z-0 shadow-lg"
      >
        {/* rotated wordmark */}
        <div className="absolute right-1 top-0 h-full select-none">
          <div className="rotated-wordmark pr-2 pt-36 text-[100px] lg:text-[130px] font-black text-primary-foreground/8 leading-none">
            SaralHealth
          </div>
        </div>
      </motion.div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative">
        
        {/* TOP HERO GRID */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_360px_200px] items-start">
          
          {/* LEFT: TEXT & CTA */}
          <div className="pt-4 lg:pt-10 z-10">
            <h1 className="font-display text-[11vw] uppercase leading-[0.86] text-brand sm:text-[8.5vw] lg:text-[5.5vw]">
              {lines.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.15 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="mt-8 max-w-md text-base leading-relaxed text-slate-body md:text-lg"
            >
              Access expert care and guidance anytime, anywhere in Mathura. We make staying
              healthy easy, convenient, and stress-free for your entire family.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-10"
            >
              <PrimaryButton href="#appointments">Get Appointment</PrimaryButton>
            </motion.div>
          </div>

          {/* CENTER: TRANSPARENT DOCTOR CUTOUT (Z-20, SHIFTED FURTHER TO THE LEFT) */}
          <div className="relative flex justify-center items-end h-[480px] sm:h-[570px] lg:h-[650px] z-20 -mb-24 lg:-mb-32 translate-y-4 lg:translate-y-6 -translate-x-6 lg:-translate-x-12">
            <motion.img
              style={{ y: photoY }}
              src={indianDoctorHero}
              width={1024}
              height={1280}
              alt="Doctor at Saral Health Care Mathura"
              className="h-[120%] w-auto max-w-none object-contain object-bottom drop-shadow-2xl z-20 scale-105"
            />
          </div>

          {/* RIGHT: CERTIFIED DOCTORS BADGE (SHIFTED FURTHER TO THE RIGHT) */}
          <div className="hidden lg:flex flex-col items-center justify-start pt-16 text-center z-10 translate-x-12 lg:translate-x-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="mb-3 grid h-14 w-14 place-items-center rounded-full bg-brand text-primary-foreground shadow-md">
                <Check className="h-6 w-6" />
              </div>
              <div className="font-display text-4xl text-brand leading-none">
                <CountUp to={150} suffix="+" />
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-slate-body">
                Certified Doctors
              </div>
            </motion.div>
          </div>

        </div>

        {/* BOTTOM STAT BLOCKS - DYNAMIC ORGANIC OVERLAP (SHIFTED FURTHER TO THE RIGHT) */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center relative z-30 max-w-5xl mx-auto translate-x-8 md:translate-x-16 lg:translate-x-24">
          
          {/* CARD 1: 500+ EXPERT DOCTORS (LIME GREEN - BEHIND WHITE CARD) */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
            whileHover={{ y: -8, rotate: 0, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-full md:w-[46%] shrink-0 rounded-3xl bg-lime p-8 lg:p-10 shadow-lg relative z-10 md:-translate-y-4 border border-lime/30"
          >
            <div className="font-display text-6xl text-brand-deep lg:text-7xl">
              <CountUp to={500} suffix="+" />
            </div>
            <div className="mt-14 text-sm font-medium uppercase tracking-[0.2em] text-brand-deep">
              Expert Doctors
            </div>
          </motion.div>

          {/* CARD 2: 200K+ MEMBERS (WHITE CARD - OVERLAPPING CLOSER & FLOATING ON TOP OF DOCTOR IMAGE ON HOVER) */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
            whileHover={{ zIndex: 40, y: -10, rotate: 0, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-full md:w-[58%] shrink-0 rounded-3xl bg-card p-8 lg:p-10 shadow-2xl relative z-20 md:-ml-24 lg:-ml-32 md:translate-y-4 border border-border overflow-hidden mt-6 md:mt-0"
          >
            <div className="font-display text-6xl text-brand-deep lg:text-7xl">
              <CountUp to={200000} suffix="+" />
            </div>
            <p className="mt-4 max-w-xs text-sm text-slate-body">
              People who are members of the Saral Health Care platform.
            </p>
            <a href="#appointments" className="group mt-6 inline-flex items-center gap-2 border-b-2 border-brand pb-0.5 text-sm font-semibold text-brand">
              Get Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* decorative sky blue people icons (enlarged head + body torso) */}
            <div className="pointer-events-none absolute -bottom-2 right-2 lg:-bottom-1 lg:right-4 flex items-end z-10 opacity-90">
              {[
                { head: 30, bodyW: 40, bodyH: 18 },
                { head: 42, bodyW: 52, bodyH: 26 },
                { head: 60, bodyW: 72, bodyH: 36 },
                { head: 42, bodyW: 52, bodyH: 26 },
                { head: 30, bodyW: 40, bodyH: 18 },
              ].map((p, i) => (
                <div key={i} className="flex flex-col items-center -mx-2">
                  {/* Head */}
                  <div style={{ height: p.head, width: p.head }} className="rounded-full bg-[#cce7f7] shadow-sm" />
                  {/* Body torso */}
                  <div style={{ height: p.bodyH, width: p.bodyW }} className="rounded-t-full bg-[#cce7f7] -mt-1.5 shadow-sm" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

/* Clinical Trust & Accreditation Ribbon */
function ClinicalTrustRibbon() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "NABH Accredited Facility",
      desc: "Complying with strict national hospital safety, sanitation & clinical care standards.",
    },
    {
      icon: Stethoscope,
      title: "100% Board-Certified Doctors",
      desc: "Verified MBBS, MD & DM specialists with active state medical council registration IDs.",
    },
    {
      icon: Activity,
      title: "NABL Accredited Diagnostics",
      desc: "High-precision automated lab testing with digital reports delivered on WhatsApp.",
    },
    {
      icon: HeartPulse,
      title: "Cashless Insurance Claims",
      desc: "Direct cashless support with Star Health, Niva Bupa, HDFC ERGO & Ayushman Bharat.",
    },
  ];

  const insurancePartners = ["Star Health", "Ayushman Bharat", "Niva Bupa", "HDFC ERGO", "ICICI Lombard", "Care Health"];

  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-6 pb-12 lg:px-10">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm lg:p-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
          <div className="flex items-center gap-2.5">
            <div className="grid h-7 w-7 place-items-center rounded-lg bg-brand text-primary-foreground">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Clinical Quality & Patient Safety Standards
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-body">
            <span className="inline-block h-2 w-2 rounded-full bg-lime animate-pulse" />
            Mathura's #1 Rated Clinic • 4.9/5 Rating ★★★★★ (2,500+ Verified Patients)
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">
                <p.icon className="h-5.5 w-5.5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-brand-deep">{p.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-body">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CASHLESS INSURANCE PARTNERS STRIP */}
        <div className="mt-10 border-t border-border/80 pt-6">
          <div className="text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-body">
            Cashless Insurance & Government Health Scheme Partners
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 lg:gap-6">
            {insurancePartners.map((name) => (
              <div
                key={name}
                className="flex items-center gap-2 rounded-full bg-ice/80 px-4 py-2 text-xs font-semibold text-brand border border-border/60 shadow-2xs"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-brand" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Services */
const services = [
  { icon: Stethoscope, title: "General Consultation", desc: "Talk to trusted doctors for everyday concerns, same-day.", tone: "brand" },
  { icon: Activity, title: "Diagnostics & Labs", desc: "Fast, accurate lab reports delivered to your phone.", tone: "lime" },
  { icon: Baby, title: "Pediatric Care", desc: "Compassionate care for infants, kids and teens.", tone: "white" },
  { icon: HeartPulse, title: "Physiotherapy", desc: "Personalised recovery plans from certified therapists.", tone: "brand" },
  { icon: Ambulance, title: "24×7 Emergency", desc: "Rapid response, ambulance dispatch across Mathura.", tone: "lime" },
  { icon: Home, title: "Home Visits", desc: "Expert doctors and nurses at your doorstep.", tone: "white" },
];

function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-body">/ Services</div>
          <h2 className="font-display mt-3 max-w-2xl text-5xl uppercase text-brand md:text-6xl">
            Care for every stage of life
          </h2>
        </div>
        <p className="max-w-sm text-slate-body">
          One platform, six connected services — designed to make quality healthcare in Mathura simple and personal.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const tones: Record<string, string> = {
            brand: "bg-brand text-primary-foreground",
            lime: "bg-lime text-brand-deep",
            white: "bg-card text-brand",
          };
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -6, rotate: -0.6 }}
              className={`group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl p-8 shadow-sm transition-shadow hover:shadow-xl ${tones[s.tone]}`}
            >
              <s.icon className="h-9 w-9" />
              <div>
                <h3 className="font-display text-2xl uppercase leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm opacity-80">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* Why Us */
function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yRaw = useTransform(scrollYProgress, [0, 1], [-130, 150]);
  const y = useSpring(yRaw, { stiffness: 350, damping: 25, mass: 0.5 });
  const points = [
    "Local Mathura doctors with 15+ years of experience",
    "Transparent pricing — no surprise bills, ever",
    "Digital records, prescriptions & follow-ups in one app",
    "Cashless partnerships with major health insurers",
  ];
  return (
    <section className="bg-brand-deep py-24 text-primary-foreground lg:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-10">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-lime">/ Why Saral</div>
          <h2 className="font-display mt-3 text-5xl uppercase leading-[0.9] md:text-7xl">
            Simple to book. <span className="text-lime">Serious</span> about care.
          </h2>
          <ul className="mt-10 space-y-5">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <span className="mt-1 grid h-7 w-7 place-items-center rounded-full bg-lime text-brand-deep">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-lg text-primary-foreground/90">{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div ref={ref} className="relative h-[420px] overflow-hidden rounded-3xl lg:h-[560px]">
          <motion.img
            style={{ y }}
            src={clinicImg}
            alt="Saral Health Care clinic interior"
            loading="lazy"
            width={1200}
            height={1400}
            className="absolute inset-x-0 -top-[15%] h-[135%] w-full object-cover"
          />
          <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-ice/95 p-5 text-brand backdrop-blur">
            <div className="font-display text-4xl"><CountUp to={98} suffix="%" /></div>
            <div className="mt-1 text-xs uppercase tracking-widest text-slate-body">Patient satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Doctors */
const doctors = [
  {
    name: "Dr. Ananya Sharma",
    specialty: "General Physician",
    degree: "MBBS, MD (Internal Medicine)",
    regNo: "Reg. UPMC-74892",
    img: doctor3,
    bio: "12+ yrs exp • Ex-AIIMS • Specialist in chronic illness & preventive care",
  },
  {
    name: "Dr. Rohan Verma",
    specialty: "Pediatrician",
    degree: "MBBS, MD (Pediatrics)",
    regNo: "Reg. UPMC-81024",
    img: doctor2,
    bio: "10+ yrs exp • Newborn care, immunizations & child wellness",
  },
  {
    name: "Dr. Vikram Malhotra",
    specialty: "Cardiologist",
    degree: "MBBS, MD, DM (Cardiology)",
    regNo: "Reg. UPMC-63910",
    img: doctor4,
    bio: "20+ yrs exp • Interventional cardiology & preventive heart care",
  },
  {
    name: "Dr. Priya Iyer",
    specialty: "Physiotherapist",
    degree: "BPT, MPT (Orthopedics)",
    regNo: "Reg. UPMC-92415",
    img: doctor3,
    bio: "8+ yrs exp • Post-surgery rehab, spinal therapy & sports recovery",
  },
];

function Doctors() {
  return (
    <section id="doctors" className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-body">/ Doctors</div>
          <h2 className="font-display mt-3 text-5xl uppercase text-brand md:text-6xl">Board-Certified Specialists</h2>
        </div>
        <div className="hidden text-slate-body md:block">Drag or scroll →</div>
      </div>

      <div className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6">
        {doctors.map((d, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6, rotate: -1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-[300px] shrink-0 snap-start overflow-hidden rounded-3xl bg-card shadow-sm md:w-[340px]"
          >
            <div className="relative h-[360px] overflow-hidden bg-muted">
              <img src={d.img} alt={d.name} loading="lazy" className="h-full w-full object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-lime px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand-deep">
                {d.specialty}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-2xl uppercase leading-tight text-brand">{d.name}</h3>
                <span title="Verified Medical Practitioner">
                  <ShieldCheck className="h-4.5 w-4.5 text-brand shrink-0" />
                </span>
              </div>
              <div className="mt-1 text-xs font-bold text-brand-deep/90">{d.degree}</div>
              <div className="mt-0.5 text-[11px] font-medium text-slate-body">{d.regNo}</div>
              <p className="mt-3 text-sm text-slate-body leading-relaxed">{d.bio}</p>
              <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-brand-deep">
                Book Consultation <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* Appointment */
function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("done"), 1200);
  };
  return (
    <section id="appointments" className="bg-ice py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-body">/ Appointments</div>
          <h2 className="font-display mt-3 text-5xl uppercase text-brand md:text-6xl">Book in under 60 seconds</h2>
          <p className="mt-6 max-w-md text-slate-body">
            Pick a department, choose a time, and get an instant confirmation on WhatsApp.
            No queues, no paperwork.
          </p>

          <form onSubmit={submit} className="mt-10 grid grid-cols-1 gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:grid-cols-2 sm:p-8">
            <input required placeholder="Full name" className="col-span-1 rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand sm:col-span-2" />
            <input required placeholder="Phone" className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand" />
            <select className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand">
              <option>General</option><option>Pediatric</option><option>Cardiology</option><option>Physiotherapy</option>
            </select>
            <input type="date" className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand sm:col-span-2" />
            <textarea placeholder="Message (optional)" rows={3} className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand sm:col-span-2" />
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status !== "idle"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-brand-deep disabled:opacity-80 sm:w-auto"
              >
                {status === "idle" && (<>Request appointment <ArrowRight className="h-4 w-4" /></>)}
                {status === "loading" && (<><span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" /> Sending…</>)}
                {status === "done" && (<><Check className="h-4 w-4" /> Confirmed! We'll call you.</>)}
              </button>
            </div>
          </form>
        </div>

        <div className="relative min-h-[500px] overflow-hidden rounded-3xl bg-brand-deep p-10 text-primary-foreground">
          <div className="rotated-wordmark absolute right-4 top-4 text-[80px] font-black text-primary-foreground/8 leading-none">
            Mathura
          </div>
          <div className="relative z-10">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-lime">Trusted locally</div>
            <p className="font-display mt-4 text-4xl uppercase leading-tight md:text-5xl">
              "Saral made healthcare feel human again."
            </p>
            <div className="mt-8 flex items-center gap-3">
              <img src={doctor3} alt="" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <div className="text-sm font-semibold">Meera K.</div>
                <div className="text-xs text-primary-foreground/70">Patient, Mathura</div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-8 bottom-8 grid grid-cols-3 gap-3 text-center">
            {[["15+","Years"],["24/7","Support"],["10k+","Bookings"]].map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-primary-foreground/10 px-3 py-4">
                <div className="font-display text-2xl text-lime">{n}</div>
                <div className="text-[10px] uppercase tracking-widest text-primary-foreground/70">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Testimonials */
const testimonials = [
  { name: "Rahul S.", quote: "Booked a consult in 2 minutes. The doctor was thorough, kind, and I had my prescription on WhatsApp before I left the clinic.", rating: 5 },
  { name: "Anjali G.", quote: "As a young mom, the pediatric home visit was life-changing. Punctual, professional, and gentle with my toddler.", rating: 5 },
  { name: "Vinod P.", quote: "Their diagnostics team called me with results the same day. Best experience I've had at any clinic in Mathura.", rating: 5 },
];

function Testimonials() {
  const [i, setI] = useState(0);
  return (
    <section id="testimonials" className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-body">/ Voices</div>
      <h2 className="font-display mt-3 max-w-3xl text-5xl uppercase text-brand md:text-6xl">
        People trust us with what matters most
      </h2>

      <div className="relative mt-14 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-card p-8 shadow-sm md:p-12"
          >
            <div className="flex items-center gap-1">
              {Array.from({ length: testimonials[i].rating }).map((_, k) => (
                <motion.span
                  key={k}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: k * 0.08 }}
                >
                  <Star className="h-5 w-5 fill-lime text-lime" />
                </motion.span>
              ))}
            </div>
            <p className="font-display mt-6 text-3xl uppercase leading-tight text-brand md:text-4xl">
              "{testimonials[i].quote}"
            </p>
            <div className="mt-8 text-sm font-semibold text-slate-body">— {testimonials[i].name}</div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center gap-3">
        {testimonials.map((_, k) => (
          <button
            key={k}
            onClick={() => setI(k)}
            className={`h-2.5 rounded-full transition-all ${k === i ? "w-8 bg-lime" : "w-2.5 bg-brand/20"}`}
            aria-label={`Testimonial ${k + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

/* CTA */
function CTA() {
  return (
    <section className="relative overflow-hidden bg-brand-deep py-24 text-primary-foreground lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{ backgroundImage: "radial-gradient(var(--lime) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 text-center lg:px-10">
        <h2 className="font-display mx-auto max-w-4xl text-6xl uppercase leading-[0.9] md:text-8xl">
          Ready to feel <span className="text-lime">your best?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-primary-foreground/70">
          Certified doctors, honest advice, and care that actually shows up. It starts with one appointment.
        </p>
        <div className="mt-10 flex justify-center">
          <MagneticButton
            as="a"
            href="#appointments"
            className="group inline-flex items-center gap-3 rounded-full bg-lime px-8 py-4 font-semibold text-brand-deep transition hover:bg-primary-foreground"
          >
            Get Appointment
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

/* Footer */
function Footer() {
  return (
    <footer id="contact" className="bg-ice pt-20">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 pb-12 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm text-slate-body">
            Saral Health Care is Mathura's modern healthcare partner — expert doctors, honest pricing, and care that fits your life.
          </p>
          <form className="mt-8 flex max-w-sm items-center gap-2">
            <input placeholder="Email for updates" className="flex-1 rounded-full border border-border bg-card px-4 py-3 text-sm outline-none focus:border-brand" />
            <button className="rounded-full bg-brand px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-brand-deep">Join</button>
          </form>
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">Explore</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-body">
            <li><a href="#services" className="hover:text-brand">Services</a></li>
            <li><a href="#doctors" className="hover:text-brand">Doctors</a></li>
            <li><a href="#appointments" className="hover:text-brand">Appointments</a></li>
            <li><a href="#testimonials" className="hover:text-brand">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">Reach us</div>
          <ul className="mt-4 space-y-3 text-sm text-slate-body">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-brand" /> Krishna Nagar, Mathura, UP 281001</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand" /> care@saralhealth.in</li>
          </ul>
          <div className="mt-5 flex items-center gap-4 text-brand">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="transition hover:text-lime"><Icon className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-slate-body md:flex-row lg:px-10">
          <div>© {new Date().getFullYear()} Saral Health Care. All rights reserved.</div>
          <div>Made with care in Mathura, India.</div>
        </div>
      </div>
    </footer>
  );
}

/* Root */
function Landing() {
  return (
    <main className="min-h-screen bg-ice text-foreground">
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <ClinicalTrustRibbon />
      <Services />
      <WhyUs />
      <Doctors />
      <AppointmentForm />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}