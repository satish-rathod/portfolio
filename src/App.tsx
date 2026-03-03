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
              AI/ML Engineer | Full-Stack Developer | Edge Computing Enthusiast
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
              I am an AI/ML Engineer and Full-Stack Developer with extensive experience in edge computing, 
              natural language processing, and system design. Currently pursuing dual degrees in Computer Science 
              from Scaler School of Technology and BITS Pilani, I specialize in building scalable AI pipelines 
              and developing innovative solutions using cutting-edge technologies.
            </p>
            <p className="leading-relaxed">
              My expertise spans from deploying AI models on edge devices like NVIDIA Jetson to building 
              full-stack web applications with modern frameworks. I'm passionate about leveraging AI to solve 
              real-world problems and optimizing system performance for production environments.
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
                  July 2023 – July 2027 | CGR: 8.1
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
                  July 2023 – July 2026 | CGPA: 8.9
                </p>
              </motion.div>
            </div>
          </Section>

          <Section title="Experience">
            <div className="space-y-8">
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-100">
                  AI-ML Intern | 1Pharmacy Networks
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  On-site | Nov 2024 – May 2025
                </p>
                <ul className="text-neutral-400 space-y-2">
                  <li>• Designed and implemented an AI/ML pipeline with motion-triggered alerts and cloud-edge sync using NVIDIA Jetson and cloud services</li>
                  <li>• Built an audio processing system with Whisper (OpenAI) and NVIDIA Riva on Jetson; optimized pipelines for transcription and NLP</li>
                  <li>• Deployed RESTful AI services with Docker; managed infrastructure for real-time monitoring and inference on Jetson devices</li>
                  <li>• Configured a local VPN with Tailscale for secure remote access and device management</li>
                  <li>• Worked on an NLP pipeline with Hugging Face and Pinecone for advanced audio transcription processing</li>
                  <li>• Contributed to system design, model experiments, and deployment as part of a cross-functional team</li>
                </ul>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-100">
                  Full-Stack Intern | Bot9, Dukaan®
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  On-site | Aug 2024 – Oct 2024
                </p>
                <ul className="text-neutral-400 space-y-2">
                  <li>• Back-end web development with large language models (LLMs)</li>
                  <li>• Optimized system performance and implemented AI-driven features with the team</li>
                </ul>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-100">
                  Project Intern | Scaler
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  Remote | Mar 2024 – May 2024
                </p>
                <ul className="text-neutral-400 space-y-2">
                  <li>• Developed a local streaming server with Mediasoup for video/audio streams across multiple devices</li>
                  <li>• Improved classroom learning by reducing bandwidth use and minimizing lag</li>
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
                <h4 className="text-lg font-semibold text-neutral-100 mb-3">Programming Languages</h4>
                <div className="flex flex-wrap -m-2">
                  <SkillBadge skill="Python" />
                  <SkillBadge skill="TypeScript" />
                  <SkillBadge skill="Java" />
                  <SkillBadge skill="C++" />
                  <SkillBadge skill="JavaScript" />
                  <SkillBadge skill="HTML/CSS" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-100 mb-3">AI/ML & Data Science</h4>
                <div className="flex flex-wrap -m-2">
                  <SkillBadge skill="PyTorch" />
                  <SkillBadge skill="CUDA" />
                  <SkillBadge skill="Whisper" />
                  <SkillBadge skill="Hugging Face" />
                  <SkillBadge skill="NVIDIA Riva" />
                  <SkillBadge skill="Scikit-learn" />
                  <SkillBadge skill="OpenAI API" />
                  <SkillBadge skill="Pinecone" />
                  <SkillBadge skill="Pandas" />
                  <SkillBadge skill="NumPy" />
                  <SkillBadge skill="Seaborn" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-100 mb-3">Frameworks & Tools</h4>
                <div className="flex flex-wrap -m-2">
                  <SkillBadge skill="Docker" />
                  <SkillBadge skill="REST APIs" />
                  <SkillBadge skill="WebSocket" />
                  <SkillBadge skill="Linux" />
                  <SkillBadge skill="Git" />
                  <SkillBadge skill="React" />
                  <SkillBadge skill="FastAPI" />
                  <SkillBadge skill="Express.js" />
                  <SkillBadge skill="Node.js" />
                  <SkillBadge skill="MongoDB" />
                  <SkillBadge skill="MySQL" />
                  <SkillBadge skill="Tailwind CSS" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-100 mb-3">Developer Tools</h4>
                <div className="flex flex-wrap -m-2">
                  <SkillBadge skill="VS Code" />
                  <SkillBadge skill="JetBrains IDE" />
                  <SkillBadge skill="Figma" />
                  <SkillBadge skill="GitHub" />
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
              <SkillBadge skill="Data Structures" />
              <SkillBadge skill="Shell Scripting" />
              <SkillBadge skill="Web Development" />
              <SkillBadge skill="Linear Algebra" />
              <SkillBadge skill="Discrete Mathematics" />
              <SkillBadge skill="Object-Oriented Programming" />
              <SkillBadge skill="Probability and Statistics" />
              <SkillBadge skill="Business Problem Solving" />
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
