import { ArrowDown } from "lucide-react";


export const HomeSection =() => {
    return <section id ="home" className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        {/*my intro*/}
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Mark Angelo</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Aboy</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I’m an aspiring <span className="font-semibold">Full-Stack Web Developer </span> 
                    passionate about building modern, responsive design, user-friendly applications. 
                    I developed a <span className="font-semibold">POS system </span> using 
                    <span className="font-semibold"> React.js</span> and 
                    <span className="font-semibold"> Spring Boot</span>, and created a 
                    <span className="font-semibold"> web-based student affairs management system </span> 
                    with <span className="font-semibold">PHP Laravel</span>, 
                    <span className="font-semibold"> HTML</span>, 
                    <span className="font-semibold"> CSS</span>, 
                    <span className="font-semibold"> JavaScript</span>, and 
                    <span className="font-semibold"> MySQL</span>. 
                    I enjoy designing efficient solutions and continuously growing my skills.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span> Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>;
}