import "./HobbiesC.css"

import academia from "../../assets/jpg/academia.jpg"
import games from "../../assets/jpg/games.jpg"
import series from "../../assets/jpg/series.jpg"
import coding from "../../assets/jpg/coding.jpg"
import jogadores from "../../assets/jpg/jogadores.jpg"

const imagemHobbies = [
    {
        id: 1,
        src: academia,
        title: 'Academia',
    },
    {
        id: 2,
        src: games,
        title: 'games',
    },
    {
        id: 3,
        src: series,
        title: 'series',
    },
    {
        id: 4,
        src: coding,
        title: 'coding',
    },
    {
        id: 5,
        src: jogadores,
        title: 'jogadores',
    },
];

const Hobbies = () => {
    return (
        <div className="Hobbies-container">
            <h2>Hobbies</h2>
            <div className="hobbies-images">
                {imagemHobbies.map((imagem) => (
                    <div key={imagem.id} className="hobbies-item">
                        <img src={imagem.src} alt={imagem.title} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hobbies