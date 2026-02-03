"use client";

import React, { useEffect, useState, type ComponentType } from "react";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

import {
  Github,
  Linkedin,
  Mail,
  Code,
  Briefcase,
  User,
  ExternalLink,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

/* ================= TYPES ================= */
type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // ✅ sekarang aman
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

type SectionTitleProps = {
  icon: ComponentType<{ size?: number }>;
  title: string;
  center?: boolean;
};

/* ================= DATA ================= */
const projects: Project[] = [
  {
    title: "E-Commerce Snookyt",
    description:
      "Platform e-commerce modern dengan fitur lengkap menggunakan Laravel dan Reactjs dengan memakai Mysql",
    tech: ["Reactjs", "javascript", "MySQL", "Tailwind CSS", "Laravel"],
    link: "#",
    image: "/projects/snookyt.png",
  },
  {
    title: "Inventori barang",
    description:
      "Aplikasi manajemen barang yang bisa mencatat setiap barang masuk dan keluar yang nanti laporannya bisa di export menjadi pdf",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    link: "#",
    image: "/projects/inven.png",
  },
  {
    title: "Company Profile dengan CMS",
    description:
      "Sebuah Website Company Profile dengan CMS menggunakan Nextjs dimana semua asset gambar dan konten di atur dari dashboard admin",
    tech: ["Nextjs", "TypeScript", "prisma", "Tailwind CSS", "MySQL"],
    link: "#",
    image: "/projects/deposit.png",
  },
];

const skills: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Laravel",
  "MySQL",
  "Tailwind CSS",
  "php",
];

/* ================= PAGE ================= */
export default function PortfolioPage() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div
      className={`min-h-screen transition-colors ${
        dark ? "bg-[#0b1220] text-white" : "bg-white text-[#001f3f]"
      }`}
    >
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 z-50 w-full backdrop-blur border-b ${
          dark
            ? "bg-[#0b1220]/90 border-white/10"
            : "bg-white/90 border-black/10"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portopolio</h1>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setDark(!dark)}
              className="text-sm opacity-80 hover:opacity-100"
            >
              {dark ? "☀️ " : "🌙 "}
            </button>

            {["home", "about", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="capitalize hover:text-[#003d7a] transition"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>

        {open && (
          <div
            className={`md:hidden px-6 pb-6 pt-2 space-y-3 ${
              dark ? "bg-[#0b1220]" : "bg-white"
            }`}
          >
            {["home", "about", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block py-2 text-lg"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-32 pb-24 px-6"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              Sansan Syahrul
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-[#003d7a] mb-6">
              Full Stack Developer
            </p>
            <p className="max-w-2xl opacity-80 mb-10 mx-auto md:mx-0">
              Halo, saya Sansan Seorang Software Developer yang fokus membangun
              aplikasi web modern dengan kode yang rapi dan terstruktur.
            </p>
            <p className="max-w-2xl opacity-80 mb-10 mx-auto md:mx-0">
              Saya terbiasa mengerjakan pengembangan backend, API, dan dashboard
              admin menggunakan teknologi web terkini.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="bg-[#001f3f] text-white px-8 py-3 rounded-lg hover:bg-[#003d7a] transition"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="border-2 border-[#001f3f] px-8 py-3 rounded-lg hover:bg-[#001f3f] hover:text-white transition"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/fotosaya.jpg"
              alt="Sansan Syahrul"
              width={500}
              height={500}
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full shadow-lg object-cover"
              priority
            />
          </div>
        </div>
      </motion.section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20 px-6 bg-gray-50 text-black">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* IMAGE */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <Image
              src="/fotosaya.jpg"
              alt="About Me"
              width={500}
              height={350}
              className="w-full max-w-sm md:max-w-md rounded-xl shadow-md object-cover"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div variants={fadeUp}>
            <SectionTitle icon={User} title="About Me" />

            <motion.p variants={fadeUp} className="mb-4">
              Saya adalah seorang software developer yang memiliki ketertarikan
              dalam membangun solusi digital menggunakan teknologi web modern.
              Saya berpengalaman dalam pengembangan backend, pembuatan REST API,
              serta dashboard admin yang mengutamakan performa dan struktur kode
              yang rapi.
            </motion.p>

            <motion.p variants={fadeUp} className="mb-6">
              Saya menikmati proses memecahkan masalah dan menyusun logika
              sistem yang efisien. Tujuan saya adalah menciptakan aplikasi yang
              tidak hanya kuat secara teknis, tetapi juga mudah digunakan dan
              siap dikembangkan ke tahap selanjutnya.
            </motion.p>

            <motion.h4 variants={fadeUp} className="text-2xl font-bold mb-4">
              Skills
            </motion.h4>

            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05 }}
                  className="border px-4 py-2 rounded-lg hover:bg-[#001f3f] hover:text-white transition"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= PROJECTS ================= */}
      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon={Briefcase} title="Projects" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="border rounded-xl overflow-hidden hover:shadow-xl bg-white"
              >
                <div className="relative w-full h-48 sm:h-56 bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <Code />
                    <ExternalLink />
                  </div>

                  <h4 className="font-bold text-xl mb-2">{project.title}</h4>

                  <p className="opacity-80 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 text-black px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="py-20 px-6 bg-gray-50 text-center text-black"
      >
        <SectionTitle icon={Mail} title="Get In Touch" center />
        <p className="max-w-xl mx-auto mb-8 opacity-80">
          Tertarik kolaborasi atau punya project?
        </p>

        <a
          href="https://api.whatsapp.com/send?phone=6285156031419"
          className="inline-flex items-center gap-2 bg-[#001f3f] text-white px-6 py-3 rounded-lg hover:bg-[#003d7a] transition"
        >
          <FaWhatsapp size={20} /> Hubungi Saya
        </a>

        <div className="flex justify-center gap-6 mt-8">
          <Github size={28} />
          <Linkedin size={28} />
        </div>
      </section>

      <footer className="py-6 text-center border-t opacity-70">
        © 2024 Sansan Syahrul
      </footer>
    </div>
  );
}

/* ================= COMPONENT ================= */
function SectionTitle({
  icon: Icon,
  title,
  center = false,
}: SectionTitleProps) {
  return (
    <div
      className={`flex items-center gap-3 mb-12 ${
        center ? "justify-center" : ""
      }`}
    >
      <Icon size={32} />
      <h3 className="text-4xl font-bold">{title}</h3>
    </div>
  );
}
