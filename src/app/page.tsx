'use client';

import Image from "next/image";
import NavButton from "./components/NavButton";
import ContactForm from "./components/ContactForm";

interface Technology {
  name: string;
  icon: string;
}

interface Project {
  name: string;
  description: string;
  period: string;
  icon: string;
  technologies: Technology[];
  highlights: string[];
  appStoreLink?: string;
}

const experiences = [
  {
    company: "Weevva",
    roles: [
      {
        title: "Development Lead",
        period: "April 2024 - Present",
        description: "Leading the development team in building and maintaining the mobile application. Implementing key features and optimizations while collaborating with cross-functional teams."
      },
      {
        title: "Mobile Application Developer",
        period: "June 2023 - April 2024",
        description: "Developed and maintained the mobile application using React Native. Implemented new features and optimizations to enhance user experience."
      }
    ],
    appStoreIcon: "/icons/weevva-appstore.png",
    screenshots: [
      "/screenshots/weevva-screenshot1.png",
      "/screenshots/weevva-screenshot2.png",
      "/screenshots/weevva-screenshot3.png"
    ],
    technologies: [
      { name: "React Native", icon: "react" },
      { name: "Expo", icon: "expo" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" }
    ]
  }
];

const projects: Project[] = [
  {
    name: "MedAlert",
    description: "A medication management app that helps users search for medication information and stay on track with their prescriptions through smart reminders and scheduling features.",
    period: "2024",
    icon: "/icons/medalert.png",
    technologies: [
      { name: "SwiftUI", icon: "swiftui" },
      { name: "Swift", icon: "swift" },
      { name: "Core Data", icon: "apple" }
    ],
    highlights: [
      "Comprehensive medication information database",
      "Smart pill scheduling and reminder system",
      "User-friendly medication search interface"
    ],
    appStoreLink: "https://apps.apple.com/app/medalert"
  },
  {
    name: "Rewind",
    description: "A daily reflection app that helps users find meaning in their day by providing a personalized recap of their photos, physical activity, locations visited, and daily mood tracking.",
    period: "2023",
    icon: "/icons/rewind.png",
    technologies: [
      { name: "SwiftUI", icon: "swiftui" },
      { name: "Swift", icon: "swift" },
      { name: "Core Data", icon: "apple" }
    ],
    highlights: [
      "Photo memory compilation and organization",
      "Activity and location tracking integration",
      "Daily mood and reflection journaling"
    ],
    appStoreLink: "https://apps.apple.com/app/rewind"
  }
];

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white text-neutral-900 px-4 pb-32">
      {/* Hero Section */}
      <section id="hero" className="w-full max-w-7xl py-32 relative">
        <div className="flex flex-col md:flex-row items-start gap-20">
          <div className="flex-shrink-0 w-full md:w-auto flex flex-col items-center group">
            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-all duration-500">
              <Image
                src="/evanbest.jpeg"
                alt="Evan Best"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="mt-8 text-center">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                Evan Best
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 mt-3 font-medium">
                Mobile App Developer
              </p>
            </div>
          </div>
          <div className="flex-grow text-left pt-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-neutral-900/20 via-neutral-900/40 to-neutral-900/20 rounded-full animate-pulse" />
              <p className="text-2xl md:text-3xl text-neutral-600 font-semibold mb-4">Building apps that make a difference</p>
              <p className="text-xl md:text-2xl text-neutral-700 mb-12 max-w-2xl pl-6 leading-relaxed">
                Hi! I'm Evan, an app developer passionate about crafting delightful, high-performance experiences for Apple platforms. I love blending design and technology to solve real problems.
              </p>
            </div>
            <div className="flex gap-4 pt-4 pl-6">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a 
                href="https://threads.net/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.186 24c-3.599 0-6.928-1.17-9.613-3.152l.693-1.377C5.193 21.378 8.322 22.5 12.186 22.5c6.627 0 12-5.373 12-12 0-1.768-.384-3.45-1.07-4.964l1.387-.693C25.616 7.55 26 9.768 26 10.5c0 7.732-6.268 14-14 14zm-9.613-3.152c-2.685-1.982-4.323-4.95-4.323-8.348 0-5.523 4.477-10 10-10 2.552 0 4.923.957 6.727 2.7l-1.387.693C16.923 4.543 14.738 3.5 12.5 3.5c-4.687 0-8.5 3.813-8.5 8.5 0 2.552 1.17 4.923 3.152 6.727l-.693 1.377z" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pl-6 mt-8">
              <NavButton
                href="#experience"
                className="bg-neutral-900 text-white rounded-full px-8 py-4 font-medium text-lg shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:bg-neutral-800 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500 relative overflow-hidden group w-full sm:w-[300px] text-center"
              >
                <span className="relative z-10">View My Experience</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </NavButton>
              <NavButton
                href="#contact"
                className="bg-white/40 backdrop-blur-xl border border-neutral-200 rounded-full px-8 py-4 font-medium text-lg text-neutral-900 hover:bg-white/60 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] transition-all duration-500 relative overflow-hidden group w-full sm:w-[300px] text-center"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </NavButton>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full max-w-7xl py-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-neutral-900">Experience</h2>
        <div className="relative flex flex-col md:flex-row gap-12">
          {/* Timeline */}
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute left-0 top-[1.5rem] bottom-0 w-0.5 bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-200" />
              <div className="space-y-8 pl-8">
                {experiences[0].roles.map((role, index) => (
                  <div key={role.period} className="relative group">
                    <div className="absolute -left-[2.4rem] top-1.5">
                      <div className="w-4 h-4 rounded-full bg-white border-2 border-neutral-300 group-hover:border-neutral-300 group-hover:bg-neutral-700 group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <div className="group-hover:translate-x-2 transition-transform duration-300">
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <h4 className="text-2xl font-semibold text-neutral-900 group-hover:text-neutral-800 transition-colors duration-300">{role.title}</h4>
                          <span className="text-neutral-600 text-sm font-medium">{role.period}</span>
                        </div>
                        <h5 className="text-lg text-neutral-500">{experiences[0].company}</h5>
                        <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">{role.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Weevva Card */}
          <div className="md:w-1/2">
            <div className="bg-white/40 backdrop-blur-2xl rounded-3xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.1)] border border-white/20 hover:shadow-[0_0_40px_rgba(0,0,0,0.15)] transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-md bg-white/40 backdrop-blur-sm border border-white/20 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={experiences[0].appStoreIcon}
                    alt={`${experiences[0].company} App Store Icon`}
                    width={128}
                    height={128}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold text-neutral-900 pt-2">Weevva</h3>
                  <span className="text-lg text-neutral-600">Weevva Systems Ltd</span>
                </div>
              </div>

              {/* Screenshots */}
              <div className="flex justify-start gap-4 mt-8 overflow-x-auto pb-4 pl-0">
                {experiences[0].screenshots.map((screenshot, idx) => (
                  <div key={idx} className="relative flex-shrink-0 w-[160px] aspect-[4/7] rounded-2xl overflow-hidden shadow-md bg-[#FAF9F3] hover:scale-105 transition-transform duration-300">
                    <Image
                      src={screenshot}
                      alt={`${experiences[0].company} Screenshot ${idx + 1}`}
                      fill
                      className="object-cover rounded-2xl hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-6xl py-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-neutral-900">Projects</h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <div 
              key={project.name} 
              className="bg-white/40 backdrop-blur-2xl rounded-3xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.1)] border border-white/20 hover:shadow-[0_0_40px_rgba(0,0,0,0.15)] transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0 flex flex-col items-center w-full md:w-auto">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md bg-white/40 backdrop-blur-sm border border-white/20 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={project.icon}
                      alt={`${project.name} icon`}
                      width={96}
                      height={96}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mt-4">{project.name}</h3>
                  <span className="text-sm text-neutral-600">{project.period}</span>
                  {project.appStoreLink && (
                    <a
                      href={project.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 hover:scale-105 transition-transform duration-300"
                    >
                      <Image
                        src="/app-store-badge.svg"
                        alt="Download on the App Store"
                        width={120}
                        height={40}
                        className="h-10 w-auto"
                      />
                    </a>
                  )}
                </div>
                <div className="flex-grow">
                  <p className="text-neutral-700 text-lg mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <div 
                        key={tech.name}
                        className="flex items-center gap-2 bg-white/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20"
                      >
                        <Image
                          src={`/icons/${tech.icon}.svg`}
                          alt={`${tech.name} icon`}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                        <span className="text-sm text-neutral-700">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-neutral-600 space-y-1">
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-5xl py-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-neutral-900">Contact</h2>
        <div className="bg-white/40 backdrop-blur-2xl rounded-3xl p-12 shadow-[0_0_30px_rgba(0,0,0,0.1)] border border-white/20 hover:shadow-[0_0_40px_rgba(0,0,0,0.15)] transition-all duration-500">
          <p className="text-lg md:text-xl text-neutral-700 mb-8 text-center">
            Want to work together or have a question? Reach out!
          </p>
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
