const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "Jan 2024 - Present",
    description: "Building responsive interfaces with React and Tailwind CSS. Focused on clean code and good UX."
  },
  {
    role: "Developer",
    company: "AOS",
    period: "January - November 2024",
    description: "Learning frontend technologies including HTML, CSS, JavaScript, and React through projects and online resources."
  }
]




const Experience = () =>{
    return(
        <section id="experience" className="py-24 px-6 max-w-3xl mx-auto">
                <h2 className="text-white text-3xl font-bold mb-4 border-b border-slate-700 pb-2">Experience</h2>
                <div className="space-y-8">
                    {experiences.map((exp,index)=>(
                        <article key={index} className="border-l-2 border-teal-400 pl-6 relative">
                            <div className="absolute -left-3 top-1 w-3 h-3 bg-teal-400 rounded-full"></div>
                            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                            <p className="text-sm text-gray-500">{exp.period}</p>
                            <p className="mt-2 text-gray-400 leading-relaxed">{exp.description}</p>
                        </article>

                    ))}
                </div>
        </section>
    )
}
export default Experience