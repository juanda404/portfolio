const Projects = () =>{

    const projects = [
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio website built with React and Tailwind CSS to showcase my skills, experience and projects.',
            techStack: ['React','Tailwind CSS', 'Javascript'],
            github: 'https://github.com/juanda404/ToDo-React',
            demo:'https://jdsantamaria.netlify.app/',
        },
                {
            title: 'To-Do App',
            description: 'A minimalistic and responsive task manajer using React, localStorage and Tailwind.',
            techStack: ['React','Tailwind CSS', 'Javascript'],
            github: 'https://github.com/juanda404/ToDo-React',
            demo:''
        }
    ]



    return(
        <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
                <h2 className="text-heading text-3xl font-bold mb-12">Projects</h2>
                <div className="grid gap-12 md:grid-cols-2">
                    {projects.map((project, index) =>(
                        <article key={index} className="border border-custom-primary rounded-lg p-6 shadow-lg transition hover:shadow-xl ">
                            <h3 className="text-xl text-heading font-semibold mb-2">{project.title}</h3>
                            <p className="text-custom-secondary mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech,i) =>(
                                    <span key={i} className="text-sm bg-custom-background text-white px-2 py-1 rounded">{tech}</span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        className="text-custom-primary underline hover:text-heading"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                >GitHub</a>)}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        className="text-custom-primary underline hover:text-heading"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Live Demo</a>)}
                            </div>
                        </article>
                    ))}
                </div>
        </section>
    )
}
export default Projects