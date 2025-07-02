const Resume = ()=>{
    return(
        <section id="resume" className="py-16 px-6 md:px-12 lg:px-20 max-w-3xl mx-auto text-center">
            <h2 className="text-heading text-3xl font-bold mb-6">My Resume</h2>
            <p className="text-custom-secondary text-lg mb-8">You can view or dowload my resume in PDF format by clicking the button below.</p>
            <a href="/HOJADEVIDA2025.pdf" target="_blank" rel="noopener noreferrer"
               className="inline-block bg-custom-background text-custom-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-300"> View CV (PDF)</a>
        </section>
    )
}

export default Resume