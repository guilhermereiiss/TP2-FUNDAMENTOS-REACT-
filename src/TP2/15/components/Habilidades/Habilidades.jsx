import "./HabilidadesC.css"

import JavaScript from "../../assets/png/javascript.png"
import Html from "../../assets/png/html.png"
import Css from "../../assets/png/css.png"
import React from "../../assets/png/react.png"
import Typescript from "../../assets/png/typeScript.png"
import Git from "../../assets/png/git.png"
import TailWind from "../../assets/png/tailwindcss.png"

const imagemArray = [
    {
        id: 1,
        src: JavaScript,
        title: 'JavaScrpit',
    },
    {
        id: 2,
        src: Html,
        title: 'HTML',
    },
    {
        id: 3,
        src: Css,
        title: 'Css',
    },
    {
        id: 4,
        src: React,
        title: 'React.Js',
    },
    {
        id: 5,
        src: Typescript,
        title: 'Typescript',
    },
    {
        id: 6,
        src: TailWind,
        title: 'TailWindCSS',
    },
    {
        id: 7,
        src: Git,
        title: 'Git',
    },
];

const Habilidades = () => {
    console.log('Habilidades está sendo renderizado!');
    return (
        <div className="habilidades-container">
            <h2>Habilidades</h2>
            <div className="habilidades-images">
                {imagemArray.map((imagem) => (
                    <div key={imagem.id} className="habilidades-item">
                        <img src={imagem.src} alt={imagem.title} />
                        <h3>{imagem.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Habilidades