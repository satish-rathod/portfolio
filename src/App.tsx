import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Mail,
  Github,
  ChevronRight,
  Download,
  Award,
  Code,
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
            <p className="text-2xl text-neutral-400 mb-4">
              Software Engineer | Full-Stack Developer | AI/ML
            </p>

          <div className="flex justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open("https://drive.google.com/file/d/1e75BIylJQGn1eBchP2KS6KZntX1uC9E7/view?usp=sharing");
            }}
            className="flex px-6 py-3 bg-neutral-700 text-neutral-100 rounded-full shadow-lg items-center justify-center" 
          >
            <Download size={20} className="mr-2" />
            Download Resume
          </motion.button>
        </div>
          </motion.div>

          <Section title="About Me">
            <p className="leading-relaxed mb-4">
              Software engineer with experience across full-stack development, AI/ML pipelines, and automation systems.
              Currently a Backend Intern at <a href="https://emergent.sh" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Emergent</a> working on the autonomous coding agent platform, and pursuing dual
              degrees in Computer Science from Scaler School of Technology and BITS Pilani.
            </p>
            <p className="leading-relaxed">
              I build things that work — from voice interfaces and browser extensions to trading platforms and
              edge-cloud AI systems. I care about clean architecture, reliable infrastructure, and shipping fast.
            </p>
          </Section>

          <Section title="Education">
            <div className="space-y-6">
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-100">
                  Scaler School Of Technology
                </h3>
                <p className="text-sm text-neutral-400 mb-2">
                  Bachelor + Masters of Science in Computer Science
                </p>
                <p className="text-sm text-neutral-400 mb-2">
                  July 2023 – July 2027 | CGR: 8.0
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-100">
                  Birla Institute Of Technology And Science (BITS Pilani)
                </h3>
                <p className="text-sm text-neutral-400 mb-2">
                  Bachelor of Science in Computer Science
                </p>
                <p className="text-sm text-neutral-400 mb-2">
                  July 2023 – July 2026 | CGPA: 7.7
                </p>
              </motion.div>
            </div>
          </Section>

          <Section title="Experience">
            <div className="space-y-8">
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-100">
                  Backend Intern | <a href="https://emergent.sh" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Emergent</a>
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  On-site | Mar 2026 – Present
                </p>
                <ul className="text-neutral-400 space-y-2">
                  <li>• Building backend services for Emergent's autonomous coding agent platform, which generates, tests, and deploys production applications from natural-language intent</li>
                  <li>• Working on agent orchestration, sandboxing, and code-execution infrastructure powering the vibe-coding workflow used by 5M+ users across 190+ countries</li>
                </ul>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-100">
                  SWE Intern | <a href="https://www.trackaroo.in/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Trackaroo</a>
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  On-site | Feb 2026 – Mar 2026
                </p>
                <ul className="text-neutral-400 space-y-2">
                  <li>• Building a multi-tenant automotive dealer ERP with Spring Boot, React + TypeScript, and PostgreSQL</li>
                  <li>• Developing automation bots for vehicle registration (Playwright, Celery) and insurance processing (Puppeteer, RabbitMQ, OCR)</li>
                  <li>• Implemented background workers, job queues, and a voice-command interface for hands-free dealer operations</li>
                </ul>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-100">
                  AI-ML Intern | <a href="https://1pharmacy.io/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">1Pharmacy Networks</a>
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  On-site | Nov 2024 – May 2025
                </p>
                <ul className="text-neutral-400 space-y-2">
                  <li>• Built edge-cloud AI pipelines on NVIDIA Jetson with Whisper and Riva for real-time audio transcription and NLP</li>
                  <li>• Deployed Dockerized inference services with REST APIs for real-time monitoring across distributed Jetson devices</li>
                  <li>• Set up Tailscale VPN for secure remote access and firmware management across edge devices</li>
                  <li>• Developed an NLP pipeline with Hugging Face and Pinecone for audio transcription analysis and text search</li>
                </ul>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-100">
                  Full-Stack Intern | Bot9, <a href="https://mydukaan.io" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Dukaan®</a>
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  On-site | Aug 2024 – Oct 2024
                </p>
                <ul className="text-neutral-400 space-y-2">
                  <li>• Back-end development with LLMs; optimized system performance and shipped AI-driven features</li>
                  <li>• Built and integrated conversational AI chatbot flows for merchant-facing products</li>
                </ul>
              </motion.div>
            </div>
          </Section>

          <Section title="Projects">
            <div className="space-y-8">
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-100">
                  <a href="https://github.com/satish-rathod/flow" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    Flow — Voice Interface for Claude Code
                  </a>
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  Python, Textual, WebSocket, Claude Agent SDK | 2025
                </p>
                <p className="text-neutral-400">
                  A hands-free voice interface for Claude Code with real-time speech-to-text, text-to-speech, and a state machine
                  for managing conversation flow. Supports direct SDK mode and a WebSocket bridge for attaching to running CLI sessions.
                  Voice intent parsing handles permission prompts, yes/no answers, and numbered option selection.
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-100">
                  <a href="https://github.com/satish-rathod/Scaler-Companion" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    Scaler Companion
                  </a>
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  FastAPI, React, Whisper, EasyOCR, Ollama, Chrome Extension | 2025
                </p>
                <p className="text-neutral-400">
                  A three-component system for capturing and processing lecture recordings: a Chrome extension intercepts HLS streams
                  from Scaler, a FastAPI backend transcribes audio with Whisper and extracts slides via OCR, and a React dashboard
                  provides a searchable library with LLM-generated notes and PDF export.
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-100">
                  <a href="https://github.com/satish-rathod/simply_invest" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    Simply Invest — AI Trading Platform
                  </a>
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  MERN, OpenAI, OpenBB | 2024
                </p>
                <p className="text-neutral-400">
                  A multi-tenant trading platform with AI-driven sentiment analysis, automated trading bots, backtesting,
                  and real-time portfolio tracking. Uses OpenAI for market insights and OpenBB for financial data.
                </p>
              </motion.div>

            </div>
          </Section>

          <Section title="Technical Skills">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-neutral-100 mb-3">Languages</h4>
                <div className="flex flex-wrap -m-2">
                  <SkillBadge skill="Python" />
                  <SkillBadge skill="Java" />
                  <SkillBadge skill="TypeScript" />
                  <SkillBadge skill="JavaScript" />
                  <SkillBadge skill="SQL" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-100 mb-3">Frameworks</h4>
                <div className="flex flex-wrap -m-2">
                  <SkillBadge skill="React" />
                  <SkillBadge skill="Spring Boot" />
                  <SkillBadge skill="FastAPI" />
                  <SkillBadge skill="Node.js" />
                  <SkillBadge skill="Express.js" />
                  <SkillBadge skill="Tailwind CSS" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-100 mb-3">Databases & Infrastructure</h4>
                <div className="flex flex-wrap -m-2">
                  <SkillBadge skill="PostgreSQL" />
                  <SkillBadge skill="MongoDB" />
                  <SkillBadge skill="Redis" />
                  <SkillBadge skill="Docker" />
                  <SkillBadge skill="Linux" />
                  <SkillBadge skill="Git" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-100 mb-3">AI & Automation</h4>
                <div className="flex flex-wrap -m-2">
                  <SkillBadge skill="OpenAI API" />
                  <SkillBadge skill="Whisper" />
                  <SkillBadge skill="Hugging Face" />
                  <SkillBadge skill="Playwright" />
                  <SkillBadge skill="Puppeteer" />
                  <SkillBadge skill="Celery" />
                  <SkillBadge skill="RabbitMQ" />
                </div>
              </div>
            </div>
          </Section>

          <Section title="Competitive Programming">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-800 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Award className="text-yellow-400 mr-2" size={20} />
                    <h4 className="font-semibold text-neutral-100">Codeforces</h4>
                  </div>
                  <p className="text-neutral-400">Max Rating: 1375</p>
                  <a href="https://codeforces.com/profile/Satish_Rathod_" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">View Profile</a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-800 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Award className="text-yellow-400 mr-2" size={20} />
                    <h4 className="font-semibold text-neutral-100">CodeChef</h4>
                  </div>
                  <p className="text-neutral-400">Max Rating: 1703</p>
                  <a href="https://www.codechef.com/users/satrat_ov" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">View Profile</a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-800 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Award className="text-yellow-400 mr-2" size={20} />
                    <h4 className="font-semibold text-neutral-100">AtCoder</h4>
                  </div>
                  <p className="text-neutral-400">Max Rating: 529</p>
                  <a href="https://atcoder.jp/users/Satish_" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">View Profile</a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-800 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Code className="text-green-400 mr-2" size={20} />
                    <h4 className="font-semibold text-neutral-100">LeetCode</h4>
                  </div>
                  <p className="text-neutral-400">Max Rating: 1643</p>
                  <p className="text-neutral-400">290+ Problems Solved</p>
                  <a href="https://leetcode.com/u/satrat_05/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">View Profile</a>
                </motion.div>
              </div>
            </div>
          </Section>

          <Section title="Relevant Coursework">
            <div className="flex flex-wrap -m-2">
              <SkillBadge skill="Machine Learning" />
              <SkillBadge skill="Natural Language Processing" />
              <SkillBadge skill="Computer Vision" />
              <SkillBadge skill="AI Engineering" />
              <SkillBadge skill="Data Engineering" />
              <SkillBadge skill="HLD" />
              <SkillBadge skill="LLD" />
              <SkillBadge skill="Data Structures" />
              <SkillBadge skill="OOP" />
              <SkillBadge skill="DevOps" />
              <SkillBadge skill="Web Development" />
              <SkillBadge skill="Shell Scripting" />
              <SkillBadge skill="Linear Algebra" />
              <SkillBadge skill="Discrete Mathematics" />
              <SkillBadge skill="Probability and Statistics" />
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
              href="https://www.linkedin.com/in/satish-rathod-2a583127a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-300 transition-colors cursor-pointer"
            >
              <Linkedin size={28} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <footer className="py-8 text-center text-neutral-500">
        <p>© {new Date().getFullYear()} Satish Rathod</p>
      </footer>
    </div>
  );
};

export default App;
