import "./ProjetosC.css"
import gitHub from "../../assets/png/gitHub.png"

const ProjectsGit = [
    {
        title: "Card Jujutsu",
        description: "Cartao de Jujutsu Kaisen, feito no 1° trimestre.",
        image: gitHub,
        link: "https://github.com/guilhermereiiss/Card-Jujutsu.git"
    },
    {
        title: "Discord-Bot-Music-INFNET",
        description: "Bot de Musica feito pra um servidor do Discord",
        image: gitHub,
        link: "https://github.com/guilhermereiiss/Discord-Bot-Music-INFNET.git"
    },
];


const Projetos = () => {
    return (
        <div className="projects-container">
        <h2>Projetos</h2>
        <div className="projects-list">
            {ProjectsGit.map((project, index) => (
                <div key={index} className="project-card">
                    <h2 className="project-title">{project.title}</h2>
                    <p className="project-description">{project.description}</p>
                    <a href={project.link} target="_blank" rel="linkzada" className="project-link">
                        <img src={project.image} alt={project.title} className="project-image" />
                    </a>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Projetos