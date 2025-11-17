import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import EducationCard from '../components/EducationCard'
import ExperienceCard from '../components/ExperienceCard'
import ProjectCard from '../components/ProjectCard'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <Header name="Ganselem Baatarsuren" title="Computer Science • Software Engineer" photo="/avatar.png" />

      <AboutMe />

      <section className="mt-10">
        <h2 className="text-xl font-bold mb-4">Education</h2>
        <EducationCard school="Huree University of ICT" degree="BSc Computer Science" location="Ulaanbaatar, Mongolia" date="June 2025" gpa="3.92/4.00" />
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold mb-4">Work Experience</h2>
        <ExperienceCard company="Enbotics LLC" role="Web Developer" location="Ulaanbaatar" date="Dec 2023 - Feb 2024" description="Front-end development using React & Tailwind CSS, UI design, responsive layout." />
        <ExperienceCard company="Interactive BI" role="ERP Developer Intern" location="Ulaanbaatar" date="Nov 2024 - Jan 2025" description="Collaborated on ERP modules, database design, process automation." />
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold mb-4">Projects</h2>
        <ProjectCard title="Smart Bus Application" desc="Cross-platform mobile app using Flutter, Firebase, Google Maps API." tech={["Flutter", "Firebase", "Google Maps"]} />
        <ProjectCard title="Goody Smart Refrigerator System" desc="React + TypeScript + Tailwind for smart fridge interface with QR orders." tech={["React", "TypeScript", "Tailwind"]} />
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <Skills skills={["React", "TypeScript", "Tailwind", "Flutter", "Firebase", "Google Maps", "Python", "Java", "Node.js", "C#", "GitHub", "Figma"]} />
      </section>
    </main>
  )
}
