import "./SobreMimC.css"

import minhaFoto from "../../assets/jpg/minha-foto.jpg"

const SobreMim = () => {
    return (
        <div>
            <header>
                <div className="container-sobre">
                    <div className="pequeno-title">
                        <h1>Guilherme Reis</h1>
                        <p>Engenheiro Software</p>
                    </div>

                    <div className="minha-foto">
                        <img src={minhaFoto} alt="MINHA FOTO" />
                    </div>
                </div>
            </header>

            <section className="sobre-mim">
                <h2>Sobre Mim</h2>
                <p>Opa, meu nome é Guilherme Reis e moro no interior da Bahia, numa cidade chamada Catu. Sempre
                    fui um cara
                    engraçado, descontraído e muito curioso. Sou apaixonado por tecnologia desde que ganhei meu primeiro celular e
                    computador. Atualmente, já terminei o ensino médio e estou me graduando em Engenharia de Software na Infnet,
                    com
                    o objetivo de me tornar um grande programador no futuro e realizar meus sonhos.</p>
            </section>
        </div>
    )
}

export default SobreMim