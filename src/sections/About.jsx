import { motion } from 'framer-motion'

const About = () =>{
    return(
        <motion.section 
            id="about" 
            className="py-36 pb-5 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-justify"
            initial={{ opacity: 0,y:50}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 0.6, ease: 'easeOut'}}
        >
            <h2 className="text-heading text-3xl font-bold mb-8 border-b border-slate-700 pb-2">About Me</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>I'm Juan David, a <span className="text-white font-medium">Frontend Developer</span> passionate about creating modern web experiences....</p>
                <p>Currently, I'm a Junior Front-End Engineer at AOS, working on a project basic. I contribute to the updating the Fogafin website, which is managed by the Sitefinity CMS.</p>
                <p>In the past, I had the opportunity to work at the Office of the secretary of Mobility in Cali, where I simultanously developed software as a freelancer for a personal project.</p>
                <p>In my spare time, I'm usually go to the gym,read,listen to music, or watch movies at home. On weekends,I enjoy mountain biking.</p>
            </div>
        </motion.section>
    )
}

export default About