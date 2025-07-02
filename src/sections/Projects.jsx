import { motion } from 'framer-motion'

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
        <motion.section 
            id="projects" 
            className="py-26 pb-5 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto"
            initial={{ opacity: 0,y:50}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 0.6, ease: 'easeOut'}}
        >
                <h2 className="text-heading text-3xl font-bold mb-12 border-b border-slate-700 pb-2">Projects</h2>
                <div className="grid gap-12 md:grid-cols-2">
                    {projects.map((project, index) =>(
                        <article key={index} className="border border-custom-primary rounded-xl p-6 bg-custom-background bg-opacity-80 shadow-md transition transform hover:-translate-y-1 hover:shadow-xl hover:border-heading ">
                            <h3 className="text-xl text-heading font-semibold mb-2 tracking-wide">{project.title}</h3>
                            <p className="text-custom-secondary mb-4 leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech,i) =>(
                                    <span key={i} className="text-sm bg-custom-primary text-background px-2 py-1 rounded-full shadow-sm">{tech}</span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        className="text-custom-primary underline underline-offset-4 hover:text-heading font-medium"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                >GitHub</a>)}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        className="text-custom-primary underline underline-offset-4 hover:text-heading font-medium"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Live Demo</a>)}
                            </div>
                        </article>
                    ))}
                </div>
        </motion.section>
    )
}
export default Projects