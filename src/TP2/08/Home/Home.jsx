import Header08 from "../components/Header/Header08.jsx";
import QmSomos from "../components/QmSomos/QmSomos.jsx"
import ProdutosLitas from "../components/Produtos/Produtos08.jsx"
import Contatos08 from "../components/Footer/Contatos.jsx";

const home = () =>{
    return(
        <div>
        <Header08 />
        <QmSomos />
        <ProdutosLitas/>
        <Contatos08/>
        </div>
    )
}

export default home;