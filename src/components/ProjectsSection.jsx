import React, { useState, useEffect } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "OSSACT: Web System for Student Affairs Activity Management",
    description:
      "A web-based system built with PHP Laravel, HTML, CSS, JavaScript, and MySQL, hosted on Hostinger. It streamlines student activity document submission and tracking, enables real-time status monitoring, provides an OSS staff dashboard, and supports role-based access for secure management by staff and student officers.",
    images: [
      "/projects/ossact.png",
      "/projects/ossact1.png",
      "/projects/ossact2.png",
    ],
    tags: [
      "Frontend: HTML, CSS, JavaScript",
      "Backend: PHP Laravel",
      "Database: MySQL",
      "Hosting: Hostinger",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/AngeloNise/newoss",
  },
  {
    id: 2,
    title: "Universal Store POS System",
    description:
      "A prototype Point-of-Sale (POS) system developed during my internship, built with React.js (frontend) and Spring Boot (backend). It features modular microservices for product, sales, inventory, dashboard, and supplier management. The system includes RESTful API integration, a real-time business metrics dashboard, and optimized MySQL database design. Developed collaboratively in a two-member team using GitHub for version control.",
    images: [
      "/projects/unistore.png",
      "/projects/unistore1.png",
      "/projects/unistore2.png",
      "/projects/unistore3.png",
      "/projects/unistore4.png",
    ],
    tags: [
      "Frontend: React.js",
      "Backend: Spring Boot (Java)",
      "Database: MySQL",
      "Version Control: GitHub",
      "Architecture: Microservices, RESTful API",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/AngeloNise/universalPOSsystem",
  },
];

export const ProjectsSection = () => {
  const [modalData, setModalData] = useState({
    open: false,
    projectId: null,
    currentIndex: 0,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (modalData.open) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    if (modalData.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalData]);

  const openModal = (projectId, index) => {
    setModalData({ open: true, projectId, currentIndex: index });
  };

  const closeModal = () => setModalData({ open: false, projectId: null, currentIndex: 0 });

  const nextImage = () => {
    const project = projects.find((p) => p.id === modalData.projectId);
    if (!project) return;
    setModalData((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % project.images.length,
    }));
  };

  const prevImage = () => {
    const project = projects.find((p) => p.id === modalData.projectId);
    if (!project) return;
    setModalData((prev) => ({
      ...prev,
      currentIndex:
        (prev.currentIndex - 1 + project.images.length) % project.images.length,
    }));
  };

  const project = modalData.open
    ? projects.find((p) => p.id === modalData.projectId)
    : null;

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my featured projects that highlight my skills in
          full-stack web development, focusing on clean design, functionality,
          and modern technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div
                className="h-48 overflow-hidden cursor-pointer"
                onClick={() => openModal(project.id, 0)}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                      <span className="text-sm">View on GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a 
            className="cosmic-button w-fit flex items-center mx-auto gap-2" 
            target="_blank"
            href="https://github.com/AngeloNise">
              Check My Github <ArrowRight size={16} />
            </a>
          </div>
      </div>

      {modalData.open && project && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg p-4 max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.images[modalData.currentIndex]}
              alt={`Slide ${modalData.currentIndex + 1}`}
              className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
            />

            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex mt-4 space-x-2 overflow-x-auto">
              {project.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  onClick={() =>
                    setModalData((prev) => ({ ...prev, currentIndex: idx }))
                  }
                  className={`w-16 h-16 object-cover cursor-pointer rounded ${
                    idx === modalData.currentIndex ? "ring-2 ring-primary" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
      )}
    </section>
  );
};
