import { motion } from 'framer-motion'

const Projects = () =>{

    const projects = [
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio website built with React and Tailwind CSS to showcase my skills, experience and projects.',
            techStack: ['React','Tailwind CSS', 'Javascript'],
            github: 'https://github.com/juanda404/ToDo-React',
            demo:'https://jdsantamaria.netlify.app/',
            image:'/src/assets/portfolio.png'
        },
                {
            title: 'To-Do App',
            description: 'A minimalistic and responsive task manajer using React, localStorage and Tailwind.',
            techStack: ['React','Tailwind CSS', 'Javascript'],
            github: 'https://github.com/juanda404/ToDo-React',
            demo:'',
            image: '/src/assets/Lista de tareas.png'
        },
        {
            title: 'API-REST-MOVIES',
            description: 'This site is thinking in aplication of API-REST as practice form.',
            techStack: ['JavaScript','CSS', 'HTML'],
            github: 'https://github.com/juanda404/API-REST-MOVIES',
            demo:'https://moviesjds.netlify.app/',
            image: '/src/assets/APIRESTMOVIES.png'
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
                <div className="grid gap-12 md:grid-cols-1">
                    {projects.map((project, index) =>(
                        <article key={index}
                        className="flex flex-col md:flex-row gap-6 border border-custom-primary rounded-xl p-6 bg-custom-background bg-opacity-80 shadow-md transition transform hover:-translate-y-1 hover:shadow-xl hover:border-heading">
                        {project.image && ( <img src={project.image} alt={project.title} className="w-full md:w-1/2 h-48 object-scale-down rounded-lg"/> )}
                            <div className="flex flex-col justify-between md:w-1/2">
                                <div>
                                    <h3 className="text-xl text-heading font-semibold mb-2 tracking-wide"> {project.title}</h3>
                                    <p className="text-custom-secondary mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-sm bg-custom-primary text-background px-2 py-1 rounded-full shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                    ))}
                                     </div>
                                </div>
                                <div className="flex gap-4">
                                {project.github && (
                                    <a
                                    href={project.github}
                                    className="text-custom-primary underline underline-offset-4 hover:text-heading font-medium"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    GitHub
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                    href={project.demo}
                                    className="text-custom-primary underline underline-offset-4 hover:text-heading font-medium"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    Live Demo
                                    </a>
                                )}
                                </div>
                            </div>
                        </article>

                    ))}
                </div>
        </motion.section>
    )
}
export default Projects