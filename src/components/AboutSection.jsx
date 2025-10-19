import { Code } from "lucide-react";
import { User } from "lucide-react";
import { Briefcase } from "lucide-react";

export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Always Learning</h3>
                    <p className="text-muted-foreground">
                        I want to learn more about web development and continue enhancing 
                        my skills through hands-on projects and exploration of new 
                        technologies. Each project I work on helps me grow as a developer 
                        while strengthening my problem-solving and creativity.  
                    </p>
                    <p className="text-muted-foreground">
                        My goal is to keep improving, collaborate with others, and contribute 
                        to applications that are modern, efficient, and meaningful to users.  
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg">Web Development</h4>
                                <p>
                                    I love to build responsive and user friendly web applications using React.js, Spring Boot, and Laravel, focusing on clean code and seamless integration.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg">Collaboration & Growth</h4>
                                <p>
                                    I enjoy working with teams, sharing ideas, and learning from others to build better solutions and grow together as developers.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-semibold text-lg">Career Goals</h4>
                                <p>
                                    I aim to continuously enhance my skills, contribute to impactful projects, and build a meaningful career in web development.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    );
}