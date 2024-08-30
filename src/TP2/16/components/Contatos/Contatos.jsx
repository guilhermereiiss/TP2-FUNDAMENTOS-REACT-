import "./ContatosC.css"
import DownloadButton from "../Curriculo/Curriculo.jsx"

import instagram from "../../assets/png/instagram.png"
import linkedin from "../../assets/png/linkedin.png"
import gitHub from "../../assets/png/gitHub.png"
import email from "../../assets/png/email.png"

const ContatosLink = [
    {
        title: "gitHub",
        image: gitHub,
        link: "https://github.com/guilhermereiiss/Card-Jujutsu.git"
    },
    {
        title: "insta",
        image: instagram,
        link: "https://www.instagram.com/http_guireis?igsh=MTVvMWhqNnRsM2cx"
    },
    {
        title: "linkedin",
        image: linkedin,
        link: "www.linkedin.com/in/guilherme-reis-d3v"
    },
    {
        title: "email",
        image: email,
        link: "guilhermereis1000@hotmail.com"
    },
];


const Contatos = () => {
    return (
        <div className="contato-container">
        <h2>Contatos</h2>
        <div className="OrgContato">
            {ContatosLink.map((contatinhos, index) => (
                <div key={index} className="contato-item">
                    <a href={contatinhos.image}>
                        <img src={contatinhos.image} alt={contatinhos.title} />
                    </a>
                </div>
            ))}
            <DownloadButton/>
        </div>    
    </div>
    )
}

export default Contatos