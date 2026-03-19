import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Car,
  Briefcase,
  Home,
  ChevronDown,
} from "lucide-react";
import logo from "/logo.png";

/* ─── Types ────────────────────────────────────────────────────────────── */
interface Division {
  name: string;
  description: string;
  image: string;
  path: string;
  icon: React.ElementType;
  gradient: string;
  accent: string;
  glowColor: string;
}

/* ─── DivisionCard sub-component (owns its own imgLoaded state) ─────────── */
const DivisionCard = ({
  division,
  itemVariants,
}: {
  division: Division;
  itemVariants: Variants;
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const IconComponent = division.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group h-full"
    >
      <Link to={division.path} className="block h-full">
        <div
          className="bg-white rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300"
          style={{
            boxShadow:
              "0 4px 24px 0 rgba(0,0,0,0.07), 0 1px 4px 0 rgba(0,0,0,0.04)",
          }}
          onMouseEnter={(e) => {
            (
              e.currentTarget as HTMLDivElement
            ).style.boxShadow = `0 20px 60px 0 ${division.glowColor}, 0 4px 16px 0 rgba(0,0,0,0.08)`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              "0 4px 24px 0 rgba(0,0,0,0.07), 0 1px 4px 0 rgba(0,0,0,0.04)";
          }}
        >
          {/* Image area */}
          <div
            className={`relative h-56 overflow-hidden bg-gradient-to-br ${division.gradient}`}
          >
            <img
              src={division.image}
              alt={division.name}
              onLoad={() => setImgLoaded(true)}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                imgLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            />
            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${division.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
            />
            {/* Icon badge */}
            <div
              className={`absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-gradient-to-br ${division.gradient} flex items-center justify-center shadow-lg`}
            >
              <IconComponent className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="p-7 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {division.name}
            </h3>
            <p className="text-gray-500 leading-relaxed flex-grow text-sm">
              {division.description}
            </p>

            {/* CTA link */}
            <div
              className="flex items-center gap-1.5 font-semibold text-sm mt-5 transition-all duration-200"
              style={{ color: division.accent }}
            >
              <span>Explore Division</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </div>
          </div>

          {/* Bottom accent bar */}
          <div
            className={`h-1 bg-gradient-to-r ${division.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          />
        </div>
      </Link>
    </motion.div>
  );
};

/* ─── Homepage ─────────────────────────────────────────────────────────── */
const Homepage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const divisions: Division[] = [
    {
      name: "Olive Automobile",
      description:
        "Premium automotive sales, parts, and comprehensive service solutions for discerning customers.",
      image: "/assets/car.webp",
      path: "/automobile",
      icon: Car,
      gradient: "from-blue-600 to-blue-800",
      accent: "#3b82f6",
      glowColor: "rgba(59,130,246,0.35)",
    },
    {
      name: "Olive Marketing",
      description:
        "Industrial machinery, precision tools, and commercial cookware for professional excellence.",
      image: "/assets/tray.webp",
      path: "/marketing",
      icon: Briefcase,
      gradient: "from-emerald-600 to-emerald-800",
      accent: "#10b981",
      glowColor: "rgba(16,185,129,0.35)",
    },
    {
      name: "Olive Home",
      description:
        "Curated homeware, luxury furniture, and lifestyle solutions for sophisticated living.",
      image: "/assets/coffeeset.webp",
      path: "/homes",
      icon: Home,
      gradient: "from-amber-500 to-amber-700",
      accent: "#f59e0b",
      glowColor: "rgba(245,158,11,0.35)",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Parallax background */}
        <motion.div
          style={{
            y: bgY,
            backgroundImage: "url(/assets/bg.jpeg)",
            willChange: "transform",
          }}
          className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat"
        />

        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#e45d38]/20 via-transparent to-[#e45d38]/10" />

        {/* Decorative radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(228,93,56,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 text-center max-w-5xl mx-auto px-6"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight"
          >
            Welcome to the{" "}
            <br className="hidden md:block" />
            House of{" "}
            <span className="relative inline-block">
              <img
                src={logo}
                alt="Olive"
                className="inline-block h-14 md:h-20 object-contain brightness-0 invert"
                style={{ verticalAlign: "middle" }}
              />
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-lg md:text-xl text-white/75 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            A premier conglomerate delivering excellence across automotive,
            marketing, and home solutions with an unwavering commitment to
            quality and innovation.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/about"
              className="group relative overflow-hidden bg-[#e45d38] hover:bg-[#c54a2c] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center shadow-lg shadow-[#e45d38]/30 hover:shadow-[#e45d38]/50 hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#e45d38] to-[#ff7f5c] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/40 hover:border-white bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 z-20"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── BUSINESS DIVISIONS ───────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "#f8f7f5" }}
      >
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, #d0ccc8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#e45d38] font-semibold tracking-widest text-sm uppercase mb-3">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
              Our Business Divisions
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Three distinct divisions, one shared commitment to excellence.
              Explore our specialized business sectors designed to meet diverse
              market needs.
            </p>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {divisions.map((division) => (
              <DivisionCard
                key={division.name}
                division={division}
                itemVariants={itemVariants}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES (kept commented-out as per original) ── */}
      {/* <section className="py-20 bg-white">
        ...
      </section> */}

      {/* ── CTA SECTION ──────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #c44228 0%, #e45d38 45%, #f07850 100%)",
          }}
        />

        {/* Radial blobs for depth */}
        <div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "#fff" }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: "#ff9f80" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-3xl"
          style={{ background: "#fff" }}
        />

        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-white/20 border border-white/30 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Let&apos;s Work Together
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Ready to Experience
              <br />
              Excellence?
            </h2>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Connect with us to discover how our diverse business divisions can
              serve your unique needs with unmatched quality and service.
            </p>
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 bg-white text-[#e45d38] hover:bg-gray-50 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-white/30 hover:-translate-y-1"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Homepage;
