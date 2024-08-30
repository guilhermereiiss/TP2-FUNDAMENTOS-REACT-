
import SobreMim from "../components/SobreMim/SobreMim"
import  Habilidades from "../components/Habilidades/Habilidades.jsx"
import  Projetos from "../components/Projetos/Projetos.jsx"
import  Contato from "../components/Contatos/Contatos"
import  Hobbies from "../components/Hobbies/Hobbies.jsx"

const Home = () => {
    return(
        <div>
        <SobreMim/>
        <Habilidades/>
        <Hobbies/>
        <Projetos/>
        <Contato/>
        </div>
    )
}

export default Home