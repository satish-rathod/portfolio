import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Mail,
  Github,
  ChevronRight,
  Twitter,
  Download,
} from "lucide-react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 bg-neutral-800 rounded-xl overflow-hidden shadow-lg"
    >
      <motion.button
        className="w-full text-left flex items-center justify-between py-4 px-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-mono text-neutral-100 font-semibold">
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className="text-neutral-100" />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 bg-neutral-900 text-neutral-300">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => (
  <motion.span
    whileHover={{ scale: 1.1 }}
    className="inline-block px-4 py-1.5 m-2 font-mono text-sm bg-neutral-700 text-neutral-100 rounded-full shadow-md"
  >
    {skill}
  </motion.span>
);

const App: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto no-scrollbar bg-neutral-900 text-neutral-300 font-mono">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto" id="content">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <motion.div
              className=" w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <img
                src="/me.gif"
                alt="Satish Rathod"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <h1 className="text-5xl font-bold mb-4 text-neutral-100">
              Satish Rathod
            </h1>
            <p className="text-2xl text-neutral-400">
              Full-Stack Developer | AI & System Design Enthusiast
            </p>
          </motion.div>

          <Section title="About Me">
            <p className="leading-relaxed">
              I am a passionate full-stack developer with a focus on AI, system
              design, and MERN stack technologies. Currently pursuing dual degrees 
              and working on cutting-edge projects.
            </p>
          </Section>

          <Section title="Experience">
            <div className="space-y-8">
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-100">
                  Bot9
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  Full-Stack Intern | Aug. 2024 – Present
                </p>
                <p className="text-neutral-400">
                  Focused on back-end development, working with LLMs and
                  optimizing system performance with AI-driven features.
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-100">
                  Scaler School of Technology
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  Project Intern | Mar. 2024 – May 2024
                </p>
                <p className="text-neutral-400">
                  Developed a local streaming server using Mediasoup to enhance
                  classroom experiences.
                </p>
              </motion.div>
            </div>
          </Section>

          <Section title="Projects">
            <div className="space-y-8">
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-100">
                  Simply Invest
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  Full-stack AI Trading Bot | July 2024
                </p>
                <p className="text-neutral-400">
                  Built a trading bot using OpenAI APIs to help users make
                  smart decisions through sentiment analysis.
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-100">
                  AI Receptionist
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  Hotel Booking Chatbot | July 2024
                </p>
                <p className="text-neutral-400">
                  Developed an AI-powered receptionist for hotel bookings using
                  OpenAI and natural language processing.
                </p>
              </motion.div>
            </div>
          </Section>

          <Section title="Skills">
            <div className="flex flex-wrap -m-2">
              <SkillBadge skill="React" />
              <SkillBadge skill="Node.js" />
              <SkillBadge skill="Express.js" />
              <SkillBadge skill="MongoDB" />
              <SkillBadge skill="MySQL" />
              <SkillBadge skill="Docker" />
              <SkillBadge skill="Git" />
              <SkillBadge skill="Tailwind CSS" />
              <SkillBadge skill="Python" />
              <SkillBadge skill="JavaScript" />
              <SkillBadge skill="Java" />
              <SkillBadge skill="Kotlin" />
              <SkillBadge skill="Linux" />
            </div>
          </Section>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center space-x-8 mb-8">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="mailto:satish.rathod.ov@gmail.com"
              className="text-neutral-400 hover:text-neutral-300 transition-colors"
            >
              <Mail size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://github.com/satish-rathod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-300 transition-colors cursor-pointer"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://www.linkedin.com/in/satish-rathod-2a583127ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-300 transition-colors cursor-pointer"
            >
              <Linkedin size={28} />
            </motion.a>
          </div>
        </motion.div>

        <div className="hidden justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open("/satish-rathod-resume.pdf");
            }}
            className="flex px-6 py-3 bg-neutral-700 text-neutral-100 rounded-full shadow-lg items-center justify-center"
          >
            <Download size={20} className="mr-2" />
            Download Resume
          </motion.button>
        </div>
      </div>

      <footer className="py-8 text-center text-neutral-500">
        <p>© {new Date().getFullYear()} Satish Rathod</p>
      </footer>
    </div>
  );
};

export default App;
