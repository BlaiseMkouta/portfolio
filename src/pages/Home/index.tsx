import React from "react";
import Image from "next/image";
import { ArrowUpRight, Facebook, Instagram, X } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 },
    },
  };
  return (
    <main className=" bg-black  text-white font-sans overflow-hidden">
      <section
        className="h-screen border-b border-white/10 relative"
        id="acceuil"
      >
        <div id="container" className="h-screen">
          <div className="relative h-full">
            {/* Vidéo */}
            <video
              src="assets/video/video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[50vh] object-cover"
            />

            {/* Lueur dynamique derrière */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse-light"></div>

            <div className="h-1/2"></div>
          </div>

          {/* Contenu principal */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center">
            <div className="flex items-center  gap-2 justify-center mb-4">
              <div className="relative w-4 h-4 flex items-center justify-center">
                {/* Le cercle "sonar" */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-text opacity-75 animate-ping"></span>

                {/* Le petit cercle fixe au centre */}
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-text"></span>
              </div>
              <p className="opacity-70 ">Disponible pour travailler</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 lg:text-6xl">
              <span>MKOUTA</span> <span className="opacity-70">Blaise</span>
            </h1>
            <h2 className="opacity-70">Développeur Fullstack Web et mobile</h2>

            <a
              href="https://wa.me/693293415"
              className="mt-6 inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-[#2d2d2d] to-[#141414] text-white font-semibold border-2 border-transparent hover:border-white/50 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 transition transform duration-300 ease-in-out relative overflow-hidden"
            >
              <ArrowUpRight size={18} />
              <span className="relative z-10">Contactez-moi</span>

              {/* Lueur derrière le texte */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-xl animate-pulse-light"></div>
            </a>

            {/* Flèche vers le bas */}
            <div
              className="mt-10 animate-bounce cursor-pointer"
              onClick={() => {
                const nextSection = document.getElementById("about");
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/10">
        <div className="max-w-4xl mx-auto p-6 ">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="flex flex-col items-center md:w-1/3">
              <h1 className="text-xl font-semibold text-white/70 mb-4">
                Qui est MKOUTA Blaise?
              </h1>
              <div>
                <img src="assets/me.jpg" alt="" className="rounded-xl" />
              </div>
            </div>

            {/* Left side - Content */}
            <div className="md:w-2/3">
              <p className="text-white/70 mb-4">
                Je suis un développeur web et mobile passionné, spécialisé dans
                la création d'applications modernes et réactives. Mon expertise
                couvre une large gamme de technologies, me permettant de
                concevoir des solutions sur mesure pour répondre aux besoins
                spécifiques de mes clients.
              </p>

              <div className="space-y-4 text-white/70">
                <p>
                  Formé aux meilleures pratiques du developpement, Blaise
                  apporte son énergie, sa créativité et son souci du détail. Son
                  approche innovante et son envie constante d'apprendre font de
                  lui un atout précieux pour les startups, les petites
                  entreprises et les projets en pleine croissance.
                </p>
              </div>
            </div>

            {/* Right side - Image placeholder (exact same gray as screenshot) */}
          </div>
        </div>
      </section>

      <section className="relative" id="competences">
        <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col items-center">
          <h1 className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 mb-8 mx-auto relative">
            <span className="relative z-10 text-white opacity-70">
              Compétences
            </span>
            {/* Ombre dynamique animée avec des couleurs et une lumière subtiles */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-400 to-red-600 opacity-30 blur-3xl animate-pulse w-96 h-96"></div>
            {/* Lueur supplémentaire */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-25 blur-xl animate-ping w-24 h-24"></div>
          </h1>

          <div className="bg-[#141414] px-8 py-8 rounded-lg shadow-md flex flex-wrap gap-4">
            <p className="px-4 py-2 bg-black rounded-md whitespace-nowrap">
              Développement mobile
            </p>
            <p className="px-4 py-2 bg-black rounded-md whitespace-nowrap">
              Développement mobile
            </p>
            <p className="px-4 py-2 bg-black rounded-md whitespace-nowrap">
              Développement mobile
            </p>
            <p className="px-4 py-2 bg-black rounded-md whitespace-nowrap">
              Conception UX
            </p>
            <p className="px-4 py-2 bg-black rounded-md whitespace-nowrap">
              Conception de l’interface utilisateur
            </p>
            <p className="px-4 py-2 bg-black rounded-md whitespace-nowrap">
              Graphic Design
            </p>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full h-64 bg-white blur-2xl opacity-20"></div>
      </section>

      <section className="relative mt-20">
        <div className="max-w-6xl mx-auto p-6 flex flex-col items-center">
          <h1 className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 mb-8 mx-auto relative">
            <span className="relative z-10 text-white opacity-70">
              Technologies et langages
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-400 to-red-600 opacity-30 blur-3xl animate-pulse w-96 h-96"></div>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            {/* Frontend */}
            <motion.div
              className="relative bg-white/5 backdrop-blur-md rounded-lg p-6 shadow-md"
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl text-white/70 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-6">
                <TechIcon img="assets/images/html.svg" label="HTML5" />
                <TechIcon img="assets/images/css3.svg" label="CSS3" />
                <TechIcon
                  img="assets/images/react.svg"
                  label="React & React Native"
                />
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              className="relative bg-white/5 backdrop-blur-md rounded-lg p-6 shadow-md"
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl text-white/70 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-6">
                <TechIcon img="assets/images/nodejs.svg" label="Node.js" />
                <TechIcon img="assets/images/express.svg" label="Express" />
                <TechIcon img="assets/images/nestjs.svg" label="NestJS" />
              </div>
            </motion.div>

            {/* Bases de données et Communication */}
            <motion.div
              className="relative bg-white/5 backdrop-blur-md rounded-lg p-6 shadow-md"
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl text-white/70 mb-4">
                Bases de données et Communication
              </h3>
              <div className="flex flex-wrap gap-6">
                <TechIcon img="assets/images/mysql.svg" label="MySQL" />
                <TechIcon img="assets/images/mongodb.svg" label="MongoDB" />
                <TechIcon img="assets/images/socket.svg" label="Socket.io" />
              </div>
            </motion.div>

            {/* UI/UX Design */}
            <motion.div
              className="relative bg-white/5 backdrop-blur-md rounded-lg p-6 shadow-md"
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl text-white/70 mb-4">UI/UX Design</h3>
              <div className="flex flex-wrap gap-6">
                <TechIcon img="assets/images/figma.svg" label="Figma" />
                <TechIcon img="assets/images/xd.svg" label="Adobe XD" />
                <TechIcon
                  img="assets/images/photoshop.svg"
                  label="Adobe Photoshop"
                />
                <TechIcon
                  img="assets/images/illustrator.svg"
                  label="Adobe Illustrator"
                />
              </div>
            </motion.div>

            {/* Langages */}
            <motion.div
              className="relative bg-white/5 backdrop-blur-md rounded-lg p-6 shadow-md"
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl text-white/70 mb-4">Langages</h3>
              <div className="flex flex-wrap gap-6">
                <TechIcon img="assets/images/js.svg" label="JavaScript" />
                <TechIcon img="assets/images/ts.svg" label="TypeScript" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Glow effect en bas */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-72 h-24 bg-white blur-2xl opacity-20"></div>
      </section>

      <section className="relative mt-24" id="projets">
        <div className="max-w-6xl mx-auto p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white/80 mb-10">
            Mes Projets
          </h2>

          <div className="relative bg-white/5 backdrop-blur-md rounded-lg p-8 shadow-md w-full">
            <h3 className="text-xl text-white/70 mb-4">Ekose RX</h3>

            <p className="text-white/60 leading-relaxed mb-6">
              Ekose RX est une plateforme de consultation médicale en ligne que
              j'ai contribué à développer. L'application connecte patients et
              médecins en temps réel grâce à des fonctionnalités avancées :
              prise de rendez-vous, appels vidéo via WebRTC et gestion des
              statuts en ligne/offline.
            </p>

            <p className="text-white/60 leading-relaxed mb-6">
              J'ai travaillé sur le design, la partie mobile en React Native,
              web en React et l'architecture backend (Node.js, TypeScript,
              Socket.io et express). Mon rôle comprenait aussi l'intégration
              d'une expérience utilisateur fluide et d'une interface moderne
              pour améliorer la navigation et l’accessibilité.
            </p>

            <p className="text-white/60 leading-relaxed">
              Ce projet m'a permis de renforcer mes compétences en développement
              d'applications temps réel et en conception d'interfaces mobiles
              intuitives.
            </p>

            {/* Si tu as une image ou maquette d'Ekose RX */}
            <img
              src="assets/images/ekose.jpg"
              alt="Ekose RX App"
              className="rounded-lg mt-6"
            />

            {/* Glow behind */}
            <div className="absolute inset-0 rounded-lg bg-white opacity-10 blur-2xl"></div>
          </div>
        </div>

        {/* Glow effect en bas de la section */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-72 h-24 bg-white blur-2xl opacity-20"></div>
      </section>

      <section id="contact">
        <div className="max-w-4xl mx-auto p-6 flex flex-col items-center text-center py-12">
          <h2 className="text-md font-semibold text-white/70 mb-10 text-center">
            Contactez-moi
          </h2>
          <p className="opacity-70 ">
            Vous avez une question, un projet en tête, ou simplement envie de
            discuter ? N'hésitez pas à me contacter ! Je serais ravi d'échanger
            avec vous et de voir comment nous pourrions collaborer ensemble.
          </p>
          <a
            href="https://wa.me/693293415"
            className="mt-6 inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-[#2d2d2d] to-[#141414] text-white font-semibold border-2 border-transparent hover:border-white/50 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 transition transform duration-300 ease-in-out relative overflow-hidden"
          >
            <ArrowUpRight size={18} />
            <span className="relative z-10">Contactez-moi</span>

            {/* Lueur derrière le texte */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-xl animate-pulse-light"></div>
          </a>
          <p className="mt-4">blaiselele221@gmail.com</p>
          <p className="">+237 693 29 34 15</p>
        </div>
      </section>
    </main>
  );
};

export default Home;

interface TechIconProps {
  img: string;
  label: string;
}

function TechIcon({ img, label }: TechIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center"
    >
      <img src={img} alt={label} className="w-12 h-12 mb-2" />
      <span className="text-white/80 text-sm">{label}</span>
    </motion.div>
  );
}
