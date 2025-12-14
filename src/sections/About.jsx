import SectionWrapper from "../components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          About Me
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          I'm <span className="text-white font-semibold">Shreevatsa Upadhya</span>, 
          a passionate <span className="text-accent font-semibold">Full Stack Developer</span> 
          with 2+ years of experience building scalable applications using 
          <span className="text-white font-semibold"> React, Node, MongoDB, Java,</span> and modern DevOps tools.
          I love building smooth UI experiences, powerful API architectures and learning new technologies daily.
        </p>
      </div>
    </SectionWrapper>
  );
}
