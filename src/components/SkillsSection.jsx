import { useState } from "react";
import {cn} from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "React.js", category: "frontend" },
  { name: "PrimeReact", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Backend
  { name: "Java (Spring Boot)", category: "backend" },
  { name: "PHP (Laravel)", category: "backend" },
  { name: "Object-Oriented Programming", category: "backend" },
  { name: "RESTful APIs", category: "backend" },
  { name: "Microservices", category: "backend" },

  // Database
  { name: "MySQL", category: "database" },

  // Tools
  { name: "Git/GitHub", category: "tools" },
  { name: "SourceTree", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "IntelliJ IDEA", category: "tools" },
  { name: "Maven", category: "tools" }
];

const categories = ["all", "frontend", "backend", "tools", "database"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] =useState("all")
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory);
    return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key}
                    onClick={() => setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                    )}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                            <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-primary/10 text-primary capitalize">
                                {skill.category}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};